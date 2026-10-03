export type CatalogItem = {
  slug: string
  title: string
  description: string
  isNew?: boolean
  align?: "start" | "center"
  iframe?: boolean
}

export const components: CatalogItem[] = [
  { slug: "accordion", title: "Accordion", description: "A vertically stacked set of interactive headings that each reveal a section of content." },
  { slug: "alert", title: "Alert", description: "Displays a callout for user attention." },
  { slug: "alert-dialog", title: "Alert Dialog", description: "A modal dialog that interrupts the user with important content and expects a response." },
  { slug: "aspect-ratio", title: "Aspect Ratio", description: "Displays content within a desired ratio." },
  { slug: "attachment", title: "Attachment", description: "Displays a file or image attachment with media, metadata, upload state, and actions." },
  { slug: "avatar", title: "Avatar", description: "An image element with a fallback for representing the user." },
  { slug: "badge", title: "Badge", description: "Displays a badge or a component that looks like a badge." },
  { slug: "breadcrumb", title: "Breadcrumb", description: "Displays the path to the current resource using a hierarchy of links." },
  { slug: "bubble", title: "Bubble", description: "Displays conversational content in a message bubble. Supports variants, alignment, grouping, reactions, and collapsible content." },
  { slug: "button", title: "Button", description: "Displays a button or a component that looks like a button." },
  { slug: "button-group", title: "Button Group", description: "A container that groups related buttons together with consistent styling." },
  { slug: "calendar", title: "Calendar", description: "A calendar component that allows users to select a date or a range of dates." },
  { slug: "card", title: "Card", description: "Displays a card with header, content, and footer." },
  { slug: "carousel", title: "Carousel", description: "A carousel with motion and swipe built using Embla." },
  { slug: "chart", title: "Chart", description: "Beautiful charts. Built using Recharts. Copy and paste into your apps.", align: "start" },
  { slug: "checkbox", title: "Checkbox", description: "A control that allows the user to toggle between checked and not checked." },
  { slug: "collapsible", title: "Collapsible", description: "An interactive component which expands/collapses a panel." },
  { slug: "combobox", title: "Combobox", description: "Autocomplete input with a list of suggestions." },
  { slug: "command", title: "Command", description: "Command menu for search and quick actions." },
  { slug: "context-menu", title: "Context Menu", description: "Displays a menu of actions triggered by a right click." },
  { slug: "data-table", title: "Data Table", description: "Powerful table and datagrids built using TanStack Table.", align: "start" },
  { slug: "date-picker", title: "Date Picker", description: "A date picker component with range and presets." },
  { slug: "dialog", title: "Dialog", description: "A window overlaid on either the primary window or another dialog window, rendering the content underneath inert." },
  { slug: "direction", title: "Direction", description: "A provider component that sets the text direction for your application." },
  { slug: "drawer", title: "Drawer", description: "A drawer component for React." },
  { slug: "dropdown-menu", title: "Dropdown Menu", description: "Displays a menu to the user — such as a set of actions or functions — triggered by a button." },
  { slug: "empty", title: "Empty", description: "Use the Empty component to display an empty state." },
  { slug: "field", title: "Field", description: "Combine labels, controls, and help text to compose accessible form fields and grouped inputs.", align: "start" },
  { slug: "hover-card", title: "Hover Card", description: "For sighted users to preview content available behind a link." },
  { slug: "input", title: "Input", description: "A text input component for forms and user data entry with built-in styling and accessibility features." },
  { slug: "input-group", title: "Input Group", description: "Add addons, buttons, and helper content to inputs." },
  { slug: "input-otp", title: "Input Otp", description: "Accessible one-time password component with copy-paste functionality." },
  { slug: "item", title: "Item", description: "A versatile component for displaying content with media, title, description, and actions." },
  { slug: "kbd", title: "Kbd", description: "Used to display textual user input from keyboard." },
  { slug: "label", title: "Label", description: "Renders an accessible label associated with controls." },
  { slug: "marker", title: "Marker", description: "Displays an inline status, system note, bordered row, or labeled separator in a conversation." },
  { slug: "menubar", title: "Menubar", description: "A visually persistent menu common in desktop applications that provides quick access to a consistent set of commands." },
  { slug: "message", title: "Message", description: "Displays a message in a conversation, with optional avatar, header, footer, and alignment." },
  { slug: "message-scroller", title: "Message Scroller", description: "A chat scroll container that anchors turns, opens saved transcripts, follows streamed responses, loads history without jumping, and jumps to any message." },
  { slug: "native-select", title: "Native Select", description: "A styled native HTML select element with consistent design system integration." },
  { slug: "navigation-menu", title: "Navigation Menu", description: "A collection of links for navigating websites.", align: "start" },
  { slug: "pagination", title: "Pagination", description: "Pagination with page navigation, next and previous links." },
  { slug: "popover", title: "Popover", description: "Displays rich content in a portal, triggered by a button." },
  { slug: "progress", title: "Progress", description: "Displays an indicator showing the completion progress of a task, typically displayed as a progress bar." },
  { slug: "questionnaire", title: "Questionnaire", description: "A multi-step questionnaire with single-choice, multiple-choice, freeform, and skippable questions.", isNew: true },
  { slug: "radio-group", title: "Radio Group", description: "A set of checkable buttons—known as radio buttons—where no more than one of the buttons can be checked at a time." },
  { slug: "resizable", title: "Resizable", description: "Accessible resizable panel groups and layouts with keyboard support." },
  { slug: "scroll-area", title: "Scroll Area", description: "Augments native scroll functionality for custom, cross-browser styling." },
  { slug: "select", title: "Select", description: "Displays a list of options for the user to pick from—triggered by a button." },
  { slug: "separator", title: "Separator", description: "Visually or semantically separates content." },
  { slug: "sheet", title: "Sheet", description: "Extends the Dialog component to display content that complements the main content of the screen." },
  { slug: "sidebar", title: "Sidebar", description: "A composable, themeable and customizable sidebar component.", iframe: true },
  { slug: "skeleton", title: "Skeleton", description: "Use to show a placeholder while content is loading." },
  { slug: "slider", title: "Slider", description: "An input where the user selects a value from within a given range." },
  { slug: "spinner", title: "Spinner", description: "An indicator that can be used to show a loading state." },
  { slug: "switch", title: "Switch", description: "A control that allows the user to toggle between checked and not checked." },
  { slug: "table", title: "Table", description: "A responsive table component.", align: "start" },
  { slug: "tabs", title: "Tabs", description: "A set of layered sections of content—known as tab panels—that are displayed one at a time." },
  { slug: "textarea", title: "Textarea", description: "Displays a form textarea or a component that looks like a textarea." },
  { slug: "toast", title: "Toast", description: "A succinct message that is displayed temporarily." },
  { slug: "toggle", title: "Toggle", description: "A two-state button that can be either on or off." },
  { slug: "toggle-group", title: "Toggle Group", description: "A set of two-state buttons that can be toggled on or off." },
  { slug: "tooltip", title: "Tooltip", description: "A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it." },
  { slug: "typography", title: "Typography", description: "Styles for headings, paragraphs, lists, etc.", align: "start" },
]

export function getComponent(slug: string) {
  return components.find((component) => component.slug === slug)
}
