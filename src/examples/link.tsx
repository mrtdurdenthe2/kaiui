import type { ComponentProps } from "react"

export function Link({ href, ...props }: ComponentProps<"a">) {
  return <a href={href} {...props} />
}
