# Lanzar servidor de desarrollo manualmente
# Uso: .\scripts\start-dev.ps1

Set-Location $PSScriptRoot\..

Write-Host "ROSLEBEN — Servidor de desarrollo" -ForegroundColor Magenta
Write-Host "Directorio: $(Get-Location)" -ForegroundColor Gray

$port = 3000
$connections = Get-NetTCPConnection -LocalPort $port -ErrorAction SilentlyContinue

if ($connections) {
    $pids = $connections.OwningProcess | Sort-Object -Unique
    Write-Host "Puerto $port ocupado. Deteniendo procesos: $($pids -join ', ')" -ForegroundColor Yellow
    foreach ($pid in $pids) {
        Stop-Process -Id $pid -Force -ErrorAction SilentlyContinue
    }
    Start-Sleep -Seconds 2
}

Write-Host "Iniciando en http://localhost:$port" -ForegroundColor Green
Write-Host "Detener: Ctrl + C" -ForegroundColor Gray
npm run dev
