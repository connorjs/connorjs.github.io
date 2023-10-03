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
My 3 recipes. If they work for you, great. (mention no copy paste)

Click: New code, fresh, TDD how you please

Click: Bug fix, best place to try TDD

Click: Refactor, make sure tests exist, red-green-refactor loop

</aside>

## My 3 recipes

1. New code <!-- .element class="fragment" -->

2. Bug fix <!-- .element class="fragment" -->

3. Refactoring and legacy code <!-- .element class="fragment" -->

</section>

---

<section>
<aside class="notes">Now to show some code. JS setting URL state.</aside>

# Coding example

</section>

<section>
<aside class="notes">Disclaimer: This is pseudo-JS right now.</aside>

## URL state: Part 1

- Store state in the URL, such as search terms, for link sharing

- Some React here, but principles apply regardless

- Initial requirements
  - Decide the key
  - Use a default value
  - Function returns value and update function

</section>

<section data-auto-animate>

## URL state: Part 1

Write the test

```js
it(`should use the given key`, ({ expect }) => {
	useUrlState(`foo`, `bar`);
	expect(searchParams().get(`foo`)).toBeDefined();
});
```

</section>
<section data-auto-animate>

## URL state: Part 1

Make it compile/run

```js
it(`should use the given key`, ({ expect }) => {
	useUrlState(`foo`, `bar`);
	expect(searchParams().get(`foo`)).toBeDefined();
});
```

```js
function useUrlState() {
	// TODO
}
```

</section>
<section data-auto-animate>

## URL state: Part 1

Make it pass

```js
it(`should use the given key`, ({ expect }) => {
	useUrlState(`foo`, `bar`);
	expect(searchParams().get(`foo`)).toBeDefined();
});
```

```js
function useUrlState(key, initial) {
	const params = new URLSearchParams({ [key]: initial });
	window.location.search = params.toString();
}
```

</section>
<section data-auto-animate>

## URL state: Part 1

Next test: get the value

```js
it(`should return the value`, ({ expect }) => {
	const [foo] = useUrlState(`foo`, `bar`);
	expect(foo).toBe(`bar`);
});
```

```js
function useUrlState(key, initial) {
	const params = new URLSearchParams({ [key]: initial });
	window.location.search = params.toString();
}
```

</section>
<section data-auto-animate>

## URL state: Part 1

Make it pass

```js
it(`should return the value`, ({ expect }) => {
	const [foo] = useUrlState(`foo`, `bar`);
	expect(foo).toBe(`bar`);
});
```

```js
function useUrlState(key, initial) {
	const params = new URLSearchParams({ [key]: initial });
	window.location.search = params.toString();
	return [params.get(key)];
}
```

</section>
<section data-auto-animate>

## URL state: Part 1

One more time! The update

```js
it(`should update the URL`, ({ expect }) => {
	const [, setFoo] = useUrlState(`foo`, `bar`);
	setFoo(`new-value`);
	expect(window.location.search).toBe(`foo=new-value`);
});
```

```js
function useUrlState(key, initial) {
	const params = new URLSearchParams({ [key]: initial });
	window.location.search = params.toString();
	return [params.get(key)];
}
```

</section>
<section data-auto-animate>

## URL state: Part 1

And make it pass!

```js
it(`should update the URL`, ({ expect }) => {
	const [, setFoo] = useUrlState(`foo`, `bar`);
	setFoo(`new-value`);
	expect(window.location.search).toBe(`foo=new-value`);
});
```

```js
function useUrlState(key, initial) {
	// ...
	const update = (newValue) => {
		const newParams = new URLSearchParams({ [key]: newValue });
		window.location.search = newParams.toString();
	};
	return [params.get(key), update];
}
```

</section>

<section>

- should use the given key
- should return the value
- should update the URL

</section>

---

<section>

## URL state: Part 2

- Clean slate (one week later)

- New bug report

- Best time for TDD

</section>

<section data-auto-animate>

## URL state: Part 2

Make a failing test

```js
it(`should handle two parameters`, ({ expect }) => {
	useUrlState(`foo`, `bar`);
	useUrlState(`fish`, `red`);
	expect(window.location.search).toBe(`foo=bar&fish=red`);
});
```

</section>

<section data-auto-animate>

## URL state: Part 2

And squash the bug!

```js []
function useUrlState(key, initial) {
	const params = new URLSearchParams({ [key]: initial });
	const update = (newValue) => {
		const newParams = new URLSearchParams({ [key]: newValue });
		window.location.search = newParams.toString();
	};
	return [params.get(key), update];
}
```

<!-- .element data-id="code-animation" -->

</section>

<section data-auto-animate>

## URL state: Part 2

And squash the bug!

```js [2-3]
function useUrlState(key, initial) {
	const params = new URLSearchParams(window.location.search);
	params.set(key, initial);
	const update = (newValue) => {
		const newParams = new URLSearchParams({ [key]: newValue });
		window.location.search = newParams.toString();
	};
	return [params.get(key), update];
}
```

<!-- .element data-id="code-animation" -->

</section>

<section data-auto-animate>

## URL state: Part 2

And correct update right now

```js [5-6]
function useUrlState(key, initial) {
	const params = new URLSearchParams(window.location.search);
	params.set(key, initial);
	const update = (newValue) => {
		const newParams = new URLSearchParams(window.location.search);
		newParams.set(key, newValue);
		window.location.search = newParams.toString();
	};
	return [params.get(key), update];
}
```

<!-- .element data-id="code-animation" -->

</section>

<section data-auto-animate>

## URL state: Part 2

And then I add the update test

```js
it(`should handle two parameters update`, ({ expect }) => {
	const [, setFoo] = useUrlState(`foo`, `bar`);
	const [, setFish] = useUrlState(`fish`, `red`);
	expect(window.location.search).toBe(`foo=bar&fish=red`);

	setFish("blue");
	expect(window.location.search).toBe(`foo=bar&fish=blue`);

	setFoo("bazz");
	expect(window.location.search).toBe(`foo=bazz&fish=blue`);
});
```

</section>

---

## So, can you TDD?

## Yes you can! <!-- .element class="fragment" -->

---

## Thank you

<figure>
<figcaption style="font-size:smaller">QR link to this slide deck</figcaption>
<img alt="QR code" src="/presentations/test-driven-development-tdd/qr-code.svg" style="height:30vh">
</figure>

@connorjs ([GitHub](https://github.com/connorjs))
