import { Outlet, ScrollRestoration } from "react-router-dom"
import Navbar from "./components/AppBar/NavBar"
import Footer from "./components/Landing/components/Footer/Footer"

const Layout = () => {
  return (
    <div className="app-shell">
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
