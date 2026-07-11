# Do-chwi — Project Status

_Last updated: 2026-07-11_

Minimal English blog about brewing Korean *sool* (makgeolli, takju, etc.) at home.
Brand: **Do-chwi** · Tagline: *"Brew Korean sool at home."*

## Stack

- **Astro 5** (static output), content collections (content layer + `glob` loader)
- No CSS framework — hand-written styles in `src/styles/global.css` (CSS variables)
- Node 24 / npm 11
- Local dev: `npm run dev` → http://localhost:4321
- Build: `npm run build` (or `npx astro build`) → `dist/`

## Current state — DONE

### Pages
- **Home** (`/`) — serif hero tagline, intro line ("I'm a brewer from Korea…"), latest 3 posts
- **Brewing Notes** (`/learn`) — post list, newest first (nav label is "Brewing Notes", URL stays `/learn`)
- **Post detail** (`/learn/[slug]`) — rendered from markdown, with per-post footer CTA
- **About** (`/about`) — semi-anonymous brewer intro + community purpose (placeholder copy), educational-use disclaimer
- ~~`/subscribe`~~ — removed; signup now lives at the bottom of each post

### Content
- Posts are markdown in `src/content/learn/`. Schema in `src/content.config.ts`
  (`title`, `description`, `pubDate`, optional `updatedDate`, `draft`).
- `draft: true` hides a post from build/listing.
- 3 sample posts: `what-is-makgeolli`, `first-batch-checklist`, `nuruk-basics`.

### Design
- Cream/rice background `#f7f3e9`, warm ink `#2b2620`, terracotta accent `#a8563a`
- Serif headings, sans body, generous whitespace, hairline dividers
- Favicon: **稻** (rice) glyph, `public/favicon.svg`

### Components
- `Header.astro`, `Footer.astro` (social links: Instagram / Threads / X — placeholder URLs)
- `BaseLayout.astro`, `FormattedDate.astro`
- `PostFooter.astro` — per-post email signup ("Get notified when I post something new")
  + Instagram note ("Questions? Weird batch? Send me a photo on Instagram @do.chwi")

### Repo
- `git init` done, branch `main`, commits in place.
- Local git identity (repo-scoped only): `Do-chwi <do.chwi@users.noreply.github.com>`.
- **Not pushed anywhere yet.**

## Remaining / TODO

### Content & copy
- [ ] Fill in real **About** copy (currently `[PLACEHOLDER]`): brewer intro, Korean brewery
      production / QC / new-product-development background, community purpose.
- [ ] Write real posts (replace or expand the 3 samples).

### Newsletter
- [ ] Wire up the email signup form. It is **UI-only, no backend** (see TODO in
      `src/components/PostFooter.astro`). Point `<form action>` at a mail service
      (Buttondown / ConvertKit / Mailchimp) and enable real submission.

### Links & assets
- [ ] Confirm/replace social URLs in `Footer.astro` (Instagram, Threads, X) and the
      Instagram handle `@do.chwi` used in `PostFooter.astro` / `about.astro`.
- [ ] Set the real production domain in `astro.config.mjs` (`site:` is a placeholder).

### Deploy (not started)
- [ ] Connect the repo to **GitHub**.
- [ ] Choose a host (Netlify / Vercel / Cloudflare Pages) and deploy.

### Tooling (planned, deferred)
- [ ] **`publish.bat`**: after GitHub is connected, a double-click script that
      auto `git add` → `commit` → `push` when a new post markdown is dropped into
      `src/content/learn/`.
- [ ] (Open) Permission allowlist for this project — deferred; not yet decided
      where to store the rules (project vs. home session settings).

### Nice-to-have (not requested yet)
- [ ] RSS feed, tags/categories, real web fonts, sitemap.
