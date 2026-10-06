import { marked } from 'marked'
import pentestRaw from '../posts/pentest-ai-products.md?raw'
import kaliRaw from '../posts/kali-linux-commands.md?raw'
import diligenceRaw from '../posts/ai-technical-due-diligence.md?raw'
import noAiRaw from '../posts/ai-opportunities-no-ai-companies.md?raw'
import successionRaw from '../posts/succession-handover-window.md?raw'

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
    'succession-handover-window',
    'The Handover Window: Where AI Fits in Japan’s Succession Deals',
    '2026-10-14',
    'In a succession deal the most perishable asset is the owner’s judgment. Why capturing it during the transition period comes before automating anything.',
    successionRaw,
  ),
  build(
    'ai-opportunities-no-ai-companies',
    'Finding AI Opportunities in Companies That Have Never Used AI',
    '2026-07-22',
    'How I find improvements in businesses with no AI exposure: trace the work, assess through an AI and a without-AI lens, and decide the roadmap jointly with management.',
    noAiRaw,
  ),
  build(
    'ai-technical-due-diligence',
    'What I Actually Look at in AI Technical Due Diligence',
    '2026-07-08',
    'The framework I use to assess the technology behind an acquisition target, and how each finding translates into price, deal structure, or the value-creation plan.',
    diligenceRaw,
  ),
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
