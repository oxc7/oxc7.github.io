import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from 'react'

type RouterState = {
  path: string
  navigate: (to: string) => void
}

const RouterContext = createContext<RouterState>({
  path: '/',
  navigate: () => {},
})

export function RouterProvider({
  initialPath,
  children,
}: {
  initialPath: string
  children: ReactNode
}) {
  const [path, setPath] = useState(initialPath)

  const navigate = useCallback((to: string) => {
    const url = new URL(to, window.location.origin)
    window.history.pushState({}, '', url)
    setPath(url.pathname)
    window.scrollTo(0, 0)
  }, [])

  useEffect(() => {
    const onPop = () => setPath(window.location.pathname)
    window.addEventListener('popstate', onPop)
    return () => window.removeEventListener('popstate', onPop)
  }, [])

  return (
    <RouterContext.Provider value={{ path, navigate }}>
      {children}
    </RouterContext.Provider>
  )
}

export function useRouter() {
  return useContext(RouterContext)
}

/** Client-side navigating link that falls back to a real anchor for SSG/SEO. */
export function Link({
  to,
  className,
  children,
  ...rest
}: {
  to: string
  className?: string
  children: ReactNode
} & React.AnchorHTMLAttributes<HTMLAnchorElement>) {
  const { navigate } = useRouter()
  const isInternal = to.startsWith('/')

  const onClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (!isInternal || e.metaKey || e.ctrlKey || e.shiftKey || e.button !== 0) return
    e.preventDefault()
    navigate(to)
  }

  return (
    <a
      href={to}
      className={className}
      onClick={onClick}
      {...(isInternal ? {} : { target: '_blank', rel: 'noopener noreferrer' })}
      {...rest}
    >
      {children}
    </a>
  )
}
