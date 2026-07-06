import { SITE } from '../site'
import TiltCard from '../components/TiltCard'

export default function Patents() {
  return (
    <div className="page">
      <header className="page__header">
        <h1 className="page__title">Patents</h1>
        <p className="page__lede">
          Granted intellectual property from my applied-AI work.
        </p>
      </header>

      <div className="project-list">
        <TiltCard className="patent" as="article">
          <h2 className="patent__title">Prospective Client List Generation</h2>
          <p className="patent__inventors">
            Chen Yow Ru, Watanabe Takanobu, Ishino Satoshi
          </p>
          <p className="patent__meta">
            <a href={SITE.patentUrl} target="_blank" rel="noopener noreferrer">
              Japan Patent No. 7471760
            </a>{' '}
            · April 2024
          </p>
        </TiltCard>
      </div>
    </div>
  )
}
