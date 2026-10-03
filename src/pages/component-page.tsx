import { Component, type ReactNode } from "react"
import { Link, useParams } from "react-router"

import { getComponent } from "@/catalog"
import { examples } from "@/examples/registry"
import { cn } from "@/lib/utils"

type BoundaryProps = {
  resetKey: string
  children: ReactNode
}

type BoundaryState = {
  error: Error | null
}

class ExampleBoundary extends Component<BoundaryProps, BoundaryState> {
  state: BoundaryState = { error: null }

  static getDerivedStateFromError(error: Error): BoundaryState {
    return { error }
  }

  componentDidUpdate(previous: BoundaryProps) {
    if (previous.resetKey !== this.props.resetKey && this.state.error) {
      this.setState({ error: null })
    }
  }

  render() {
    if (this.state.error) {
      return (
        <p className="text-sm text-destructive">
          This example failed to render.
        </p>
      )
    }

    return this.props.children
  }
}

export function ComponentPage() {
  const { slug = "" } = useParams()
  const component = getComponent(slug)
  const Example = examples[slug]

  if (!component || !Example) {
    return (
      <div className="flex flex-col gap-3">
        <h1 className="text-3xl font-semibold tracking-tight">
          Component not found
        </h1>
        <Link
          to="/components"
          className="text-sm font-medium underline-offset-4 hover:underline"
        >
          All components
        </Link>
      </div>
    )
  }

  return (
    <article className="flex flex-col">
      <h1 className="scroll-m-20 text-3xl font-semibold tracking-tight">
        {component.title}
      </h1>
      <p className="mt-2 text-base text-muted-foreground">
        {component.description}
      </p>
      <div
        data-slot="component-preview"
        className={cn(
          "mt-6 flex min-h-80 w-full rounded-2xl border bg-background p-6 md:p-10",
          component.align === "start"
            ? "items-start justify-start"
            : "items-center justify-center",
        )}
      >
        {component.iframe ? (
          <iframe
            title={`${component.title} example`}
            src={`/view/${component.slug}`}
            className="h-[36rem] w-full border-0 bg-background"
          />
        ) : (
          <ExampleBoundary resetKey={component.slug}>
            <div
              className={cn(
                "min-w-0",
                component.align === "start" ? "w-full" : "flex justify-center",
              )}
            >
              <Example />
            </div>
          </ExampleBoundary>
        )}
      </div>
    </article>
  )
}
