import { useEffect } from "react"
import { Navigate, Route, Routes, useLocation } from "react-router"

import { DocsShell } from "@/components/docs-shell"
import AppSidebar from "@/examples/sidebar-demo"
import { ComponentPage } from "@/pages/component-page"
import { ComponentsIndex } from "@/pages/components-index"

function ScrollToTop() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return null
}

export function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route
          path="/view/sidebar"
          element={
            <div className="h-svh bg-background">
              <AppSidebar />
            </div>
          }
        />
        <Route element={<DocsShell />}>
          <Route path="/" element={<Navigate to="/components" replace />} />
          <Route path="/components" element={<ComponentsIndex />} />
          <Route path="/components/:slug" element={<ComponentPage />} />
          <Route path="*" element={<Navigate to="/components" replace />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
