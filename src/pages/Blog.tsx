import { Link } from '../router'
import { POSTS, formatDate } from '../content/posts'
import TiltCard from '../components/TiltCard'

export default function Blog() {
  return (
    <div className="page">
      <header className="page__header">
        <h1 className="page__title">Notes on Due Diligence & AI Security</h1>
        <p className="page__lede">
          Field notes from technical due diligence and AI value creation — how I
          assess the technology behind a deal and de-risk what we buy.
        </p>
      </header>

      <div className="post-list">
        {POSTS.map((post) => (
          <TiltCard key={post.slug} className="post-card" as="article">
            <Link to={`/blog/${post.slug}/`} className="post-card__link">
              <time className="post-card__date">{formatDate(post.date)}</time>
              <h2 className="post-card__title">{post.title}</h2>
              <p className="post-card__excerpt">{post.description}</p>
              <span className="post-card__more">Read →</span>
            </Link>
          </TiltCard>
        ))}
      </div>
    </div>
  )
}
