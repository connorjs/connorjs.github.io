<aside class="notes">Title slide</aside>

# Daily Code Reviews

**The benefits of small commits and daily CRs**

_by Connor Sullivan_

---

<!-- https://imgflip.com/i/836m7p and https://imgflip.com/i/836muf -->

<section data-auto-animate>

<aside class="notes">Meme slide (2 clicks)</aside>

## Code reviews

</section>

<section data-auto-animate>

## Code reviews

<div style="display:flex;align-items:stretch;gap:1rem;position:relative;bottom:2rem">
<img
    alt="1000 lines of code; LGTM"
    src="/presentations/daily-code-reviews/1000-lines-lgtm.jpg"
/>
</div>

</section>

<section data-auto-animate>

## Code reviews

<div style="display:flex;align-items:stretch;gap:1rem;position:relative;bottom:2rem">
<img
    alt="1000 lines of code; LGTM"
    src="/presentations/daily-code-reviews/1000-lines-lgtm.jpg"
/>
<img
    alt="10 lines of code; 10 comments"
    src="/presentations/daily-code-reviews/10-lines-10-comments.jpg"
/>
</div>

</section>

---

<aside class="notes">Agenda slide (click = bonus "my")</aside>

## Agenda

Mindset change

Outcomes

Types of commits

Guidelines

Techniques

---

<section data-auto-animate>

## Mindset change

</section>

<section data-auto-animate>

## Mindset change

1. _EMBRACE_ code review comments

2. Prioritize the _REVIEWER_, not yourself
<!-- .element class="fragment" -->

3. Aim to publish one code review _EACH DAY_
<!-- .element class="fragment" -->

<p><!-- Force some repositioning that bothered me with Solarized theme --></p>

</section>

---

<section data-auto-animate>

## Outcomes

</section>

<section data-auto-animate>

## Outcomes

<div style="display:flex;align-items:center">

<ul style="list-style:none">
    <li><p>Smaller commits</p></li>
    <li class="fragment" data-fragment-index="2"><p>Well factored code</p></li>
    <li class="fragment" data-fragment-index="4"><p>Review quality</p></li>
</ul>

<ul style="list-style:none">
    <li class="fragment" data-fragment-index="1"><p>→ Faster code reviews</p></li>
    <li class="fragment" data-fragment-index="3"><p>→ Less merge conflicts</p></li>
    <li class="fragment" data-fragment-index="5"><p>→ Code quality</p></li>
</ul>

</div>

**Consistent delivery!** <!-- .element class="fragment" data-fragment-index="6" -->

</section>

---

<section data-auto-animate>

## Types of commits

</section>

<section data-auto-animate>

## Types of commits

- Features (and bugs)

- Automated refactors <!-- .element class="fragment" -->

- Manual refactors <!-- .element class="fragment" -->

</section>

<section>

## Features (and bugs)

- Normal commits, introducing new logic

- Reviews focus on quality, extensibility, and correctness

- Split based on pieces of logic

</section>

<section>

## Automated refactors

- Reviews first focus on what is changing and why

- Then review the automation run, not each code change

- Can be large, but should NOT cause expensive merge conflicts

</section>

<section>

## Manual refactors

- Reviews first focus on what is changing and why

- Then similar to features and bugs

- Can grow large, but split to reduce churn

</section>

---

<section data-auto-animate>

## Guidelines

</section>

<section data-auto-animate>

## Guidelines

<img
    alt="The code is more what you’d call guidelines, than actual rules."
    style="width:100%"
    src="/presentations/daily-code-reviews/guidelines.webp"
/>

</section>

<section data-auto-animate>

## Guidelines

- 400 lines per review ([SmartBear case study](https://smartbear.com/resources/case-studies/cisco-systems-collaborator/))

- 200-200(-200) with source-test(-config)

- Tune based on the language

  Maybe 150 for Python or 300 for JSX/TSX

- Treat them as _GUIDELINES_, not rules!

</section>

---

<section data-auto-animate>

## Techniques

</section>

<section data-auto-animate>

## Techniques

- Extract refactor

- Exploration then consolidation

- Conventional commits and Gitmoji

</section>

<section>

## Extract refactor

- Moves, renames, etc.

- Extract refactoring into their own commit and submit a CR

- Often helps other developers immediately

- Simplifies the “real” CR (with new logic)

</section>

<section>

## Exploration then consolidation

- “Commits how you develop” may not match “commits how you review”

- Natural “exploration” (no changes)<br/>= worry less about proper commits

- Natural “consolidation” (add a step)<br/>= consider commits and how to review

- Many different `git` techniques (CLI and GUI)

</section>

<section>

## Conventional commits and Gitmoji

- [Conventional commits](https://www.conventionalcommits.org/en/v1.0.0/) requires a `<type>`

- [Gitmoji](https://gitmoji.dev) has many types expressed with emoji

- Goal: Focused commits (however you want!)

</section>

---

<section data-auto-animate>

## Conclusion

</section>

<section data-auto-animate>

## Conclusion

**Mindset change**

1. _EMBRACE_ code review comments

2. Prioritize the _REVIEWER_, not yourself

3. Aim to publish one code review _EACH DAY_

</section>

<section data-auto-animate>

## Conclusion

**Types of commits**

- Features (and bugs)

- Automated refactors

- Manual refactors

</section>

<section data-auto-animate>

## Conclusion

**Guidelines and techniques**

- 200-200(-200) lines of code

- Extract refactor / exploration then consolidation

- Focused commits (conventional commits, gitmoji)

</section>

---

## Thank you

<figure>
    <figcaption style="font-size:smaller">QR link to this slide deck</figcaption>
    <img alt="QR code" src="/presentations/daily-code-reviews/qr-code.svg" style="height:30vh">
</figure>

@connorjs ([GitHub](https://github.com/connorjs))
