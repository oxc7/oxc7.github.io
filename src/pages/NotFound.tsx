import { Link } from '../router'

export default function NotFound() {
  return (
    <div className="page page--center">
      <h1 className="page__title">404</h1>
      <p className="page__lede">This page doesn&rsquo;t exist.</p>
      <Link to="/" className="btn btn--primary">
        Back home
      </Link>
    </div>
  )
}
