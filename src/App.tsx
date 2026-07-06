import { RouterProvider, useRouter } from './router'
import { findRoute, NOT_FOUND } from './routes'
import Layout from './components/Layout'
import CursorGlow from './components/CursorGlow'

function CurrentPage() {
  const { path } = useRouter()
  const route = findRoute(path) ?? NOT_FOUND
  return route.render()
}

export default function App({ initialPath }: { initialPath: string }) {
  return (
    <RouterProvider initialPath={initialPath}>
      <CursorGlow />
      <Layout>
        <CurrentPage />
      </Layout>
    </RouterProvider>
  )
}
