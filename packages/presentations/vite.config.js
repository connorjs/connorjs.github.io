import "dotenv/config";
import { defineConfig } from "vite";

const deck = process.env.VITE_DECK;

// https://vitejs.dev/config/
export default defineConfig({
	assetsInclude: [`**/*.{jpg,md,svg}`], // Include the markdown files, which get converted to JS strings
	base: `/presentations/${deck}`, // mdBook path
	publicDir: `${deck}/public`,
	build: {
		emptyOutDir: true, // Vite build controls this directory
		outDir: `../../book/presentations/${deck}`, // Build into mdBook structure
		rollupOptions: {
			output: {
				manualChunks(id) {
					if (id.includes("reveal.js")) {
						return "reveal.js";
					}
					return null; // Use default chunking strategy
				},
			},
		},
	},
});
