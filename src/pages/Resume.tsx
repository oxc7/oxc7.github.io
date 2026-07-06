import { SITE } from '../site'
import TiltCard from '../components/TiltCard'

const TIMELINE = [
  {
    period: '2026 – Present',
    role: 'AI Lead',
    org: 'WAY Equity Partners',
    orgUrl: SITE.firmUrl,
    points: [
      'Lead AI value creation across a permanent-capital private equity portfolio, translating AI into measurable operating alpha in acquired businesses.',
      'Run technical due diligence on acquisition targets: architecture, data assets, model quality, security, and scaling cost.',
      'Build the first 90 days AI roadmap during the Post-Merger Integration (PMI) phase for new portfolio companies, from diligence findings.',
    ],
  },
  {
    period: '2023 – 2026',
    role: 'Machine Learning Engineer',
    org: 'Exawizards',
    points: [
      'Developed production AI solutions across NLP and computer vision.',
      'Led penetration testing and security assessment of internal AI products.',
      'Built applied AI systems; co-inventor on a granted patent for prospective client list generation.',
    ],
  },
  {
    period: '2021 – 2023',
    role: 'AI Engineer',
    org: 'Matsuo Institute',
    points: [
      'Team leadership: led a team of four to develop AI solutions, resulting in a $1M+ contract renewal with a major Japanese publishing company.',
      'Predictive modeling: analyzed seasonal trends in product sales, contributing to strategies that increased client revenue by 50%.',
    ],
  },
  {
    period: 'Aug 2022 – Nov 2022',
    location: 'Tokyo, Japan',
    role: 'Research Engineer (Summer Intern)',
    org: 'SenseTime',
    points: [
      'Fine-tuned BEVFormer models (transformer / temporal structures) for autonomous systems, improving real-time decision-making accuracy.',
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

const CERTIFICATIONS = [
  {
    name: 'AWS Certified Machine Learning – Specialty',
    issuer: 'Amazon Web Services',
    url: SITE.awsCert,
  },
  {
    name: 'Deep Learning Specialization',
    issuer: 'DeepLearning.AI · Coursera',
    url: 'https://www.coursera.org/account/accomplishments/specialization/certificate/H5FMH45NMT8W',
  },
  {
    name: 'Mathematics for Machine Learning and Data Science',
    issuer: 'DeepLearning.AI · Coursera',
    url: 'https://www.coursera.org/account/accomplishments/specialization/certificate/HBN6NEMQGB6Z',
  },
]

const AWARDS = [
  {
    text: 'Silver Prize, Liquid AI Hackathon',
    year: '2026',
    url: 'https://hackathons.liquid.ai/',
  },
  {
    text: 'Japan Patent No. 7471760: Prospective Client List Generation',
    year: '2024',
    url: SITE.patentUrl,
  },
  {
    text: 'Technical Recognition, Taiwan OpenStack Application Hackathon',
    year: '2016',
  },
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
              <div className="tl-item__period">
                {item.period}
                {'location' in item && item.location ? ` · ${item.location}` : ''}
              </div>
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
        <h2 className="section__title">Certifications &amp; Recognition</h2>

        <h3 className="section__subhead">Certifications</h3>
        <div className="creds">
          {CERTIFICATIONS.map((c) => (
            <a
              key={c.name}
              href={c.url}
              target="_blank"
              rel="noopener noreferrer"
              className="cred cred--link"
            >
              <span className="cred__label">{c.name}</span>
              <span className="cred__sub">{c.issuer}</span>
            </a>
          ))}
        </div>

        <h3 className="section__subhead">Awards &amp; Recognition</h3>
        <ul className="award-list">
          {AWARDS.map((a) => (
            <li key={a.text} className="award">
              <span className="award__text">
                {a.url ? (
                  <a href={a.url} target="_blank" rel="noopener noreferrer">
                    {a.text}
                  </a>
                ) : (
                  a.text
                )}
              </span>
              <span className="award__year">{a.year}</span>
            </li>
          ))}
        </ul>
      </section>
    </div>
  )
}
