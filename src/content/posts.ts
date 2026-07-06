import { marked } from 'marked'
import pentestRaw from '../posts/pentest-ai-products.md?raw'
import kaliRaw from '../posts/kali-linux-commands.md?raw'

export type Post = {
  slug: string
  title: string
  date: string
  description: string
  html: string
}

marked.setOptions({ gfm: true, breaks: false })

function build(
  slug: string,
  title: string,
  date: string,
  description: string,
  raw: string,
): Post {
  return { slug, title, date, description, html: marked.parse(raw) as string }
}

export const POSTS: Post[] = [
  build(
    'kali-linux-commands',
    'A Kali Linux Toolkit for Security Assessments in Technical Due Diligence',
    '2025-02-23',
    'The command-line toolkit I reach for when technical due diligence includes a hands-on security assessment of a target’s infrastructure.',
    kaliRaw,
  ),
  build(
    'pentest-ai-products',
    'Penetration Testing AI Products: A Due-Diligence Lens',
    '2025-02-12',
    'How I assess whether an acquisition target’s AI product can be broken, and why security posture is an input to valuation.',
    pentestRaw,
  ),
]

export function getPost(slug: string): Post | undefined {
  return POSTS.find((p) => p.slug === slug)
}

export function formatDate(iso: string): string {
  const [y, m, d] = iso.split('-').map(Number)
  const months = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December',
  ]
  return `${months[m - 1]} ${d}, ${y}`
}
