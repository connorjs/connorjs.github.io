# Presentations

My web-based presentations built with [reveal.js](https://revealjs.com).
Uses [Vite](https://vitejs.dev) for development and bundling.

## Notes

- Single `index.html` template
- Uses environment variables to target different presentations
- The build essentially loops over the targets
  (but its currently enumerated in `package.json` with `run-s`)
- Hacky but got the job done as I played around with reveal.js
- Update `.env` and run `npm start` for a fast(er) dev cycle
- Each presentation gets its own directory
- The directory name will become the URL path, so choose a name for SEO
- Name the JS file the same as the directory (easier convention + not 10+ index.js files)
