import { SITE } from '../site'
import TiltCard from '../components/TiltCard'

const TIMELINE = [
  {
    period: '2026 — Present',
    role: 'AI Lead',
    org: 'WAY Equity Partners',
    orgUrl: SITE.firmUrl,
    points: [
      'Lead AI value creation across a permanent-capital private equity portfolio, translating AI into measurable operating alpha in acquired businesses.',
      'Run technical due diligence on acquisition targets — architecture, data assets, model quality, security, and scaling cost.',
      'Build the first-90-days AI roadmap for new portfolio companies from diligence findings.',
    ],
  },
  {
    period: '2023 — 2026',
    role: 'Machine Learning Engineer',
    org: 'Exawizards',
    points: [
      'Developed production AI solutions across NLP and computer vision.',
      'Led penetration testing and security assessment of internal AI products.',
    ],
  },
  {
    period: '2021 — 2023',
    role: 'AI Engineer',
    org: 'Matsuo Institute',
    points: [
      'Built applied AI systems; co-inventor on a granted patent for prospective client list generation.',
    ],
  },
  {
    period: 'Research',
    role: 'AI Researcher',
    org: 'Matsuo Lab, The University of Tokyo',
    points: [
      'Research under Professor Yutaka Matsuo across NLP, computer vision, web mining, and deep learning.',
    ],
  },
]

const EDUCATION = [
  { school: 'The University of Tokyo', degree: 'Master of Engineering' },
  { school: 'Northwestern University', degree: 'Bachelor of Science' },
]

export default function Resume() {
  return (
    <div className="page">
      <header className="page__header">
        <h1 className="page__title">Resume</h1>
        <p className="page__lede">
          AI engineer turned private-equity operator. From building AI systems to
          creating value with them across an investment portfolio.
        </p>
        <div className="hero__actions">
          <a
            href={SITE.resumeDoc}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn--primary"
          >
            Full resume (Google Doc)
          </a>
          <a href={SITE.resumePdf} className="btn btn--ghost">
            Download PDF
          </a>
        </div>
      </header>

      <section className="section">
        <h2 className="section__title">Experience</h2>
        <div className="timeline">
          {TIMELINE.map((item) => (
            <TiltCard key={item.role + item.org} className="tl-item">
              <div className="tl-item__period">{item.period}</div>
              <h3 className="tl-item__role">
                {item.role}
                {' · '}
                {item.orgUrl ? (
                  <a href={item.orgUrl} target="_blank" rel="noopener noreferrer">
                    {item.org}
                  </a>
                ) : (
                  <span>{item.org}</span>
                )}
              </h3>
              <ul className="tl-item__points">
                {item.points.map((p, i) => (
                  <li key={i}>{p}</li>
                ))}
              </ul>
            </TiltCard>
          ))}
        </div>
      </section>

      <section className="section">
        <h2 className="section__title">Education</h2>
        <div className="creds">
          {EDUCATION.map((e) => (
            <div key={e.school} className="cred">
              <span className="cred__label">{e.school}</span>
              <span className="cred__sub">{e.degree}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="section">
        <h2 className="section__title">Certifications & Recognition</h2>
        <ul className="prose">
          <li>
            <a href={SITE.awsCert} target="_blank" rel="noopener noreferrer">
              AWS Certified Machine Learning — Specialty
            </a>
          </li>
          <li>
            <a href={SITE.patentUrl} target="_blank" rel="noopener noreferrer">
              Japan Patent No. 7471760
            </a>{' '}
            — Prospective Client List Generation
          </li>
          <li>Technical Recognition — Taiwan OpenStack Application Hackathon (2016)</li>
        </ul>
      </section>
    </div>
  )
}
