import { createBrowserRouter } from "react-router-dom"
import { lazy, Suspense } from "react"
import LandingPage from "./components/Landing/LandingPage"
import Layout from "./Layout"
import News from "./components/News/News"
import Contact from "./components/Contact/Contact"
import LoadingScreen from "./components/Loading/LoadingScreen"

// Lazy load components for better performance
const AllCategories = lazy(() => import("./components/All_Categories/components/AllCategories"))
const ProductGallery = lazy(() => import("./components/Product_Gallery/components/ProductGallery"))
const AboutUs = lazy(() => import("./components/About_Us/AboutUs"))
const Industries = lazy(() => import("./components/Industries/Industries"))

// We define the router using the Data API.
// This allows <ScrollRestoration /> in Layout.tsx to function.
export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true, // This makes LandingPage the default for the "/" path
        element: <LandingPage />,
      },
      {
        path: "products",
        element: (
          <Suspense fallback={<LoadingScreen />}>
            <AllCategories />
          </Suspense>
        ),
      },
      {
        path: "products/:id",
        element: (
          <Suspense fallback={<LoadingScreen />}>
            <ProductGallery />
          </Suspense>
        ),
      },
      {
        path: "about",
        element: (
          <Suspense fallback={<LoadingScreen />}>
            <AboutUs />
          </Suspense>
        ),
      },
      {
        path: "industries",
        element: (
          <Suspense fallback={<LoadingScreen />}>
            <Industries />
          </Suspense>
        ),
      },
      {
        path: "news",
        element: (
          <Suspense fallback={<LoadingScreen />}>
            <News />
          </Suspense>
        ),
      },
      {
        path: "contact",
        element: (
          <Suspense fallback={<LoadingScreen />}>
            <Contact />
          </Suspense>
        ),
      },
    ],
  },
])

// In the Data Router pattern, the App component itself isn't strictly
// necessary for rendering, but we keep the export default for clean project structure.
function App() {
  return null
}

export default App
