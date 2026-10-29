# PlayPeak Premium Website Redesign

This package updates your existing PlayPeak site branding and design while preserving your supplied game catalog and ad code.

## Files
- `index.html` — updated PlayPeak title/metadata, logo use, improved hero details, and preserved ad containers.
- `style.css` — refined premium responsive styling.
- `script.js` — your supplied game catalog and interactions, kept intact.
- `favicon.svg` — browser favicon.
- `apple-touch-icon.png` — touch icon.
- `assets/playpeak-logo.svg` — full PlayPeak wordmark.
- `assets/playpeak-mark.svg` — standalone brand mark.

## Install
1. Back up the current website folder.
2. Copy these files into the website root, replacing `index.html`, `style.css`, and `script.js`.
3. Merge the included `assets` folder with your existing `assets` folder. Do not delete your existing `assets/game-banners` folder.
4. Open `index.html` locally or run your existing local preview server.
5. Hard-refresh using Ctrl+F5.

## Advertising
The existing three ad placements remain in `index.html`: homepage/top banner (`topAdCode`), catalog-bottom banner (`bottomAdCode`), and player banner (`playerAdCode`). The ad scripts in the head were preserved exactly. Their appearance still depends on your provider's settings and whether their code is assigned to those containers.

## Game artwork
Your supplied `script.js` points to `assets/game-banners/*.png`. Keep the matching artwork files in that folder. If any banner is missing, the site falls back to the card's gradient/emoji artwork instead of showing a broken image.
