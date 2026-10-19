# Davion Software website

Marketing site for [davionsoftware.com](https://davionsoftware.com). Spanish is the primary language. This repository currently ships a static Home page.

## Stack

David decided this stack. Do not introduce Next.js.

- [Astro](https://astro.build/) with TypeScript
- [Tailwind CSS](https://tailwindcss.com/)
- [@astrojs/cloudflare](https://docs.astro.build/en/guides/integrations-guide/cloudflare/) for Workers preview (`*.workers.dev`). Not production DNS.
- Inter for brand and hierarchy
- Geist or Geist Mono only if a technical UI snippet appears (none on Home v0)
- Static output. No auth, no forms that POST real data, no invented contact email

## Color assumption (Brand Foundations)

David has not chosen a production color canon. This site uses **Brand Foundations only**. Do not mix in the Guidelines grid.

| Token | Hex |
| --- | --- |
| Davion Black (canvas) | `#0A0A0A` |
| Davion Charcoal | `#171D26` |
| Davion Steel | `#2F333C` |
| Davion Gray | `#707478` |
| Aged Gold | `#D1A744` |
| Soft White | `#FEFEFE` |

Davion Black is the page canvas: a neutral near-black with zero channel spread, chosen by David so the background leans toward true black while keeping maximum text contrast. Supporting ink is alpha white over it (`68%` secondary, `52%` tertiary, `12%` lines).

Do **not** use Digital Gold `#EAB33E`, Davion Dark `#121921`, Davion Grey `#2D363F`, Davion Silver `#6E7881`, or Davion White `#FFFFFF`.

Lockup: `Davion SOFTWARE` plus the hexagonal isotipo (dark segments, gold center). Do not invent a new logo system.

Copy comes from Brand Voice. Positioning v0 is Draft: do not present it as Active.

## Local run

Requires Node.js 22.12 or newer.

```bash
npm install
npm run dev
```

Open `http://localhost:4321/`.

```bash
npm run build
npm run preview
npm run check
npm run test:copy
```

`test:copy` expects a completed `npm run build`. With the Cloudflare adapter, Home HTML is at `dist/client/index.html`. It asserts Home copy, the four official capabilities, Brand Foundations colors, and the absence of an invented email.

## Social image

`public/og.png` (2400×1260, a 1200×630 layout exported at 2× for sharp previews on high-density screens) is generated from `scripts/og/og.html`, which uses `src/assets/mark.svg` and the bundled Inter file in `scripts/og/fonts`. Regenerate it with Chrome after editing the page:

```bash
npm run og
```

The script uses Google Chrome on macOS by default. Set `CHROME` to another Chrome or Chromium binary if needed.

Keep the file under 150 KB and check that no text is cut off.

## Cloudflare (Workers)

Official Astro 2026 support is `@astrojs/cloudflare` on **Cloudflare Workers** (not Pages Functions). This site stays static-friendly: Home is prerendered.

Production is the Worker `davion-software-website` on `davionsoftware.com` and `www.davionsoftware.com`. Preview remains on `*.workers.dev`.

### Origin is the source of truth

This GitHub repository may be stale. Origin (`davos/website`) is the source of truth. Land the same adapter, `wrangler.jsonc`, `public/.assetsignore`, and these preview commands there. This pull request only updates GitHub.

### Local Cloudflare runtime

```bash
npm install
npx astro build
npx wrangler dev
```

`npm run preview` also runs the built site in Cloudflare's `workerd` runtime after `npm run build`.

### Workers preview (`*.workers.dev`)

Requires a Cloudflare account and Wrangler login. `wrangler deploy` publishes the Worker and attaches the custom domains in `wrangler.jsonc`.

```bash
npx wrangler login
npx astro build
npx wrangler deploy
```

Wrangler prints a `https://davion-software-website.<subdomain>.workers.dev` preview URL, and deploys the custom domains in `wrangler.jsonc`.

Without credentials, agents can use a 60-minute temporary preview (no custom domain):

```bash
npx astro build
npx wrangler deploy --temporary
```

### Pages preview (`*.pages.dev`)

`@astrojs/cloudflare` no longer deploys to Cloudflare Pages. For a **static** `pages.dev` preview of the prerendered client assets only:

```bash
npx wrangler login
npx astro build
npx wrangler pages deploy ./dist/client --project-name davion-software-website
```

Do not pass a custom domain here. Production DNS stays on the Worker routes in `wrangler.jsonc`.

Local preview is always available with `npm run build && npm run preview`.

## Production

The Worker `davion-software-website` serves:

- https://davionsoftware.com
- https://www.davionsoftware.com
- https://davion-software-website.davidvargas-d45.workers.dev

Deploy with `npx astro build && npx wrangler deploy`.
