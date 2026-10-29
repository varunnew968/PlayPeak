
/* =========================================================
   ARCADE POP — COMPLETE GAME SCRIPT
   13 Gamezop games + preserved website functionality
   HTML + CSS + Vanilla JavaScript
   ========================================================= */

const GAMES = [
  {
    id: "final-war-dead-zone",
    title: "Final War Dead Zone",
    category: "Action",
    description: "Enter the final war zone and fight for survival.",
    art: "⚔️",
    cover: "linear-gradient(135deg,#30364b,#d94b4b)",
    image: "",
    rating: "New",
    badge: "NEW",
    tags: ["Action", "War", "Shooter"],
    officialUrl: "https://zv1y2i8p.play.gamezop.com/g/gTD1yQp3R",
    embedUrl: "https://zv1y2i8p.play.gamezop.com/g/gTD1yQp3R",
    featured: true
  },
  {
    id: "assassins-hunt-wild-west",
    title: "Assassin's Hunt: Wild West",
    category: "Action",
    description: "Step into the Wild West for the showdown’s begun; take down your foes with blade and with fun! Unlock sharp skins, let your legend ignite, with 50+ levels, adventure takes flight.",
    art: "🤠",
    cover: "linear-gradient(135deg,#8d512d,#e4b15b)",
    image: "",
    rating: "128M",
    badge: "POPULAR",
    tags: ["Action", "Western", "Adventure"],
    officialUrl: "https://zv1y2i8p.play.gamezop.com/g/9lpHai56Q",
    embedUrl: "https://zv1y2i8p.play.gamezop.com/g/9lpHai56Q",
    featured: true
  },
  {
    id: "triple-tile-match-master",
    title: "Triple Tile Match Master",
    category: "Puzzle & Logic",
    description: "Tap three, clear the board. Use power-ups to boost your score. Every move unlocks more.",
    art: "🧩",
    cover: "linear-gradient(135deg,#3868ad,#77d7dc)",
    image: "",
    rating: "17M",
    badge: "PUZZLE",
    tags: ["Puzzle", "Match 3", "Logic"],
    officialUrl: "https://zv1y2i8p.play.gamezop.com/g/kWnZGIWIJ",
    embedUrl: "https://zv1y2i8p.play.gamezop.com/g/kWnZGIWIJ",
    featured: false
  },
  {
    id: "cyberfusion",
    title: "Cyberfusion",
    category: "Puzzle & Logic",
    description: "Numbers merge to make higher numbers, stars blast when merged. The best match-3 HTML5 game!",
    art: "🔢",
    cover: "linear-gradient(135deg,#392b72,#e44cc2)",
    image: "",
    rating: "1B",
    badge: "HOT",
    tags: ["Puzzle", "Numbers", "Match 3"],
    officialUrl: "https://zv1y2i8p.play.gamezop.com/g/HJXei0j",
    embedUrl: "https://zv1y2i8p.play.gamezop.com/g/HJXei0j",
    featured: true
  },
  {
    id: "chess-grandmaster",
    title: "Chess Grandmaster",
    category: "Strategy",
    description: "A chess game for everyone: from beginners to experts! Choose between 3 difficulty modes, or solve over 1100 challenges.",
    art: "♟️",
    cover: "linear-gradient(135deg,#35433e,#9ab69c)",
    image: "",
    rating: "86M",
    badge: "STRATEGY",
    tags: ["Chess", "Strategy", "Board"],
    officialUrl: "https://zv1y2i8p.play.gamezop.com/g/rkAXTzkD5kX",
    embedUrl: "https://zv1y2i8p.play.gamezop.com/g/rkAXTzkD5kX",
    featured: false
  },
  {
    id: "bubble-shooter-classic",
    title: "Bubble Shooter Classic",
    category: "Strategy",
    description: "Match the colors, make them pop, burst the bubbles and watch them drop! The more bubbles that fall, the more points you get.",
    art: "🫧",
    cover: "linear-gradient(135deg,#277ec3,#f07ac7)",
    image: "",
    rating: "260M",
    badge: "CLASSIC",
    tags: ["Bubble", "Shooter", "Casual"],
    officialUrl: "https://zv1y2i8p.play.gamezop.com/g/yVywAGBQ6",
    embedUrl: "https://zv1y2i8p.play.gamezop.com/g/yVywAGBQ6",
    featured: true
  },
  {
    id: "fruity-fiesta",
    title: "Fruity Fiesta",
    category: "Arcade",
    description: "It's time for a juicy, jivy Fiesta of Fruits. Merge the fruits to get the elusive Melons. Collect them all to become the fruit baron!",
    art: "🍉",
    cover: "linear-gradient(135deg,#df4e62,#ffbd59)",
    image: "",
    rating: "2.1B",
    badge: "HOT",
    tags: ["Arcade", "Fruit", "Merge"],
    officialUrl: "https://zv1y2i8p.play.gamezop.com/g/mKZZW9NXW",
    embedUrl: "https://zv1y2i8p.play.gamezop.com/g/mKZZW9NXW",
    featured: true
  },
  {
    id: "spider-solitaire",
    title: "Spider Solitaire",
    category: "Strategy",
    description: "Get bitten by the solitaire bug and see if you can master this classic card game.",
    art: "🃏",
    cover: "linear-gradient(135deg,#276c58,#a7c98b)",
    image: "",
    rating: "130M",
    badge: "CLASSIC",
    tags: ["Cards", "Solitaire", "Strategy"],
    officialUrl: "https://zv1y2i8p.play.gamezop.com/g/B1MfIa4QCg",
    embedUrl: "https://zv1y2i8p.play.gamezop.com/g/B1MfIa4QCg",
    featured: false
  },
  {
    id: "sudoku-classic",
    title: "Sudoku Classic",
    category: "Puzzle & Logic",
    description: "Fill a 9×9 grid so each row, column and 3×3 section contains the digits from 1 to 9.",
    art: "🔢",
    cover: "linear-gradient(135deg,#2e6ba5,#7fc8ed)",
    image: "",
    rating: "10M",
    badge: "BRAIN GAME",
    tags: ["Puzzle", "Numbers", "Brain"],
    officialUrl: "https://zv1y2i8p.play.gamezop.com/g/SJgx126Qc0H",
    embedUrl: "https://zv1y2i8p.play.gamezop.com/g/SJgx126Qc0H",
    featured: false
  },
  {
    id: "merge-mania",
    title: "Merge Mania",
    category: "Strategy",
    description: "Zap those numbers by pitting them against one another! Race against time and see how much you score.",
    art: "💥",
    cover: "linear-gradient(135deg,#7648c8,#f49b4a)",
    image: "",
    rating: "37M",
    badge: "QUICK PLAY",
    tags: ["Strategy", "Numbers", "Merge"],
    officialUrl: "https://zv1y2i8p.play.gamezop.com/g/hfPOimYqY",
    embedUrl: "https://zv1y2i8p.play.gamezop.com/g/hfPOimYqY",
    featured: false
  },
  {
    id: "quad-colors",
    title: "QUAD Colors",
    category: "Strategy",
    description: "Skip, Reverse, Draw and go Wild to get rid of your last card. Don't wait to jab QUAD!",
    art: "🎴",
    cover: "linear-gradient(135deg,#e34e4e,#5651c9)",
    image: "",
    rating: "490M",
    badge: "CARD GAME",
    tags: ["Cards", "Strategy", "Casual"],
    officialUrl: "https://zv1y2i8p.play.gamezop.com/g/ByQxJnp7qRB",
    embedUrl: "https://zv1y2i8p.play.gamezop.com/g/ByQxJnp7qRB",
    featured: false
  },
  {
    id: "ludo-with-friends",
    title: "Ludo With Friends",
    category: "Strategy",
    description: "Here's the best multiplayer Ludo game! Play with your friends or with thousands of other players online.",
    art: "🎲",
    cover: "linear-gradient(135deg,#198a72,#f1bd46)",
    image: "",
    rating: "330M",
    badge: "MULTIPLAYER",
    tags: ["Ludo", "Board", "Multiplayer"],
    officialUrl: "https://zv1y2i8p.play.gamezop.com/g/SkhljT2fdgb",
    embedUrl: "https://zv1y2i8p.play.gamezop.com/g/SkhljT2fdgb",
    featured: true
  },
  {
    id: "blocks-adventure-jungle-saga",
    title: "Blocks Adventure Jungle Saga",
    category: "Strategy",
    description: "In jungle lands where wild vines grow, drag and drop blocks in a vibrant flow. Match them right and stack up points.",
    art: "🌴",
    cover: "linear-gradient(135deg,#286d4e,#a6c84d)",
    image: "",
    rating: "39M",
    badge: "ADVENTURE",
    tags: ["Blocks", "Puzzle", "Strategy"],
    officialUrl: "https://zv1y2i8p.play.gamezop.com/g/UCS62KJ8c",
    embedUrl: "https://zv1y2i8p.play.gamezop.com/g/UCS62KJ8c",
    featured: false
  }
];

const CATEGORIES = [
  { name: "All", icon: "✦" },
  { name: "Action", icon: "💥" },
  { name: "Arcade", icon: "🕹️" },
  { name: "Puzzle & Logic", icon: "🧩" },
  { name: "Strategy", icon: "♟️" }
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
