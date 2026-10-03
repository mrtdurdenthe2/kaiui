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
      "[data-docs-nav] [data-active='true']"
    )
    current?.scrollIntoView({ block: "nearest" })
  }, [pathname])

  return (
    <nav data-docs-nav className="flex flex-col gap-8 px-6 py-6">
      <div className="flex flex-col gap-2">
        <p className="px-4 text-[17px] leading-6 font-[450]">Components</p>
        <NavLink
          to="/components"
          end
          onClick={onNavigate}
          className={({ isActive }) =>
            cn(
              "rounded-[24px] px-4 py-2 text-[15px] leading-6 font-[450] text-muted-foreground hover:bg-accent hover:text-foreground",
              isActive && "bg-accent text-foreground"
            )
          }
        >
          All components
        </NavLink>
      </div>
      <ul className="flex flex-col">
        {components.map((component) => (
          <li key={component.slug}>
            <NavLink
              to={`/components/${component.slug}`}
              onClick={onNavigate}
              data-active={
                pathname === `/components/${component.slug}`
                  ? "true"
                  : undefined
              }
              className={({ isActive }) =>
                cn(
                  "flex items-center gap-2 rounded-[24px] px-4 py-2 text-[15px] leading-6 font-[450] text-muted-foreground hover:bg-accent hover:text-foreground",
                  isActive && "bg-accent text-foreground"
                )
              }
            >
              {component.title}
              {component.isNew ? (
                <>
                  <span className="sr-only">New</span>
                  <span aria-hidden="true" className="ml-auto text-ring">
                    New
                  </span>
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
      <aside className="sticky top-0 hidden h-svh w-72 shrink-0 overflow-y-auto border-r md:block">
        <ComponentNav />
      </aside>
      <div className="flex min-w-0 flex-1 flex-col">
        <header className="sticky top-0 z-40 flex h-16 items-center gap-2 border-b bg-background px-6">
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
          <p className="text-[15px] leading-6 font-[450]">Components</p>
          <div className="ml-auto">
            <ThemeToggle />
          </div>
        </header>
        <main className="flex-1 p-6">
          <div className="mx-auto w-full max-w-5xl">
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  )
}
