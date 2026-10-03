import { ChevronRightIcon } from "lucide-react"

import { Button } from "@/components/ui/button"
import { DirectionProvider } from "@/components/ui/direction"
import { Input } from "@/components/ui/input"

export function DirectionDemo() {
  return (
    <DirectionProvider direction="rtl">
      <div dir="rtl" className="flex w-full max-w-sm flex-col gap-3">
        <p className="text-sm text-muted-foreground">
          Direction is set to right to left.
        </p>
        <Input placeholder="الاسم" />
        <Button className="w-fit">
          متابعة
          <ChevronRightIcon data-icon="inline-end" />
        </Button>
      </div>
    </DirectionProvider>
  )
}
