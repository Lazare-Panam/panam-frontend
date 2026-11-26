import { lazy, Suspense } from "react"
import { Outlet, ScrollRestoration, useLocation } from "react-router-dom"
import { Box } from "@mui/material"
import Navbar from "./components/AppBar/NavBar"
import Footer from "./components/Landing/components/Footer/Footer"
import { NotificationProvider } from "./components/Notification/NotificationProvider"
import AppBreadcrumbs from "./components/Common/BreadCrumbs"
import StickyQuoteButton from "./components/Common/StickyQuoteButton"
import WhatsAppButton from "./components/Common/WhatsAppButton"
import LeadCapturePopup from "./components/LeadCapture/LeadCapturePopup"
import ChatWidget from "./components/Chatbot/ChatWidget"
import BrowseSectionButton from "./components/Common/BrowseSectionButton"
import { GRADIENT } from "./components/Landing2/homeTokens"

// Lazy so the full product directory (and its data) only loads on the pages below, not sitewide.
const UsefulLinks = lazy(() => import("./components/Common/UsefulLinks"))

// Product sections whose category pages carry a server-rendered part-number directory (UsefulLinks)
// above the footer, so category pages link to their SKU pages (their grids are client-rendered). The
// component self-gates to the exact category path; gating by prefix here keeps the product-data chunk
// off unrelated pages. These are the statically-prerendered SKU families (see productRoutes).
const SKU_LINK_PREFIXES = ["/high-pressure", "/filters"]

// Pages that open with the light-blue hero background. The breadcrumb strip gets the same background on these,
// so it flows into the hero instead of leaving a white band with a hard edge above it.
const LIGHT_HERO_PATHS = new Set(["/products", "/enquiry", "/resources", "/blog", "/login", "/register", "/about", "/leave-a-review", "/credit-application", "/high-pressure", "/instrumentation-fittings"])

const Layout = () => {
  const { pathname } = useLocation()
  const cleanPath = pathname.replace(/\/+$/, "") || "/"
  const showUsefulLinks = SKU_LINK_PREFIXES.some(p => cleanPath.startsWith(p))
  const lightHero = LIGHT_HERO_PATHS.has(cleanPath)
//
  return (
    <div className="app-shell">
      <NotificationProvider />
      <Navbar />
      <Box sx={lightHero ? { background: GRADIENT.heroBg, backgroundSize: "100% 1000px", backgroundRepeat: "no-repeat" } : undefined}>
        <AppBreadcrumbs />
      </Box> 
      <ScrollRestoration />
      <main>
        <Outlet />
      </main>
      <BrowseSectionButton />
      {showUsefulLinks && (
        <Suspense fallback={null}>
          <UsefulLinks />
        </Suspense>
      )}
      <Footer />
      <StickyQuoteButton />
      <WhatsAppButton />
      <ChatWidget />
      <LeadCapturePopup />
    </div>
  )
}

export default Layout
