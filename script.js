
/* =========================================================
   ARCADE POP — COMPLETE GAME SCRIPT
   One real Gamezop game + preserved website functionality
   HTML + CSS + Vanilla JavaScript
   ========================================================= */

const GAMES = [
  {
    id: "gamezop-arcade",
    title: "Gamezop Arcade",
    category: "Arcade",
    description: "Play instantly in your browser — no download required.",
    art: "🎮",
    cover: "linear-gradient(135deg,#6558e8,#9b93ff)",
    image: "",
    rating: "New",
    badge: "NEW GAME",
    tags: ["Arcade", "Casual", "Quick play"],
    officialUrl: "https://zv1y2i8p.play.gamezop.com/g/ClwHwJKrv",
    embedUrl: "https://zv1y2i8p.play.gamezop.com/g/ClwHwJKrv",
    featured: true
  }
];

const CATEGORIES = [
  { name: "All", icon: "✦" },
  { name: "Arcade", icon: "🕹️" },
  { name: "Racing", icon: "🏎️" },
  { name: "Puzzle", icon: "🧩" },
  { name: "Action", icon: "💥" },
  { name: "Adventure", icon: "🗺️" },
  { name: "Platformer", icon: "👟" },
  { name: "Sports", icon: "⚽" },
  { name: "Casual", icon: "🌈" }
];

const state = {
  category: "All",
  query: "",
  favoritesOnly: false,
  currentGame: null,
  favorites: new Set()
};

const $ = id => document.getElementById(id);

const homeView = $("homeView");
const playerView = $("playerView");

/* =========================================================
   HELPERS
   ========================================================= */

function escapeHTML(value) {
  return String(value).replace(/[&<>"']/g, character => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;"
  }[character]));
}

function showToast(message) {
  const toast = $("toast");

  if (!toast) return;

  toast.textContent = message;
  toast.classList.add("show");

  clearTimeout(showToast.timer);

  showToast.timer = setTimeout(() => {
    toast.classList.remove("show");
  }, 2400);
}

function safeHttps(url) {
  try {
    return new URL(url).protocol === "https:";
  } catch {
    return false;
  }
}

/* =========================================================
   GAME CARDS
   ========================================================= */

function cardMarkup(game) {
  const banner = game.image
    ? `<img
        class="game-banner-image"
        src="${escapeHTML(game.image)}"
        alt="${escapeHTML(game.title)}"
        loading="lazy"
        onerror="this.remove();this.parentElement.classList.remove('has-banner')"
      >`
    : "";

  return `
    <article
      class="game-card"
      data-game="${escapeHTML(game.id)}"
      tabindex="0"
      role="button"
      aria-label="Play ${escapeHTML(game.title)}"
    >
      <div
        class="game-cover ${game.image ? "has-banner" : ""}"
        style="--cover:${game.cover}"
      >
        ${banner}

        <span class="game-art" aria-hidden="true">
          ${game.art}
        </span>

        <button
          class="game-play"
          tabindex="-1"
          aria-hidden="true"
        >▶</button>
      </div>

      <div class="game-meta">
        <h3>${escapeHTML(game.title)}</h3>
        <p>
          <span>${escapeHTML(game.category)}</span>
          <span class="rating">★ ${escapeHTML(game.rating)}</span>
        </p>
      </div>
    </article>
  `;
}

/* =========================================================
   CATEGORIES
   ========================================================= */

function renderCategories() {
  const categoryStrip = $("categoryStrip");

  if (!categoryStrip) return;

  categoryStrip.innerHTML = CATEGORIES.map(category => `
    <button
      class="category-chip ${state.category === category.name ? "active" : ""
    }"
      data-category="${category.name}"
    >
      <span>${category.icon}</span>
      ${category.name === "All" ? "All games" : category.name}
    </button>
  `).join("");
}

/* =========================================================
   SEARCH AND FILTERING
   ========================================================= */

function matches(game) {
  const query = state.query.toLowerCase().trim();

  const text = [
    game.title,
    game.category,
    game.description,
    ...game.tags
  ].join(" ").toLowerCase();

  return (
    (state.category === "All" ||
      game.category === state.category) &&
    (!query || text.includes(query)) &&
    (!state.favoritesOnly ||
      state.favorites.has(game.id))
  );
}

