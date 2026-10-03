import { Link } from "react-router"

import { components } from "@/catalog"

function ComponentLink({
  slug,
  title,
  isNew,
}: {
  slug: string
  title: string
  isNew?: boolean
}) {
  return (
    <Link
      to={`/components/${slug}`}
      className="inline-flex items-center gap-2 text-lg font-medium underline-offset-4 hover:underline md:text-base"
    >
      {title}
      {isNew ? (
        <>
          <span className="sr-only">New</span>
          <span
            aria-hidden="true"
            className="size-2 rounded-full bg-blue-500"
          />
        </>
      ) : null}
    </Link>
  )
}

export function ComponentsIndex() {
  const newest = components.filter((component) => component.isNew)

  return (
    <div className="flex flex-col gap-10">
      <div className="flex flex-col gap-2">
        <h1 className="scroll-m-20 text-3xl font-semibold tracking-tight">
          Components
        </h1>
        <p className="text-base text-muted-foreground">
          Here you can find all the components available in the library. We are
          working on adding more components.
        </p>
      </div>

      {newest.length > 0 ? (
        <section className="flex flex-col gap-4">
          <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">
            New Components
          </h2>
          <div className="grid grid-cols-2 gap-4 md:grid-cols-3 md:gap-x-8 lg:gap-x-16 lg:gap-y-6">
            {newest.map((component) => (
              <ComponentLink
                key={component.slug}
                slug={component.slug}
                title={component.title}
              />
            ))}
          </div>
        </section>
      ) : null}

      <section className="flex flex-col gap-4">
        <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">
          All Components
        </h2>
        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 md:gap-x-8 lg:gap-x-16 lg:gap-y-6">
          {components.map((component) => (
            <ComponentLink
              key={component.slug}
              slug={component.slug}
              title={component.title}
              isNew={component.isNew}
            />
          ))}
        </div>
      </section>
    </div>
  )
}
