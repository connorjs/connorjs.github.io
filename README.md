# connorjs.github.io

My GitHub Pages website.

## Project structure

- [decisions](./decisions) - Decision records
- [docs](./docs) - Markdown files for the mdBook site

## Getting started

1. Install `mdbook`: [mdBook installation](https://rust-lang.github.io/mdBook/guide/installation.html)

   ```shell
   cargo install mdbook
   ```

   _Note: This project does not set up a `Cargo.toml`. Instead, it assumes a local installation._ 

2. Preview the book. This will rebuild on changes.

   ```shell
   mdbook serve
   ```

3. Explore other `mdbook` commands [in the documentation](https://rust-lang.github.io/mdBook/cli/index.html)

## Publishing

The [mdbook GitHub Action](./.github/workflows/mdbook.yml) deploys the generated static website.
It runs `mdbook build` and uploads the `book` directory. 