function renderGames() {
  const gameGrid = $("gameGrid");

  if (!gameGrid) return;

  const list = GAMES.filter(matches);

  gameGrid.innerHTML = list.map(cardMarkup).join("");

  if ($("resultCount")) {
    $("resultCount").textContent =
      `${list.length} game${list.length === 1 ? "" : "s"}`;
  }

  if ($("emptyState")) {
    $("emptyState").classList.toggle(
      "hidden",
      list.length !== 0
    );
  }

  gameGrid.classList.toggle("hidden", list.length === 0);

  if ($("catalogTitle")) {
    $("catalogTitle").textContent = state.favoritesOnly
      ? "Your favourites"
      : state.query
        ? "Search results"
        : state.category === "All"
          ? "Explore games"
          : state.category + " games";
  }

  if ($("catalogSubtitle")) {
    $("catalogSubtitle").textContent = state.favoritesOnly
      ? "Your saved picks, all in one place"
      : "Find your next favourite";
  }

  renderCategories();
}

/* =========================================================
   FEATURED GAME
   ========================================================= */

function renderFeatured() {
  const featuredGrid = $("featuredGrid");

  if (!featuredGrid) return;

  featuredGrid.innerHTML = GAMES
    .filter(game => game.featured)
    .map(game => `
      <button
        class="feature-card ${game.image ? "has-image" : ""}"
        data-game="${escapeHTML(game.id)}"
        data-art="${escapeHTML(game.art)}"
        style="--card-bg:${game.cover}"
      >
        ${game.image
        ? `<img
                class="feature-banner-image"
                src="${escapeHTML(game.image)}"
                alt="${escapeHTML(game.title)}"
                loading="lazy"
                onerror="this.remove();this.parentElement.classList.remove('has-image')"
              >`
        : ""
      }

        <div class="feature-top">
          <span class="feature-badge">
            ${escapeHTML(game.badge)}
          </span>
          <span class="play-circle">▶</span>
        </div>

        <div class="feature-info">
          <h3>${escapeHTML(game.title)}</h3>
          <p>
            ${escapeHTML(game.category)} · ★ ${escapeHTML(game.rating)}
          </p>
        </div>
      </button>
    `).join("");
}

/* =========================================================
   RELATED GAMES
   ========================================================= */

function renderRelated(current) {
  const container = $("relatedGames");

  if (!container) return;

  const relatedGames = GAMES.filter(
    game => game.id !== current.id
  );

  if (relatedGames.length === 0) {
    container.innerHTML = `
      <p style="font-size:12px;line-height:1.6;color:#777b99;margin:4px 0;">
        More games will appear here as you add their official links.
      </p>
    `;
    return;
  }

  container.innerHTML = relatedGames.map(game => `
    <button
      class="related-item"
      data-game="${escapeHTML(game.id)}"
    >
      <span
        class="related-art"
        style="--cover:${game.cover}"
      >
        ${game.image
      ? `<img
              class="related-banner-image"
              src="${escapeHTML(game.image)}"
              alt="${escapeHTML(game.title)}"
              loading="lazy"
              onerror="this.remove()"
            >`
      : game.art
    }
      </span>

      <span>
        <strong>${escapeHTML(game.title)}</strong>
        <small>
          ${escapeHTML(game.category)} · ★ ${escapeHTML(game.rating)}
        </small>
      </span>
    </button>
  `).join("");
}

/* =========================================================
   SHAREABLE GAME URL
   ========================================================= */

function updateGameUrl(gameId, replace = false) {
  try {
    const url = new URL(window.location.href);

    if (gameId) {
      url.searchParams.set("game", gameId);
    } else {
      url.searchParams.delete("game");
    }

    if (replace) {
      history.replaceState({}, "", url);
    } else {
      history.pushState({}, "", url);
    }
  } catch (error) {
    console.warn("Could not update game URL:", error);
  }
}

/* =========================================================
   GAME PLAYER
   ========================================================= */

