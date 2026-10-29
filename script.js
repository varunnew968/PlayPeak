/* Arcade Pop — game catalog and player behavior.
   Replace empty embedUrl values only with official URLs you are allowed to embed.
   Paste your Adsterra code into the matching ad slot below after the ad unit is active. */
const GAMES = [
  {id:"neon-dash",title:"Neon Dash",category:"Arcade",description:"Dodge obstacles, collect sparks, and see how far you can go.",art:"⚡",cover:"linear-gradient(135deg,#6858ef,#a9a0ff)",rating:"4.8",badge:"TRENDING",tags:["Endless","Reflex","Quick play"],officialUrl:"",embedUrl:"",featured:true},
  {id:"drift-club",title:"Drift Club",category:"Racing",description:"Take tight corners and chase your best lap in this racing pick.",art:"🏎️",cover:"linear-gradient(135deg,#ff8b75,#ffc56e)",rating:"4.7",badge:"RACING",tags:["Cars","Driving","Speed"],officialUrl:"",embedUrl:"",featured:true},
  {id:"bubble-burst",title:"Bubble Burst",category:"Puzzle",description:"Match colours, plan your shots, and clear the board.",art:"🫧",cover:"linear-gradient(135deg,#4dcfc3,#a3f2d9)",rating:"4.9",badge:"PUZZLE",tags:["Casual","Logic","Colour"],officialUrl:"",embedUrl:"",featured:true},
  {id:"tiny-tower",title:"Tiny Tower Hop",category:"Platformer",description:"Jump from platform to platform and avoid the tricky gaps.",art:"🧗",cover:"linear-gradient(135deg,#f3a1d0,#ffdaeb)",rating:"4.6",badge:"NEW",tags:["Platformer","Jump","Skill"],officialUrl:"",embedUrl:"",featured:false},
  {id:"fruit-frenzy",title:"Fruit Frenzy",category:"Arcade",description:"Slice through a colourful fruit storm and keep your combo going.",art:"🍉",cover:"linear-gradient(135deg,#ff727f,#ffb5a1)",rating:"4.8",badge:"POPULAR",tags:["Arcade","Combo","Casual"],officialUrl:"",embedUrl:"",featured:false},
  {id:"brainy-box",title:"Brainy Box",category:"Puzzle",description:"Solve bite-sized brain teasers one level at a time.",art:"🧠",cover:"linear-gradient(135deg,#8ca7ff,#c5d6ff)",rating:"4.7",badge:"BRAIN POWER",tags:["Logic","Brain","Relax"],officialUrl:"",embedUrl:"",featured:false},
  {id:"goal-rush",title:"Goal Rush",category:"Sports",description:"Aim, time your shot, and find the back of the net.",art:"⚽",cover:"linear-gradient(135deg,#64d99c,#c4f4a2)",rating:"4.5",badge:"SPORTS",tags:["Football","Timing","Skill"],officialUrl:"",embedUrl:"",featured:false},
  {id:"cosmic-pop",title:"Cosmic Pop",category:"Casual",description:"A relaxing little space-themed matching challenge.",art:"🪐",cover:"linear-gradient(135deg,#393c85,#8e83e8)",rating:"4.9",badge:"CHILL",tags:["Space","Match","Relax"],officialUrl:"",embedUrl:"",featured:false},
  {id:"panda-panic",title:"Panda Panic",category:"Adventure",description:"Help a curious panda explore a world full of surprises.",art:"🐼",cover:"linear-gradient(135deg,#86d9cf,#d5f3bc)",rating:"4.6",badge:"ADVENTURE",tags:["Adventure","Cute","Explore"],officialUrl:"",embedUrl:"",featured:false},
  {id:"pixel-battle",title:"Pixel Battle",category:"Action",description:"A fast-paced pixel arena concept for quick action sessions.",art:"👾",cover:"linear-gradient(135deg,#f3a24d,#ffd37b)",rating:"4.5",badge:"ACTION",tags:["Pixel","Arcade","Action"],officialUrl:"",embedUrl:"",featured:false},
  {id:"zen-garden",title:"Zen Garden",category:"Casual",description:"Take a breather with a gentle, low-pressure casual game.",art:"🌱",cover:"linear-gradient(135deg,#69c7a1,#c4efb0)",rating:"4.7",badge:"RELAX",tags:["Relax","Casual","Chill"],officialUrl:"",embedUrl:"",featured:false},
  {id:"sky-surf",title:"Sky Surf",category:"Racing",description:"Race through the clouds and aim for a clean finish.",art:"🛹",cover:"linear-gradient(135deg,#55b6e8,#a4e5f7)",rating:"4.6",badge:"SPEED",tags:["Racing","Speed","Skill"],officialUrl:"",embedUrl:"",featured:false}
];

