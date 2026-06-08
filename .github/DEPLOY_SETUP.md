# Deploy automático ROSLEBEN (misma VPS que TSM-WEB y THEPIOLO)

| App | PM2 | Puerto | Dominio |
|-----|-----|--------|---------|
| TSM-WEB | `tsm-web` | 3000 | transportservicemedellin.com |
| THEPIOLO | `thepiolo-web` | 3001 | thepiolo.icu |
| **ROSLEBEN** | `rosleben-web` | **3002** | **rosleben.com** |

## Lo que ya tienes (de TSM / THEPIOLO)

Si los otros proyectos ya despliegan bien, en la VPS ya están:

- Node.js y npm
- PM2
- Nginx
- Usuario `admin_dany`
- Clave SSH para GitHub Actions

## Lo que debes hacer en la VPS (una sola vez)

### 1. Clonar el repo

```bash
cd ~
git clone https://github.com/jagfxx/rosleben_web.git
cd rosleben_web
mkdir -p logs
npm ci
npm run build
pm2 start ecosystem.config.js
pm2 save
```

Verifica:

```bash
pm2 status
curl http://localhost:3002
```

### 2. Nginx + dominio

```bash
sudo nano /etc/nginx/sites-available/rosleben-web
```

Pega el contenido de `nginx-config-rosleben.txt` (dominio: **rosleben.com**).

```bash
sudo ln -s /etc/nginx/sites-available/rosleben-web /etc/nginx/sites-enabled/
sudo nginx -t
sudo systemctl reload nginx
```

SSL (cuando el DNS apunte a la VPS):

```bash
sudo certbot --nginx -d rosleben.com -d www.rosleben.com
```

## Secrets en GitHub (repo `rosleben_web`)

**Settings → Secrets and variables → Actions → New repository secret**

Copia los mismos valores que en `TSM-WEB` o `thepiolo_web`:

| Secret | Descripción |
|--------|-------------|
| `VPS_HOST` | IP de la VPS |
| `VPS_USER` | `admin_dany` |
| `VPS_KEY` | Clave **privada** SSH (`~/.ssh/deploy_key` en la VPS) |

## Workflow incluido

| Archivo | Qué hace |
|---------|----------|
| `.github/workflows/deploy.yml` | Push a `main` → SSH → pull → build → `pm2 restart rosleben-web` |

## PM2 en la VPS

```bash
pm2 status
# tsm-web       → puerto 3000
# thepiolo-web  → puerto 3001
# rosleben-web  → puerto 3002

pm2 logs rosleben-web
pm2 restart rosleben-web
```

## Checklist rápido

- [ ] Repo clonado en `/home/admin_dany/rosleben_web`
- [ ] `pm2 start` y `rosleben-web` online en puerto 3002
- [ ] Nginx `rosleben-web` con dominio rosleben.com
- [ ] DNS apuntando a la VPS
- [ ] Certbot SSL
- [ ] Secrets `VPS_HOST`, `VPS_USER`, `VPS_KEY` en GitHub
- [ ] Push a `main` y revisar pestaña **Actions**

## Problemas frecuentes

**Puerto en uso:** ROSLEBEN debe usar **3002** (TSM 3000, THEPIOLO 3001).

**Pantalla blanca / assets 400:** Usa `nginx-config-rosleben.txt` (un solo `location /`) y rebuild:

```bash
cd ~/rosleben_web
git pull origin main
rm -rf .next
npm ci
npm run build
pm2 restart rosleben-web
```
