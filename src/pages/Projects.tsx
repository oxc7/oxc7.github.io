import TiltCard from '../components/TiltCard'

const PROJECTS = [
  {
    title: 'Patent Infringement Checker',
    image: '/resources/patent_infringement.png',
    description:
      'A web tool that evaluates potential patent-infringement risk, an example of AI applied to the IP, legal, and diligence workflows that private equity relies on.',
    features: [
      'Infringement analysis: identifies products that may infringe a given patent.',
      'Comprehensive reports: likelihood assessment, relevant claims, and key features.',
      'User-friendly interface: a simple web tool for analysis and review.',
      'Report management: save and revisit past analyses.',
    ],
  },
]

export default function Projects() {
  return (
    <div className="page">
      <header className="page__header">
        <h1 className="page__title">Projects</h1>
        <p className="page__lede">
          Applied AI built for real decisions: the kind of tooling that supports
          due diligence and value creation, not demos.
        </p>
      </header>

      <div className="project-list">
        {PROJECTS.map((p) => (
          <TiltCard key={p.title} className="project" as="article">
            <div className="project__media">
              <img src={p.image} alt={p.title} loading="lazy" />
            </div>
            <div className="project__body">
              <h2 className="project__title">{p.title}</h2>
              <p className="project__desc">{p.description}</p>
              <h3 className="project__subhead">Key features</h3>
              <ul className="project__features">
                {p.features.map((f) => (
                  <li key={f}>{f}</li>
                ))}
              </ul>
            </div>
          </TiltCard>
        ))}
      </div>
    </div>
  )
}
