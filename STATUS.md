# Do-chwi — Project Status

_Last updated: 2026-07-22_

Minimal English blog about brewing Korean *sool* (makgeolli, takju, etc.) at home.
Brand: **Do-chwi** · Tagline: *"Brew Korean sool at home."*

**Live at [do-chwi.com](https://do-chwi.com)** — deployed on Cloudflare Pages.

## Stack

- **Astro 5** (static output), content collections (content layer + `glob` loader)
- No CSS framework — hand-written styles in `src/styles/global.css` (CSS variables)
- Node 24 / npm 11
- Local dev: `npm run dev` → http://localhost:4321
- Build: `npm run build` (or `npx astro build`) → `dist/`

## Current state — DONE

### Deploy — LIVE
- Repo on GitHub: `https://github.com/dochwistudio-hub/do-chwi` (Public, account `dochwistudio-hub`).
- Host: **Cloudflare Pages**, connected to the GitHub repo (auto-deploy on push to `main`).
- Custom domain **do-chwi.com** connected and verified — site is live.

### Pages
- **Home** (`/`) — serif hero tagline + friendly one-line greeting from the brewer, intro, latest posts
- **Brewing Notes** (`/learn`) — post list, newest first (nav label is "Brewing Notes", URL stays `/learn`)
- **Post detail** (`/learn/[slug]`) — rendered from markdown, with per-post footer CTA
- **About** (`/about`) — real copy: semi-anonymous brewer intro, brewery production/QC/NPD
  background, free-guide purpose, educational-use disclaimer
- ~~`/subscribe`~~ — removed; signup now lives at the bottom of each post

### Content
- Posts are markdown in `src/content/learn/`. Schema in `src/content.config.ts`
  (`title`, `description`, `pubDate`, optional `updatedDate`, `draft`).
- `draft: true` hides a post from build/listing.
- **First post published:** `why-i-started-this` (2026-07-21, `draft: false`).
- 3 sample posts (`what-is-makgeolli`, `first-batch-checklist`, `nuruk-basics`) set to
  `draft: true` — hidden from the live site, kept for reference.

### Design
- Cream/rice background `#f7f3e9`, warm ink `#2b2620`, terracotta accent `#a8563a`
- Serif headings, sans body, generous whitespace, hairline dividers
- **Warmth pass:** hero greeting line, link hover color transition (0.2s), post-card hover
  lift (translateY -2px + soft shadow), body line-height 1.75, terracotta on blockquote
  border + link underlines
- Favicon: **稻** (rice) glyph, `public/favicon.svg`

### Components
- `Header.astro`, `Footer.astro` — real social URLs (Instagram `do.chwi`, Threads `@do.chwi`,
  X `dochwi`) + "Brewed with patience in Korea 🍶" footer note
- `BaseLayout.astro`, `FormattedDate.astro`
- `PostFooter.astro` — per-post email signup (UI only, no backend yet)
  + Instagram note ("Questions? Weird batch? Send me a photo on Instagram @do.chwi")

### Tooling & docs
- `CLAUDE.md` created — includes **밥알이(Bap-ari) 이모지 작업 규칙** (read the guide first,
  log every new emoji in the catalog, use transparent `_t` versions in posts).
- `bapari/` (mascot/brand working files incl. `BAPARI_EMOJI_GUIDE.md`) is **gitignored** —
  kept locally, not published to the repo.

## Next up (priority order)

1. **[TOP] Wire up the newsletter backend.** Form UI already exists in
   `src/components/PostFooter.astro` — just point `<form action>` at a mail service
   (Buttondown / ConvertKit / Mailchimp) and enable real submission.
2. **Publish more blog posts** — build out the Brewing Notes journal.
3. **Insert 밥알이 emoji into blog posts** — follow `bapari/BAPARI_EMOJI_GUIDE.md`
   (transparent `_t` versions, size via CSS, log each new emoji in the catalog).
4. **Prep for the 8/5–8/10 presentation** — the live site is the presentation evidence.

## Milestones / context
- **2026-07-21** — 오늘전통 공모전 서류 제출 완료 (application documents submitted).
- **2026-08-05 – 08-10** — 발표 (presentation); the do-chwi.com site serves as the evidence/deliverable.

## Nice-to-have (not requested yet)
- [ ] RSS feed, tags/categories, real web fonts, sitemap.
- [ ] `publish.bat` — double-click script to auto `git add` → `commit` → `push` when a new
      post markdown is dropped into `src/content/learn/`.
