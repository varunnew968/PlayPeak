ARCADE POP — SETUP GUIDE

FILES
- index.html: page structure
- style.css: responsive visual design
- script.js: catalog, search, categories, favorites, game player and ad slot hooks

RUN LOCALLY
1. Extract the ZIP.
2. Open index.html in a modern browser.
3. To test embedded games, host the site on HTTPS or use a local development server.
   Some external games refuse to load inside iframes; that is controlled by the game host.

ADD A REAL GAME
1. Choose a game whose owner explicitly permits embedding or provides an official embed option.
2. Confirm commercial distribution/monetization is permitted by the game's terms or written license.
3. In script.js, find a game object in GAMES.
4. Set officialUrl to the game's official page URL (HTTPS).
5. Set embedUrl to the exact official iframe/embed URL provided by the owner (HTTPS).
6. Test on mobile. If the game host blocks iframe embedding, keep officialUrl and let users open its official page.
7. Replace the placeholder title, art, description and rating with accurate information. Do not imply these demo listings are real games.

ADSTERRA
1. Sign in to Adsterra as a Publisher.
2. Add your production HTTPS domain and wait for the website/ad unit to become active/approved.
3. Create a Banner or Native Banner unit and copy the exact generated script.
4. In script.js, paste the code into one of these slots:
   $("topAdCode").innerHTML = `...`;
   $("bottomAdCode").innerHTML = `...`;
   $("playerAdCode").innerHTML = `...`;
   Then hide the matching placeholder, e.g.:
   $("topAdPlaceholder").classList.add("hidden");
5. Keep Adsterra's code unchanged. If the generated snippet contains quotes/backticks, use a normal script tag directly in index.html inside the matching ad-code container instead of a JavaScript template string.
6. Start with one or two banner placements and check the site on a real phone. Do not encourage accidental clicks, put ads over controls, or inject ads into third-party game iframes.
7. Review Adsterra's current publisher policies and ad formats in your account. Ad quality and suitability are important for a games audience.

LICENSING CHECKLIST
- Get permission to host/embed and commercially monetize each game.
- Confirm rights for thumbnails, screenshots, game art, music, sound effects, fonts and logos.
- Read the exact license; “free to play” does not automatically mean “free to embed or monetize”.
- Do not download or rehost game files unless the license permits it.
- Keep a record of permission/license, source URL, attribution requirements and date checked.
- Respect third-party iframe restrictions and privacy/cookie requirements.
- Add a real Privacy Policy, contact page/email, and any required disclosures before launch.

DEPLOY
- Upload all three files to your static host (for example, Vercel, Netlify, or your own HTTPS hosting).
- Keep index.html, style.css and script.js in the same folder.
- Test search, category filters, favorites, back button, fullscreen and game embeds on Android and desktop.

NOTE
The included catalog uses original placeholder concepts and emoji art; it does not include third-party games. It is a UI prototype until you add approved official game embed URLs.
