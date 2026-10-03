import { useState, type FormEvent } from "react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  Message,
  MessageContent,
} from "@/components/ui/message"
import {
  MessageScroller,
  MessageScrollerButton,
  MessageScrollerContent,
  MessageScrollerItem,
  MessageScrollerProvider,
  MessageScrollerViewport,
} from "@/components/ui/message-scroller"
import { Bubble, BubbleContent } from "@/components/ui/bubble"

type ChatMessage = {
  id: string
  align: "start" | "end"
  text: string
}

const starter: ChatMessage[] = [
  {
    id: "1",
    align: "end",
    text: "The thread jumps every time a reply streams in.",
  },
  {
    id: "2",
    align: "start",
    text: "Pin the viewport to the bottom while the reader is already there. If they scroll up, leave them where they are.",
  },
]

export function MessageScrollerDemo() {
  const [messages, setMessages] = useState<ChatMessage[]>(starter)
  const [draft, setDraft] = useState("")

  function sendMessage(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const text = draft.trim()
    if (!text) {
      return
    }

    setMessages((current) => [
      ...current,
      { id: String(current.length + 1), align: "end", text },
    ])
    setDraft("")
  }

  return (
    <MessageScrollerProvider autoScroll>
      <div className="mx-auto flex h-96 w-full max-w-sm flex-col gap-3">
        <MessageScroller className="min-h-0 flex-1 rounded-xl border">
          <MessageScrollerViewport>
            <MessageScrollerContent className="p-4">
              {messages.map((message) => (
                <MessageScrollerItem key={message.id}>
                  <Message align={message.align}>
                    <MessageContent>
                      <Bubble
                        variant={message.align === "end" ? "default" : "muted"}
                      >
                        <BubbleContent>{message.text}</BubbleContent>
                      </Bubble>
                    </MessageContent>
                  </Message>
                </MessageScrollerItem>
              ))}
            </MessageScrollerContent>
          </MessageScrollerViewport>
          <MessageScrollerButton />
        </MessageScroller>
        <form className="flex gap-2" onSubmit={sendMessage}>
          <Input
            value={draft}
            onChange={(event) => setDraft(event.target.value)}
            placeholder="Write a message"
            aria-label="Message"
          />
          <Button type="submit">Send</Button>
        </form>
      </div>
    </MessageScrollerProvider>
  )
}
