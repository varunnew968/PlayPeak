PlayPeak — Adsterra update

Included:
- index.html: selected ad codes integrated into their dedicated slots.
- script.js: supplied game catalog / interactive site script, unchanged.
- style.css: premium stylesheet with responsive ad unit sizing.
- favicon.svg, apple-touch-icon.png and assets/playpeak-logo.svg.

Ad units retained:
1. Desktop banner 728×90 (homepage top slot).
2. Mobile banner 320×50 (homepage top slot; CSS hides the desktop unit at small widths).
3. Native Banner (below the home game catalog).
4. 300×250 banner (below the player toolbar).

Removed from the <head>:
- Old 300×250 unit using key e4c3f169730825da3a01dde9cdbc3f1c.
- Old Social Bar script 8e75d2e21703f3006e82d07ce1e51296.
- Extra Profitablerate script 794ae68609481f2429e5f6ab719ddfe8.js.

The Google AdSense account meta tag and site metadata are kept. This package does not include game-banner images; keep/merge your existing assets/game-banners folder when installing.

Installation:
1. Back up your current folder.
2. Copy these files/folders into your website root, replacing index.html, script.js and style.css.
3. Merge the included assets folder with your existing assets folder; do not delete assets/game-banners.
4. Test locally before pushing to GitHub.
