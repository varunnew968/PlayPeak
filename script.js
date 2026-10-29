/* =========================================================
   PLAYPEAK — PREMIUM GAME CATALOG
   Curated Gamezop catalog with locally cached official covers.
   Search, category filters, favorites, shareable game URLs,
   featured picks, related games and fullscreen are preserved.
   ========================================================= */

const GAMES = [
  {
    "id": "final-war-dead-zone",
    "title": "Final War Dead Zone",
    "gamezopId": "gTD1yQp3R",
    "category": "Action",
    "art": "⚔️",
    "description": "Enter the final war zone and fight for survival.",
    "tags": [
      "Action",
      "War",
      "Shooter"
    ],
    "rating": "New",
    "badge": "FEATURED",
    "featured": true,
    "cover": "linear-gradient(135deg,#2f294e,#b94db6)",
    "image": "assets/game-banners/final-war-dead-zone.png",
    "officialUrl": "https://zv1y2i8p.play.gamezop.com/g/gTD1yQp3R",
    "embedUrl": "https://zv1y2i8p.play.gamezop.com/g/gTD1yQp3R"
  },
  {
    "id": "assassins-hunt-wild-west",
    "title": "Assassin's Hunt: Wild West",
    "gamezopId": "9lpHai56Q",
    "category": "Action",
    "art": "🤠",
    "description": "Step into the Wild West, take down foes, unlock skins and explore more than 50 levels.",
    "tags": [
      "Action",
      "Western",
      "Adventure"
    ],
    "rating": "128M",
    "badge": "FEATURED",
    "featured": true,
    "cover": "linear-gradient(135deg,#2f294e,#b94db6)",
    "image": "assets/game-banners/assassins-hunt-wild-west.png",
    "officialUrl": "https://zv1y2i8p.play.gamezop.com/g/9lpHai56Q",
    "embedUrl": "https://zv1y2i8p.play.gamezop.com/g/9lpHai56Q"
  },
  {
    "id": "triple-tile-match-master",
    "title": "Triple Tile Match Master",
    "gamezopId": "kWnZGIWIJ",
    "category": "Puzzle & Logic",
    "art": "🧩",
    "description": "Tap three tiles, clear the board and use power-ups to boost your score.",
    "tags": [
      "Puzzle",
      "Match 3",
      "Logic"
    ],
    "rating": "17M",
    "badge": "PLAY NOW",
    "featured": false,
    "cover": "linear-gradient(135deg,#2f5e93,#7fcbd9)",
    "image": "assets/game-banners/triple-tile-match-master.png",
    "officialUrl": "https://zv1y2i8p.play.gamezop.com/g/kWnZGIWIJ",
    "embedUrl": "https://zv1y2i8p.play.gamezop.com/g/kWnZGIWIJ"
  },
  {
    "id": "cyberfusion",
    "title": "Cyberfusion",
    "gamezopId": "HJXei0j",
    "category": "Puzzle & Logic",
    "art": "🔢",
    "description": "Merge matching numbers to make higher values and trigger chain reactions.",
    "tags": [
      "Puzzle",
      "Numbers",
      "Match 3"
    ],
    "rating": "1B",
    "badge": "FEATURED",
    "featured": true,
    "cover": "linear-gradient(135deg,#326b68,#80cfb8)",
    "image": "assets/game-banners/cyberfusion.png",
    "officialUrl": "https://zv1y2i8p.play.gamezop.com/g/HJXei0j",
    "embedUrl": "https://zv1y2i8p.play.gamezop.com/g/HJXei0j"
  },
  {
    "id": "chess-grandmaster",
    "title": "Chess Grandmaster",
    "gamezopId": "rkAXTzkD5kX",
    "category": "Strategy",
    "art": "♟️",
    "description": "Play chess at multiple difficulty levels or solve tactical challenges.",
    "tags": [
      "Chess",
      "Strategy",
      "Board"
    ],
    "rating": "86M",
    "badge": "PLAY NOW",
    "featured": false,
    "cover": "linear-gradient(135deg,#54446f,#c4a5ce)",
    "image": "assets/game-banners/chess-grandmaster.png",
    "officialUrl": "https://zv1y2i8p.play.gamezop.com/g/rkAXTzkD5kX",
    "embedUrl": "https://zv1y2i8p.play.gamezop.com/g/rkAXTzkD5kX"
  },
  {
    "id": "bubble-shooter-classic",
    "title": "Bubble Shooter Classic",
    "gamezopId": "yVywAGBQ6",
    "category": "Puzzle & Logic",
    "art": "🫧",
    "description": "Match colorful bubbles, make them pop and set up satisfying cascades.",
    "tags": [
      "Puzzle",
      "Bubble",
      "Casual"
    ],
    "rating": "260M",
    "badge": "FEATURED",
    "featured": true,
    "cover": "linear-gradient(135deg,#6b6bc5,#edb0d3)",
    "image": "assets/game-banners/bubble-shooter-classic.png",
    "officialUrl": "https://zv1y2i8p.play.gamezop.com/g/yVywAGBQ6",
    "embedUrl": "https://zv1y2i8p.play.gamezop.com/g/yVywAGBQ6"
  },
  {
    "id": "fruity-fiesta",
    "title": "Fruity Fiesta",
    "gamezopId": "mKZZW9NXW",
    "category": "Arcade",
    "art": "🍉",
    "description": "Merge juicy fruits, discover melons and chase a high score.",
    "tags": [
      "Arcade",
      "Fruit",
      "Merge"
    ],
    "rating": "2.1B",
    "badge": "FEATURED",
    "featured": true,
    "cover": "linear-gradient(135deg,#3c65bb,#e184c7)",
    "image": "assets/game-banners/fruity-fiesta.png",
    "officialUrl": "https://zv1y2i8p.play.gamezop.com/g/mKZZW9NXW",
    "embedUrl": "https://zv1y2i8p.play.gamezop.com/g/mKZZW9NXW"
  },
  {
    "id": "spider-solitaire",
    "title": "Spider Solitaire",
    "gamezopId": "B1MfIa4QCg",
    "category": "Strategy",
    "art": "🃏",
    "description": "Build descending card sequences and clear the tableau in this classic solitaire game.",
    "tags": [
      "Cards",
      "Solitaire",
      "Strategy"
    ],
    "rating": "130M",
    "badge": "PLAY NOW",
    "featured": false,
    "cover": "linear-gradient(135deg,#385b92,#8db8e6)",
    "image": "assets/game-banners/spider-solitaire.png",
    "officialUrl": "https://zv1y2i8p.play.gamezop.com/g/B1MfIa4QCg",
    "embedUrl": "https://zv1y2i8p.play.gamezop.com/g/B1MfIa4QCg"
  },
  {
    "id": "sudoku-classic",
    "title": "Sudoku Classic",
    "gamezopId": "SJgx126Qc0H",
    "category": "Puzzle & Logic",
    "art": "🔢",
    "description": "Complete the 9×9 grid so every row, column and 3×3 section contains the digits 1 to 9.",
    "tags": [
      "Puzzle",
      "Numbers",
      "Brain"
    ],
    "rating": "10M",
    "badge": "PLAY NOW",
    "featured": false,
    "cover": "linear-gradient(135deg,#6655b9,#e37fcb)",
    "image": "assets/game-banners/sudoku-classic.png",
    "officialUrl": "https://zv1y2i8p.play.gamezop.com/g/SJgx126Qc0H",
    "embedUrl": "https://zv1y2i8p.play.gamezop.com/g/SJgx126Qc0H"
  },
  {
    "id": "merge-mania",
    "title": "Merge Mania",
    "gamezopId": "hfPOimYqY",
    "category": "Puzzle & Logic",
    "art": "💥",
    "description": "Merge numbers against the clock and try to beat your best score.",
    "tags": [
      "Puzzle",
      "Numbers",
      "Merge"
    ],
    "rating": "37M",
    "badge": "PLAY NOW",
    "featured": false,
    "cover": "linear-gradient(135deg,#2f5e93,#7fcbd9)",
    "image": "assets/game-banners/merge-mania.png",
    "officialUrl": "https://zv1y2i8p.play.gamezop.com/g/hfPOimYqY",
    "embedUrl": "https://zv1y2i8p.play.gamezop.com/g/hfPOimYqY"
  },
  {
    "id": "quad-colors",
    "title": "QUAD Colors",
    "gamezopId": "ByQxJnp7qRB",
    "category": "Strategy",
    "art": "🎴",
    "description": "Play action cards, reverse turns and get rid of your last card.",
    "tags": [
      "Cards",
      "Strategy",
      "Casual"
    ],
    "rating": "490M",
    "badge": "PLAY NOW",
    "featured": false,
    "cover": "linear-gradient(135deg,#2f4b41,#9bbd98)",
    "image": "assets/game-banners/quad-colors.png",
    "officialUrl": "https://zv1y2i8p.play.gamezop.com/g/ByQxJnp7qRB",
    "embedUrl": "https://zv1y2i8p.play.gamezop.com/g/ByQxJnp7qRB"
  },
  {
    "id": "ludo-with-friends",
    "title": "Ludo With Friends",
    "gamezopId": "SkhljT2fdgb",
    "category": "Strategy",
    "art": "🎲",
    "description": "Play multiplayer Ludo with friends or players around the world.",
    "tags": [
      "Ludo",
      "Board",
      "Multiplayer"
    ],
    "rating": "330M",
    "badge": "FEATURED",
    "featured": true,
    "cover": "linear-gradient(135deg,#2f4b41,#9bbd98)",
    "image": "assets/game-banners/ludo-with-friends.png",
    "officialUrl": "https://zv1y2i8p.play.gamezop.com/g/SkhljT2fdgb",
    "embedUrl": "https://zv1y2i8p.play.gamezop.com/g/SkhljT2fdgb"
  },
  {
    "id": "blocks-adventure-jungle-saga",
    "title": "Blocks Adventure Jungle Saga",
    "gamezopId": "UCS62KJ8c",
    "category": "Puzzle & Logic",
    "art": "🌴",
    "description": "Drag and drop blocks, clear lines and plan your next move in a jungle setting.",
    "tags": [
      "Blocks",
      "Puzzle",
      "Strategy"
    ],
    "rating": "39M",
    "badge": "PLAY NOW",
    "featured": false,
    "cover": "linear-gradient(135deg,#326b68,#80cfb8)",
    "image": "assets/game-banners/blocks-adventure-jungle-saga.png",
    "officialUrl": "https://zv1y2i8p.play.gamezop.com/g/UCS62KJ8c",
    "embedUrl": "https://zv1y2i8p.play.gamezop.com/g/UCS62KJ8c"
  },
  {
    "id": "slide-and-divide",
    "title": "Slide And Divide",
    "gamezopId": "PLQTtp9Ei",
    "category": "Puzzle & Logic",
    "art": "🧮",
    "description": "Slide tiles and combine numbers through clever logic.",
    "tags": [
      "Puzzle",
      "Numbers",
      "Logic"
    ],
    "rating": "",
    "badge": "PLAY NOW",
    "featured": false,
    "cover": "linear-gradient(135deg,#326b68,#80cfb8)",
    "image": "assets/game-banners/slide-and-divide.png",
    "officialUrl": "https://zv1y2i8p.play.gamezop.com/g/PLQTtp9Ei",
    "embedUrl": "https://zv1y2i8p.play.gamezop.com/g/PLQTtp9Ei"
  },
  {
    "id": "trap-the-virus",
    "title": "Trap The Virus",
    "gamezopId": "ByAWPfLYdJx",
    "category": "Puzzle & Logic",
    "art": "🦠",
    "description": "Use careful moves to contain the virus and solve each board.",
    "tags": [
      "Puzzle",
      "Strategy",
      "Logic"
    ],
    "rating": "",
    "badge": "PLAY NOW",
    "featured": false,
    "cover": "linear-gradient(135deg,#6b6bc5,#edb0d3)",
    "image": "assets/game-banners/trap-the-virus.png",
    "officialUrl": "https://zv1y2i8p.play.gamezop.com/g/ByAWPfLYdJx",
    "embedUrl": "https://zv1y2i8p.play.gamezop.com/g/ByAWPfLYdJx"
  },
  {
    "id": "salazar",
    "title": "Salazar",
    "gamezopId": "rJWX-kadu",
    "category": "Puzzle & Logic",
    "art": "🧙",
    "description": "Explore a fantasy puzzle world and solve each challenge.",
    "tags": [
      "Puzzle",
      "Fantasy",
      "Adventure"
    ],
    "rating": "",
    "badge": "PLAY NOW",
    "featured": false,
    "cover": "linear-gradient(135deg,#326b68,#80cfb8)",
    "image": "assets/game-banners/salazar.png",
    "officialUrl": "https://zv1y2i8p.play.gamezop.com/g/rJWX-kadu",
    "embedUrl": "https://zv1y2i8p.play.gamezop.com/g/rJWX-kadu"
  },
  {
    "id": "spell-wizard",
    "title": "Spell Wizard",
    "gamezopId": "zMxz8LNrp",
    "category": "Puzzle & Logic",
    "art": "🔮",
    "description": "Match symbols and cast your way through magical puzzles.",
    "tags": [
      "Puzzle",
      "Magic",
      "Match"
    ],
    "rating": "",
    "badge": "PLAY NOW",
    "featured": false,
    "cover": "linear-gradient(135deg,#2f5e93,#7fcbd9)",
    "image": "assets/game-banners/spell-wizard.png",
    "officialUrl": "https://zv1y2i8p.play.gamezop.com/g/zMxz8LNrp",
    "embedUrl": "https://zv1y2i8p.play.gamezop.com/g/zMxz8LNrp"
  },
  {
    "id": "bubble-smash",
    "title": "Bubble Smash",
    "gamezopId": "ryJGkhT7qAB",
    "category": "Puzzle & Logic",
    "art": "🫧",
    "description": "Clear clusters of bubbles with well-aimed shots.",
    "tags": [
      "Puzzle",
      "Bubble",
      "Arcade"
    ],
    "rating": "",
    "badge": "PLAY NOW",
    "featured": false,
    "cover": "linear-gradient(135deg,#326b68,#80cfb8)",
    "image": "assets/game-banners/bubble-smash.png",
    "officialUrl": "https://zv1y2i8p.play.gamezop.com/g/ryJGkhT7qAB",
    "embedUrl": "https://zv1y2i8p.play.gamezop.com/g/ryJGkhT7qAB"
  },
  {
    "id": "mahjong-scandinavian",
    "title": "Mahjong At Home: Scandinavian Edition",
    "gamezopId": "JVhRZNwly",
    "category": "Puzzle & Logic",
    "art": "🀄",
    "description": "Match mahjong tiles and clear the calm, detailed layouts.",
    "tags": [
      "Puzzle",
      "Mahjong",
      "Board"
    ],
    "rating": "",
    "badge": "PLAY NOW",
    "featured": false,
    "cover": "linear-gradient(135deg,#326b68,#80cfb8)",
    "image": "assets/game-banners/mahjong-scandinavian.png",
    "officialUrl": "https://zv1y2i8p.play.gamezop.com/g/JVhRZNwly",
    "embedUrl": "https://zv1y2i8p.play.gamezop.com/g/JVhRZNwly"
  },
  {
    "id": "monsterjong",
    "title": "Monsterjong",
    "gamezopId": "S1-bxXI39",
    "category": "Puzzle & Logic",
    "art": "👾",
    "description": "Match tiles and clear every monster-themed board.",
    "tags": [
      "Puzzle",
      "Mahjong",
      "Matching"
    ],
    "rating": "",
    "badge": "PLAY NOW",
    "featured": false,
    "cover": "linear-gradient(135deg,#6655b9,#e37fcb)",
    "image": "assets/game-banners/monsterjong.png",
    "officialUrl": "https://zv1y2i8p.play.gamezop.com/g/S1-bxXI39",
    "embedUrl": "https://zv1y2i8p.play.gamezop.com/g/S1-bxXI39"
  },
  {
    "id": "box-crush",
    "title": "Box Crush",
    "gamezopId": "S1Wrpf1v5ym",
    "category": "Puzzle & Logic",
    "art": "📦",
    "description": "Push, position and clear boxes with thoughtful moves.",
    "tags": [
      "Puzzle",
      "Blocks",
      "Logic"
    ],
    "rating": "",
    "badge": "PLAY NOW",
    "featured": false,
    "cover": "linear-gradient(135deg,#6b6bc5,#edb0d3)",
    "image": "assets/game-banners/box-crush.png",
    "officialUrl": "https://zv1y2i8p.play.gamezop.com/g/S1Wrpf1v5ym",
    "embedUrl": "https://zv1y2i8p.play.gamezop.com/g/S1Wrpf1v5ym"
  },
  {
    "id": "greedy-gnomes",
    "title": "Greedy Gnomes",
    "gamezopId": "BydCYS-ON",
    "category": "Puzzle & Logic",
    "art": "⛏️",
    "description": "Collect treasures and make smart choices in each level.",
    "tags": [
      "Puzzle",
      "Strategy",
      "Casual"
    ],
    "rating": "",
    "badge": "PLAY NOW",
    "featured": false,
    "cover": "linear-gradient(135deg,#6b6bc5,#edb0d3)",
    "image": "assets/game-banners/greedy-gnomes.png",
    "officialUrl": "https://zv1y2i8p.play.gamezop.com/g/BydCYS-ON",
    "embedUrl": "https://zv1y2i8p.play.gamezop.com/g/BydCYS-ON"
  },
  {
    "id": "rescue-juliet",
    "title": "Rescue Juliet",
    "gamezopId": "4ykgM_yzbcg",
    "category": "Puzzle & Logic",
    "art": "🗝️",
    "description": "Solve the obstacles and find a path to the rescue.",
    "tags": [
      "Puzzle",
      "Adventure",
      "Logic"
    ],
    "rating": "",
    "badge": "PLAY NOW",
    "featured": false,
    "cover": "linear-gradient(135deg,#6b6bc5,#edb0d3)",
    "image": "assets/game-banners/rescue-juliet.png",
    "officialUrl": "https://zv1y2i8p.play.gamezop.com/g/4ykgM_yzbcg",
    "embedUrl": "https://zv1y2i8p.play.gamezop.com/g/4ykgM_yzbcg"
  },
  {
    "id": "word-finder",
    "title": "Word Finder",
    "gamezopId": "r1K-J3TQ5Ar",
    "category": "Puzzle & Logic",
    "art": "🔤",
    "description": "Find hidden words and sharpen your vocabulary.",
    "tags": [
      "Puzzle",
      "Words",
      "Brain"
    ],
    "rating": "",
    "badge": "PLAY NOW",
    "featured": false,
    "cover": "linear-gradient(135deg,#2f5e93,#7fcbd9)",
    "image": "assets/game-banners/word-finder.png",
    "officialUrl": "https://zv1y2i8p.play.gamezop.com/g/r1K-J3TQ5Ar",
    "embedUrl": "https://zv1y2i8p.play.gamezop.com/g/r1K-J3TQ5Ar"
  },
  {
    "id": "mahjong-aloha",
    "title": "Mahjong At Home: Aloha Edition",
    "gamezopId": "pGF1Q7l1s",
    "category": "Puzzle & Logic",
    "art": "🌺",
    "description": "Match traditional tiles across island-inspired mahjong layouts.",
    "tags": [
      "Puzzle",
      "Mahjong",
      "Board"
    ],
    "rating": "",
    "badge": "PLAY NOW",
    "featured": false,
    "cover": "linear-gradient(135deg,#2f5e93,#7fcbd9)",
    "image": "assets/game-banners/mahjong-aloha.png",
    "officialUrl": "https://zv1y2i8p.play.gamezop.com/g/pGF1Q7l1s",
    "embedUrl": "https://zv1y2i8p.play.gamezop.com/g/pGF1Q7l1s"
  },
  {
    "id": "greedy-guzzler",
    "title": "Greedy Guzzler",
    "gamezopId": "lxDr07zuL",
    "category": "Puzzle & Logic",
    "art": "🍔",
    "description": "Guide a hungry character through bite-sized challenges.",
    "tags": [
      "Action",
      "Casual",
      "Arcade"
    ],
    "rating": "",
    "badge": "PLAY NOW",
    "featured": false,
    "cover": "linear-gradient(135deg,#326b68,#80cfb8)",
    "image": "assets/game-banners/greedy-guzzler.png",
    "officialUrl": "https://zv1y2i8p.play.gamezop.com/g/lxDr07zuL",
    "embedUrl": "https://zv1y2i8p.play.gamezop.com/g/lxDr07zuL"
  },
  {
    "id": "swipe-art-puzzle",
    "title": "Swipe Art Puzzle",
    "gamezopId": "rJsl0KSbuN",
    "category": "Puzzle & Logic",
    "art": "🎨",
    "description": "Slide pieces into place to reveal colorful artwork.",
    "tags": [
      "Puzzle",
      "Art",
      "Logic"
    ],
    "rating": "",
    "badge": "PLAY NOW",
    "featured": false,
    "cover": "linear-gradient(135deg,#6655b9,#e37fcb)",
    "image": "assets/game-banners/swipe-art-puzzle.png",
    "officialUrl": "https://zv1y2i8p.play.gamezop.com/g/rJsl0KSbuN",
    "embedUrl": "https://zv1y2i8p.play.gamezop.com/g/rJsl0KSbuN"
  },
  {
    "id": "jelly-bears",
    "title": "Jelly Bears",
    "gamezopId": "SJcRYSbu4",
    "category": "Puzzle & Logic",
    "art": "🐻",
    "description": "Match colorful jelly bears to clear the board.",
    "tags": [
      "Puzzle",
      "Match 3",
      "Casual"
    ],
    "rating": "",
    "badge": "PLAY NOW",
    "featured": false,
    "cover": "linear-gradient(135deg,#2f5e93,#7fcbd9)",
    "image": "assets/game-banners/jelly-bears.png",
    "officialUrl": "https://zv1y2i8p.play.gamezop.com/g/SJcRYSbu4",
    "embedUrl": "https://zv1y2i8p.play.gamezop.com/g/SJcRYSbu4"
  },
  {
    "id": "hex-burst",
    "title": "Hex Burst",
    "gamezopId": "H1abja2M_eb",
    "category": "Puzzle & Logic",
    "art": "⬡",
    "description": "Plan your placement and clear hexagonal patterns.",
    "tags": [
      "Puzzle",
      "Logic",
      "Strategy"
    ],
    "rating": "",
    "badge": "PLAY NOW",
    "featured": false,
    "cover": "linear-gradient(135deg,#6655b9,#e37fcb)",
    "image": "assets/game-banners/hex-burst.png",
    "officialUrl": "https://zv1y2i8p.play.gamezop.com/g/H1abja2M_eb",
    "embedUrl": "https://zv1y2i8p.play.gamezop.com/g/H1abja2M_eb"
  },
  {
    "id": "jelly-slice",
    "title": "Jelly Slice",
    "gamezopId": "SJ3-ELT8p-x",
    "category": "Puzzle & Logic",
    "art": "🍮",
    "description": "Slice through jelly shapes and solve each level.",
    "tags": [
      "Puzzle",
      "Arcade",
      "Casual"
    ],
    "rating": "",
    "badge": "PLAY NOW",
    "featured": false,
    "cover": "linear-gradient(135deg,#6655b9,#e37fcb)",
    "image": "assets/game-banners/jelly-slice.png",
    "officialUrl": "https://zv1y2i8p.play.gamezop.com/g/SJ3-ELT8p-x",
    "embedUrl": "https://zv1y2i8p.play.gamezop.com/g/SJ3-ELT8p-x"
  },
  {
    "id": "animal-connection",
    "title": "Animal Connection",
    "gamezopId": "on1jVCbBn",
    "category": "Puzzle & Logic",
    "art": "🐾",
    "description": "Connect matching animal tiles and clear the board.",
    "tags": [
      "Puzzle",
      "Animals",
      "Matching"
    ],
    "rating": "",
    "badge": "PLAY NOW",
    "featured": false,
    "cover": "linear-gradient(135deg,#2f5e93,#7fcbd9)",
    "image": "assets/game-banners/animal-connection.png",
    "officialUrl": "https://zv1y2i8p.play.gamezop.com/g/on1jVCbBn",
    "embedUrl": "https://zv1y2i8p.play.gamezop.com/g/on1jVCbBn"
  },
  {
    "id": "snack-time",
    "title": "Snack Time",
    "gamezopId": "SkKlAYSbuE",
    "category": "Puzzle & Logic",
    "art": "🍪",
    "description": "Match snack pieces and work through tasty puzzles.",
    "tags": [
      "Puzzle",
      "Casual",
      "Matching"
    ],
    "rating": "",
    "badge": "PLAY NOW",
    "featured": false,
    "cover": "linear-gradient(135deg,#2f5e93,#7fcbd9)",
    "image": "assets/game-banners/snack-time.png",
    "officialUrl": "https://zv1y2i8p.play.gamezop.com/g/SkKlAYSbuE",
    "embedUrl": "https://zv1y2i8p.play.gamezop.com/g/SkKlAYSbuE"
  },
  {
    "id": "jelly-doods",
    "title": "Jelly Doods",
    "gamezopId": "rJsWV8aIa-l",
    "category": "Puzzle & Logic",
    "art": "🟣",
    "description": "Move squishy characters through colorful puzzle levels.",
    "tags": [
      "Puzzle",
      "Casual",
      "Logic"
    ],
    "rating": "",
    "badge": "PLAY NOW",
    "featured": false,
    "cover": "linear-gradient(135deg,#2f5e93,#7fcbd9)",
    "image": "assets/game-banners/jelly-doods.png",
    "officialUrl": "https://zv1y2i8p.play.gamezop.com/g/rJsWV8aIa-l",
    "embedUrl": "https://zv1y2i8p.play.gamezop.com/g/rJsWV8aIa-l"
  },
  {
    "id": "guess-the-flag",
    "title": "Guess The Flag",
    "gamezopId": "SKLI0L06A",
    "category": "Puzzle & Logic",
    "art": "🏳️",
    "description": "Identify country flags and test your geography knowledge.",
    "tags": [
      "Puzzle",
      "Trivia",
      "Geography"
    ],
    "rating": "",
    "badge": "PLAY NOW",
    "featured": false,
    "cover": "linear-gradient(135deg,#6655b9,#e37fcb)",
    "image": "assets/game-banners/guess-the-flag.png",
    "officialUrl": "https://zv1y2i8p.play.gamezop.com/g/SKLI0L06A",
    "embedUrl": "https://zv1y2i8p.play.gamezop.com/g/SKLI0L06A"
  },
  {
    "id": "tic-tac-toe-11",
    "title": "Tic Tac Toe 11",
    "gamezopId": "Hk2yhp7cCH",
    "category": "Puzzle & Logic",
    "art": "⭕",
    "description": "Play a fast classic grid game and outsmart your opponent.",
    "tags": [
      "Board",
      "Strategy",
      "Casual"
    ],
    "rating": "",
    "badge": "PLAY NOW",
    "featured": false,
    "cover": "linear-gradient(135deg,#326b68,#80cfb8)",
    "image": "assets/game-banners/tic-tac-toe-11.png",
    "officialUrl": "https://zv1y2i8p.play.gamezop.com/g/Hk2yhp7cCH",
    "embedUrl": "https://zv1y2i8p.play.gamezop.com/g/Hk2yhp7cCH"
  },
  {
    "id": "oh-yes",
    "title": "Oh Yes",
    "gamezopId": "SkyRBO1b",
    "category": "Puzzle & Logic",
    "art": "✅",
    "description": "Solve compact logic challenges one move at a time.",
    "tags": [
      "Puzzle",
      "Logic",
      "Brain"
    ],
    "rating": "",
    "badge": "PLAY NOW",
    "featured": false,
    "cover": "linear-gradient(135deg,#6b6bc5,#edb0d3)",
    "image": "assets/game-banners/oh-yes.png",
    "officialUrl": "https://zv1y2i8p.play.gamezop.com/g/SkyRBO1b",
    "embedUrl": "https://zv1y2i8p.play.gamezop.com/g/SkyRBO1b"
  },
  {
    "id": "pop-soap",
    "title": "Pop Soap",
    "gamezopId": "SJX7TGkDq1X",
    "category": "Puzzle & Logic",
    "art": "🧼",
    "description": "Pop satisfying bubble wrap-style patterns and relax.",
    "tags": [
      "Casual",
      "Puzzle",
      "Relaxing"
    ],
    "rating": "",
    "badge": "PLAY NOW",
    "featured": false,
    "cover": "linear-gradient(135deg,#326b68,#80cfb8)",
    "image": "assets/game-banners/pop-soap.png",
    "officialUrl": "https://zv1y2i8p.play.gamezop.com/g/SJX7TGkDq1X",
    "embedUrl": "https://zv1y2i8p.play.gamezop.com/g/SJX7TGkDq1X"
  },
  {
    "id": "cubes-got-moves",
    "title": "Cubes Got Moves",
    "gamezopId": "S1JXaMJDqJX",
    "category": "Puzzle & Logic",
    "art": "🧊",
    "description": "Move cubes through clever levels and plan the right route.",
    "tags": [
      "Puzzle",
      "Blocks",
      "Logic"
    ],
    "rating": "",
    "badge": "PLAY NOW",
    "featured": false,
    "cover": "linear-gradient(135deg,#2f5e93,#7fcbd9)",
    "image": "assets/game-banners/cubes-got-moves.png",
    "officialUrl": "https://zv1y2i8p.play.gamezop.com/g/S1JXaMJDqJX",
    "embedUrl": "https://zv1y2i8p.play.gamezop.com/g/S1JXaMJDqJX"
  },
  {
    "id": "alien-kindergarten",
    "title": "Alien Kindergarten",
    "gamezopId": "r1Xm38FQkl",
    "category": "Puzzle & Logic",
    "art": "👽",
    "description": "Guide little aliens through playful puzzle challenges.",
    "tags": [
      "Puzzle",
      "Adventure",
      "Casual"
    ],
    "rating": "",
    "badge": "PLAY NOW",
    "featured": false,
    "cover": "linear-gradient(135deg,#6b6bc5,#edb0d3)",
    "image": "assets/game-banners/alien-kindergarten.png",
    "officialUrl": "https://zv1y2i8p.play.gamezop.com/g/r1Xm38FQkl",
    "embedUrl": "https://zv1y2i8p.play.gamezop.com/g/r1Xm38FQkl"
  },
  {
    "id": "jello-go-round",
    "title": "Jello Go Round",
    "gamezopId": "SkRZZUoXI8g",
    "category": "Puzzle & Logic",
    "art": "🍬",
    "description": "Rotate through a colorful world of jelly-shaped challenges.",
    "tags": [
      "Puzzle",
      "Arcade",
      "Casual"
    ],
    "rating": "",
    "badge": "PLAY NOW",
    "featured": false,
    "cover": "linear-gradient(135deg,#6655b9,#e37fcb)",
    "image": "assets/game-banners/jello-go-round.png",
    "officialUrl": "https://zv1y2i8p.play.gamezop.com/g/SkRZZUoXI8g",
    "embedUrl": "https://zv1y2i8p.play.gamezop.com/g/SkRZZUoXI8g"
  },
  {
    "id": "blackbeards-island",
    "title": "Blackbeard's Island",
    "gamezopId": "rk-Rtrb_V",
    "category": "Puzzle & Logic",
    "art": "🏴‍☠️",
    "description": "Explore a pirate island through quick puzzles and challenges.",
    "tags": [
      "Puzzle",
      "Adventure",
      "Pirate"
    ],
    "rating": "",
    "badge": "PLAY NOW",
    "featured": false,
    "cover": "linear-gradient(135deg,#6b6bc5,#edb0d3)",
    "image": "assets/game-banners/blackbeards-island.png",
    "officialUrl": "https://zv1y2i8p.play.gamezop.com/g/rk-Rtrb_V",
    "embedUrl": "https://zv1y2i8p.play.gamezop.com/g/rk-Rtrb_V"
  },
  {
    "id": "fruit-merge-reloaded",
    "title": "Fruit Merge Reloaded",
    "gamezopId": "ClwHwJKrv",
    "category": "Arcade",
    "art": "🍓",
    "description": "Combine fruits, unlock new varieties and keep the board under control.",
    "tags": [
      "Arcade",
      "Fruit",
      "Merge"
    ],
    "rating": "",
    "badge": "PLAY NOW",
    "featured": false,
    "cover": "linear-gradient(135deg,#3c65bb,#e184c7)",
    "image": "assets/game-banners/fruit-merge-reloaded.png",
    "officialUrl": "https://zv1y2i8p.play.gamezop.com/g/ClwHwJKrv",
    "embedUrl": "https://zv1y2i8p.play.gamezop.com/g/ClwHwJKrv"
  },
  {
    "id": "super-sprint",
    "title": "Super Sprint",
    "gamezopId": "HyV_Nm-kK",
    "category": "Arcade",
    "art": "🏎️",
    "description": "Race through quick tracks and chase a faster finish.",
    "tags": [
      "Arcade",
      "Racing",
      "Speed"
    ],
    "rating": "",
    "badge": "PLAY NOW",
    "featured": false,
    "cover": "linear-gradient(135deg,#1e6b65,#4fd1a1)",
    "image": "assets/game-banners/super-sprint.png",
    "officialUrl": "https://zv1y2i8p.play.gamezop.com/g/HyV_Nm-kK",
    "embedUrl": "https://zv1y2i8p.play.gamezop.com/g/HyV_Nm-kK"
  },
  {
    "id": "tower-twist",
    "title": "Tower Twist",
    "gamezopId": "HJT46GkPcy7",
    "category": "Arcade",
    "art": "🗼",
    "description": "Twist your way around the tower and avoid obstacles.",
    "tags": [
      "Arcade",
      "Reflex",
      "Casual"
    ],
    "rating": "",
    "badge": "PLAY NOW",
    "featured": false,
    "cover": "linear-gradient(135deg,#8241ac,#f2a55b)",
    "image": "assets/game-banners/tower-twist.png",
    "officialUrl": "https://zv1y2i8p.play.gamezop.com/g/HJT46GkPcy7",
    "embedUrl": "https://zv1y2i8p.play.gamezop.com/g/HJT46GkPcy7"
  },
  {
    "id": "dunk-draw",
    "title": "Dunk Draw",
    "gamezopId": "r1xZyhTQ50r",
    "category": "Arcade",
    "art": "🏀",
    "description": "Draw the path and guide the ball into the basket.",
    "tags": [
      "Arcade",
      "Sports",
      "Drawing"
    ],
    "rating": "",
    "badge": "PLAY NOW",
    "featured": false,
    "cover": "linear-gradient(135deg,#e15c65,#f6b454)",
    "image": "assets/game-banners/dunk-draw.png",
    "officialUrl": "https://zv1y2i8p.play.gamezop.com/g/r1xZyhTQ50r",
    "embedUrl": "https://zv1y2i8p.play.gamezop.com/g/r1xZyhTQ50r"
  },
  {
    "id": "bouncy",
    "title": "Bouncy",
    "gamezopId": "H1Tz6z1Dqym",
    "category": "Arcade",
    "art": "🟠",
    "description": "Bounce through obstacles and keep your timing precise.",
    "tags": [
      "Arcade",
      "Reflex",
      "Casual"
    ],
    "rating": "",
    "badge": "PLAY NOW",
    "featured": false,
    "cover": "linear-gradient(135deg,#8241ac,#f2a55b)",
    "image": "assets/game-banners/bouncy.png",
    "officialUrl": "https://zv1y2i8p.play.gamezop.com/g/H1Tz6z1Dqym",
    "embedUrl": "https://zv1y2i8p.play.gamezop.com/g/H1Tz6z1Dqym"
  },
  {
    "id": "fruit-chop",
    "title": "Fruit Chop",
    "gamezopId": "rkWfy2pXq0r",
    "category": "Arcade",
    "art": "🍉",
    "description": "Slice flying fruit and avoid the hazards.",
    "tags": [
      "Arcade",
      "Fruit",
      "Reflex"
    ],
    "rating": "",
    "badge": "PLAY NOW",
    "featured": false,
    "cover": "linear-gradient(135deg,#8241ac,#f2a55b)",
    "image": "assets/game-banners/fruit-chop.png",
    "officialUrl": "https://zv1y2i8p.play.gamezop.com/g/rkWfy2pXq0r",
    "embedUrl": "https://zv1y2i8p.play.gamezop.com/g/rkWfy2pXq0r"
  },
  {
    "id": "pizza-dash",
    "title": "Pizza Dash",
    "gamezopId": "wMm3YDfJC",
    "category": "Arcade",
    "art": "🍕",
    "description": "Dash through a playful food-themed arcade challenge.",
    "tags": [
      "Arcade",
      "Food",
      "Reflex"
    ],
    "rating": "",
    "badge": "PLAY NOW",
    "featured": false,
    "cover": "linear-gradient(135deg,#e15c65,#f6b454)",
    "image": "assets/game-banners/pizza-dash.png",
    "officialUrl": "https://zv1y2i8p.play.gamezop.com/g/wMm3YDfJC",
    "embedUrl": "https://zv1y2i8p.play.gamezop.com/g/wMm3YDfJC"
  },
  {
    "id": "hoopball-legends",
    "title": "Hoopball Legends",
    "gamezopId": "H15Qk3pQ5CH",
    "category": "Arcade",
    "art": "🏀",
    "description": "Take aim, sink hoops and keep your scoring streak alive.",
    "tags": [
      "Arcade",
      "Sports",
      "Basketball"
    ],
    "rating": "",
    "badge": "PLAY NOW",
    "featured": false,
    "cover": "linear-gradient(135deg,#8241ac,#f2a55b)",
    "image": "assets/game-banners/hoopball-legends.png",
    "officialUrl": "https://zv1y2i8p.play.gamezop.com/g/H15Qk3pQ5CH",
    "embedUrl": "https://zv1y2i8p.play.gamezop.com/g/H15Qk3pQ5CH"
  },
  {
    "id": "tricky-trip",
    "title": "Tricky Trip",
    "gamezopId": "NJ3xGOyfb5l",
    "category": "Arcade",
    "art": "🛣️",
    "description": "React quickly and navigate tricky paths without crashing.",
    "tags": [
      "Arcade",
      "Reflex",
      "Skill"
    ],
    "rating": "",
    "badge": "PLAY NOW",
    "featured": false,
    "cover": "linear-gradient(135deg,#e15c65,#f6b454)",
    "image": "assets/game-banners/tricky-trip.png",
    "officialUrl": "https://zv1y2i8p.play.gamezop.com/g/NJ3xGOyfb5l",
    "embedUrl": "https://zv1y2i8p.play.gamezop.com/g/NJ3xGOyfb5l"
  },
  {
    "id": "dodgy",
    "title": "Dodgy",
    "gamezopId": "ryRWrDaNPF",
    "category": "Arcade",
    "art": "🟣",
    "description": "Dodge obstacles and survive as the challenge speeds up.",
    "tags": [
      "Arcade",
      "Reflex",
      "Skill"
    ],
    "rating": "",
    "badge": "PLAY NOW",
    "featured": false,
    "cover": "linear-gradient(135deg,#e15c65,#f6b454)",
    "image": "assets/game-banners/dodgy.png",
    "officialUrl": "https://zv1y2i8p.play.gamezop.com/g/ryRWrDaNPF",
    "embedUrl": "https://zv1y2i8p.play.gamezop.com/g/ryRWrDaNPF"
  },
  {
    "id": "zoo-pinball",
    "title": "Zoo Pinball",
    "gamezopId": "Ske-CtBbdV",
    "category": "Arcade",
    "art": "🦁",
    "description": "Keep the pinball moving through a colorful animal world.",
    "tags": [
      "Arcade",
      "Pinball",
      "Animals"
    ],
    "rating": "",
    "badge": "PLAY NOW",
    "featured": false,
    "cover": "linear-gradient(135deg,#8241ac,#f2a55b)",
    "image": "assets/game-banners/zoo-pinball.png",
    "officialUrl": "https://zv1y2i8p.play.gamezop.com/g/Ske-CtBbdV",
    "embedUrl": "https://zv1y2i8p.play.gamezop.com/g/Ske-CtBbdV"
  },
  {
    "id": "cuby-dash",
    "title": "Cuby Dash",
    "gamezopId": "Sy6b98udz0",
    "category": "Arcade",
    "art": "🧊",
    "description": "Dash a cube through quick, obstacle-filled stages.",
    "tags": [
      "Arcade",
      "Reflex",
      "Skill"
    ],
    "rating": "",
    "badge": "PLAY NOW",
    "featured": false,
    "cover": "linear-gradient(135deg,#e15c65,#f6b454)",
    "image": "assets/game-banners/cuby-dash.png",
    "officialUrl": "https://zv1y2i8p.play.gamezop.com/g/Sy6b98udz0",
    "embedUrl": "https://zv1y2i8p.play.gamezop.com/g/Sy6b98udz0"
  },
  {
    "id": "stay-on-the-road",
    "title": "Stay On The Road",
    "gamezopId": "HJ-72IFXyg",
    "category": "Arcade",
    "art": "🚘",
    "description": "Steer carefully and stay on the road through each bend.",
    "tags": [
      "Arcade",
      "Driving",
      "Reflex"
    ],
    "rating": "",
    "badge": "PLAY NOW",
    "featured": false,
    "cover": "linear-gradient(135deg,#3c65bb,#e184c7)",
    "image": "assets/game-banners/stay-on-the-road.png",
    "officialUrl": "https://zv1y2i8p.play.gamezop.com/g/HJ-72IFXyg",
    "embedUrl": "https://zv1y2i8p.play.gamezop.com/g/HJ-72IFXyg"
  },
  {
    "id": "vegetables-vs-chef",
    "title": "Vegetables vs. Chef",
    "gamezopId": "H1be5Ef0Qp",
    "category": "Arcade",
    "art": "🥕",
    "description": "Help the veggies dodge a hungry chef in this arcade challenge.",
    "tags": [
      "Arcade",
      "Food",
      "Casual"
    ],
    "rating": "",
    "badge": "PLAY NOW",
    "featured": false,
    "cover": "linear-gradient(135deg,#8241ac,#f2a55b)",
    "image": "assets/game-banners/vegetables-vs-chef.png",
    "officialUrl": "https://zv1y2i8p.play.gamezop.com/g/H1be5Ef0Qp",
    "embedUrl": "https://zv1y2i8p.play.gamezop.com/g/H1be5Ef0Qp"
  },
  {
    "id": "bouncing-beasts",
    "title": "Bouncing Beasts",
    "gamezopId": "4y6efOyf-5g",
    "category": "Arcade",
    "art": "🐸",
    "description": "Bounce through lively stages and avoid falling into danger.",
    "tags": [
      "Arcade",
      "Animals",
      "Reflex"
    ],
    "rating": "",
    "badge": "PLAY NOW",
    "featured": false,
    "cover": "linear-gradient(135deg,#8241ac,#f2a55b)",
    "image": "assets/game-banners/bouncing-beasts.png",
    "officialUrl": "https://zv1y2i8p.play.gamezop.com/g/4y6efOyf-5g",
    "embedUrl": "https://zv1y2i8p.play.gamezop.com/g/4y6efOyf-5g"
  },
  {
    "id": "shade-shuffle",
    "title": "Shade Shuffle",
    "gamezopId": "SyFcNzAX6",
    "category": "Arcade",
    "art": "🎨",
    "description": "Match shades and react fast as the colors change.",
    "tags": [
      "Arcade",
      "Colors",
      "Reflex"
    ],
    "rating": "",
    "badge": "PLAY NOW",
    "featured": false,
    "cover": "linear-gradient(135deg,#1e6b65,#4fd1a1)",
    "image": "assets/game-banners/shade-shuffle.png",
    "officialUrl": "https://zv1y2i8p.play.gamezop.com/g/SyFcNzAX6",
    "embedUrl": "https://zv1y2i8p.play.gamezop.com/g/SyFcNzAX6"
  },
  {
    "id": "falling-through",
    "title": "Falling Through",
    "gamezopId": "ByGqEfCXa",
    "category": "Arcade",
    "art": "⬇️",
    "description": "Navigate a falling path and dodge incoming obstacles.",
    "tags": [
      "Arcade",
      "Reflex",
      "Skill"
    ],
    "rating": "",
    "badge": "PLAY NOW",
    "featured": false,
    "cover": "linear-gradient(135deg,#1e6b65,#4fd1a1)",
    "image": "assets/game-banners/falling-through.png",
    "officialUrl": "https://zv1y2i8p.play.gamezop.com/g/ByGqEfCXa",
    "embedUrl": "https://zv1y2i8p.play.gamezop.com/g/ByGqEfCXa"
  },
  {
    "id": "exoplanet-express",
    "title": "Exoplanet Express",
    "gamezopId": "SyEQTzyw91X",
    "category": "Arcade",
    "art": "🚀",
    "description": "Pilot through space and navigate tricky cosmic routes.",
    "tags": [
      "Arcade",
      "Space",
      "Flying"
    ],
    "rating": "",
    "badge": "PLAY NOW",
    "featured": false,
    "cover": "linear-gradient(135deg,#1e6b65,#4fd1a1)",
    "image": "assets/game-banners/exoplanet-express.png",
    "officialUrl": "https://zv1y2i8p.play.gamezop.com/g/SyEQTzyw91X",
    "embedUrl": "https://zv1y2i8p.play.gamezop.com/g/SyEQTzyw91X"
  },
  {
    "id": "skill-shot",
    "title": "Skill Shot",
    "gamezopId": "ByvOVQZkK",
    "category": "Arcade",
    "art": "🎯",
    "description": "Line up your shot and test your precision.",
    "tags": [
      "Arcade",
      "Skill",
      "Sports"
    ],
    "rating": "",
    "badge": "PLAY NOW",
    "featured": false,
    "cover": "linear-gradient(135deg,#8241ac,#f2a55b)",
    "image": "assets/game-banners/skill-shot.png",
    "officialUrl": "https://zv1y2i8p.play.gamezop.com/g/ByvOVQZkK",
    "embedUrl": "https://zv1y2i8p.play.gamezop.com/g/ByvOVQZkK"
  },
  {
    "id": "rock-the-dock",
    "title": "Rock the Dock",
    "gamezopId": "EJoezu1MWqg",
    "category": "Arcade",
    "art": "⚓",
    "description": "Balance cargo and keep the dock from tipping over.",
    "tags": [
      "Arcade",
      "Physics",
      "Skill"
    ],
    "rating": "",
    "badge": "PLAY NOW",
    "featured": false,
    "cover": "linear-gradient(135deg,#1e6b65,#4fd1a1)",
    "image": "assets/game-banners/rock-the-dock.png",
    "officialUrl": "https://zv1y2i8p.play.gamezop.com/g/EJoezu1MWqg",
    "embedUrl": "https://zv1y2i8p.play.gamezop.com/g/EJoezu1MWqg"
  },
  {
    "id": "grumpy-gorilla",
    "title": "Grumpy Gorilla",
    "gamezopId": "N1sZfO1fWqg",
    "category": "Arcade",
    "art": "🦍",
    "description": "Play a quick reaction challenge with a grumpy gorilla.",
    "tags": [
      "Arcade",
      "Animals",
      "Casual"
    ],
    "rating": "",
    "badge": "PLAY NOW",
    "featured": false,
    "cover": "linear-gradient(135deg,#3c65bb,#e184c7)",
    "image": "assets/game-banners/grumpy-gorilla.png",
    "officialUrl": "https://zv1y2i8p.play.gamezop.com/g/N1sZfO1fWqg",
    "embedUrl": "https://zv1y2i8p.play.gamezop.com/g/N1sZfO1fWqg"
  },
  {
    "id": "spinning-shooter",
    "title": "Spinning Shooter",
    "gamezopId": "B19EafJP9JX",
    "category": "Arcade",
    "art": "🎯",
    "description": "Time your shots as the target spins.",
    "tags": [
      "Arcade",
      "Shooter",
      "Reflex"
    ],
    "rating": "",
    "badge": "PLAY NOW",
    "featured": false,
    "cover": "linear-gradient(135deg,#1e6b65,#4fd1a1)",
    "image": "assets/game-banners/spinning-shooter.png",
    "officialUrl": "https://zv1y2i8p.play.gamezop.com/g/B19EafJP9JX",
    "embedUrl": "https://zv1y2i8p.play.gamezop.com/g/B19EafJP9JX"
  },
  {
    "id": "fidgety-frog",
    "title": "Fidgety Frog",
    "gamezopId": "NkxfOJM-qg",
    "category": "Arcade",
    "art": "🐸",
    "description": "Hop and react your way through a lively frog challenge.",
    "tags": [
      "Arcade",
      "Animals",
      "Reflex"
    ],
    "rating": "",
    "badge": "PLAY NOW",
    "featured": false,
    "cover": "linear-gradient(135deg,#1e6b65,#4fd1a1)",
    "image": "assets/game-banners/fidgety-frog.png",
    "officialUrl": "https://zv1y2i8p.play.gamezop.com/g/NkxfOJM-qg",
    "embedUrl": "https://zv1y2i8p.play.gamezop.com/g/NkxfOJM-qg"
  },
  {
    "id": "hop-kangaroo-hop",
    "title": "Hop Kangaroo Hop",
    "gamezopId": "Bkozyhpmc0H",
    "category": "Arcade",
    "art": "🦘",
    "description": "Jump through obstacles and keep your kangaroo moving.",
    "tags": [
      "Arcade",
      "Animals",
      "Jump"
    ],
    "rating": "",
    "badge": "PLAY NOW",
    "featured": false,
    "cover": "linear-gradient(135deg,#8241ac,#f2a55b)",
    "image": "assets/game-banners/hop-kangaroo-hop.png",
    "officialUrl": "https://zv1y2i8p.play.gamezop.com/g/Bkozyhpmc0H",
    "embedUrl": "https://zv1y2i8p.play.gamezop.com/g/Bkozyhpmc0H"
  },
  {
    "id": "watch-the-walls",
    "title": "Watch The Walls",
    "gamezopId": "BJm9VfCmp",
    "category": "Arcade",
    "art": "🧱",
    "description": "Watch the edges, react quickly and avoid the walls.",
    "tags": [
      "Arcade",
      "Reflex",
      "Skill"
    ],
    "rating": "",
    "badge": "PLAY NOW",
    "featured": false,
    "cover": "linear-gradient(135deg,#8241ac,#f2a55b)",
    "image": "assets/game-banners/watch-the-walls.png",
    "officialUrl": "https://zv1y2i8p.play.gamezop.com/g/BJm9VfCmp",
    "embedUrl": "https://zv1y2i8p.play.gamezop.com/g/BJm9VfCmp"
  },
  {
    "id": "flexi-snake",
    "title": "Flexi Snake",
    "gamezopId": "SkQwnwnbK",
    "category": "Arcade",
    "art": "🐍",
    "description": "Guide the flexible snake through a classic arcade challenge.",
    "tags": [
      "Arcade",
      "Snake",
      "Skill"
    ],
    "rating": "",
    "badge": "PLAY NOW",
    "featured": false,
    "cover": "linear-gradient(135deg,#3c65bb,#e184c7)",
    "image": "assets/game-banners/flexi-snake.png",
    "officialUrl": "https://zv1y2i8p.play.gamezop.com/g/SkQwnwnbK",
    "embedUrl": "https://zv1y2i8p.play.gamezop.com/g/SkQwnwnbK"
  },
  {
    "id": "snake-king",
    "title": "Snake King",
    "gamezopId": "ryTknTX5AS",
    "category": "Arcade",
    "art": "🐍",
    "description": "Collect and grow in this take on the classic snake game.",
    "tags": [
      "Arcade",
      "Snake",
      "Classic"
    ],
    "rating": "",
    "badge": "PLAY NOW",
    "featured": false,
    "cover": "linear-gradient(135deg,#8241ac,#f2a55b)",
    "image": "assets/game-banners/snake-king.png",
    "officialUrl": "https://zv1y2i8p.play.gamezop.com/g/ryTknTX5AS",
    "embedUrl": "https://zv1y2i8p.play.gamezop.com/g/ryTknTX5AS"
  },
  {
    "id": "fizz-fuss",
    "title": "Fizz Fuss",
    "gamezopId": "S1VZ-LjQUUl",
    "category": "Arcade",
    "art": "🫧",
    "description": "Tap at the right moment to keep the action going.",
    "tags": [
      "Arcade",
      "Reflex",
      "Casual"
    ],
    "rating": "",
    "badge": "PLAY NOW",
    "featured": false,
    "cover": "linear-gradient(135deg,#8241ac,#f2a55b)",
    "image": "assets/game-banners/fizz-fuss.png",
    "officialUrl": "https://zv1y2i8p.play.gamezop.com/g/S1VZ-LjQUUl",
    "embedUrl": "https://zv1y2i8p.play.gamezop.com/g/S1VZ-LjQUUl"
  },
  {
    "id": "fly-safe",
    "title": "Fly Safe",
    "gamezopId": "Hkww3v3-F",
    "category": "Arcade",
    "art": "🛩️",
    "description": "Keep your aircraft clear of obstacles and fly as far as possible.",
    "tags": [
      "Arcade",
      "Flying",
      "Reflex"
    ],
    "rating": "",
    "badge": "PLAY NOW",
    "featured": false,
    "cover": "linear-gradient(135deg,#e15c65,#f6b454)",
    "image": "assets/game-banners/fly-safe.png",
    "officialUrl": "https://zv1y2i8p.play.gamezop.com/g/Hkww3v3-F",
    "embedUrl": "https://zv1y2i8p.play.gamezop.com/g/Hkww3v3-F"
  },
  {
    "id": "car-flip",
    "title": "Car Flip",
    "gamezopId": "ByRkh6XcAB",
    "category": "Arcade",
    "art": "🚗",
    "description": "Flip and land your car while aiming for a clean run.",
    "tags": [
      "Arcade",
      "Driving",
      "Physics"
    ],
    "rating": "",
    "badge": "PLAY NOW",
    "featured": false,
    "cover": "linear-gradient(135deg,#3c65bb,#e184c7)",
    "image": "assets/game-banners/car-flip.png",
    "officialUrl": "https://zv1y2i8p.play.gamezop.com/g/ByRkh6XcAB",
    "embedUrl": "https://zv1y2i8p.play.gamezop.com/g/ByRkh6XcAB"
  },
  {
    "id": "jom-jom-jump",
    "title": "Jom Jom Jump",
    "gamezopId": "SyjAFr-dE",
    "category": "Arcade",
    "art": "🦘",
    "description": "Jump across platforms and keep moving forward.",
    "tags": [
      "Arcade",
      "Jump",
      "Casual"
    ],
    "rating": "",
    "badge": "PLAY NOW",
    "featured": false,
    "cover": "linear-gradient(135deg,#8241ac,#f2a55b)",
    "image": "assets/game-banners/jom-jom-jump.png",
    "officialUrl": "https://zv1y2i8p.play.gamezop.com/g/SyjAFr-dE",
    "embedUrl": "https://zv1y2i8p.play.gamezop.com/g/SyjAFr-dE"
  },
  {
    "id": "sheep-stacking",
    "title": "Sheep Stacking",
    "gamezopId": "V1IZG_1f-qg",
    "category": "Arcade",
    "art": "🐑",
    "description": "Stack sheep carefully and try to build the tallest tower.",
    "tags": [
      "Arcade",
      "Physics",
      "Animals"
    ],
    "rating": "",
    "badge": "PLAY NOW",
    "featured": false,
    "cover": "linear-gradient(135deg,#3c65bb,#e184c7)",
    "image": "assets/game-banners/sheep-stacking.png",
    "officialUrl": "https://zv1y2i8p.play.gamezop.com/g/V1IZG_1f-qg",
    "embedUrl": "https://zv1y2i8p.play.gamezop.com/g/V1IZG_1f-qg"
  },
  {
    "id": "zombies-cant-jump-2",
    "title": "Zombies Can't Jump 2",
    "gamezopId": "rkxMV8TI6Wg",
    "category": "Action",
    "art": "🧟",
    "description": "Take on zombie waves and survive the action.",
    "tags": [
      "Action",
      "Zombies",
      "Shooter"
    ],
    "rating": "",
    "badge": "PLAY NOW",
    "featured": false,
    "cover": "linear-gradient(135deg,#2f294e,#b94db6)",
    "image": "assets/game-banners/zombies-cant-jump-2.png",
    "officialUrl": "https://zv1y2i8p.play.gamezop.com/g/rkxMV8TI6Wg",
    "embedUrl": "https://zv1y2i8p.play.gamezop.com/g/rkxMV8TI6Wg"
  },
  {
    "id": "hill-top-tanks",
    "title": "Hill Top Tanks",
    "gamezopId": "Cg8EBuMp7",
    "category": "Action",
    "art": "🛡️",
    "description": "Battle across hilly terrain in a tank-to-tank showdown.",
    "tags": [
      "Action",
      "Tanks",
      "Battle"
    ],
    "rating": "",
    "badge": "PLAY NOW",
    "featured": false,
    "cover": "linear-gradient(135deg,#303846,#d3a45b)",
    "image": "assets/game-banners/hill-top-tanks.png",
    "officialUrl": "https://zv1y2i8p.play.gamezop.com/g/Cg8EBuMp7",
    "embedUrl": "https://zv1y2i8p.play.gamezop.com/g/Cg8EBuMp7"
  },
  {
    "id": "blazing-blades",
    "title": "Blazing Blades",
    "gamezopId": "UYiznUAya",
    "category": "Action",
    "art": "🗡️",
    "description": "Slash through action stages and sharpen your reflexes.",
    "tags": [
      "Action",
      "Combat",
      "Reflex"
    ],
    "rating": "",
    "badge": "PLAY NOW",
    "featured": false,
    "cover": "linear-gradient(135deg,#26384e,#ef8951)",
    "image": "assets/game-banners/blazing-blades.png",
    "officialUrl": "https://zv1y2i8p.play.gamezop.com/g/UYiznUAya",
    "embedUrl": "https://zv1y2i8p.play.gamezop.com/g/UYiznUAya"
  },
  {
    "id": "boulder-blast",
    "title": "Boulder Blast",
    "gamezopId": "HkTQJhTXqRS",
    "category": "Action",
    "art": "🪨",
    "description": "Blast incoming boulders and survive each round.",
    "tags": [
      "Action",
      "Shooter",
      "Arcade"
    ],
    "rating": "",
    "badge": "PLAY NOW",
    "featured": false,
    "cover": "linear-gradient(135deg,#303846,#d3a45b)",
    "image": "assets/game-banners/boulder-blast.png",
    "officialUrl": "https://zv1y2i8p.play.gamezop.com/g/HkTQJhTXqRS",
    "embedUrl": "https://zv1y2i8p.play.gamezop.com/g/HkTQJhTXqRS"
  },
  {
    "id": "bottle-shoot",
    "title": "Bottle Shoot",
    "gamezopId": "B1fSpMkP51m",
    "category": "Action",
    "art": "🍾",
    "description": "Test your aim by hitting targets with precise shots.",
    "tags": [
      "Action",
      "Shooting",
      "Skill"
    ],
    "rating": "",
    "badge": "PLAY NOW",
    "featured": false,
    "cover": "linear-gradient(135deg,#14253e,#d84c4c)",
    "image": "assets/game-banners/bottle-shoot.png",
    "officialUrl": "https://zv1y2i8p.play.gamezop.com/g/B1fSpMkP51m",
    "embedUrl": "https://zv1y2i8p.play.gamezop.com/g/B1fSpMkP51m"
  },
  {
    "id": "pumpkin-smasher",
    "title": "Pumpkin Smasher",
    "gamezopId": "rJXlRtBWd4",
    "category": "Action",
    "art": "🎃",
    "description": "Smash targets in a fast Halloween-themed action game.",
    "tags": [
      "Action",
      "Arcade",
      "Reflex"
    ],
    "rating": "",
    "badge": "PLAY NOW",
    "featured": false,
    "cover": "linear-gradient(135deg,#26384e,#ef8951)",
    "image": "assets/game-banners/pumpkin-smasher.png",
    "officialUrl": "https://zv1y2i8p.play.gamezop.com/g/rJXlRtBWd4",
    "embedUrl": "https://zv1y2i8p.play.gamezop.com/g/rJXlRtBWd4"
  },
  {
    "id": "punch-heroes",
    "title": "Punch Heroes",
    "gamezopId": "Sy64_WbU",
    "category": "Action",
    "art": "🥊",
    "description": "Face action-packed fights and deliver well-timed punches.",
    "tags": [
      "Action",
      "Fighting",
      "Combat"
    ],
    "rating": "",
    "badge": "PLAY NOW",
    "featured": false,
    "cover": "linear-gradient(135deg,#26384e,#ef8951)",
    "image": "assets/game-banners/punch-heroes.png",
    "officialUrl": "https://zv1y2i8p.play.gamezop.com/g/Sy64_WbU",
    "embedUrl": "https://zv1y2i8p.play.gamezop.com/g/Sy64_WbU"
  },
  {
    "id": "gun-master",
    "title": "Gun Master",
    "gamezopId": "REwFeKcoN",
    "category": "Action",
    "art": "🎯",
    "description": "Aim carefully and test your shooting skill in quick stages.",
    "tags": [
      "Action",
      "Shooter",
      "Skill"
    ],
    "rating": "",
    "badge": "PLAY NOW",
    "featured": false,
    "cover": "linear-gradient(135deg,#303846,#d3a45b)",
    "image": "assets/game-banners/gun-master.png",
    "officialUrl": "https://zv1y2i8p.play.gamezop.com/g/REwFeKcoN",
    "embedUrl": "https://zv1y2i8p.play.gamezop.com/g/REwFeKcoN"
  },
  {
    "id": "saloon-robbery",
    "title": "Saloon Robbery",
    "gamezopId": "SJ8X6zyPcyX",
    "category": "Action",
    "art": "🤠",
    "description": "Take on a Wild West action challenge.",
    "tags": [
      "Action",
      "Western",
      "Shooter"
    ],
    "rating": "",
    "badge": "PLAY NOW",
    "featured": false,
    "cover": "linear-gradient(135deg,#14253e,#d84c4c)",
    "image": "assets/game-banners/saloon-robbery.png",
    "officialUrl": "https://zv1y2i8p.play.gamezop.com/g/SJ8X6zyPcyX",
    "embedUrl": "https://zv1y2i8p.play.gamezop.com/g/SJ8X6zyPcyX"
  },
  {
    "id": "slap-fest",
    "title": "Slap Fest",
    "gamezopId": "ryN9EGAQa",
    "category": "Action",
    "art": "🖐️",
    "description": "Time your moves in a fun face-off.",
    "tags": [
      "Action",
      "Casual",
      "Reflex"
    ],
    "rating": "",
    "badge": "PLAY NOW",
    "featured": false,
    "cover": "linear-gradient(135deg,#303846,#d3a45b)",
    "image": "assets/game-banners/slap-fest.png",
    "officialUrl": "https://zv1y2i8p.play.gamezop.com/g/ryN9EGAQa",
    "embedUrl": "https://zv1y2i8p.play.gamezop.com/g/ryN9EGAQa"
  },
  {
    "id": "rocket-man",
    "title": "Rocket Man",
    "gamezopId": "SyXuN7W1F",
    "category": "Action",
    "art": "🚀",
    "description": "Launch and maneuver through a challenging flight.",
    "tags": [
      "Action",
      "Flying",
      "Skill"
    ],
    "rating": "",
    "badge": "PLAY NOW",
    "featured": false,
    "cover": "linear-gradient(135deg,#14253e,#d84c4c)",
    "image": "assets/game-banners/rocket-man.png",
    "officialUrl": "https://zv1y2i8p.play.gamezop.com/g/SyXuN7W1F",
    "embedUrl": "https://zv1y2i8p.play.gamezop.com/g/SyXuN7W1F"
  },
  {
    "id": "tower-buster",
    "title": "Tower Buster",
    "gamezopId": "8WGtd7TLH",
    "category": "Action",
    "art": "🏰",
    "description": "Break down towers using smart shots and timing.",
    "tags": [
      "Action",
      "Physics",
      "Arcade"
    ],
    "rating": "",
    "badge": "PLAY NOW",
    "featured": false,
    "cover": "linear-gradient(135deg,#2f294e,#b94db6)",
    "image": "assets/game-banners/tower-buster.png",
    "officialUrl": "https://zv1y2i8p.play.gamezop.com/g/8WGtd7TLH",
    "embedUrl": "https://zv1y2i8p.play.gamezop.com/g/8WGtd7TLH"
  },
  {
    "id": "aliens-attack",
    "title": "Aliens Attack",
    "gamezopId": "N1tgz_kzW5x",
    "category": "Action",
    "art": "👾",
    "description": "Defend against waves of incoming alien invaders.",
    "tags": [
      "Action",
      "Shooter",
      "Space"
    ],
    "rating": "",
    "badge": "PLAY NOW",
    "featured": false,
    "cover": "linear-gradient(135deg,#303846,#d3a45b)",
    "image": "assets/game-banners/aliens-attack.png",
    "officialUrl": "https://zv1y2i8p.play.gamezop.com/g/N1tgz_kzW5x",
    "embedUrl": "https://zv1y2i8p.play.gamezop.com/g/N1tgz_kzW5x"
  },
  {
    "id": "pool-master",
    "title": "Pool Master",
    "gamezopId": "hgempP8Sc",
    "category": "Sports & Racing",
    "art": "🎱",
    "description": "Line up shots and sink balls with precision.",
    "tags": [
      "Sports",
      "Pool",
      "Skill"
    ],
    "rating": "",
    "badge": "PLAY NOW",
    "featured": false,
    "cover": "linear-gradient(135deg,#a75565,#f6b55d)",
    "image": "assets/game-banners/pool-master.png",
    "officialUrl": "https://zv1y2i8p.play.gamezop.com/g/hgempP8Sc",
    "embedUrl": "https://zv1y2i8p.play.gamezop.com/g/hgempP8Sc"
  },
  {
    "id": "foot-chinko",
    "title": "Foot Chinko",
    "gamezopId": "S1JfKuB9nR",
    "category": "Sports & Racing",
    "art": "⚽",
    "description": "Guide your shots through a fun football pinball-style challenge.",
    "tags": [
      "Sports",
      "Football",
      "Arcade"
    ],
    "rating": "",
    "badge": "PLAY NOW",
    "featured": false,
    "cover": "linear-gradient(135deg,#234c9a,#f18d6a)",
    "image": "assets/game-banners/foot-chinko.png",
    "officialUrl": "https://zv1y2i8p.play.gamezop.com/g/S1JfKuB9nR",
    "embedUrl": "https://zv1y2i8p.play.gamezop.com/g/S1JfKuB9nR"
  },
  {
    "id": "bowling-stars",
    "title": "Bowling Stars",
    "gamezopId": "BkdJhTX50B",
    "category": "Sports & Racing",
    "art": "🎳",
    "description": "Line up your bowling shot and aim for a strike.",
    "tags": [
      "Sports",
      "Bowling",
      "Skill"
    ],
    "rating": "",
    "badge": "PLAY NOW",
    "featured": false,
    "cover": "linear-gradient(135deg,#a75565,#f6b55d)",
    "image": "assets/game-banners/bowling-stars.png",
    "officialUrl": "https://zv1y2i8p.play.gamezop.com/g/BkdJhTX50B",
    "embedUrl": "https://zv1y2i8p.play.gamezop.com/g/BkdJhTX50B"
  },
  {
    "id": "basket-champs",
    "title": "Basket Champs",
    "gamezopId": "S1_V6GyP5ym",
    "category": "Sports & Racing",
    "art": "🏀",
    "description": "Shoot hoops and compete to score the most points.",
    "tags": [
      "Sports",
      "Basketball",
      "Skill"
    ],
    "rating": "",
    "badge": "PLAY NOW",
    "featured": false,
    "cover": "linear-gradient(135deg,#a75565,#f6b55d)",
    "image": "assets/game-banners/basket-champs.png",
    "officialUrl": "https://zv1y2i8p.play.gamezop.com/g/S1_V6GyP5ym",
    "embedUrl": "https://zv1y2i8p.play.gamezop.com/g/S1_V6GyP5ym"
  },
  {
    "id": "city-cricket",
    "title": "City Cricket",
    "gamezopId": "HJP4afkvqJQ",
    "category": "Sports & Racing",
    "art": "🏏",
    "description": "Time your batting and chase a big cricket score.",
    "tags": [
      "Sports",
      "Cricket",
      "Timing"
    ],
    "rating": "",
    "badge": "PLAY NOW",
    "featured": false,
    "cover": "linear-gradient(135deg,#234c9a,#f18d6a)",
    "image": "assets/game-banners/city-cricket.png",
    "officialUrl": "https://zv1y2i8p.play.gamezop.com/g/HJP4afkvqJQ",
    "embedUrl": "https://zv1y2i8p.play.gamezop.com/g/HJP4afkvqJQ"
  },
  {
    "id": "minigolf-kingdom",
    "title": "Minigolf Kingdom",
    "gamezopId": "S1A0FBWuE",
    "category": "Sports & Racing",
    "art": "⛳",
    "description": "Put your aim and power control to the test on mini-golf courses.",
    "tags": [
      "Sports",
      "Golf",
      "Skill"
    ],
    "rating": "",
    "badge": "PLAY NOW",
    "featured": false,
    "cover": "linear-gradient(135deg,#234c9a,#f18d6a)",
    "image": "assets/game-banners/minigolf-kingdom.png",
    "officialUrl": "https://zv1y2i8p.play.gamezop.com/g/S1A0FBWuE",
    "embedUrl": "https://zv1y2i8p.play.gamezop.com/g/S1A0FBWuE"
  },
  {
    "id": "mafia-billiard-tricks",
    "title": "Mafia Billiard Tricks",
    "gamezopId": "SkkV6MJD51Q",
    "category": "Sports & Racing",
    "art": "🎱",
    "description": "Plan trick shots and master the billiards table.",
    "tags": [
      "Sports",
      "Pool",
      "Strategy"
    ],
    "rating": "",
    "badge": "PLAY NOW",
    "featured": false,
    "cover": "linear-gradient(135deg,#a75565,#f6b55d)",
    "image": "assets/game-banners/mafia-billiard-tricks.png",
    "officialUrl": "https://zv1y2i8p.play.gamezop.com/g/SkkV6MJD51Q",
    "embedUrl": "https://zv1y2i8p.play.gamezop.com/g/SkkV6MJD51Q"
  },
  {
    "id": "soccer-jerks",
    "title": "Soccer Jerks",
    "gamezopId": "BJ8Wb8j7ILx",
    "category": "Sports & Racing",
    "art": "⚽",
    "description": "Compete in a fast, light-hearted football match.",
    "tags": [
      "Sports",
      "Soccer",
      "Arcade"
    ],
    "rating": "",
    "badge": "PLAY NOW",
    "featured": false,
    "cover": "linear-gradient(135deg,#234c9a,#f18d6a)",
    "image": "assets/game-banners/soccer-jerks.png",
    "officialUrl": "https://zv1y2i8p.play.gamezop.com/g/BJ8Wb8j7ILx",
    "embedUrl": "https://zv1y2i8p.play.gamezop.com/g/BJ8Wb8j7ILx"
  },
  {
    "id": "football-mania",
    "title": "Football Mania",
    "gamezopId": "hazlxvfac",
    "category": "Sports & Racing",
    "art": "⚽",
    "description": "Shoot, score and chase victory in a quick football challenge.",
    "tags": [
      "Sports",
      "Football",
      "Skill"
    ],
    "rating": "",
    "badge": "PLAY NOW",
    "featured": false,
    "cover": "linear-gradient(135deg,#a75565,#f6b55d)",
    "image": "assets/game-banners/football-mania.png",
    "officialUrl": "https://zv1y2i8p.play.gamezop.com/g/hazlxvfac",
    "embedUrl": "https://zv1y2i8p.play.gamezop.com/g/hazlxvfac"
  },
  {
    "id": "street-dunkies",
    "title": "Street Dunkies",
    "gamezopId": "rk7G6Mkvcym",
    "category": "Sports & Racing",
    "art": "🏀",
    "description": "Show your timing with street basketball dunks.",
    "tags": [
      "Sports",
      "Basketball",
      "Arcade"
    ],
    "rating": "",
    "badge": "PLAY NOW",
    "featured": false,
    "cover": "linear-gradient(135deg,#215d80,#52c2d8)",
    "image": "assets/game-banners/street-dunkies.png",
    "officialUrl": "https://zv1y2i8p.play.gamezop.com/g/rk7G6Mkvcym",
    "embedUrl": "https://zv1y2i8p.play.gamezop.com/g/rk7G6Mkvcym"
  },
  {
    "id": "dribble-kings",
    "title": "Dribble Kings",
    "gamezopId": "SkJf58Ouf0",
    "category": "Sports & Racing",
    "art": "🏀",
    "description": "Dribble past rivals and make your way to the hoop.",
    "tags": [
      "Sports",
      "Basketball",
      "Skill"
    ],
    "rating": "",
    "badge": "PLAY NOW",
    "featured": false,
    "cover": "linear-gradient(135deg,#234c9a,#f18d6a)",
    "image": "assets/game-banners/dribble-kings.png",
    "officialUrl": "https://zv1y2i8p.play.gamezop.com/g/SkJf58Ouf0",
    "embedUrl": "https://zv1y2i8p.play.gamezop.com/g/SkJf58Ouf0"
  },
  {
    "id": "archery-champs",
    "title": "Archery Champs",
    "gamezopId": "Bk9ynTQqCB",
    "category": "Sports & Racing",
    "art": "🏹",
    "description": "Aim at the target and compensate for every shot.",
    "tags": [
      "Sports",
      "Archery",
      "Precision"
    ],
    "rating": "",
    "badge": "PLAY NOW",
    "featured": false,
    "cover": "linear-gradient(135deg,#215d80,#52c2d8)",
    "image": "assets/game-banners/archery-champs.png",
    "officialUrl": "https://zv1y2i8p.play.gamezop.com/g/Bk9ynTQqCB",
    "embedUrl": "https://zv1y2i8p.play.gamezop.com/g/Bk9ynTQqCB"
  },
  {
    "id": "super-goalie-auditions",
    "title": "Super Goalie Auditions",
    "gamezopId": "SyO94GA7p",
    "category": "Sports & Racing",
    "art": "🧤",
    "description": "Save the shots and prove your reflexes as a goalkeeper.",
    "tags": [
      "Sports",
      "Football",
      "Reflex"
    ],
    "rating": "",
    "badge": "PLAY NOW",
    "featured": false,
    "cover": "linear-gradient(135deg,#277d73,#e0c957)",
    "image": "assets/game-banners/super-goalie-auditions.png",
    "officialUrl": "https://zv1y2i8p.play.gamezop.com/g/SyO94GA7p",
    "embedUrl": "https://zv1y2i8p.play.gamezop.com/g/SyO94GA7p"
  },
  {
    "id": "hero-archer",
    "title": "Hero Archer",
    "gamezopId": "r1u7J3TmqCS",
    "category": "Sports & Racing",
    "art": "🏹",
    "description": "Line up your arrows and hit your targets.",
    "tags": [
      "Sports",
      "Archery",
      "Skill"
    ],
    "rating": "",
    "badge": "PLAY NOW",
    "featured": false,
    "cover": "linear-gradient(135deg,#a75565,#f6b55d)",
    "image": "assets/game-banners/hero-archer.png",
    "officialUrl": "https://zv1y2i8p.play.gamezop.com/g/r1u7J3TmqCS",
    "embedUrl": "https://zv1y2i8p.play.gamezop.com/g/r1u7J3TmqCS"
  },
  {
    "id": "hipster-tennis",
    "title": "Hipster Tennis",
    "gamezopId": "H1Wzaf1wqyQ",
    "category": "Sports & Racing",
    "art": "🎾",
    "description": "Trade shots in a quick tennis challenge.",
    "tags": [
      "Sports",
      "Tennis",
      "Reflex"
    ],
    "rating": "",
    "badge": "PLAY NOW",
    "featured": false,
    "cover": "linear-gradient(135deg,#a75565,#f6b55d)",
    "image": "assets/game-banners/hipster-tennis.png",
    "officialUrl": "https://zv1y2i8p.play.gamezop.com/g/H1Wzaf1wqyQ",
    "embedUrl": "https://zv1y2i8p.play.gamezop.com/g/H1Wzaf1wqyQ"
  },
  {
    "id": "cricket-mania",
    "title": "Cricket Mania",
    "gamezopId": "PRbBrRtjr",
    "category": "Sports & Racing",
    "art": "🏏",
    "description": "Time your shots and build a strong cricket score.",
    "tags": [
      "Sports",
      "Cricket",
      "Timing"
    ],
    "rating": "",
    "badge": "PLAY NOW",
    "featured": false,
    "cover": "linear-gradient(135deg,#a75565,#f6b55d)",
    "image": "assets/game-banners/cricket-mania.png",
    "officialUrl": "https://zv1y2i8p.play.gamezop.com/g/PRbBrRtjr",
    "embedUrl": "https://zv1y2i8p.play.gamezop.com/g/PRbBrRtjr"
  },
  {
    "id": "dunk-shot",
    "title": "Dunk Shot",
    "gamezopId": "S1Ne12TQqCH",
    "category": "Sports & Racing",
    "art": "🏀",
    "description": "Launch the ball through the hoop and keep your streak alive.",
    "tags": [
      "Sports",
      "Basketball",
      "Arcade"
    ],
    "rating": "",
    "badge": "PLAY NOW",
    "featured": false,
    "cover": "linear-gradient(135deg,#a75565,#f6b55d)",
    "image": "assets/game-banners/dunk-shot.png",
    "officialUrl": "https://zv1y2i8p.play.gamezop.com/g/S1Ne12TQqCH",
    "embedUrl": "https://zv1y2i8p.play.gamezop.com/g/S1Ne12TQqCH"
  },
  {
    "id": "football-kickoff",
    "title": "Football Kickoff",
    "gamezopId": "WaQryduJa",
    "category": "Sports & Racing",
    "art": "⚽",
    "description": "Aim your kick and find the back of the net.",
    "tags": [
      "Sports",
      "Football",
      "Precision"
    ],
    "rating": "",
    "badge": "PLAY NOW",
    "featured": false,
    "cover": "linear-gradient(135deg,#215d80,#52c2d8)",
    "image": "assets/game-banners/football-kickoff.png",
    "officialUrl": "https://zv1y2i8p.play.gamezop.com/g/WaQryduJa",
    "embedUrl": "https://zv1y2i8p.play.gamezop.com/g/WaQryduJa"
  },
  {
    "id": "flappy-foot-chinko",
    "title": "Flappy Foot Chinko",
    "gamezopId": "r1z13aXqAB",
    "category": "Sports & Racing",
    "art": "⚽",
    "description": "Navigate a football-themed arcade challenge.",
    "tags": [
      "Sports",
      "Football",
      "Arcade"
    ],
    "rating": "",
    "badge": "PLAY NOW",
    "featured": false,
    "cover": "linear-gradient(135deg,#234c9a,#f18d6a)",
    "image": "assets/game-banners/flappy-foot-chinko.png",
    "officialUrl": "https://zv1y2i8p.play.gamezop.com/g/r1z13aXqAB",
    "embedUrl": "https://zv1y2i8p.play.gamezop.com/g/r1z13aXqAB"
  },
  {
    "id": "cricket-gunda",
    "title": "Cricket Gunda",
    "gamezopId": "BkzmafyPqJm",
    "category": "Sports & Racing",
    "art": "🏏",
    "description": "Face deliveries and swing for the boundary.",
    "tags": [
      "Sports",
      "Cricket",
      "Timing"
    ],
    "rating": "",
    "badge": "PLAY NOW",
    "featured": false,
    "cover": "linear-gradient(135deg,#234c9a,#f18d6a)",
    "image": "assets/game-banners/cricket-gunda.png",
    "officialUrl": "https://zv1y2i8p.play.gamezop.com/g/BkzmafyPqJm",
    "embedUrl": "https://zv1y2i8p.play.gamezop.com/g/BkzmafyPqJm"
  },
  {
    "id": "chef-tycoon",
    "title": "Chef Tycoon",
    "gamezopId": "xqO4nZ6Kt",
    "category": "Casual",
    "art": "👨‍🍳",
    "description": "Build your food business and manage a busy kitchen.",
    "tags": [
      "Casual",
      "Cooking",
      "Management"
    ],
    "rating": "",
    "badge": "PLAY NOW",
    "featured": false,
    "cover": "linear-gradient(135deg,#d5684f,#ffc568)",
    "image": "assets/game-banners/chef-tycoon.png",
    "officialUrl": "https://zv1y2i8p.play.gamezop.com/g/xqO4nZ6Kt",
    "embedUrl": "https://zv1y2i8p.play.gamezop.com/g/xqO4nZ6Kt"
  },
  {
    "id": "merge-the-gems",
    "title": "Merge The Gems",
    "gamezopId": "XxembtJs1",
    "category": "Puzzle & Logic",
    "art": "💎",
    "description": "Merge matching gems and build your way to bigger values.",
    "tags": [
      "Puzzle",
      "Numbers",
      "Merge"
    ],
    "rating": "",
    "badge": "PLAY NOW",
    "featured": false,
    "cover": "linear-gradient(135deg,#326b68,#80cfb8)",
    "image": "assets/game-banners/merge-the-gems.png",
    "officialUrl": "https://zv1y2i8p.play.gamezop.com/g/XxembtJs1",
    "embedUrl": "https://zv1y2i8p.play.gamezop.com/g/XxembtJs1"
  },
  {
    "id": "battleships-armada",
    "title": "Battleships Armada",
    "gamezopId": "rkt7TzJv9k7",
    "category": "Strategy",
    "art": "🚢",
    "description": "Plan your attacks and outsmart your opponent in naval combat.",
    "tags": [
      "Strategy",
      "Battle",
      "Board"
    ],
    "rating": "",
    "badge": "PLAY NOW",
    "featured": false,
    "cover": "linear-gradient(135deg,#385b92,#8db8e6)",
    "image": "assets/game-banners/battleships-armada.png",
    "officialUrl": "https://zv1y2i8p.play.gamezop.com/g/rkt7TzJv9k7",
    "embedUrl": "https://zv1y2i8p.play.gamezop.com/g/rkt7TzJv9k7"
  }
];

const CATEGORIES = [
  {
    "name": "All",
    "icon": "✦"
  },
  {
    "name": "Action",
    "icon": "⚔️"
  },
  {
    "name": "Arcade",
    "icon": "🕹️"
  },
  {
    "name": "Puzzle & Logic",
    "icon": "🧩"
  },
  {
    "name": "Sports & Racing",
    "icon": "🏎️"
  },
  {
    "name": "Strategy",
    "icon": "♟️"
  },
  {
    "name": "Casual",
    "icon": "🌈"
  }
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
        alt="${escapeHTML(game.title)} cover art"
        loading="lazy"
        onerror="this.remove();this.parentElement.classList.remove('has-banner')"
      >`
    : "";
  const rating = game.rating
    ? `<span class="rating">★ ${escapeHTML(game.rating)}</span>`
    : `<span class="quick-play-label">Instant play</span>`;

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
          ${rating}
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
            ${escapeHTML(game.category)}${game.rating ? ` · ★ ${escapeHTML(game.rating)}` : " · Instant play"}
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
          ${escapeHTML(game.category)}${game.rating ? ` · ★ ${escapeHTML(game.rating)}` : " · Instant play"}
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
