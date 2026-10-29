# PlayPeak — Three Banner Slider Update

Includes:
- Three custom-generated gaming hero banners in `assets/hero-banners/` (optimized WebP)
- Auto-advancing hero slider, 6.5-second timing, dots, previous/next controls, hover/focus pause, tab-visibility pause, reduced-motion support
- Favicon used beside the PlayPeak wordmark in the header and footer
- Existing game catalog, navigation, favorites, player page, ad slots and Adsterra codes preserved
- Game-card cover paths changed from missing local image files to Gamezop's static wall-art URL pattern based on each game's `gamezopId`; image errors gracefully fall back to the card artwork

## Install
1. Back up your site.
2. Replace `index.html`, `style.css`, and `script.js` with these files.
3. Merge the root favicon files and `assets/hero-banners/` into your current website root, preserving other assets and any existing game-banner folder.
4. Test locally with Ctrl+F5 on desktop and mobile.

The slider images are bundled locally, so the hero slider itself does not depend on external image URLs.
