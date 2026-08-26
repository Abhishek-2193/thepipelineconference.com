# The Pipeline Conference

Hugo site for [The Pipeline Conference](https://pipedev-org.github.io/thepipelineconference.com/).

Production deploys from `main` to GitHub Pages via `.github/workflows/hugo.yaml`.

## Prerequisites

### Hugo Extended 0.164.0

CI builds with **Hugo Extended 0.164.0**. The extended build is required for Sass/SCSS.

On macOS:

```bash
brew install hugo
hugo version
```

If Homebrew’s version differs, install the matching release from [Hugo releases](https://github.com/gohugoio/hugo/releases).

### Dart Sass

Also used in the deploy workflow:

```bash
brew install sass/sass/sass
```

### Git LFS

Images live under `static/uploads/` and CI checks out with LFS:

```bash
brew install git-lfs
git lfs install
git lfs pull
```

## Run locally

From the repo root:

```bash
hugo server
```

That starts a live-reload server, usually at **http://localhost:1313**.

Useful flags:

```bash
hugo server --bind 0.0.0.0 --baseURL http://localhost:1313/
```

`--baseURL` is worth setting because `config.toml` points at the GitHub Pages URL (`https://pipedev-org.github.io/thepipelineconference.com/`). Without it, some links can look like production URLs.

## Production build

```bash
hugo --gc --minify
```

Output goes to `public/` (that folder is gitignored).