const CATEGORIES = [
  {name:"All",icon:"✦"},{name:"Arcade",icon:"🕹️"},{name:"Racing",icon:"🏎️"},
  {name:"Puzzle",icon:"🧩"},{name:"Action",icon:"💥"},{name:"Adventure",icon:"🗺️"},
  {name:"Platformer",icon:"👟"},{name:"Sports",icon:"⚽"},{name:"Casual",icon:"🌈"}
];

const state = {category:"All",query:"",favoritesOnly:false,currentGame:null,favorites:new Set()};
const $ = id => document.getElementById(id);
const homeView = $("homeView"), playerView = $("playerView");

function showToast(message){
  const toast=$("toast"); toast.textContent=message; toast.classList.add("show");
  clearTimeout(showToast.timer); showToast.timer=setTimeout(()=>toast.classList.remove("show"),2400);
}
function escapeHTML(value){return String(value).replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));}
function cardMarkup(game){
  return `<article class="game-card" data-game="${escapeHTML(game.id)}" tabindex="0" role="button" aria-label="Play ${escapeHTML(game.title)}">
    <div class="game-cover" style="--cover:${game.cover}"><span class="game-art" aria-hidden="true">${game.art}</span><button class="game-play" tabindex="-1" aria-hidden="true">▶</button></div>
    <div class="game-meta"><h3>${escapeHTML(game.title)}</h3><p><span>${escapeHTML(game.category)}</span><span class="rating">★ ${escapeHTML(game.rating)}</span></p></div>
  </article>`;
}
function renderCategories(){
  $("categoryStrip").innerHTML=CATEGORIES.map(c=>`<button class="category-chip ${state.category===c.name?"active":""}" data-category="${c.name}"><span>${c.icon}</span>${c.name==="All"?"All games":c.name}</button>`).join("");
}
function matches(game){
  const query=state.query.toLowerCase().trim();
  const text=[game.title,game.category,game.description,...game.tags].join(" ").toLowerCase();
  return (state.category==="All"||game.category===state.category) &&
    (!query||text.includes(query)) && (!state.favoritesOnly||state.favorites.has(game.id));
}
function renderGames(){
  const list=GAMES.filter(matches);
  $("gameGrid").innerHTML=list.map(cardMarkup).join("");
  $("resultCount").textContent=`${list.length} game${list.length===1?"":"s"}`;
  $("emptyState").classList.toggle("hidden",list.length!==0);
  $("gameGrid").classList.toggle("hidden",list.length===0);
  $("catalogTitle").textContent=state.favoritesOnly?"Your favourites":state.query?`Search results`:(state.category==="All"?"Explore games":state.category+" games");
  $("catalogSubtitle").textContent=state.favoritesOnly?"Your saved picks, all in one place":"Find your next favourite";
  renderCategories();
}
function renderFeatured(){
  $("featuredGrid").innerHTML=GAMES.filter(g=>g.featured).map(g=>`<button class="feature-card" data-game="${g.id}" data-art="${g.art}" style="--card-bg:${g.cover}">
    <div class="feature-top"><span class="feature-badge">${g.badge}</span><span class="play-circle">▶</span></div>
    <div class="feature-info"><h3>${g.title}</h3><p>${g.category} · ★ ${g.rating}</p></div></button>`).join("");
}
function renderRelated(current){
  $("relatedGames").innerHTML=GAMES.filter(g=>g.id!==current.id).slice(0,5).map(g=>`<button class="related-item" data-game="${g.id}"><span class="related-art" style="--cover:${g.cover}">${g.art}</span><span><strong>${g.title}</strong><small>${g.category} · ★ ${g.rating}</small></span></button>`).join("");
}
function openGame(id){
  const game=GAMES.find(g=>g.id===id); if(!game)return;
  state.currentGame=game; state.favoritesOnly=false;
  homeView.classList.add("hidden"); playerView.classList.remove("hidden");
  $("playerTitle").textContent=game.title;
  $("playerCategory").textContent=game.category.toUpperCase();
  $("playerDescription").textContent=game.description;
  $("aboutDescription").textContent=game.description+" This listing is a catalog demo. Before publishing, connect an official game page or a permitted embed URL.";
  $("gameTags").innerHTML=game.tags.map(t=>`<span class="tag">${escapeHTML(t)}</span>`).join("");
  $("favoriteToggle").classList.toggle("active",state.favorites.has(game.id));
  $("favoriteToggle").textContent=state.favorites.has(game.id)?"♥":"♡";
  const wrap=$("gameFrameWrap");
  wrap.querySelector("iframe")?.remove();
  const placeholder=$("gameFramePlaceholder");
  if(game.embedUrl && safeHttps(game.embedUrl)){
    placeholder.classList.add("hidden");
    const iframe=document.createElement("iframe");
    iframe.src=game.embedUrl; iframe.title=game.title; iframe.loading="lazy";
    iframe.allow="fullscreen; gamepad; autoplay"; iframe.allowFullscreen=true;
    iframe.referrerPolicy="strict-origin-when-cross-origin";
    wrap.appendChild(iframe);
  } else {
    placeholder.classList.remove("hidden");
  }
  const official=$("openOfficialLink");
  if(game.officialUrl && safeHttps(game.officialUrl)){official.href=game.officialUrl;official.classList.remove("hidden");}
  else {official.href="#";official.classList.add("hidden");}
  renderRelated(game);
  window.scrollTo({top:0,behavior:"smooth"});
}
function safeHttps(url){try{return new URL(url).protocol==="https:";}catch{return false;}}
function goHome(){
  playerView.classList.add("hidden");homeView.classList.remove("hidden");
  state.currentGame=null;window.scrollTo({top:0,behavior:"smooth"});
}
function toggleFavorite(){
  if(!state.currentGame)return;
  const id=state.currentGame.id;
  if(state.favorites.has(id))state.favorites.delete(id);else state.favorites.add(id);
  $("favoriteToggle").classList.toggle("active",state.favorites.has(id));
  $("favoriteToggle").textContent=state.favorites.has(id)?"♥":"♡";
  showToast(state.favorites.has(id)?"Added to favourites":"Removed from favourites");
}
function resetFilters(){state.category="All";state.query="";state.favoritesOnly=false;$("searchInput").value="";renderGames();}
document.addEventListener("click",e=>{
  const gameTarget=e.target.closest("[data-game]");
  if(gameTarget){openGame(gameTarget.dataset.game);return;}
  const cat=e.target.closest("[data-category]");
  if(cat){state.category=cat.dataset.category;state.favoritesOnly=false;renderGames();$("gamesSection").scrollIntoView({behavior:"smooth",block:"start"});}
});
document.addEventListener("keydown",e=>{
  if((e.key==="Enter"||e.key===" ")&&e.target.matches(".game-card")){e.preventDefault();openGame(e.target.dataset.game);}
  if(e.key==="Escape"&&!playerView.classList.contains("hidden"))goHome();
});
$("searchForm").addEventListener("submit",e=>{e.preventDefault();state.query=$("searchInput").value;state.favoritesOnly=false;renderGames();$("gamesSection").scrollIntoView({behavior:"smooth",block:"start"});});
$("searchInput").addEventListener("input",e=>{state.query=e.target.value;state.favoritesOnly=false;renderGames();});
$("homeBtn").addEventListener("click",()=>{goHome();resetFilters();});
$("backBtn").addEventListener("click",goHome);
$("favoriteToggle").addEventListener("click",toggleFavorite);
$("favoritesBtn").addEventListener("click",()=>{
  state.favoritesOnly=!state.favoritesOnly;state.category="All";state.query="";$("searchInput").value="";
  $("favoritesBtn").classList.toggle("active",state.favoritesOnly);renderGames();
  $("gamesSection").scrollIntoView({behavior:"smooth",block:"start"});
  if(state.favoritesOnly&&state.favorites.size===0)showToast("Tap the heart on a game to save it");
});
$("exploreBtn").addEventListener("click",()=>$("gamesSection").scrollIntoView({behavior:"smooth",block:"start"}));
$("resetFilters").addEventListener("click",resetFilters);
document.querySelectorAll(".text-btn").forEach(b=>b.addEventListener("click",()=>{state.category="All";state.query="";state.favoritesOnly=false;$("searchInput").value="";renderGames();$("gamesSection").scrollIntoView({behavior:"smooth"});}));
$("fullscreenBtn").addEventListener("click",async()=>{
  const frame=$("gameFrameWrap");
  try{if(!document.fullscreenElement)await frame.requestFullscreen();else await document.exitFullscreen();}
  catch{showToast("Fullscreen isn't available in this browser");}
});
$("privacyLink").addEventListener("click",e=>{e.preventDefault();showToast("Add your privacy policy URL before publishing.");});
$("contactLink").addEventListener("click",e=>{e.preventDefault();showToast("Add your contact email in index.html before publishing.");});
$("licensingLink").addEventListener("click",e=>{e.preventDefault();showToast("Add game credits and license details for each game.");});
$("year").textContent=new Date().getFullYear();

renderFeatured();renderGames();

/* ADSTERRA SETUP:
   1) Add/approve your site and create a Banner or Native Banner unit in Adsterra.
   2) Paste the exact supplied code into the relevant slot below.
   3) Keep each ad code unchanged; use the placement slot intended by its dimensions.
   Do not add popunder/redirect code to game buttons or controls.
*/
// Example: $("topAdCode").innerHTML = `PASTE YOUR APPROVED ADSTERRA BANNER CODE HERE`;
// When replacing the placeholder, hide it: $("topAdPlaceholder").classList.add("hidden");
