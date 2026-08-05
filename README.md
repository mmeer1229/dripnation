# Drip Nation Box

Marketing + storefront site. Vite + React 19 + TypeScript, Tailwind CSS v4,
shadcn/ui. Deploys as an Azure Static Web App: static frontend at the repo
root plus `/api` Azure Functions (Node + TypeScript).

## Project structure

```
/                      Vite React TS frontend
/src/components/ui     shadcn/ui components
/api                   Azure Functions (Node + TS, v4 programming model)
staticwebapp.config.json   Azure SWA routing config
swa-cli.config.json        Azure SWA CLI local dev config
```

No database. Product/content comes from static config. Secrets live in Azure
SWA app settings / environment variables, never committed and never
client-side.

## Local development

### One-time setup

1. `npm install` (root) and `npm install --prefix api`
2. Copy `api/local.settings.json.example` to `api/local.settings.json`
   (already gitignored, holds local-only settings/secrets)
3. Portable Node 22 for the SWA CLI (see below)

### Why a portable Node 22?

The Azure Static Web Apps CLI (`@azure/static-web-apps-cli`) hardcodes a
check that refuses to start the API emulator on Node versions newer than 22,
even though the Azure Functions host itself runs fine on newer Node (verified
directly with `func start` here). Until that check is updated upstream,
`npm run swa` runs the CLI under a portable Node 22 kept in `.tools/`
(gitignored) instead of touching your machine's default Node install. Your
system Node version, and everything else in this repo, is unaffected.

One-time setup, from the repo root:

```bash
mkdir -p .tools
curl -o .tools/node22.zip https://nodejs.org/dist/latest-v22.x/node-v22.23.2-win-x64.zip
# unzip .tools/node22.zip into .tools/ (e.g. via File Explorer or `unzip`)
# then delete .tools/node22.zip
```

`.tools/` should end up containing a folder named `node-v22.x.x-win-x64`.
Check `https://nodejs.org/dist/latest-v22.x/` for the current patch version.

### Running

```bash
npm run swa
```

This builds `/api`, then starts the SWA CLI emulator at
`http://localhost:4280`, which serves the frontend and proxies `/api/*` to
the Functions host. Try `http://localhost:4280/api/payments/health`.

Alternative without the SWA CLI (two terminals, no routing/auth emulation):

```bash
npm run dev             # frontend, http://localhost:5173 (proxies /api to :7071)
npm run build --prefix api && npm start --prefix api   # functions host, :7071
```

## Adding shadcn/ui components

Standard registry:

```bash
npx shadcn@latest add button
```

21st.dev components (configured as a registry namespace in
`components.json`):

```bash
npx shadcn@latest add @21st-dev/<author>/<component>
# or paste a direct URL:
npx shadcn@latest add "https://21st.dev/r/<author>/<component>"
```

## API functions

- `GET /api/payments/health` — health check, returns `200`
- `POST /api/payments/checkout` — stub, returns `501` until the Square
  integration approach (Web Payments SDK vs. hosted checkout) is decided
