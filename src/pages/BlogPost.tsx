import { Link } from '../router'
import { getPost, formatDate } from '../content/posts'

export default function BlogPost({ slug }: { slug: string }) {
  const post = getPost(slug)
  if (!post) {
    return (
      <div className="page">
        <p className="prose">Post not found.</p>
        <Link to="/blog/" className="btn btn--ghost">
          ← Back to blog
        </Link>
      </div>
    )
  }

  return (
    <article className="page post">
      <header className="page__header">
        <Link to="/blog/" className="post__back">
          ← All notes
        </Link>
        <h1 className="page__title">{post.title}</h1>
        <time className="post__date">{formatDate(post.date)}</time>
      </header>
      <div
        className="post__body prose"
        dangerouslySetInnerHTML={{ __html: post.html }}
      />
    </article>
  )
}
