# oxc7.github.io

Personal website of **Chen Yow Ru (Roy)** — AI Lead at [WAY Equity Partners](https://www.wayequity.co/), a Japan-based permanent-capital private equity firm. Tokyo, Japan.

Live at **https://oxc7.github.io/**

The site covers my resume, applied AI projects, granted patents, and field notes on technical due diligence and AI security.

## Stack

- **React 18** + **TypeScript**
- **Vite 6** for dev and build
- Custom file-based route registry (`src/routes.tsx`) — no router library
- Static pre-rendering: every route is built to real HTML at build time (SSR entry + `scripts/prerender.mjs`), so pages are crawlable and load without JS
- Markdown blog posts rendered with `marked`
- Deployed on **GitHub Pages** from the `docs/` folder on `master`

## Local development

```bash
npm install
npm run dev
```

Other scripts:

| Command | What it does |
| --- | --- |
| `npm run dev` | Vite dev server with HMR |
| `npm run build` | Client build → `docs/`, SSR build → `dist-server/`, then pre-renders every route to static HTML |
| `npm run preview` | Serve the production build locally |
| `npm run typecheck` | `tsc --noEmit` |

## Project structure

```
src/
  site.ts            Site-wide config: name, links, JSON-LD Person schema
  routes.tsx         Route registry — path, SEO title/description, JSON-LD
  App.tsx            App shell
  router.tsx         Minimal client-side router
  entry-client.tsx   Browser entry (hydration)
  entry-server.tsx   SSR entry used by the prerender step
  pages/             Home, Resume, Projects, Patents, Blog, BlogPost, NotFound
  components/        Layout, NewsletterSignup, CursorGlow, TiltCard, ParticleField
  content/posts.ts   Blog post registry (slug, title, date, description)
  posts/*.md         Blog post bodies
  styles/global.css  Global styles
public/              Static assets copied verbatim (favicons, images)
scripts/prerender.mjs  Writes static HTML for each route into docs/
docs/                Build output — committed, this is what GitHub Pages serves
```

### Adding a blog post

1. Write the body in `src/posts/<slug>.md`.
2. Register it in `src/content/posts.ts` with its `slug`, `title`, `date`, and `description`.

The route, SEO metadata, `BlogPosting` JSON-LD, and sitemap entry are all generated from that registry — no other files need touching.

## Deployment

`docs/` is committed to the repo and served directly by GitHub Pages (branch mode, `master` → `/docs`). To publish:

```bash
npm run build && git add docs && git commit -m "Rebuild site" && git push
```

## Copyright

© Chen Yow Ru (Roy). All rights reserved.

This repository is public so that GitHub Pages can serve the site — it is **not** open source. The content here (writing, resume, patents, images, likeness) and the site's code are my personal work. Please don't copy, republish, or reuse them. See [LICENSE](LICENSE) for the full notice.

## Contact

- LinkedIn: https://www.linkedin.com/in/ox7/
- GitHub: https://github.com/oxc7
