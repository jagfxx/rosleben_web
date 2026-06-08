# rosleben_web

Landing page premium del **Dúo ROSLEBEN** — Shampoo y Acondicionador Fusión Natural de Guanábana.

## Desarrollo local

```bash
npm install
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000).

## Producción local

```bash
npm run build
npm run start
```

## Deploy (VPS — misma infra que TSM / THEPIOLO)

| PM2 | Puerto | Dominio |
|-----|--------|---------|
| `rosleben-web` | 3002 | rosleben.com |

Push a `main` despliega automáticamente vía GitHub Actions.

Guía completa: [.github/DEPLOY_SETUP.md](.github/DEPLOY_SETUP.md)

### Secrets requeridos en GitHub

- `VPS_HOST`
- `VPS_USER`
- `VPS_KEY`

### Scripts útiles

```bash
npm run images:split   # Regenerar shampoo.png y conditioner.png desde duo.png
npm run prod           # build + start
```
