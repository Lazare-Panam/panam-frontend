import { lazy, Suspense } from "react"
import { Outlet, ScrollRestoration, useLocation } from "react-router-dom"
import Navbar from "./components/AppBar/NavBar"
import Footer from "./components/Landing/components/Footer/Footer"
import { NotificationProvider } from "./components/Notification/NotificationProvider"
import AppBreadcrumbs from "./components/Common/BreadCrumbs"
import StickyQuoteButton from "./components/Common/StickyQuoteButton"
import BrowseSectionButton from "./components/Common/BrowseSectionButton"

// Lazy so the full product directory (and its data) only loads on the pages below, not sitewide.
const UsefulLinks = lazy(() => import("./components/Common/UsefulLinks"))

// Low-traffic pages that get the "Useful Links" product directory above the footer, to spread
// internal links to product pages across more of the site than just /product-index.
const USEFUL_LINKS_PATHS = new Set([
  "/about",
  "/industries",
  "/industries/marine-subsea",
  "/industries/oil-gas",
  "/industries/hydrogen",
  "/industries/aerospace-defense",
  "/industries/chemicals-petrochemical",
  "/industries/food-beverages",
  "/blog/panam-valves-rg-fluid-power-partnership",
  "/blog/double-blog-and-bleed",
  "/blog/hydrogen-blog",
  "/blog/swivel-gauge-blog",
  "/blog/check-valves-blog",
])

const Layout = () => {
  const { pathname } = useLocation()
  const showUsefulLinks = USEFUL_LINKS_PATHS.has(pathname.replace(/\/+$/, "") || "/")

  return (
    <div className="app-shell">
      <NotificationProvider />
      <Navbar />
      <AppBreadcrumbs />
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
    </div>
  )
}

export default Layout
