# Lanzar servidor de producción manualmente
# Uso: .\scripts\start-prod.ps1

Set-Location $PSScriptRoot\..

Write-Host "ROSLEBEN — Build + producción" -ForegroundColor Magenta
Write-Host "Directorio: $(Get-Location)" -ForegroundColor Gray

npm run build
if ($LASTEXITCODE -ne 0) { exit $LASTEXITCODE }

Write-Host "Iniciando en http://localhost:3000" -ForegroundColor Green
Write-Host "Detener: Ctrl + C" -ForegroundColor Gray
npm run start
