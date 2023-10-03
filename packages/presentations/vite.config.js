import "dotenv/config";
import { defineConfig } from "vite";

const deck = process.env.VITE_DECK;

// https://vitejs.dev/config/
export default defineConfig({
  assetsInclude: [`**/*.md`], // Include the markdown files, which get converted to JS strings
  base: `/presentations/${deck}`, // mdBook path
  build: {
    emptyOutDir: true, // Vite build controls this directory
    outDir: `../../book/presentations/${deck}`, // Build into mdBook structure
  },
});
