PlayPeak compact logo + favicon v3 fix

Included: refreshed index.html and style.css, your existing slider/game script.js, new uniquely named PNG/ICO favicons, compact navbar and footer icon sizing, and all three hero banner assets.

Logo sizing: desktop navbar icon 34px, mobile navbar icon 30px, footer icon 28px (26px on mobile).

Favicon fix: index.html now points to new files named playpeak-favicon-32-v3.png, playpeak-favicon-16-v3.png, playpeak-favicon-v3.ico and apple-touch-icon-v3.png. The old favicon.svg is no longer referenced, so the browser is less likely to show the older cached icon.

Install: Extract/merge these files into the site root, replacing index.html and style.css. Keep script.js and assets/hero-banners/ from this package. Do not delete assets/game-banners from your live project. Ensure the new favicon files and assets/playpeak-icon-v3.png are deployed at the same paths. After pushing to GitHub/Vercel, hard refresh (Ctrl+F5) and check the site in a private window. Favicons may also be cached by the browser separately from normal page assets.
