
/* =========================================================
   ARCADE POP — COMPLETE GAME SCRIPT
   HTML + CSS + Vanilla JavaScript
   GameDistribution embeds + local game banners
   ========================================================= */

const GAMES = [
  {
    id: "hyper-cars-stunt-racing",
    title: "Hyper Cars Stunt Racing",
    category: "Racing",
    description: "Drive supercars, perform stunts and race through 3D tracks.",
    art: "🏎️",
    cover: "linear-gradient(135deg,#ff9b38,#ffdf64)",
    image: "assets/hyper-cars.jpg",
    rating: "4.8",
    badge: "TRENDING",
    tags: ["Racing", "Cars", "Stunts", "Driving"],
    officialUrl: "https://gamedistribution.com/",
    embedId: "93407da92fe043e7b4b70fcc919ed8a4",
    width: 960,
    height: 600,
    featured: true
  },
  {
    id: "arrow-go",
    title: "Arrow Go",
    category: "Arcade",
    description: "Enjoy a quick arcade challenge in Arrow Go.",
    art: "🏹",
    cover: "linear-gradient(135deg,#58c6ff,#a6e7ff)",
    image: "assets/arrow-go.jpg",
    rating: "4.6",
    badge: "ARCADE",
    tags: ["Arcade", "Action", "Quick play"],
    officialUrl: "https://gamedistribution.com/",
    embedId: "f7be9dcb47e848178d99bffcaa396c68",
    width: 800,
    height: 600,
    featured: true
  },
  {
    id: "ninja-sword-dash",
    title: "Ninja: Sword Dash",
    category: "Action",
    description: "Dash through challenges in this ninja-themed action game.",
    art: "🥷",
    cover: "linear-gradient(135deg,#7560db,#c5b9ff)",
    image: "assets/ninja-sword-dash.jpg",
    rating: "4.7",
    badge: "ACTION",
    tags: ["Ninja", "Action", "Dash"],
    officialUrl: "https://gamedistribution.com/",
    embedId: "2d34067914fd4000a04d7e6a0f86fb9d",
    width: 1080,
    height: 1920,
    featured: true
  },
  {
    id: "ludo-quick",
    title: "Ludo Quick: Dice Board Games",
    category: "Casual",
    description: "Play a quick round of digital Ludo.",
    art: "🎲",
    cover: "linear-gradient(135deg,#42c99a,#b8f0c9)",
    image: "assets/ludo-quick.jpg",
    rating: "4.8",
    badge: "BOARD GAME",
    tags: ["Ludo", "Board", "Dice", "Casual"],
    officialUrl: "https://gamedistribution.com/",
    embedId: "75262ef5fe3f44a4ac45006506902f2e",
    width: 800,
    height: 600,
    featured: true
  },

  // These entries remain placeholders until real game
  // links are added to the catalog.
  {
    id: "tiny-tower",
    title: "Tiny Tower Hop",
    category: "Platformer",
    description: "Jump from platform to platform and avoid tricky gaps.",
    art: "🧗",
    cover: "linear-gradient(135deg,#f3a1d0,#ffdaeb)",
    rating: "4.6",
    badge: "PLATFORMER",
    tags: ["Platformer", "Jump", "Skill"],
    image: "",
    officialUrl: "",
    embedId: "",
    featured: false
  },
  {
    id: "fruit-frenzy",
    title: "Fruit Frenzy",
    category: "Arcade",
    description: "A colourful arcade concept for quick-play sessions.",
    art: "🍉",
    cover: "linear-gradient(135deg,#ff727f,#ffb5a1)",
    rating: "4.8",
    badge: "ARCADE",
    tags: ["Arcade", "Combo", "Casual"],
    image: "",
    officialUrl: "",
    embedId: "",
    featured: false
  },
  {
    id: "brainy-box",
    title: "Brainy Box",
    category: "Puzzle",
    description: "Explore bite-sized brain teasers.",
    art: "🧠",
    cover: "linear-gradient(135deg,#8ca7ff,#c5d6ff)",
    rating: "4.7",
    badge: "PUZZLE",
    tags: ["Logic", "Brain", "Relax"],
    image: "",
    officialUrl: "",
    embedId: "",
    featured: false
  },
  {
    id: "goal-rush",
    title: "Goal Rush",
    category: "Sports",
    description: "Aim, time your shot and find the goal.",
    art: "⚽",
    cover: "linear-gradient(135deg,#64d99c,#c4f4a2)",
    rating: "4.5",
    badge: "SPORTS",
    tags: ["Football", "Timing", "Skill"],
    image: "",
    officialUrl: "",
    embedId: "",
    featured: false
  },
  {
    id: "cosmic-pop",
    title: "Cosmic Pop",
    category: "Casual",
    description: "A space-themed matching game concept.",
    art: "🪐",
    cover: "linear-gradient(135deg,#393c85,#8e83e8)",
    rating: "4.9",
    badge: "CASUAL",
    tags: ["Space", "Match", "Relax"],
    image: "",
    officialUrl: "",
    embedId: "",
    featured: false
  },
  {
    id: "panda-panic",
    title: "Panda Panic",
    category: "Adventure",
    description: "A cute adventure game concept.",
    art: "🐼",
    cover: "linear-gradient(135deg,#86d9cf,#d5f3bc)",
    rating: "4.6",
    badge: "ADVENTURE",
    tags: ["Adventure", "Cute", "Explore"],
    image: "",
    officialUrl: "",
    embedId: "",
    featured: false
  },
  {
    id: "pixel-battle",
    title: "Pixel Battle",
    category: "Action",
    description: "A pixel-style action game concept.",
    art: "👾",
    cover: "linear-gradient(135deg,#f3a24d,#ffd37b)",
    rating: "4.5",
    badge: "ACTION",
    tags: ["Pixel", "Arcade", "Action"],
    image: "",
    officialUrl: "",
    embedId: "",
    featured: false
  },
  {
    id: "zen-garden",
    title: "Zen Garden",
    category: "Casual",
    description: "A relaxing casual game concept.",
    art: "🌱",
    cover: "linear-gradient(135deg,#69c7a1,#c4efb0)",
    rating: "4.7",
    badge: "CASUAL",
    tags: ["Relax", "Casual", "Chill"],
    image: "",
    officialUrl: "",
    embedId: "",
    featured: false
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
   GAMEDISTRIBUTION EMBED URL
   Uses the official embedded-game wrapper.
   ========================================================= */


function buildEmbedUrl(game) {
  const gameUrl =
    `https://html5.gamedistribution.com/${game.embedId}/`;

  const pageUrl = window.location.href;

  return (
    "https://embed.gamedistribution.com/" +
    "?url=" + gameUrl +
    "&width=" + (game.width || 800) +
    "&height=" + (game.height || 600) +
    "&language=en" +
    "&gdpr-tracking=1" +
    "&gdpr-targeting=1" +
    "&gd_sdk_referrer_url=" + encodeURIComponent(pageUrl)
  );
}


/* =========================================================
   GAME CARD WITH REAL BANNER IMAGES
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
   CATEGORY FILTERS
   ========================================================= */

function renderCategories() {
  $("categoryStrip").innerHTML = CATEGORIES.map(category => `
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
  const list = GAMES.filter(matches);

  $("gameGrid").innerHTML =
    list.map(cardMarkup).join("");

  $("resultCount").textContent =
    `${list.length} game${list.length === 1 ? "" : "s"}`;

  $("emptyState").classList.toggle(
    "hidden",
    list.length !== 0
  );

  $("gameGrid").classList.toggle(
    "hidden",
    list.length === 0
  );

  $("catalogTitle").textContent = state.favoritesOnly
    ? "Your favourites"
    : state.query
      ? "Search results"
      : state.category === "All"
        ? "Explore games"
        : state.category + " games";

  $("catalogSubtitle").textContent = state.favoritesOnly
    ? "Your saved picks, all in one place"
    : "Find your next favourite";

  renderCategories();
}

/* =========================================================
   FEATURED GAME BANNERS
   ========================================================= */

function renderFeatured() {
  $("featuredGrid").innerHTML = GAMES
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
    `)
    .join("");
}

/* =========================================================
   RELATED GAMES WITH THUMBNAILS
   ========================================================= */

function renderRelated(current) {
  $("relatedGames").innerHTML = GAMES
    .filter(game => game.id !== current.id)
    .slice(0, 5)
    .map(game => `
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
    `)
    .join("");
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
    // File-based local previews may restrict URL changes.
    console.warn("Could not update game URL:", error);
  }
}

/* =========================================================
   GAME PLAYER
   ========================================================= */

function openGame(id, options = {}) {
  const game = GAMES.find(item => item.id === id);

  if (!game) return;

  state.currentGame = game;
  state.favoritesOnly = false;

  if (!options.fromHistory) {
    updateGameUrl(game.id, options.replaceHistory || false);
  }

  homeView.classList.add("hidden");
  playerView.classList.remove("hidden");

  $("playerTitle").textContent = game.title;
  $("playerCategory").textContent =
    game.category.toUpperCase();
  $("playerDescription").textContent =
    game.description;
  $("aboutDescription").textContent =
    game.description;

  $("gameTags").innerHTML = game.tags
    .map(tag =>
      `<span class="tag">${escapeHTML(tag)}</span>`
    )
    .join("");

  $("favoriteToggle").classList.toggle(
    "active",
    state.favorites.has(game.id)
  );

  $("favoriteToggle").textContent =
    state.favorites.has(game.id) ? "♥" : "♡";

  const wrap = $("gameFrameWrap");

  // Remove the previously active game.
  wrap.querySelector("iframe")?.remove();

  const placeholder = $("gameFramePlaceholder");

  if (game.embedId) {
    placeholder.classList.add("hidden");

    const iframe = document.createElement("iframe");

    iframe.src = buildEmbedUrl(game);
    iframe.title = game.title;
    iframe.loading = "eager";
    iframe.allow = "fullscreen; gamepad; autoplay";
    iframe.allowFullscreen = true;
    iframe.referrerPolicy = "strict-origin-when-cross-origin";

    wrap.appendChild(iframe);
  } else {
    placeholder.classList.remove("hidden");
  }

  const official = $("openOfficialLink");

  if (game.officialUrl && safeHttps(game.officialUrl)) {
    official.href = game.officialUrl;
    official.classList.remove("hidden");
  } else {
    official.href = "#";
    official.classList.add("hidden");
  }

  renderRelated(game);

  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
}

function goHome(options = {}) {
  playerView.classList.add("hidden");
  homeView.classList.remove("hidden");

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

  $("favoriteToggle").classList.toggle(
    "active",
    state.favorites.has(id)
  );

  $("favoriteToggle").textContent =
    state.favorites.has(id) ? "♥" : "♡";

  showToast(
    state.favorites.has(id)
      ? "Added to favourites"
      : "Removed from favourites"
  );
}

function resetFilters() {
  state.category = "All";
  state.query = "";
  state.favoritesOnly = false;

  $("searchInput").value = "";
  $("favoritesBtn").classList.remove("active");

  renderGames();
}

/* =========================================================
   CLICK AND KEYBOARD EVENTS
   ========================================================= */

document.addEventListener("click", event => {
  const gameTarget = event.target.closest("[data-game]");

  if (gameTarget) {
    openGame(gameTarget.dataset.game);
    return;
  }

  const categoryTarget =
    event.target.closest("[data-category]");

  if (categoryTarget) {
    state.category = categoryTarget.dataset.category;
    state.favoritesOnly = false;

    $("favoritesBtn").classList.remove("active");

    renderGames();

    $("gamesSection").scrollIntoView({
      behavior: "smooth",
      block: "start"
    });
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
    !playerView.classList.contains("hidden")
  ) {
    goHome();
  }
});

/* =========================================================
   SEARCH
   ========================================================= */

$("searchForm").addEventListener("submit", event => {
  event.preventDefault();

  state.query = $("searchInput").value;
  state.favoritesOnly = false;

  $("favoritesBtn").classList.remove("active");

  renderGames();

  $("gamesSection").scrollIntoView({
    behavior: "smooth",
    block: "start"
  });
});

$("searchInput").addEventListener("input", event => {
  state.query = event.target.value;
  state.favoritesOnly = false;

  $("favoritesBtn").classList.remove("active");

  renderGames();
});

/* =========================================================
   NAVIGATION
   ========================================================= */

$("homeBtn").addEventListener("click", () => {
  goHome();
  resetFilters();
});

$("backBtn").addEventListener("click", goHome);

$("favoriteToggle").addEventListener(
  "click",
  toggleFavorite
);

$("favoritesBtn").addEventListener("click", () => {
  state.favoritesOnly = !state.favoritesOnly;
  state.category = "All";
  state.query = "";

  $("searchInput").value = "";

  $("favoritesBtn").classList.toggle(
    "active",
    state.favoritesOnly
  );

  renderGames();

  $("gamesSection").scrollIntoView({
    behavior: "smooth",
    block: "start"
  });

  if (
    state.favoritesOnly &&
    state.favorites.size === 0
  ) {
    showToast("Tap the heart on a game to save it");
  }
});

$("exploreBtn").addEventListener("click", () => {
  $("gamesSection").scrollIntoView({
    behavior: "smooth",
    block: "start"
  });
});

$("resetFilters").addEventListener(
  "click",
  resetFilters
);

document.querySelectorAll(".text-btn").forEach(button => {
  button.addEventListener("click", () => {
    resetFilters();

    $("gamesSection").scrollIntoView({
      behavior: "smooth"
    });
  });
});

/* =========================================================
   FULLSCREEN
   ========================================================= */

$("fullscreenBtn").addEventListener(
  "click",
  async () => {
    const frame = $("gameFrameWrap");

    try {
      if (!document.fullscreenElement) {
        await frame.requestFullscreen();
      } else {
        await document.exitFullscreen();
      }
    } catch {
      showToast(
        "Fullscreen isn't available in this browser"
      );
    }
  }
);

/* =========================================================
   FOOTER LINKS
   ========================================================= */

$("privacyLink").addEventListener("click", event => {
  event.preventDefault();
  showToast("Add your privacy policy URL before publishing.");
});

$("contactLink").addEventListener("click", event => {
  event.preventDefault();
  showToast("Add your contact email in index.html before publishing.");
});

$("licensingLink").addEventListener("click", event => {
  event.preventDefault();
  showToast("Add game credits and license details for each game.");
});

/* =========================================================
   BACK/FORWARD AND DIRECT GAME LINKS
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

/* COPYRIGHT */

$("year").textContent = new Date().getFullYear();

/* INITIAL RENDER */

renderFeatured();
renderGames();

/* Open a game directly when its URL contains ?game=game-id */

const initialGame =
  new URLSearchParams(window.location.search).get("game");

if (initialGame && GAMES.some(game => game.id === initialGame)) {
  openGame(initialGame, {
    fromHistory: true
  });
}

/* =========================================================
   ADSTERRA SETUP

   Add your approved ad code in the relevant containers.
   Keep provider-supplied ad code unchanged.
   Do not cover gameplay controls with advertisements.
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
