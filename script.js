
/* =========================================================
   ARCADE POP — SINGLE GAMEZOP EMBED
   All dummy games removed.
   Add more games later when their links are provided.
   ========================================================= */

(() => {
  "use strict";

  const GAME = {
    title: "Gamezop Arcade",
    category: "ARCADE",
    description: "Play instantly in your browser — no download required.",
    embedUrl: "https://zv1y2i8p.play.gamezop.com/g/ClwHwJKrv"
  };

  const $ = id => document.getElementById(id);

  function addSingleGameStyles() {
    const style = document.createElement("style");

    style.textContent = `
      main {
        width: 100%;
        max-width: 1440px;
        margin: 0 auto;
        padding: 10px clamp(8px, 2vw, 24px) 20px;
      }

      #homeView,
      .back-btn,
      .related-panel,
      .player-ad,
      .about-game,
      #favoriteToggle,
      .topbar .search,
      #favoritesBtn,
      .footer {
        display: none !important;
      }

      #playerView {
        display: block;
        padding-top: 0;
      }

      .player-heading {
        margin: 8px 0 12px;
      }

      .player-heading h1 {
        margin: 3px 0 5px;
      }

      .player-layout {
        display: block;
      }

      .player-main {
        width: 100%;
        min-width: 0;
      }

      .game-frame-wrap {
        width: 100%;
        height: calc(100vh - 175px);
        height: calc(100dvh - 175px);
        min-height: 360px;
        max-height: none;
        aspect-ratio: auto;
        overflow: hidden;
        border-radius: 14px;
        background: #111;
      }

      .game-frame-wrap iframe {
        display: block;
        width: 100%;
        height: 100%;
        border: 0;
      }

      .player-toolbar {
        margin: 8px 0;
      }

      @media (max-width: 520px) {
        main {
          padding: 8px 8px 14px;
        }

        .topbar {
          position: relative;
        }

        .game-frame-wrap {
          height: calc(100dvh - 150px);
          min-height: 340px;
          border-radius: 10px;
        }

        .player-heading h1 {
          font-size: 22px;
        }

        .player-heading p {
          font-size: 11px;
        }
      }
    `;

    document.head.appendChild(style);
  }

  function showGame() {
    const homeView = $("homeView");
    const playerView = $("playerView");
    const frameWrap = $("gameFrameWrap");

    if (!playerView || !frameWrap) {
      console.error(
        "Arcade Pop: game player elements were not found in index.html."
      );
      return;
    }

    // Hide all dummy game catalog content.
    if (homeView) {
      homeView.classList.add("hidden");
    }

    playerView.classList.remove("hidden");

    // Update the player heading.
    const title = $("playerTitle");
    const category = $("playerCategory");
    const description = $("playerDescription");

    if (title) title.textContent = GAME.title;
    if (category) category.textContent = GAME.category;
    if (description) description.textContent = GAME.description;

    const aboutDescription = $("aboutDescription");

    if (aboutDescription) {
      aboutDescription.textContent = GAME.description;
    }

    // Remove any old iframe.
    frameWrap.querySelectorAll("iframe").forEach(frame => {
      frame.remove();
    });

    // Hide the old placeholder.
    const placeholder = $("gameFramePlaceholder");

    if (placeholder) {
      placeholder.classList.add("hidden");
    }

    // Load the exact Gamezop iframe URL supplied by you.
    const iframe = document.createElement("iframe");

    iframe.src = GAME.embedUrl;
    iframe.title = GAME.title;
    iframe.setAttribute("seamless", "seamless");
    iframe.setAttribute("allowtransparency", "true");
    iframe.setAttribute("allowfullscreen", "true");
    iframe.setAttribute("frameborder", "0");
    iframe.setAttribute("scrolling", "no");
    iframe.setAttribute(
      "allow",
      "autoplay; fullscreen; gamepad"
    );

    iframe.style.width = "100%";
    iframe.style.height = "100%";
    iframe.style.border = "0";
    iframe.style.display = "block";
    iframe.loading = "eager";

    frameWrap.appendChild(iframe);

    // Clear any dummy related games.
    const related = $("relatedGames");

    if (related) {
      related.replaceChildren();
    }

    // Hide the old external-game link.
    const officialLink = $("openOfficialLink");

    if (officialLink) {
      officialLink.classList.add("hidden");
    }

    // Clicking the Arcade Pop logo reloads the game.
    const homeButton = $("homeBtn");

    if (homeButton) {
      homeButton.setAttribute(
        "aria-label",
        "Reload Gamezop game"
      );

      homeButton.addEventListener("click", event => {
        event.preventDefault();

        const currentFrame =
          frameWrap.querySelector("iframe");

        if (currentFrame) {
          currentFrame.src = GAME.embedUrl;
        }
      });
    }

    const year = $("year");

    if (year) {
      year.textContent = new Date().getFullYear();
    }
  }

  function init() {
    addSingleGameStyles();
    showGame();
  }

  if (document.readyState === "loading") {
    document.addEventListener(
      "DOMContentLoaded",
      init,
      { once: true }
    );
  } else {
    init();
  }
})();
