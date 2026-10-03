import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import { BrowserRouter } from "react-router"

import { ThemeProvider } from "@/components/theme-provider"
import { Toaster } from "@/components/ui/toast"
import { TooltipProvider } from "@/components/ui/tooltip"
import App from "@/App"

import "./index.css"

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider defaultTheme="light">
      <TooltipProvider>
        <Toaster>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </Toaster>
      </TooltipProvider>
    </ThemeProvider>
  </StrictMode>,
)
