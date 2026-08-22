# Davion Software website

Marketing site for [davionsoftware.com](https://davionsoftware.com). Spanish is the primary language. This repository currently ships a static Home page.

## Stack

David decided this stack. Do not introduce Next.js.

- [Astro](https://astro.build/) with TypeScript
- [Tailwind CSS](https://tailwindcss.com/)
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

`test:copy` expects a completed `npm run build`. It asserts Home copy, the four official capabilities, Brand Foundations colors, and the absence of an invented email.

## Preview without production

Production deploy, DNS, and paid hosting are **out of scope** until David gives A3.

If Vercel (or another static host) is not connected to this repo:

1. Keep this branch as a pull request against `main`.
2. For a hosted preview, connect the GitHub repo to Vercel Hobby (or Cloudflare Pages) with **preview deployments only**.
3. Do not attach `davionsoftware.com`, do not change DNS, and do not promote the preview to production.

Local preview is always available with `npm run build && npm run preview`.

## Production

Out of scope. Do not deploy `main` to production from this work.
