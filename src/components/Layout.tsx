import { useState, type ReactNode } from 'react'
import { Link, useRouter } from '../router'
import { SITE } from '../site'

const NAV = [
  { to: '/', label: 'Home' },
  { to: '/resume/', label: 'Resume' },
  { to: '/projects/', label: 'Projects' },
  { to: '/patents/', label: 'Patents' },
  { to: '/blog/', label: 'Blog' },
]

function isActive(current: string, to: string): boolean {
  if (to === '/') return current === '/'
  return current.startsWith(to)
}

export default function Layout({ children }: { children: ReactNode }) {
  const { path } = useRouter()
  const [open, setOpen] = useState(false)

  return (
    <div className="site">
      <header className="masthead">
        <div className="masthead__inner">
          <Link to="/" className="brand" onClick={() => setOpen(false)}>
            <img
              src="/resources/chen.png"
              alt="Chen Yow Ru (Roy)"
              className="brand__avatar"
              width="36"
              height="36"
            />
            <span className="brand__name">Chen Yow Ru</span>
          </Link>
          <button
            className="nav-toggle"
            aria-label="Toggle navigation"
            aria-expanded={open}
            onClick={() => setOpen((o) => !o)}
          >
            <span />
            <span />
            <span />
          </button>
          <nav className={`nav ${open ? 'nav--open' : ''}`}>
            {NAV.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className={`nav__link ${isActive(path, item.to) ? 'nav__link--active' : ''}`}
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      </header>

      <main className="main">{children}</main>

      <footer className="footer">
        <div className="footer__inner">
          <p>
            {SITE.name} · {SITE.jobTitle} at{' '}
            <a href={SITE.firmUrl} target="_blank" rel="noopener noreferrer">
              {SITE.firm}
            </a>
          </p>
          <div className="footer__links">
            <a href={`mailto:${SITE.email}`}>Email</a>
            <a href={SITE.github} target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
            <a href={SITE.firmUrl} target="_blank" rel="noopener noreferrer">
              WAY Equity
            </a>
          </div>
          <p className="footer__fine">
            © {new Date().getFullYear()} Chen Yow Ru. Tokyo, Japan.
          </p>
        </div>
      </footer>
    </div>
  )
}
