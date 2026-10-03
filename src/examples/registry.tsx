import type { ComponentType } from "react"

import AccordionDemo from "@/examples/accordion-demo"
import AlertDemo from "@/examples/alert-demo"
import AlertDialogDemo from "@/examples/alert-dialog-demo"
import AspectRatioDemo from "@/examples/aspect-ratio-demo"
import { AttachmentDemo } from "@/examples/attachment-demo"
import AvatarDemo from "@/examples/avatar-demo"
import BadgeDemo from "@/examples/badge-demo"
import { BreadcrumbDemo } from "@/examples/breadcrumb-demo"
import { BubbleDemo } from "@/examples/bubble-demo"
import ButtonDemo from "@/examples/button-demo"
import ButtonGroupDemo from "@/examples/button-group-demo"
import CalendarDemo from "@/examples/calendar-demo"
import CardDemo from "@/examples/card-demo"
import CarouselDemo from "@/examples/carousel-demo"
import { ChartDemo } from "@/examples/chart-demo"
import CheckboxDemo from "@/examples/checkbox-demo"
import CollapsibleDemo from "@/examples/collapsible-demo"
import ComboboxBasic from "@/examples/combobox-demo"
import { CommandDemo } from "@/examples/command-demo"
import { ContextMenuDemo } from "@/examples/context-menu-demo"
import { DataTableDemo } from "@/examples/data-table-demo"
import { DatePickerDemo } from "@/examples/date-picker-demo"
import { DialogDemo } from "@/examples/dialog-demo"
import { DirectionDemo } from "@/examples/direction-demo"
import { DrawerDemo } from "@/examples/drawer-demo"
import { DropdownMenuDemo } from "@/examples/dropdown-menu-demo"
import EmptyDemo from "@/examples/empty-demo"
import FieldDemo from "@/examples/field-demo"
import HoverCardDemo from "@/examples/hover-card-demo"
import { InputDemo } from "@/examples/input-demo"
import { InputGroupDemo } from "@/examples/input-group-demo"
import { InputOTPDemo } from "@/examples/input-otp-demo"
import { ItemDemo } from "@/examples/item-demo"
import KbdDemo from "@/examples/kbd-demo"
import LabelDemo from "@/examples/label-demo"
import { MarkerDemo } from "@/examples/marker-demo"
import MenubarDemo from "@/examples/menubar-demo"
import { MessageDemo } from "@/examples/message-demo"
import { MessageScrollerDemo } from "@/examples/message-scroller-demo"
import NativeSelectDemo from "@/examples/native-select-demo"
import NavigationMenuDemo from "@/examples/navigation-menu-demo"
import PaginationDemo from "@/examples/pagination-demo"
import PopoverDemo from "@/examples/popover-demo"
import ProgressDemo from "@/examples/progress-demo"
import { QuestionnaireDemo } from "@/examples/questionnaire-demo"
import { RadioGroupDemo } from "@/examples/radio-group-demo"
import ResizableDemo from "@/examples/resizable-demo"
import { ScrollAreaDemo } from "@/examples/scroll-area-demo"
import { SelectDemo } from "@/examples/select-demo"
import SeparatorDemo from "@/examples/separator-demo"
import SheetDemo from "@/examples/sheet-demo"
import AppSidebar from "@/examples/sidebar-demo"
import { SkeletonDemo } from "@/examples/skeleton-demo"
import { SliderDemo } from "@/examples/slider-demo"
import { SpinnerDemo } from "@/examples/spinner-demo"
import { SwitchDemo } from "@/examples/switch-demo"
import { TableDemo } from "@/examples/table-demo"
import { TabsDemo } from "@/examples/tabs-demo"
import TextareaDemo from "@/examples/textarea-demo"
import { ToastDemo } from "@/examples/toast-demo"
import { ToggleDemo } from "@/examples/toggle-demo"
import { ToggleGroupDemo } from "@/examples/toggle-group-demo"
import { TooltipDemo } from "@/examples/tooltip-demo"
import { TypographyDemo } from "@/examples/typography-demo"

export const examples: Record<string, ComponentType> = {
  "accordion": AccordionDemo,
  "alert": AlertDemo,
  "alert-dialog": AlertDialogDemo,
  "aspect-ratio": AspectRatioDemo,
  "attachment": AttachmentDemo,
  "avatar": AvatarDemo,
  "badge": BadgeDemo,
  "breadcrumb": BreadcrumbDemo,
  "bubble": BubbleDemo,
  "button": ButtonDemo,
  "button-group": ButtonGroupDemo,
  "calendar": CalendarDemo,
  "card": CardDemo,
  "carousel": CarouselDemo,
  "chart": ChartDemo,
  "checkbox": CheckboxDemo,
  "collapsible": CollapsibleDemo,
  "combobox": ComboboxBasic,
  "command": CommandDemo,
  "context-menu": ContextMenuDemo,
  "data-table": DataTableDemo,
  "date-picker": DatePickerDemo,
  "dialog": DialogDemo,
  "direction": DirectionDemo,
  "drawer": DrawerDemo,
  "dropdown-menu": DropdownMenuDemo,
  "empty": EmptyDemo,
  "field": FieldDemo,
  "hover-card": HoverCardDemo,
  "input": InputDemo,
  "input-group": InputGroupDemo,
  "input-otp": InputOTPDemo,
  "item": ItemDemo,
  "kbd": KbdDemo,
  "label": LabelDemo,
  "marker": MarkerDemo,
  "menubar": MenubarDemo,
  "message": MessageDemo,
  "message-scroller": MessageScrollerDemo,
  "native-select": NativeSelectDemo,
  "navigation-menu": NavigationMenuDemo,
  "pagination": PaginationDemo,
  "popover": PopoverDemo,
  "progress": ProgressDemo,
  "questionnaire": QuestionnaireDemo,
  "radio-group": RadioGroupDemo,
  "resizable": ResizableDemo,
  "scroll-area": ScrollAreaDemo,
  "select": SelectDemo,
  "separator": SeparatorDemo,
  "sheet": SheetDemo,
  "sidebar": AppSidebar,
  "skeleton": SkeletonDemo,
  "slider": SliderDemo,
  "spinner": SpinnerDemo,
  "switch": SwitchDemo,
  "table": TableDemo,
  "tabs": TabsDemo,
  "textarea": TextareaDemo,
  "toast": ToastDemo,
  "toggle": ToggleDemo,
  "toggle-group": ToggleGroupDemo,
  "tooltip": TooltipDemo,
  "typography": TypographyDemo,
}
