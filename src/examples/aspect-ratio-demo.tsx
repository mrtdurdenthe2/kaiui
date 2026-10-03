import { AspectRatio } from "@/components/ui/aspect-ratio"

export default function AspectRatioDemo() {
  return (
    <AspectRatio
      ratio={16 / 9}
      className="w-full max-w-sm rounded-lg bg-muted"
    >
      <div className="flex size-full items-center justify-center text-sm text-muted-foreground">
        16:9
      </div>
    </AspectRatio>
  )
}
