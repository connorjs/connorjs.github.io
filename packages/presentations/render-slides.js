import Reveal from "reveal.js";
import RevealMarkdown from "reveal.js/plugin/markdown/markdown.esm.js";

import "reveal.js/dist/reveal.css";
import "reveal.js/dist/theme/dracula.css"; // TODO: Build theme

/**
 * Renders the given slides.
 *
 * @param {string} slides - Markdown slide deck
 */
export function renderSlides(slides) {
	const textarea = document.createElement("textarea");
	textarea.setAttribute("data-template", undefined);
	textarea.innerHTML = slides;

	document.getElementById("root").append(textarea);

	let deck = new Reveal({
		hash: true,
		plugins: [RevealMarkdown],
		slideNumber: true,
	});
	deck.initialize();
}
