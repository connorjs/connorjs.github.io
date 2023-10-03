---
status: accepted
date: 2023-10-01
deciders: @connorjs
consulted: N/A
informed: N/A
---

# Static site generator

## Context and Problem Statement

We want to use a static site generator for GitHub Pages.
Which tool should we use?

## Decision Drivers

- Should focus on content over style
- Should support customization (e.g. site-wide styling, output directories)
- Should have low learning curve for new contributors
- Should work on macOS and Windows trivially
- Should have a good code review experience (diffs, rendering)
- (Note) I will need to select a content/book-focused engine for work projects

## Considered Options

_Listed default, then alphabetical_

- [Jekyll](https://jekyllrb.com) (default)
- [Asciidoctor](https://asciidoctor.org) ([AsciiDoc](https://asciidoc.org))
- [Docusaurus](https://docusaurus.io)
- [mdBook](https://rust-lang.github.io/mdBook/)
- [MkDocs](https://www.mkdocs.org) ([Material for MkDocs](https://squidfunk.github.io/mkdocs-material/))

## Decision Outcome

Chosen option: **mdBook**, because of its built-in search experience and focus on content.
It met all decision drivers.

mdBook also felt the best to use (opinion) and seems easiest to build multi-theme support.
(I plan to build 4 modes: White, Light, Dark, and Black.)

### Consequences

I want to highlight two consequences given mdBook’s Rust origin.

- Good, b/c Rust will be installed, which opens the door to other (fast) tools.
- Bad, b/c Rust requires an additional install step for C#/Java and JS/TS developers.

### Confirmation

Next, I will build out my initial, planned site using mdBook.
Implementing multi-theme support will test my perceived benefit there.

I will use MkDocs as a counter-reference for any challenges mdBook presents.
_See [§ More information](#more-information) for why._

## Pros and Cons of the Options

### Jekyll

- Good, b/c default for GitHub Pages (works out of the box)
- Bad, b/c it does not officially support windows ([docs](https://jekyllrb.com/docs/installation/windows/))
- Neutral, b/c Ruby is not a primary language (requires additional installation)

_Disclaimer: I looked at Jekyll the least after seeing no official Windows support._

### Asciidoctor

- Good, b/c meant for books (not single documents, compared to Markdown)
- Good, b/c IDE tooling
- Good, b/c macro support and extensible
- Neutral, b/c supports other formats (e.g. EPUB) - neutral b/c this repo is focused on the web
- Bad, b/c not as widespread as Markdown
- Bad, b/c native repo rendering is unsatisfactory (code reviews)

### Docusaurus

- Good, b/c feature-rich and built for the web (React at the end of the day)
- Good, b/c markdown (MD and MDX)
- Good, b/c Node.js based
- Neutral, b/c gives me the chance to learn and experiment with MDX
- Bad, b/c essentially a React application (requires more coding and can lessen focus on content)

### MkDocs

- Good, b/c focused on content
- Good, b/c markdown
- Good, b/c macro support and extensible
- Good, b/c learning can extend to presentations (reveal.js)
- Neutral, b/c Python based (we expect some to have Python installed)
- Neutral, b/c native repo rendering is unsatisfactory for extensions

### mdBook

- Good, b/c focused on content
- Good, b/c markdown
- Good, b/c extensible
- Good, b/c native repo is satisfactory (limits extensions by default)
- Good, b/c built-in search indexing and keyboard shortcuts
- Neutral, b/c Rust (a new tool for some, but fast and gives binary install option)
- Bad/Good, b/c less extensions (which can seen as doubly good for focusing on content)

## More Information

I looked a lot at Asciidoctor and to see if AsciiDoc presented a better alternative to the less-powerful Markdown.
In the end, Markdown’s by-default tooling and prevalence weighed more to me than AsciiDoc’s grammar features.

I found nesting block content in tables to be AsciiDoc’s best feature over Markdown,
but I also want to limit tables, which can cause a poor mobile experience.

Given the markdown choice, MkDocs and mdBook were the strongest contenders.
As mentioned in [§ Decision outcome](#decision-outcome),
mdBook’s default search feature led to its choice,
but MkDocs finished in 2nd place.

I will use MkDocs as the counter-reference point to any challenges I face with mdBoook.
