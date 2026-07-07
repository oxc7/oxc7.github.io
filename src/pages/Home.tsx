import { Link } from '../router'
import { SITE } from '../site'
import ParticleHero from '../components/ParticleHero'
import TiltCard from '../components/TiltCard'

const PILLARS = [
  {
    tag: '01',
    title: 'AI Value Creation for Alpha',
    body: 'After we acquire a business, I find where AI creates real operating leverage: automating workflows, sharpening pricing and demand signals, and turning proprietary data into a durable edge. The goal is measurable alpha in the portfolio, not pilots that never ship.',
  },
  {
    tag: '02',
    title: 'Technical Due Diligence',
    body: 'Before we commit capital, I assess the technology: architecture, data assets, model quality, security posture, and the true cost of scaling. Diligence surfaces the risks and the upside so the value-creation plan is grounded in what the code and data can actually do.',
  },
]

const CREDS = [
  { label: 'Northwestern University', sub: 'B.S.' },
  { label: 'The University of Tokyo', sub: 'M.Eng.' },
  { label: 'Matsuo Lab', sub: 'AI Research' },
  { label: 'AWS', sub: 'ML Specialty' },
  { label: 'Japan Patent 7471760', sub: 'Granted' },
]

export default function Home() {
  return (
    <>
      <section className="hero">
        <ParticleHero />
        <div className="hero__content">
          <img
            src="/resources/chen.png"
            alt="Chen Yow Ru (Roy)"
            className="hero__portrait"
            width="120"
            height="120"
          />
          <p className="hero__eyebrow">
            AI Lead · <a href={SITE.firmUrl} target="_blank" rel="noopener noreferrer">WAY Equity Partners</a>
          </p>
          <h1 className="hero__title">
            I turn AI into <span className="grad">alpha</span> for the businesses
            we acquire.
          </h1>
          <p className="hero__lede">
            I&rsquo;m Chen Yow Ru (Roy), AI Lead at WAY Equity Partners, a
            Japan-based private equity firm operating on a{' '}
            <strong>permanent-capital</strong> basis. I drive AI value creation
            across our portfolio and lead technical due diligence on the
            businesses we buy.
          </p>
          <div className="hero__actions">
            <Link to="/projects/" className="btn btn--primary">
              See the work
            </Link>
            <Link to="/resume/" className="btn btn--ghost">
              Background
            </Link>
          </div>
        </div>
      </section>

      <section className="section">
        <h2 className="section__title">What I do</h2>
        <div className="pillars">
          {PILLARS.map((p) => (
            <TiltCard key={p.tag} className="pillar">
              <span className="pillar__tag">{p.tag}</span>
              <h3 className="pillar__title">{p.title}</h3>
              <p className="pillar__body">{p.body}</p>
            </TiltCard>
          ))}
        </div>
      </section>

      <section className="section">
        <h2 className="section__title">The permanent-capital difference</h2>
        <p className="prose prose--wide">
          Permanent capital means we hold for the long term rather than racing to
          a five-year exit. That changes how AI should be built inside a portfolio
          company: I invest in durable systems and compounding data advantages,
          not quick wins that look good at sale. Value creation and diligence feed
          each other. What I learn assessing a target becomes the first ninety
          days of its AI roadmap.
        </p>
      </section>

      <section className="section">
        <h2 className="section__title">Background</h2>
        <div className="creds">
          {CREDS.map((c) => (
            <div key={c.label} className="cred">
              <span className="cred__label">{c.label}</span>
              <span className="cred__sub">{c.sub}</span>
            </div>
          ))}
        </div>
        <p className="prose">
          Before private equity I was a Machine Learning Engineer at Exawizards
          and an AI Engineer at Matsuo Institute, with research at Matsuo Lab
          under Professor Yutaka Matsuo. My work spans natural language
          processing, computer vision, web mining, and deep learning. I work in
          English, Japanese, Chinese, and Taiwanese, with conversational Arabic.
        </p>
      </section>
    </>
  )
}
