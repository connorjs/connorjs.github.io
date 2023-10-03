<aside class="notes">Title slide</aside>

# TDD: Yes You Can!

**A dive into Test Driven Development**

_by Connor Sullivan_

---

<style>.tdd-quote{font-size:6rem;}</style>

<section class="tdd-quote">

<aside class="notes">Vertical slides of quotes</aside>

_Tests take too long_

<!-- .element class="fragment" -->

</section>

<section class="tdd-quote">

_I'll write them later_

</section>

<section class="tdd-quote">

_We didn't have time / We cut scope_

</section>

<section class="tdd-quote">

_Let's just do it manually_

<aside class="notes">...and my personal favorite</aside>

</section>

<section class="tdd-quote">

_We didn't test_

</section>

---

<aside class="notes">Agenda slide</aside>

## Agenda

- What is TDD?
- Recipes for success
- Coding examples

---

<section>
<aside class="notes">Let's jump into definitions</aside>

# What is TDD?

</section>

<section>
<aside class="notes">Definitions slide</aside>

## Definitions

<div style="display:flex;align-items:center;gap:1rem">

- Write tests first

- Build only what you need

- Red-Green-Refactor loop

<img alt="Red-Green-Refactor" src="/presentations/test-driven-development-tdd/red-green-refactor.svg" style="width:40%" class="fragment">

</div>

</section>

<section>
<aside class="notes" data-markdown>
Testing pyramid, or trophy.

Traditional pyramid, but could have 4 layers.

- File
- Module
- Application
- System
</aside>

## Testing Pyramid

<div style="display:flex;align-items:center">

- Put in different buckets

- More at the unit level

  - Faster, isolated

- Less at end-to-end level

  - Slow, integrated

<img alt="Testing pyramid" src="/presentations/test-driven-development-tdd/test-pyramid.svg" style="width:45%" class="fragment">

</div>

</section>

---

<section>
<aside class="notes">Fall into the pit of success</aside>

# Recipes for success

</section>

<section>
<aside class="notes">You know yourself best, tweak it to your own</aside>

## Make it your own

- Be strict (or don't)

- Write multiple tests at a time (or don't)

- Refactor earlier or later

- The important thing is _testing_

</section>

<section>
<aside class="notes" data-markdown>
My 3 recipes. If they work for you, great.

Click: New code, fresh, TDD how you please

Click: Bug fix, best place to try TDD

Click: Refactor, make sure tests exist, red-green-refactor loop

</aside>

## My 3 recipes

- New code <!-- .element class="fragment" -->

- Bug fix <!-- .element class="fragment" -->

- Refactoring and legacy code <!-- .element class="fragment" -->

</section>

---

<section>
<aside class="notes">Now to show some code. JS setting URL state.</aside>

# Coding example

</section>

<section>
<aside class="notes"></aside>

TODO...

</section>

---

## So, can we TDD?

## Yes we can! <!-- .element class="fragment" -->

---

## Thank you

<figure>
<figcaption style="font-size:smaller">QR link to this slide deck</figcaption>
<img alt="QR code" src="/presentations/test-driven-development-tdd/qr-code.svg" style="height:30vh">
</figure>

@connorjs ([GitHub](https://github.com/connorjs))
