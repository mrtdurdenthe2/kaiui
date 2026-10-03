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
      className="inline-flex items-center gap-2 text-[15px] leading-6 font-[450] underline-offset-4 hover:underline"
    >
      {title}
      {isNew ? (
        <>
          <span className="sr-only">New</span>
          <span aria-hidden="true" className="text-ring">
            New
          </span>
        </>
      ) : null}
    </Link>
  )
}

export function ComponentsIndex() {
  const newest = components.filter((component) => component.isNew)

  return (
    <div className="flex flex-col gap-12">
      <div className="flex flex-col gap-2">
        <h1 className="scroll-m-20 text-[18px] leading-6 font-[450]">
          Components
        </h1>
        <p className="max-w-2xl text-[15px] leading-6 font-[450] text-muted-foreground">
          Here you can find all the components available in the library. We are
          working on adding more components.
        </p>
      </div>

      {newest.length > 0 ? (
        <section className="flex flex-col gap-4">
          <h2 className="scroll-m-20 text-[17px] leading-6 font-[450]">
            New Components
          </h2>
          <div className="grid grid-cols-2 gap-x-6 gap-y-4 md:grid-cols-3">
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
        <h2 className="scroll-m-20 text-[17px] leading-6 font-[450]">
          All Components
        </h2>
        <div className="grid grid-cols-2 gap-x-6 gap-y-4 md:grid-cols-3">
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