function openGame(id, options = {}) {
  const game = GAMES.find(item => item.id === id);

  if (!game || !homeView || !playerView) return;

  state.currentGame = game;
  state.favoritesOnly = false;

  if (!options.fromHistory) {
    updateGameUrl(game.id, options.replaceHistory || false);
  }

  homeView.classList.add("hidden");
  playerView.classList.remove("hidden");

  $("playerTitle").textContent = game.title;
  $("playerCategory").textContent = game.category.toUpperCase();
  $("playerDescription").textContent = game.description;

  if ($("aboutDescription")) {
    $("aboutDescription").textContent = game.description;
  }

  if ($("gameTags")) {
    $("gameTags").innerHTML = game.tags
      .map(tag => `<span class="tag">${escapeHTML(tag)}</span>`)
      .join("");
  }

  if ($("favoriteToggle")) {
    $("favoriteToggle").classList.toggle(
      "active",
      state.favorites.has(game.id)
    );

    $("favoriteToggle").textContent =
      state.favorites.has(game.id) ? "♥" : "♡";
  }

  const wrap = $("gameFrameWrap");
  const placeholder = $("gameFramePlaceholder");

  if (!wrap || !placeholder) return;

  // Support either an iframe already included in index.html
  // or the original placeholder-based player structure.
  let iframe = $("gamePlayerIframe");

  if (!iframe) {
    wrap.querySelectorAll("iframe").forEach(frame => frame.remove());

    iframe = document.createElement("iframe");
    iframe.id = "gamePlayerIframe";
    wrap.appendChild(iframe);
  }

  if (game.embedUrl && safeHttps(game.embedUrl)) {
    iframe.title = game.title;
    iframe.setAttribute("seamless", "seamless");
    iframe.setAttribute("allowtransparency", "true");
    iframe.setAttribute("allowfullscreen", "true");
    iframe.setAttribute("frameborder", "0");
    iframe.setAttribute("scrolling", "no");
    iframe.setAttribute(
      "allow",
      "autoplay; fullscreen; gamepad"
    );

    iframe.allowFullscreen = true;
    iframe.loading = "eager";

    iframe.style.width = "100%";
    iframe.style.height = "100%";
    iframe.style.border = "0";
    iframe.style.display = "block";

    // Use the exact Gamezop URL supplied by you.
    iframe.src = game.embedUrl;

    placeholder.classList.add("hidden");
  } else {
    iframe.src = "about:blank";
    placeholder.classList.remove("hidden");
  }

  const official = $("openOfficialLink");

  if (official) {
    if (game.officialUrl && safeHttps(game.officialUrl)) {
      official.href = game.officialUrl;
      official.classList.remove("hidden");
    } else {
      official.href = "#";
      official.classList.add("hidden");
    }
  }

  renderRelated(game);

  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
}

/* =========================================================
   HOME NAVIGATION
   ========================================================= */

function goHome(options = {}) {
  if (playerView) playerView.classList.add("hidden");
  if (homeView) homeView.classList.remove("hidden");

  state.currentGame = null;

  if (!options.fromHistory) {
    updateGameUrl(null, options.replaceHistory || false);
  }

  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
}

/* =========================================================
   FAVORITES
   ========================================================= */

function toggleFavorite() {
  if (!state.currentGame) return;

  const id = state.currentGame.id;

  if (state.favorites.has(id)) {
    state.favorites.delete(id);
  } else {
    state.favorites.add(id);
  }

  if ($("favoriteToggle")) {
    $("favoriteToggle").classList.toggle(
      "active",
      state.favorites.has(id)
    );

    $("favoriteToggle").textContent =
      state.favorites.has(id) ? "♥" : "♡";
  }

  showToast(
    state.favorites.has(id)
      ? "Added to favourites"
      : "Removed from favourites"
  );
}

/* =========================================================
   RESET FILTERS
   ========================================================= */

function resetFilters() {
  state.category = "All";
  state.query = "";
  state.favoritesOnly = false;

  if ($("searchInput")) $("searchInput").value = "";

  if ($("favoritesBtn")) {
    $("favoritesBtn").classList.remove("active");
  }

  renderGames();
}

/* =========================================================
   CARD AND CATEGORY CLICKS
   ========================================================= */

document.addEventListener("click", event => {
  const gameTarget = event.target.closest("[data-game]");

  if (gameTarget) {
    openGame(gameTarget.dataset.game);
    return;
  }

  const categoryTarget = event.target.closest("[data-category]");

  if (categoryTarget) {
    state.category = categoryTarget.dataset.category;
    state.favoritesOnly = false;

    if ($("favoritesBtn")) {
      $("favoritesBtn").classList.remove("active");
    }

    renderGames();

    if ($("gamesSection")) {
      $("gamesSection").scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    }
  }
});

document.addEventListener("keydown", event => {
  if (
    (event.key === "Enter" || event.key === " ") &&
    event.target.matches(".game-card")
  ) {
    event.preventDefault();
    openGame(event.target.dataset.game);
  }

  if (
    event.key === "Escape" &&
    playerView &&
    !playerView.classList.contains("hidden")
  ) {
    goHome();
  }
});

/* =========================================================
   SEARCH
   ========================================================= */

if ($("searchForm")) {
  $("searchForm").addEventListener("submit", event => {
    event.preventDefault();

    state.query = $("searchInput").value;
    state.favoritesOnly = false;

    if ($("favoritesBtn")) {
      $("favoritesBtn").classList.remove("active");
    }

    renderGames();

    if ($("gamesSection")) {
      $("gamesSection").scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    }
  });
}

