# Mesut Bayrak · Personal website

A responsive, dependency-free portfolio built from `Resume.md` the bgp-display repository at https://github.com/rammses/bgp-display, and the project archive and training material at https://books.netdev.com.tr. HTML, CSS, and a small script to keep the copyright year current. No build step, external fonts, or tracking.

## Preview

Run `python3 -m http.server 8000 --directory site`, then open http://localhost:8000.

## Publish on GitHub Pages

1. Create a repository named `rammses.github.io` on the `rammses` account for https://rammses.github.io (or use another repository name for a project site).
2. Push this project to its `main` branch.
3. Under **Settings → Pages → Build and deployment → Source**, select **GitHub Actions**.
4. Run **Deploy personal site to GitHub Pages** from Actions, or push a change to `main`.

The workflow publishes only `site/`. The original résumé is ignored by Git because it includes private contact and reference details. Do not add it to the public repository.

## Edit

- Content and project links: `site/index.html`
- Colors, typography, layout, responsive and print styles: `site/style.css`
- Browser icon: `site/favicon.svg`

All asset paths are relative, so the site also works under a GitHub Pages repository subpath. Content reflects the supplied résumé; review roles and dates when updating. Ambiguous or duplicated résumé project entries have been omitted.
