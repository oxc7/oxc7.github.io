import TiltCard from '../components/TiltCard'

type OutputTable = {
  columns: string[]
  rows: string[][]
  badgeCol: number
  note?: string
}

type Project = {
  title: string
  problem: string
  useCase: string
  demo: string[]
  output: OutputTable
  techStack: string[]
  businessValue: string[]
  disclaimer?: string
}

const PROJECTS: Project[] = [
  {
    title: 'AI Value Creation Roadmap Generator',
    problem:
      'After acquiring a business, the operating team has to answer one question fast: where does AI actually create value here? Generic AI-strategy decks don’t map to the specific company, and manually auditing every function for high-ROI opportunities is slow, subjective, and hard to compare across a portfolio.',
    useCase:
      'PE operating partners and deal teams, portfolio-company CEOs and CTOs, and the value-creation team building the post-close AI roadmap.',
    demo: [
      'Enter the portfolio company’s profile: industry, team size, pain points, current tools, data, budget, and risk tolerance.',
      'An LLM agent extracts signals and screens candidate AI workflows across each function.',
      'It ranks the top opportunities by impact, difficulty, and risk, keeping a human-in-the-loop check on sensitive steps.',
      'It outputs a prioritized roadmap, an ROI score per initiative, success metrics, and a “do not automate yet” list.',
    ],
    output: {
      columns: ['AI Workflow', 'Value Lever', 'Impact', 'Effort', 'Priority'],
      rows: [
        ['Automate document intake with LLM extraction', 'Ops efficiency', 'High', 'Low', 'High'],
        ['Sales-outreach copilot', 'Revenue growth', 'High', 'Medium', 'Medium'],
        ['Churn-risk scoring on the customer base', 'Retention', 'Medium', 'Low', 'Medium'],
      ],
      badgeCol: 4,
      note: 'Illustrative output. Scores are a prioritization signal for the operating team, ranked by an ROI model.',
    },
    techStack: [
      'Next.js',
      'TypeScript',
      'React',
      'OpenAI (GPT-4o)',
      'Agentic workflow',
      'Structured JSON schema',
      'ROI scoring engine',
      'Tailwind CSS',
    ],
    businessValue: [
      'Turns a multi-week AI discovery exercise into a same-day first-pass roadmap.',
      'Standardizes how AI opportunities are found and prioritized across the portfolio.',
      'Gives the investment committee and portfolio leadership a defensible, ROI-ranked plan tied to value levers.',
      'Builds the first-90-days PMI AI roadmap with human-in-the-loop guardrails on sensitive workflows.',
    ],
  },
  {
    title: 'IP Risk Screening Tool for Technical Due Diligence',
    disclaimer:
      'Not a substitute for legal counsel. This is an early-warning screen for red-flag detection during diligence. Every flag is a candidate for review by qualified IP counsel, not a legal determination.',
    problem:
      'Undisclosed IP exposure can surface after close and derail the value-creation plan. Running formal legal review across every product feature and patent claim is slow and expensive, so teams need a way to triage where the real exposure is.',
    useCase:
      'PE deal teams and technical due-diligence leads, with IP counsel as the downstream reviewer, and portfolio-company CTOs.',
    demo: [
      'Load the target’s product features and a body of relevant patents.',
      'Match each product feature to the most relevant patent claims.',
      'Score similarity and assign a triage risk level.',
      'Output a prioritized review list and save the report for the diligence trail.',
    ],
    output: {
      columns: [
        'Product Feature',
        'Related Patent Claim',
        'Similarity',
        'Risk',
        'Suggested Review',
      ],
      rows: [
        ['AI lead scoring', 'Claim 3', '72%', 'Medium', 'Ask IP counsel to review'],
        ['Company matching algorithm', 'Claim 5', '81%', 'High', 'Compare implementation details'],
      ],
      badgeCol: 3,
      note: 'Illustrative output. Similarity scores are a triage signal, not a measure of legal infringement.',
    },
    techStack: ['Python', 'Flask', 'Fuzzy claim matching', 'LLM scoring path', 'Docker'],
    businessValue: [
      'Surfaces IP red flags early, before expensive legal review begins.',
      'Directs counsel to the highest-risk items first.',
      'Feeds deal pricing and risk assessment during diligence.',
      'Leaves an auditable trail of what was screened and flagged.',
    ],
  },
]

function badgeClass(value: string): string {
  const v = value.toLowerCase()
  if (v === 'high') return 'risk risk--high'
  if (v === 'medium') return 'risk risk--med'
  if (v === 'low') return 'risk risk--low'
  return ''
}

function Section({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <>
      <h3 className="project__subhead">{label}</h3>
      {children}
    </>
  )
}

function OutputTableView({ table }: { table: OutputTable }) {
  return (
    <>
      <div className="table-wrap">
        <table className="data-table">
          <thead>
            <tr>
              {table.columns.map((c) => (
                <th key={c}>{c}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {table.rows.map((row, ri) => (
              <tr key={ri}>
                {row.map((cell, ci) => (
                  <td key={ci}>
                    {ci === table.badgeCol && badgeClass(cell) ? (
                      <span className={badgeClass(cell)}>{cell}</span>
                    ) : (
                      cell
                    )}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {table.note && <p className="table-note">{table.note}</p>}
    </>
  )
}

export default function Projects() {
  return (
    <div className="page">
      <header className="page__header">
        <h1 className="page__title">Projects</h1>
        <p className="page__lede">
          Applied AI built for the way I work: tools for investors and operators
          that de-risk deals and create value, not demos.
        </p>
      </header>

      <div className="project-list">
        {PROJECTS.map((p) => (
          <TiltCard key={p.title} className="project" as="article">
            <div className="project__body">
              <h2 className="project__title">{p.title}</h2>

              {p.disclaimer && (
                <div className="callout">
                  <strong>{p.disclaimer.split('.')[0]}.</strong>
                  {p.disclaimer.slice(p.disclaimer.indexOf('.') + 1)}
                </div>
              )}

              <Section label="Problem">
                <p className="project__desc">{p.problem}</p>
              </Section>

              <Section label="Use case">
                <p className="project__desc">{p.useCase}</p>
              </Section>

              <Section label="Demo">
                <ol className="workflow">
                  {p.demo.map((step) => (
                    <li key={step}>{step}</li>
                  ))}
                </ol>
              </Section>

              <Section label="Output">
                <OutputTableView table={p.output} />
              </Section>

              <Section label="Tech stack">
                <ul className="tech-chips">
                  {p.techStack.map((t) => (
                    <li key={t} className="tech-chip">
                      {t}
                    </li>
                  ))}
                </ul>
              </Section>

              <Section label="Business value">
                <ul className="project__features">
                  {p.businessValue.map((b) => (
                    <li key={b}>{b}</li>
                  ))}
                </ul>
              </Section>
            </div>
          </TiltCard>
        ))}
      </div>
    </div>
  )
}
