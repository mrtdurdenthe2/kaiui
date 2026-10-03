import { FileCodeIcon, XIcon } from "lucide-react"

import {
  Attachment,
  AttachmentAction,
  AttachmentActions,
  AttachmentContent,
  AttachmentDescription,
  AttachmentGroup,
  AttachmentMedia,
  AttachmentTitle,
} from "@/components/ui/attachment"
import { Spinner } from "@/components/ui/spinner"

const images = [
  {
    name: "workspace.png",
    meta: "PNG · 820 KB",
    src: "data:image/svg+xml,%3Csvg%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%20width%3D'160'%20height%3D'160'%3E%3Crect%20width%3D'160'%20height%3D'160'%20fill%3D'%23e4e4e7'%2F%3E%3C%2Fsvg%3E",
    alt: "Workspace",
  },
  {
    name: "desk-reference.jpg",
    meta: "JPG · 1.1 MB",
    src: "data:image/svg+xml,%3Csvg%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%20width%3D'160'%20height%3D'160'%3E%3Crect%20width%3D'160'%20height%3D'160'%20fill%3D'%23e4e4e7'%2F%3E%3C%2Fsvg%3E",
    alt: "Desk",
  },
  {
    name: "office-reference.jpg",
    meta: "JPG · 940 KB",
    src: "data:image/svg+xml,%3Csvg%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%20width%3D'160'%20height%3D'160'%3E%3Crect%20width%3D'160'%20height%3D'160'%20fill%3D'%23e4e4e7'%2F%3E%3C%2Fsvg%3E",
    alt: "Office",
  },
]

export function AttachmentDemo() {
  return (
    <div className="mx-auto flex w-full max-w-sm flex-col gap-3 py-12">
      <AttachmentGroup>
        {images.map((image) => (
          <Attachment key={image.name} orientation="vertical">
            <AttachmentMedia variant="image">
              <img src={image.src} alt={image.alt} />
            </AttachmentMedia>
            <AttachmentContent>
              <AttachmentTitle>{image.name}</AttachmentTitle>
              <AttachmentDescription>{image.meta}</AttachmentDescription>
            </AttachmentContent>
          </Attachment>
        ))}
      </AttachmentGroup>
      <Attachment state="uploading" className="w-full">
        <AttachmentMedia>
          <Spinner />
        </AttachmentMedia>
        <AttachmentContent>
          <AttachmentTitle>sales-dashboard.pdf</AttachmentTitle>
          <AttachmentDescription>Uploading · 64%</AttachmentDescription>
        </AttachmentContent>
        <AttachmentActions>
          <AttachmentAction aria-label="Cancel upload">
            <XIcon />
          </AttachmentAction>
        </AttachmentActions>
      </Attachment>
      <Attachment className="w-full">
        <AttachmentMedia>
          <FileCodeIcon />
        </AttachmentMedia>
        <AttachmentContent>
          <AttachmentTitle>message-renderer.tsx</AttachmentTitle>
          <AttachmentDescription>TypeScript · 12 KB</AttachmentDescription>
        </AttachmentContent>
        <AttachmentActions>
          <AttachmentAction aria-label="Remove message-renderer.tsx">
            <XIcon />
          </AttachmentAction>
        </AttachmentActions>
      </Attachment>
    </div>
  )
}
