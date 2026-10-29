# PlayPeak / Arcade Pop — download Gamezop banners and link them in script.js
# Run from the website root, next to index.html and script.js.
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
  @{ Id = 'UCS62KJ8c'; Slug = 'blocks-adventure-jungle-saga' }
)

$root = (Get-Location).Path
$scriptPath = Join-Path $root 'script.js'
if (!(Test-Path $scriptPath)) {
  Write-Error "script.js not found in $root. Open PowerShell in your website root folder and run this again."
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
  return $null
}

$downloaded = @{}
$tempPath = Join-Path $assetDir '_game-banner-download.tmp'

foreach ($game in $games) {
  $savedPath = $null
  # The wall.png path is the image used by Gamezop's own game pages.
  $urls = @(
    "https://static.gamezop.com/$($game.Id)/wall.png",
    "https://business.gamezop.com/img/gamezop/$($game.Id)/cover.jpg?q=50&w=600"
  )

  foreach ($url in $urls) {
    try {
      if (Test-Path $tempPath) { Remove-Item $tempPath -Force }
      Write-Host "Downloading $($game.Slug) from $url" -ForegroundColor Cyan
      Invoke-WebRequest -Uri $url -OutFile $tempPath -UseBasicParsing -TimeoutSec 25
      $ext = Get-ImageExtension $tempPath
      if ($ext) {
        $fileName = "$($game.Slug)$ext"
        $targetPath = Join-Path $assetDir $fileName
        Move-Item -Path $tempPath -Destination $targetPath -Force
        $savedPath = "assets/game-banners/$fileName"
        Write-Host "  Saved: $savedPath" -ForegroundColor Green
        break
      }
    } catch {
      # Try the next official image URL.
    }
    if (Test-Path $tempPath) { Remove-Item $tempPath -Force }
  }

  if ($savedPath) {
    # IMPORTANT: match the JavaScript game object's slug ID, not the Gamezop embed ID.
    $downloaded[$game.Slug] = $savedPath
  } else {
    Write-Warning "Could not download a valid image for $($game.Slug)."
  }
}

if (Test-Path $tempPath) { Remove-Item $tempPath -Force }
$content = [System.IO.File]::ReadAllText($scriptPath)

foreach ($slug in $downloaded.Keys) {
  $imagePath = $downloaded[$slug]
  $escapedSlug = [regex]::Escape($slug)
  $pattern = '(?s)(id\s*:\s*"' + $escapedSlug + '".*?image\s*:\s*)"[^"]*"'
  $replacement = [System.Text.RegularExpressions.MatchEvaluator]{ param($match) $match.Groups[1].Value + '"' + $imagePath + '"' }
  $regex = [System.Text.RegularExpressions.Regex]::new($pattern)
  $updated = $regex.Replace($content, $replacement, 1)
  if ($updated -eq $content) {
    Write-Warning "Downloaded $slug, but no matching id was found in script.js. Verify the game's id field."
  }
  $content = $updated
}

[System.IO.File]::WriteAllText($scriptPath, $content, (New-Object System.Text.UTF8Encoding($false)))
Write-Host ''
Write-Host "Finished: downloaded and linked $($downloaded.Count) of $($games.Count) banners." -ForegroundColor Green
Write-Host "Check assets\game-banners, then refresh the website with Ctrl+F5." -ForegroundColor Yellow
Write-Host "Keep Gamezop artwork subject to the provider's applicable terms and permissions." -ForegroundColor Yellow
