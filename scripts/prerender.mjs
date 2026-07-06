import { readFileSync, writeFileSync, mkdirSync, existsSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { fileURLToPath, pathToFileURL } from 'node:url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const root = join(__dirname, '..')
const dist = join(root, 'docs')

const template = readFileSync(join(dist, 'index.html'), 'utf-8')
const { render, renderHead, ALL_ROUTES } = await import(
  pathToFileURL(join(root, 'dist-server', 'entry-server.js')).href
)

const SITE_URL = 'https://oxc7.github.io'

function writeFile(relPath, html) {
  const full = join(dist, relPath)
  mkdirSync(dirname(full), { recursive: true })
  writeFileSync(full, html)
}

function outputPath(routePath) {
  if (routePath === '/') return 'index.html'
  if (routePath === '/404.html') return '404.html'
  return join(routePath.replace(/^\/|\/$/g, ''), 'index.html')
}

for (const route of ALL_ROUTES) {
  const appHtml = render(route.path === '/404.html' ? '/404.html' : route.path)
  const head = renderHead(route)
  const html = template
    .replace('<!--app-head-->', head)
    .replace('<!--app-html-->', appHtml)
  writeFile(outputPath(route.path), html)
  console.log('prerendered', route.path)
}

// Redirect stubs for the old Jekyll blog URLs.
const REDIRECTS = {
  '/pentest/': '/blog/pentest-ai-products/',
  '/kali_linux/': '/blog/kali-linux-commands/',
}
for (const [from, to] of Object.entries(REDIRECTS)) {
  const html = `<!doctype html><html lang="en"><head><meta charset="utf-8">
<title>Redirecting…</title>
<link rel="canonical" href="${SITE_URL}${to}">
<meta http-equiv="refresh" content="0; url=${to}">
<meta name="robots" content="noindex">
</head><body>Redirecting to <a href="${to}">${to}</a>…</body></html>`
  writeFile(join(from.replace(/^\/|\/$/g, ''), 'index.html'), html)
  console.log('redirect', from, '→', to)
}

// sitemap.xml
const urls = ALL_ROUTES.filter((r) => !r.noIndex).map(
  (r) => `  <url><loc>${SITE_URL}${r.path}</loc></url>`,
)
const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.join('\n')}
</urlset>\n`
writeFile('sitemap.xml', sitemap)

// robots.txt
writeFile(
  'robots.txt',
  `User-agent: *\nAllow: /\nSitemap: ${SITE_URL}/sitemap.xml\n`,
)

// GitHub Pages: disable Jekyll processing of the built output.
if (!existsSync(join(dist, '.nojekyll'))) writeFile('.nojekyll', '')

console.log('\nPrerender complete.')
