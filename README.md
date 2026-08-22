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
| Davion Charcoal | `#171D26` |
| Davion Steel | `#2F333C` |
| Davion Gray | `#707478` |
| Aged Gold | `#D1A744` |
| Soft White | `#FEFEFE` |

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

## Cloudflare (Workers preview)

Official Astro 2026 support is `@astrojs/cloudflare` on **Cloudflare Workers** (not Pages Functions). This site stays static-friendly: Home is prerendered.

Do **not** attach `davionsoftware.com`, do **not** change DNS, and do **not** deploy this Worker to a production custom domain.

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

Requires a Cloudflare account and Wrangler login. Does not buy a domain and does not change DNS.

```bash
npx wrangler login
npx astro build
npx wrangler deploy
```

Wrangler prints a `https://davion-software-website.<subdomain>.workers.dev` URL. Use that preview only.

Without credentials, agents can use a 60-minute temporary preview (still no custom domain):

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

Do not pass a custom domain. Do not configure `davionsoftware.com`.

## Preview without production

Production deploy, DNS, and paid hosting are **out of scope** until David gives A3.

1. Keep this branch as a pull request against `main`. Do not merge to `main` as production.
2. Hosted preview is Workers `*.workers.dev` or Pages `*.pages.dev` only (commands above).
3. Do not attach `davionsoftware.com`, do not change DNS, and do not promote the preview to production.

Local preview is always available with `npm run build && npm run preview`.

## Production

Out of scope. Do not deploy `main` to production from this work.
