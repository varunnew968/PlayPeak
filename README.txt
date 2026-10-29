PlayPeak logo installation assets

Files:
- assets/playpeak-logo.png: transparent wide logo for navbar/footer
- favicon-32.png and favicon-16.png: browser tab icons
- favicon-512.png: large square icon / PWA asset
- apple-touch-icon.png: iOS home-screen icon

Put assets/ inside the website root and the favicon PNGs at the root, alongside index.html.
Then use the snippet in README below in <head>, and the img snippets for navbar/footer.

HTML <head> snippet:
<link rel="icon" type="image/png" sizes="16x16" href="favicon-16.png">
<link rel="icon" type="image/png" sizes="32x32" href="favicon-32.png">
<link rel="icon" type="image/png" sizes="512x512" href="favicon-512.png">
<link rel="apple-touch-icon" sizes="180x180" href="apple-touch-icon.png">

Navbar brand snippet:
<button class="brand" id="homeBtn" aria-label="PlayPeak home" title="PlayPeak home">
  <img class="brand-logo" src="assets/playpeak-logo.png" alt="PlayPeak" width="190" height="96">
</button>

Footer snippet:
<div class="footer-brand">
  <img class="footer-logo" src="assets/playpeak-logo.png" alt="PlayPeak" width="170" height="86">
</div>

CSS:
.brand-logo, .footer-logo { display:block; width:100%; height:auto; object-fit:contain; }
.brand-logo { max-width:190px; max-height:54px; }
.footer-logo { max-width:170px; max-height:50px; }
