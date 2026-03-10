import { Outlet, ScrollRestoration } from "react-router-dom"
import Navbar from "./components/AppBar/NavBar"
import Footer from "./components/Landing/components/Footer/Footer"
import { NotificationProvider } from "./components/Notification/NotificationProvider"
import AppBreadcrumbs from "./components/Common/BreadCrumbs"

const Layout = () => {
  return (
    <div className="app-shell">
      <NotificationProvider />
      <Navbar />
      <AppBreadcrumbs /> 
      <ScrollRestoration />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}

export default Layout
