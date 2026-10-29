# Arcade Pop / PlayPeak — download official Gamezop game covers locally
# Run this from the website root folder (the folder containing script.js).
# It creates assets/game-banners and updates each game's image: property in script.js.

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

$assetDir = Join-Path (Get-Location) 'assets\game-banners'
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
$tempPath = Join-Path $assetDir '_download.tmp'

foreach ($game in $games) {
  $coverUrl = "https://business.gamezop.com/img/gamezop/$($game.Id)/cover.jpg?q=50&w=600"
  $fallbackUrl = "https://static.gamezop.com/$($game.Id)/wall.png"
  $savedPath = $null

  foreach ($url in @($coverUrl, $fallbackUrl)) {
    try {
      if (Test-Path $tempPath) { Remove-Item $tempPath -Force }
      Write-Host "Downloading $($game.Slug)..." -ForegroundColor Cyan
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
    }
    catch {
      # Try the fallback URL next.
    }
    if (Test-Path $tempPath) { Remove-Item $tempPath -Force }
  }

  if ($savedPath) {
    $downloaded[$game.Id] = $savedPath
  } else {
    Write-Warning "Could not download image for $($game.Slug). Its existing image setting will be unchanged."
  }
}

if (Test-Path $tempPath) { Remove-Item $tempPath -Force }

$scriptPath = Join-Path (Get-Location) 'script.js'
if (!(Test-Path $scriptPath)) {
  Write-Warning "Images downloaded where possible, but script.js was not found in this folder. Run the script from your website root to update image paths."
  exit 0
}

$content = [System.IO.File]::ReadAllText($scriptPath)
foreach ($game in $games) {
  if (!$downloaded.ContainsKey($game.Id)) { continue }
  $imagePath = $downloaded[$game.Id]
  $escapedId = [regex]::Escape($game.Id)
  $pattern = '(?s)(id\s*:\s*"' + $escapedId + '".*?image\s*:\s*)"[^"]*"'
  $replacement = [System.Text.RegularExpressions.MatchEvaluator]{ param($match) $match.Groups[1].Value + '"' + $imagePath + '"' }
  $regex = [System.Text.RegularExpressions.Regex]::new($pattern)
  $content = $regex.Replace($content, $replacement, 1)
}
[System.IO.File]::WriteAllText($scriptPath, $content, (New-Object System.Text.UTF8Encoding($false)))

Write-Host ''
Write-Host "Finished. Downloaded $($downloaded.Count) of $($games.Count) banners." -ForegroundColor Green
Write-Host 'Updated script.js to use local assets for successfully downloaded images.' -ForegroundColor Green
Write-Host 'Please check the assets/game-banners folder, then test the site before committing.' -ForegroundColor Yellow
Write-Host 'Only use Gamezop artwork in line with the provider terms and any required publisher permissions.' -ForegroundColor Yellow
