import Reveal from "reveal.js";
import Highlight from "reveal.js/plugin/highlight/highlight.esm.js";
import Markdown from "reveal.js/plugin/markdown/markdown.esm.js";
import Notes from "reveal.js/plugin/notes/notes.esm.js";

import "reveal.js/dist/reveal.css";
import "./render-slides.pcss";

/**
 * Renders the given slides.
 *
 * @param {string} slides - Markdown slide deck
 */
export function renderSlides(slides) {
	const textarea = document.createElement("textarea");
	textarea.setAttribute("data-template", undefined);
	textarea.innerHTML = slides;

	document.querySelector(`[data-id="root"]`).append(textarea);

	let deck = new Reveal({
		hash: true,
		hashOneBasedIndex: true,
		hideCursorTime: 3_000, // ms
		markdown: {
			smartypants: true, // use “smart” typographic punctuation
		},
		plugins: [Markdown, Highlight, Notes], // order matters for plugins!
		slideNumber: true,
	});
	deck.initialize();
}
