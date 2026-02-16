import { Outlet, ScrollRestoration } from "react-router-dom"
import Navbar from "./components/AppBar/NavBar"
import Footer from "./components/Landing/components/Footer/Footer"
import { NotificationProvider } from "./components/Notification/NotificationProvider"

const Layout = () => {
  return (
    <div className="app-shell">
      <NotificationProvider />
      <Navbar />
      <ScrollRestoration />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}

export default Layout
