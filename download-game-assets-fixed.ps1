# PlayPeak premium Gamezop image downloader
# Run this from the website root, next to index.html and script.js.
$ErrorActionPreference = 'Stop'
$games = @(
  @{ Id = 'gTD1yQp3R'; Slug = 'final-war-dead-zone' },
  @{ Id = '9lpHai56Q'; Slug = 'assassins-hunt-wild-west' },
  @{ Id = 'kWnZGIWIJ'; Slug = 'triple-tile-match-master' },
  @{ Id = 'HJXei0j'; Slug = 'cyberfusion' },
  @{ Id = 'rkAXTzkD5kX'; Slug = 'chess-grandmaster' },
  @{ Id = 'yVywAGBQ6'; Slug = 'bubble-shooter-classic' },
  @{ Id = 'mKZZW9NXW'; Slug = 'fruity-fiesta' },
  @{ Id = 'B1MfIa4QCg'; Slug = 'spider-solitaire' },
  @{ Id = 'SJgx126Qc0H'; Slug = 'sudoku-classic' },
  @{ Id = 'hfPOimYqY'; Slug = 'merge-mania' },
  @{ Id = 'ByQxJnp7qRB'; Slug = 'quad-colors' },
  @{ Id = 'SkhljT2fdgb'; Slug = 'ludo-with-friends' },
  @{ Id = 'UCS62KJ8c'; Slug = 'blocks-adventure-jungle-saga' },
  @{ Id = 'PLQTtp9Ei'; Slug = 'slide-and-divide' },
  @{ Id = 'ByAWPfLYdJx'; Slug = 'trap-the-virus' },
  @{ Id = 'rJWX-kadu'; Slug = 'salazar' },
  @{ Id = 'zMxz8LNrp'; Slug = 'spell-wizard' },
  @{ Id = 'ryJGkhT7qAB'; Slug = 'bubble-smash' },
  @{ Id = 'JVhRZNwly'; Slug = 'mahjong-scandinavian' },
  @{ Id = 'S1-bxXI39'; Slug = 'monsterjong' },
  @{ Id = 'S1Wrpf1v5ym'; Slug = 'box-crush' },
  @{ Id = 'BydCYS-ON'; Slug = 'greedy-gnomes' },
  @{ Id = '4ykgM_yzbcg'; Slug = 'rescue-juliet' },
  @{ Id = 'r1K-J3TQ5Ar'; Slug = 'word-finder' },
  @{ Id = 'pGF1Q7l1s'; Slug = 'mahjong-aloha' },
  @{ Id = 'lxDr07zuL'; Slug = 'greedy-guzzler' },
  @{ Id = 'rJsl0KSbuN'; Slug = 'swipe-art-puzzle' },
  @{ Id = 'SJcRYSbu4'; Slug = 'jelly-bears' },
  @{ Id = 'H1abja2M_eb'; Slug = 'hex-burst' },
  @{ Id = 'SJ3-ELT8p-x'; Slug = 'jelly-slice' },
  @{ Id = 'on1jVCbBn'; Slug = 'animal-connection' },
  @{ Id = 'SkKlAYSbuE'; Slug = 'snack-time' },
  @{ Id = 'rJsWV8aIa-l'; Slug = 'jelly-doods' },
  @{ Id = 'SKLI0L06A'; Slug = 'guess-the-flag' },
  @{ Id = 'Hk2yhp7cCH'; Slug = 'tic-tac-toe-11' },
  @{ Id = 'SkyRBO1b'; Slug = 'oh-yes' },
  @{ Id = 'SJX7TGkDq1X'; Slug = 'pop-soap' },
  @{ Id = 'S1JXaMJDqJX'; Slug = 'cubes-got-moves' },
  @{ Id = 'r1Xm38FQkl'; Slug = 'alien-kindergarten' },
  @{ Id = 'SkRZZUoXI8g'; Slug = 'jello-go-round' },
  @{ Id = 'rk-Rtrb_V'; Slug = 'blackbeards-island' },
  @{ Id = 'ClwHwJKrv'; Slug = 'fruit-merge-reloaded' },
  @{ Id = 'HyV_Nm-kK'; Slug = 'super-sprint' },
  @{ Id = 'HJT46GkPcy7'; Slug = 'tower-twist' },
  @{ Id = 'r1xZyhTQ50r'; Slug = 'dunk-draw' },
  @{ Id = 'H1Tz6z1Dqym'; Slug = 'bouncy' },
  @{ Id = 'rkWfy2pXq0r'; Slug = 'fruit-chop' },
  @{ Id = 'wMm3YDfJC'; Slug = 'pizza-dash' },
  @{ Id = 'H15Qk3pQ5CH'; Slug = 'hoopball-legends' },
  @{ Id = 'NJ3xGOyfb5l'; Slug = 'tricky-trip' },
  @{ Id = 'ryRWrDaNPF'; Slug = 'dodgy' },
  @{ Id = 'Ske-CtBbdV'; Slug = 'zoo-pinball' },
  @{ Id = 'Sy6b98udz0'; Slug = 'cuby-dash' },
  @{ Id = 'HJ-72IFXyg'; Slug = 'stay-on-the-road' },
  @{ Id = 'H1be5Ef0Qp'; Slug = 'vegetables-vs-chef' },
  @{ Id = '4y6efOyf-5g'; Slug = 'bouncing-beasts' },
  @{ Id = 'SyFcNzAX6'; Slug = 'shade-shuffle' },
  @{ Id = 'ByGqEfCXa'; Slug = 'falling-through' },
  @{ Id = 'SyEQTzyw91X'; Slug = 'exoplanet-express' },
  @{ Id = 'ByvOVQZkK'; Slug = 'skill-shot' },
  @{ Id = 'EJoezu1MWqg'; Slug = 'rock-the-dock' },
  @{ Id = 'N1sZfO1fWqg'; Slug = 'grumpy-gorilla' },
  @{ Id = 'B19EafJP9JX'; Slug = 'spinning-shooter' },
  @{ Id = 'NkxfOJM-qg'; Slug = 'fidgety-frog' },
  @{ Id = 'Bkozyhpmc0H'; Slug = 'hop-kangaroo-hop' },
  @{ Id = 'BJm9VfCmp'; Slug = 'watch-the-walls' },
  @{ Id = 'SkQwnwnbK'; Slug = 'flexi-snake' },
  @{ Id = 'ryTknTX5AS'; Slug = 'snake-king' },
  @{ Id = 'S1VZ-LjQUUl'; Slug = 'fizz-fuss' },
  @{ Id = 'Hkww3v3-F'; Slug = 'fly-safe' },
  @{ Id = 'ByRkh6XcAB'; Slug = 'car-flip' },
  @{ Id = 'SyjAFr-dE'; Slug = 'jom-jom-jump' },
  @{ Id = 'V1IZG_1f-qg'; Slug = 'sheep-stacking' },
  @{ Id = 'rkxMV8TI6Wg'; Slug = 'zombies-cant-jump-2' },
  @{ Id = 'Cg8EBuMp7'; Slug = 'hill-top-tanks' },
  @{ Id = 'UYiznUAya'; Slug = 'blazing-blades' },
  @{ Id = 'HkTQJhTXqRS'; Slug = 'boulder-blast' },
  @{ Id = 'B1fSpMkP51m'; Slug = 'bottle-shoot' },
  @{ Id = 'rJXlRtBWd4'; Slug = 'pumpkin-smasher' },
  @{ Id = 'Sy64_WbU'; Slug = 'punch-heroes' },
  @{ Id = 'REwFeKcoN'; Slug = 'gun-master' },
  @{ Id = 'SJ8X6zyPcyX'; Slug = 'saloon-robbery' },
  @{ Id = 'ryN9EGAQa'; Slug = 'slap-fest' },
  @{ Id = 'SyXuN7W1F'; Slug = 'rocket-man' },
  @{ Id = '8WGtd7TLH'; Slug = 'tower-buster' },
  @{ Id = 'N1tgz_kzW5x'; Slug = 'aliens-attack' },
  @{ Id = 'hgempP8Sc'; Slug = 'pool-master' },
  @{ Id = 'S1JfKuB9nR'; Slug = 'foot-chinko' },
  @{ Id = 'BkdJhTX50B'; Slug = 'bowling-stars' },
  @{ Id = 'S1_V6GyP5ym'; Slug = 'basket-champs' },
  @{ Id = 'HJP4afkvqJQ'; Slug = 'city-cricket' },
  @{ Id = 'S1A0FBWuE'; Slug = 'minigolf-kingdom' },
  @{ Id = 'SkkV6MJD51Q'; Slug = 'mafia-billiard-tricks' },
  @{ Id = 'BJ8Wb8j7ILx'; Slug = 'soccer-jerks' },
  @{ Id = 'hazlxvfac'; Slug = 'football-mania' },
  @{ Id = 'rk7G6Mkvcym'; Slug = 'street-dunkies' },
  @{ Id = 'SkJf58Ouf0'; Slug = 'dribble-kings' },
  @{ Id = 'Bk9ynTQqCB'; Slug = 'archery-champs' },
  @{ Id = 'SyO94GA7p'; Slug = 'super-goalie-auditions' },
  @{ Id = 'r1u7J3TmqCS'; Slug = 'hero-archer' },
  @{ Id = 'H1Wzaf1wqyQ'; Slug = 'hipster-tennis' },
  @{ Id = 'PRbBrRtjr'; Slug = 'cricket-mania' },
  @{ Id = 'S1Ne12TQqCH'; Slug = 'dunk-shot' },
  @{ Id = 'WaQryduJa'; Slug = 'football-kickoff' },
  @{ Id = 'r1z13aXqAB'; Slug = 'flappy-foot-chinko' },
  @{ Id = 'BkzmafyPqJm'; Slug = 'cricket-gunda' },
  @{ Id = 'xqO4nZ6Kt'; Slug = 'chef-tycoon' },
  @{ Id = 'XxembtJs1'; Slug = 'merge-the-gems' },
  @{ Id = 'rkt7TzJv9k7'; Slug = 'battleships-armada' }
)
$root = (Get-Location).Path
$scriptPath = Join-Path $root 'script.js'
if (!(Test-Path $scriptPath)) {
  Write-Host "ERROR: script.js not found in $root" -ForegroundColor Red
  Write-Host "Extract this package into the folder containing index.html and script.js, then retry."
  exit 1
}
$assetDir = Join-Path $root 'assets\game-banners'
New-Item -ItemType Directory -Path $assetDir -Force | Out-Null

