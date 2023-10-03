# Reveal.js + Vite

First slide!

---

## Welcome

Welcome to the example presentation

It uses [reveal.js](https://revealjs.com) and [Vite](https://vitejs.dev)

---

<section>

## Vertical slides!

Arrow down

</section>
<section>

## Nice!

Vertical slides allow natural part separation

</section>

---

<section>

## Markdown

All of this comes from markdown.

**bold** _italic_ ~~strucked~~ [example.com](https://example.com) `inline code`

```js []
console.log(`Hello, world!`);
```

</section>
<section data-auto-animate>

## Code highlighting

Step through code line by line with highlighting

```js [1|2|3|1-3]
const date = new Date();
const name = await fetch(`/api/user/${username}`);
console.log(`Hello, ${name} on ${date.toLocaleString()}`);
```

<!-- .element: class="fragment" -->

</section>
<section data-auto-animate>

## Code highlighting

Or incrementally reveal code

<pre class="fragment" data-id="code">
<code class="language-javascript" data-line-numbers>const date = new Date();


</code>
</pre>

</section>
<section data-auto-animate>

## Code highlighting

Or incrementally reveal code

<pre data-id="code">
<code class="language-javascript" data-line-numbers>const date = new Date();
const name = await fetch(`/api/user/${username}`);

</code>
</pre>

</section>
<section data-auto-animate>

## Code highlighting

Or incrementally reveal code

<pre data-id="code">
<code class="language-javascript" data-line-numbers>const date = new Date();
const name = await fetch(`/api/user/${username}`);
console.log(`Hello, ${name} on ${date.toLocaleString()}`);
</code>
</pre>

</section>

---

## Media

Images, gifs, whatever you want!

![This is fine meme](/presentations/example/thisisfine-banner-2panel.jpg)

---

## The end

Thanks for watching!
