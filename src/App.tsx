import { createBrowserRouter } from "react-router-dom"
import { lazy, Suspense } from "react"
import LandingPage from "./components/Landing/LandingPage"
import Layout from "./Layout"
import News from "./components/News/News"
import Contact from "./components/Contact/Contact"
import LoadingScreen from "./components/Loading/LoadingScreen"
import ProductPage from "./components/All_Categories/ProductPage"
import NotFound from "./components/Error/NotFound"
import ErrorPage from "./components/Error/ErrorPage"
import CartPage from "./components/Cart/CartPage"

const ProductGallery = lazy(() => import("./components/Product_Gallery/components/ProductGallery"))
const AboutUs = lazy(() => import("./components/About_Us/AboutUs"))
const Industries = lazy(() => import("./components/Industries/Industries"))

// Shared routes array - safe to import in Node (no browser APIs)
export const routes = [
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <LandingPage /> },
      { path: "products", element: <Suspense fallback={<LoadingScreen />}><ProductPage /></Suspense> },
      { path: "products/:id", element: <Suspense fallback={<LoadingScreen />}><ProductGallery /></Suspense> },
      { path: "about", element: <Suspense fallback={<LoadingScreen />}><AboutUs /></Suspense> },
      { path: "industries", element: <Suspense fallback={<LoadingScreen />}><Industries /></Suspense> },
      { path: "news", element: <Suspense fallback={<LoadingScreen />}><News /></Suspense> },
      { path: "contact", element: <Suspense fallback={<LoadingScreen />}><Contact /></Suspense> },
      { path: "cart", element: <Suspense fallback={<LoadingScreen />}><CartPage /></Suspense> },
      { path: "*", element: <NotFound /> },
    ],
  },
]

// createBrowserRouter is only called in main.tsx (browser only), never here
export function createRouter() {
  return createBrowserRouter(routes)
}

function App() {
  return null
}

export default App