function Get-ImageExtension([string]$path) {
  if (!(Test-Path $path)) { return $null }
  $bytes = [System.IO.File]::ReadAllBytes($path)
  if ($bytes.Length -ge 3 -and $bytes[0] -eq 0xFF -and $bytes[1] -eq 0xD8 -and $bytes[2] -eq 0xFF) { return '.jpg' }
  if ($bytes.Length -ge 8 -and $bytes[0] -eq 0x89 -and $bytes[1] -eq 0x50 -and $bytes[2] -eq 0x4E -and $bytes[3] -eq 0x47) { return '.png' }
  if ($bytes.Length -ge 12 -and [System.Text.Encoding]::ASCII.GetString($bytes, 0, 4) -eq 'RIFF' -and [System.Text.Encoding]::ASCII.GetString($bytes, 8, 4) -eq 'WEBP') { return '.webp' }
  if ($bytes.Length -ge 12 -and [System.Text.Encoding]::ASCII.GetString($bytes, 4, 4) -eq 'ftyp') { return '.avif' }
  return $null
}

$content = [System.IO.File]::ReadAllText($scriptPath)
$downloaded = 0
$failed = 0
$tempPath = Join-Path $assetDir '_download.tmp'
foreach ($game in $games) {
  $savedPath = $null
  $urls = @(
    "https://static.gamezop.com/$($game.Id)/wall.png",
    "https://business.gamezop.com/img/gamezop/$($game.Id)/cover.jpg?q=80&w=1000"
  )
  foreach ($url in $urls) {
    try {
      if (Test-Path $tempPath) { Remove-Item $tempPath -Force }
      Invoke-WebRequest -Uri $url -OutFile $tempPath -UseBasicParsing -TimeoutSec 12 -Headers @{ 'User-Agent' = 'Mozilla/5.0 PlayPeakGameAssetDownloader/1.0' }
      $ext = Get-ImageExtension $tempPath
      if ($ext) {
        $fileName = "$($game.Slug)$ext"
        $targetPath = Join-Path $assetDir $fileName
        Move-Item -Path $tempPath -Destination $targetPath -Force
        $savedPath = "assets/game-banners/$fileName"
        break
      }
    } catch { }
    if (Test-Path $tempPath) { Remove-Item $tempPath -Force }
  }
  if ($savedPath) {
    $slugPattern = [regex]::Escape($game.Slug)
    $pattern = '(?s)("id"\s*:\s*"' + $slugPattern + '".*?"image"\s*:\s*)"[^"]*"'
    $replacement = [System.Text.RegularExpressions.MatchEvaluator]{ param($m) $m.Groups[1].Value + '"' + $savedPath + '"' }
    $regex = [System.Text.RegularExpressions.Regex]::new($pattern)
    $newContent = $regex.Replace($content, $replacement, 1)
    if ($newContent -ne $content) {
      $content = $newContent
      $downloaded++
      Write-Host "OK   $($game.Slug)" -ForegroundColor Green
    } else {
      Write-Host "WARN downloaded but script entry wasn't matched: $($game.Slug)" -ForegroundColor Yellow
    }
  } else {
    $failed++
    Write-Host "MISS $($game.Slug) — image URL unavailable; emoji/gradient fallback remains." -ForegroundColor DarkYellow
  }
}
if (Test-Path $tempPath) { Remove-Item $tempPath -Force }
[System.IO.File]::WriteAllText($scriptPath, $content, (New-Object System.Text.UTF8Encoding($false)))
Write-Host "`nFinished: linked $downloaded of $($games.Count) possible banners; $failed image(s) were unavailable." -ForegroundColor Cyan
Write-Host "Assets folder: $assetDir"
Write-Host "Refresh the local site with Ctrl+F5. Keep Gamezop artwork subject to its applicable licensing/partner terms." -ForegroundColor Yellow
