import type { ReactElement } from 'react'
import Home from './pages/Home'
import Resume from './pages/Resume'
import Projects from './pages/Projects'
import Patents from './pages/Patents'
import Blog from './pages/Blog'
import BlogPost from './pages/BlogPost'
import NotFound from './pages/NotFound'
import { POSTS } from './content/posts'
import { SITE } from './site'

export type RouteMeta = {
  path: string
  title: string
  description: string
  render: () => ReactElement
  /** Extra JSON-LD to inject for this route (Person is added globally). */
  jsonLd?: object
  /** Exclude from sitemap.xml (e.g. redirect stubs, 404). */
  noIndex?: boolean
}

const SEO_SUFFIX = ` | ${SITE.name}`

export const ROUTES: RouteMeta[] = [
  {
    path: '/',
    title: 'Chen Yow Ru (Roy) — AI Lead at WAY Equity Partners',
    description:
      'AI Lead at WAY Equity Partners, a Japan-based permanent-capital private equity firm. I drive AI value creation for alpha in acquired businesses and lead technical due diligence on deals.',
    render: () => <Home />,
  },
  {
    path: '/resume/',
    title: 'Resume' + SEO_SUFFIX,
    description:
      'Career of Chen Yow Ru (Roy): AI Lead at WAY Equity Partners, formerly ML Engineer at Exawizards and AI Engineer at Matsuo Institute. Northwestern BS, The University of Tokyo M.Eng.',
    render: () => <Resume />,
  },
  {
    path: '/projects/',
    title: 'Projects' + SEO_SUFFIX,
    description:
      'Applied AI projects by Chen Yow Ru, including a Patent Infringement Checker — examples of AI built for real IP, legal, and diligence workflows.',
    render: () => <Projects />,
  },
  {
    path: '/patents/',
    title: 'Patents' + SEO_SUFFIX,
    description:
      'Granted patents by Chen Yow Ru, including Japan Patent No. 7471760, "Prospective Client List Generation."',
    render: () => <Patents />,
  },
  {
    path: '/blog/',
    title: 'Notes on Technical Due Diligence & AI Security' + SEO_SUFFIX,
    description:
      'Field notes on technical due diligence, AI security assessment, and value creation in private equity by Chen Yow Ru.',
    render: () => <Blog />,
  },
]

// Per-post routes generated from the post registry.
for (const post of POSTS) {
  ROUTES.push({
    path: `/blog/${post.slug}/`,
    title: post.title + SEO_SUFFIX,
    description: post.description,
    render: () => <BlogPost slug={post.slug} />,
    jsonLd: {
      '@context': 'https://schema.org',
      '@type': 'BlogPosting',
      headline: post.title,
      description: post.description,
      datePublished: post.date,
      url: `${SITE.url}/blog/${post.slug}/`,
      author: { '@type': 'Person', name: 'Chen Yow Ru' },
    },
  })
}

export const NOT_FOUND: RouteMeta = {
  path: '/404.html',
  title: 'Page Not Found' + SEO_SUFFIX,
  description: 'The page you were looking for could not be found.',
  render: () => <NotFound />,
  noIndex: true,
}

export function findRoute(pathname: string): RouteMeta | undefined {
  const normalized =
    pathname.endsWith('/') || pathname.includes('.') ? pathname : pathname + '/'
  return ROUTES.find((r) => r.path === normalized)
}
