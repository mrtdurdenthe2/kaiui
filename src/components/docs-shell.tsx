import { useEffect, useState } from "react"
import { NavLink, Outlet, useLocation } from "react-router"
import { MenuIcon, MoonIcon, SunIcon } from "lucide-react"

import { components } from "@/catalog"
import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet"
import { useTheme } from "@/components/theme-provider"
import { cn } from "@/lib/utils"

function ThemeToggle() {
  const { theme, setTheme } = useTheme()
  const isDark = theme === "dark"

  return (
    <Button
      variant="ghost"
      size="icon"
      aria-label={isDark ? "Use light theme" : "Use dark theme"}
      onClick={() => setTheme(isDark ? "light" : "dark")}
    >
      {isDark ? <SunIcon /> : <MoonIcon />}
    </Button>
  )
}

function ComponentNav({ onNavigate }: { onNavigate?: () => void }) {
  const { pathname } = useLocation()

  useEffect(() => {
    const current = document.querySelector<HTMLElement>(
      "[data-docs-nav] [data-active='true']",
    )
    current?.scrollIntoView({ block: "nearest" })
  }, [pathname])

  return (
    <nav data-docs-nav className="flex flex-col gap-4 px-3 py-4">
      <div className="flex flex-col gap-1">
        <p className="px-3 text-sm font-medium">Components</p>
        <NavLink
          to="/components"
          end
          onClick={onNavigate}
          className={({ isActive }) =>
            cn(
              "rounded-md px-3 py-1.5 text-sm text-muted-foreground hover:bg-muted hover:text-foreground",
              isActive && "bg-muted font-medium text-foreground",
            )
          }
        >
          All components
        </NavLink>
      </div>
      <ul className="flex flex-col gap-0.5">
        {components.map((component) => (
          <li key={component.slug}>
            <NavLink
              to={`/components/${component.slug}`}
              onClick={onNavigate}
              data-active={
                pathname === `/components/${component.slug}` ? "true" : undefined
              }
              className={({ isActive }) =>
                cn(
                  "flex items-center gap-2 rounded-md px-3 py-1.5 text-sm text-muted-foreground hover:bg-muted hover:text-foreground",
                  isActive && "bg-muted font-medium text-foreground",
                )
              }
            >
              {component.title}
              {component.isNew ? (
                <>
                  <span className="sr-only">New</span>
                  <span
                    aria-hidden="true"
                    className="size-2 rounded-full bg-blue-500"
                  />
                </>
              ) : null}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export function DocsShell() {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <div className="flex min-h-svh bg-background">
      <aside className="sticky top-0 hidden h-svh w-64 shrink-0 overflow-y-auto border-r md:block">
        <ComponentNav />
      </aside>
      <div className="flex min-w-0 flex-1 flex-col">
        <header className="sticky top-0 z-40 flex h-14 items-center gap-2 border-b bg-background px-4 md:px-6">
          <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              aria-label="Open components"
              onClick={() => setMobileOpen(true)}
            >
              <MenuIcon />
            </Button>
            <SheetContent side="left" className="w-72 p-0">
              <SheetHeader className="sr-only">
                <SheetTitle>Components</SheetTitle>
              </SheetHeader>
              <div className="h-full overflow-y-auto pt-8">
                <ComponentNav onNavigate={() => setMobileOpen(false)} />
              </div>
            </SheetContent>
          </Sheet>
          <p className="text-sm font-medium">Components</p>
          <div className="ml-auto">
            <ThemeToggle />
          </div>
        </header>
        <main className="flex-1 px-4 py-8 md:px-8">
          <div className="mx-auto w-full max-w-4xl">
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  )
}
