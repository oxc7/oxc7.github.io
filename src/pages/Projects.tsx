import TiltCard from '../components/TiltCard'

const REPO_URL = 'https://github.com/oxc7/Patlytics_Takehome'

const SAMPLE_ROWS = [
  {
    feature: 'AI lead scoring',
    claim: 'Claim 3',
    similarity: '72%',
    risk: 'Medium',
    review: 'Ask IP counsel to review',
  },
  {
    feature: 'Company matching algorithm',
    claim: 'Claim 5',
    similarity: '81%',
    risk: 'High',
    review: 'Compare implementation details',
  },
]

const HOW_IT_WORKS = [
  'Maps a target’s product features to the most relevant claims across a body of patents.',
  'Scores similarity and assigns a triage risk level (High / Medium / Low).',
  'Returns a prioritized review list so counsel’s time goes to the highest-risk items first.',
  'Saves each run as a report for an auditable diligence trail.',
]

function riskClass(risk: string): string {
  const r = risk.toLowerCase()
  if (r === 'high') return 'risk risk--high'
  if (r === 'medium') return 'risk risk--med'
  return 'risk risk--low'
}

export default function Projects() {
  return (
    <div className="page">
      <header className="page__header">
        <h1 className="page__title">Projects</h1>
        <p className="page__lede">
          Applied AI built for the way I work: tooling that de-risks deals and
          supports diligence, not demos.
        </p>
      </header>

      <div className="project-list">
        <TiltCard className="project" as="article">
          <div className="project__body">
            <h2 className="project__title">
              IP Risk Screening Tool for Technical Due Diligence
            </h2>
            <p className="project__desc">
              Undisclosed IP exposure is the kind of risk that surfaces after
              close and derails the value-creation plan. This tool screens a
              target’s product features against a body of patents to surface
              early red flags, ranking likely-relevant claims by similarity and
              assigning a triage risk level. The point is speed and focus: send
              counsel the highest-risk items first, before the deeper legal
              review begins.
            </p>

            <div className="callout">
              <strong>Not a substitute for legal counsel.</strong> This is an
              early-warning screen for red-flag detection during diligence. Every
              flag is a candidate for review by qualified IP counsel, not a legal
              determination.
            </div>

            <h3 className="project__subhead">Sample output</h3>
            <div className="table-wrap">
              <table className="data-table">
                <thead>
                  <tr>
                    <th>Product Feature</th>
                    <th>Related Patent Claim</th>
                    <th>Similarity</th>
                    <th>Risk</th>
                    <th>Suggested Review</th>
                  </tr>
                </thead>
                <tbody>
                  {SAMPLE_ROWS.map((row) => (
                    <tr key={row.feature}>
                      <td>{row.feature}</td>
                      <td>{row.claim}</td>
                      <td>{row.similarity}</td>
                      <td>
                        <span className={riskClass(row.risk)}>{row.risk}</span>
                      </td>
                      <td>{row.review}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="table-note">
              Illustrative output. Similarity scores are a triage signal, not a
              measure of legal infringement.
            </p>

            <h3 className="project__subhead">How it works</h3>
            <ul className="project__features">
              {HOW_IT_WORKS.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>

            <h3 className="project__subhead">Why it matters for diligence</h3>
            <p className="project__desc">
              This sits right at the intersection of what I do: patent experience
              (co-inventor on a granted patent), applied AI, and technical due
              diligence. Catching an IP red flag early changes how a deal is
              priced and de-risked, and it directs expensive legal hours to where
              the real exposure is.
            </p>

            <p className="project__meta">
              Python · Flask · fuzzy claim matching with an LLM scoring path
              (working prototype). ·{' '}
              <a href={REPO_URL} target="_blank" rel="noopener noreferrer">
                Source on GitHub
              </a>
            </p>
          </div>
        </TiltCard>
      </div>
    </div>
  )
}
