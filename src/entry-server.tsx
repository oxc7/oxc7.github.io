import { renderToString } from 'react-dom/server'
import App from './App'
import { ROUTES, NOT_FOUND, type RouteMeta } from './routes'
import { SITE, PERSON_JSON_LD } from './site'

export function render(path: string): string {
  return renderToString(<App initialPath={path} />)
}

function escapeAttr(s: string): string {
  return s
    .replace(/&/g, '&amp;')
    .replace(/"/g, '&quot;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
}

/** Build the <head> tags for a given route. */
export function renderHead(route: RouteMeta): string {
  const url = SITE.url + (route.path === '/404.html' ? '/' : route.path)
  const desc = escapeAttr(route.description)
  const title = escapeAttr(route.title)
  const image = SITE.url + SITE.ogImage

  const tags = [
    `<title>${title}</title>`,
    `<meta name="description" content="${desc}" />`,
    route.noIndex
      ? `<meta name="robots" content="noindex" />`
      : `<link rel="canonical" href="${url}" />`,
    `<meta property="og:type" content="website" />`,
    `<meta property="og:title" content="${title}" />`,
    `<meta property="og:description" content="${desc}" />`,
    `<meta property="og:url" content="${url}" />`,
    `<meta property="og:image" content="${image}" />`,
    `<meta property="og:image:width" content="498" />`,
    `<meta property="og:image:height" content="436" />`,
    `<meta property="og:image:alt" content="${escapeAttr(SITE.name)}" />`,
    `<meta property="og:site_name" content="${escapeAttr(SITE.name)}" />`,
    `<meta name="twitter:card" content="summary_large_image" />`,
    `<meta name="twitter:title" content="${title}" />`,
    `<meta name="twitter:description" content="${desc}" />`,
    `<meta name="twitter:image" content="${image}" />`,
    `<meta name="twitter:image:alt" content="${escapeAttr(SITE.name)}" />`,
    `<script type="application/ld+json">${JSON.stringify(PERSON_JSON_LD)}</script>`,
  ]

  if (route.jsonLd) {
    tags.push(
      `<script type="application/ld+json">${JSON.stringify(route.jsonLd)}</script>`,
    )
  }

  return tags.join('\n    ')
}

export const ALL_ROUTES: RouteMeta[] = [...ROUTES, NOT_FOUND]
