PLAYPEAK / ARCADE POP — GAME BANNER SETUP

This package contains:
- script.js: the updated 13-game catalog, with image paths filled automatically after download
- download-game-banners.ps1: downloads official Gamezop cover artwork into assets/game-banners

INSTALL
1. Extract these files into your website root folder, the same folder as index.html and style.css. Replace the existing script.js with the included script.js.
2. Open a PowerShell terminal in that folder (VS Code: Terminal > New Terminal, then choose PowerShell from the terminal dropdown).
3. Run:
   Set-ExecutionPolicy -Scope Process -ExecutionPolicy Bypass
   .\download-game-banners.ps1
4. Wait until the script reports the number of banners saved. Files will be in assets/game-banners. The script updates image paths in script.js for the images that download successfully.
5. Reload the website and check the game cards.

If a banner cannot be downloaded, the script keeps the existing empty image value for that game and prints a warning.

NOTES
- Your computer needs internet access when you run the downloader. The image files are downloaded on your computer; they are not prebundled in this ZIP.
- Keep the official Gamezop image attribution/permission and commercial-use requirements in mind. Game embed access and game artwork rights may be subject to separate provider terms.
- Before pushing to GitHub, review `git status` and confirm any earlier merge/conflict situation is resolved.