if ($("searchInput")) {
  $("searchInput").addEventListener("input", event => {
    state.query = event.target.value;
    state.favoritesOnly = false;

    if ($("favoritesBtn")) {
      $("favoritesBtn").classList.remove("active");
    }

    renderGames();
  });
}

/* =========================================================
   NAVIGATION BUTTONS
   ========================================================= */

if ($("homeBtn")) {
  $("homeBtn").addEventListener("click", () => {
    goHome();
    resetFilters();
  });
}

if ($("backBtn")) {
  $("backBtn").addEventListener("click", goHome);
}

if ($("favoriteToggle")) {
  $("favoriteToggle").addEventListener(
    "click",
    toggleFavorite
  );
}

if ($("favoritesBtn")) {
  $("favoritesBtn").addEventListener("click", () => {
    state.favoritesOnly = !state.favoritesOnly;
    state.category = "All";
    state.query = "";

    if ($("searchInput")) {
      $("searchInput").value = "";
    }

    $("favoritesBtn").classList.toggle(
      "active",
      state.favoritesOnly
    );

    renderGames();

    if ($("gamesSection")) {
      $("gamesSection").scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    }

    if (
      state.favoritesOnly &&
      state.favorites.size === 0
    ) {
      showToast("Tap the heart on a game to save it");
    }
  });
}

if ($("exploreBtn")) {
  $("exploreBtn").addEventListener("click", () => {
    if ($("gamesSection")) {
      $("gamesSection").scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    }
  });
}

if ($("resetFilters")) {
  $("resetFilters").addEventListener("click", resetFilters);
}

document.querySelectorAll(".text-btn").forEach(button => {
  button.addEventListener("click", () => {
    resetFilters();

    if ($("gamesSection")) {
      $("gamesSection").scrollIntoView({
        behavior: "smooth"
      });
    }
  });
});

/* =========================================================
   FULLSCREEN
   ========================================================= */

if ($("fullscreenBtn")) {
  $("fullscreenBtn").addEventListener("click", async () => {
    const frame = $("gameFrameWrap");

    try {
      if (!document.fullscreenElement) {
        await frame.requestFullscreen();
      } else {
        await document.exitFullscreen();
      }
    } catch {
      showToast("Fullscreen isn't available in this browser");
    }
  });
}

/* =========================================================
   FOOTER LINKS
   ========================================================= */

if ($("privacyLink")) {
  $("privacyLink").addEventListener("click", event => {
    event.preventDefault();
    showToast("Add your privacy policy URL before publishing.");
  });
}

if ($("contactLink")) {
  $("contactLink").addEventListener("click", event => {
    event.preventDefault();
    showToast("Add your contact email in index.html before publishing.");
  });
}

if ($("licensingLink")) {
  $("licensingLink").addEventListener("click", event => {
    event.preventDefault();
    showToast("Add game credits and license details for each game.");
  });
}

/* =========================================================
   BROWSER BACK/FORWARD NAVIGATION
   ========================================================= */

window.addEventListener("popstate", () => {
  const gameId =
    new URLSearchParams(window.location.search).get("game");

  if (gameId && GAMES.some(game => game.id === gameId)) {
    openGame(gameId, { fromHistory: true });
  } else {
    goHome({ fromHistory: true });
  }
});

/* =========================================================
   COPYRIGHT
   ========================================================= */

if ($("year")) {
  $("year").textContent = new Date().getFullYear();
}

/* =========================================================
   INITIAL RENDER
   ========================================================= */

renderFeatured();
renderGames();

/* Open the selected game directly from a shareable URL. */

const initialGame =
  new URLSearchParams(window.location.search).get("game");

if (initialGame && GAMES.some(game => game.id === initialGame)) {
  openGame(initialGame, { fromHistory: true });
}

/* =========================================================
   ADSTERRA SETUP

   Your existing ad scripts in index.html remain unchanged.
   The following are optional placeholders if you later wish
   to insert a separate approved banner code in these slots.
   ========================================================= */

// Top banner example:
// $("topAdCode").innerHTML = `PASTE_APPROVED_ADSTERRA_CODE`;
// $("topAdPlaceholder").classList.add("hidden");

// Bottom banner example:
// $("bottomAdCode").innerHTML = `PASTE_APPROVED_ADSTERRA_CODE`;
// $("bottomAdPlaceholder").classList.add("hidden");

// Game-player banner example:
// $("playerAdCode").innerHTML = `PASTE_APPROVED_ADSTERRA_CODE`;
// $("playerAdPlaceholder").classList.add("hidden");
