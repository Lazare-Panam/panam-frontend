import { Routes, Route } from "react-router-dom"
import { lazy, Suspense } from "react"
import LandingPage from "./components/Landing/LandingPage"
import Layout from "./Layout"
import News from "./components/News/News"
import Contact from "./components/Contact/Contact"
import LoadingScreen from "./components/Loading/LoadingScreen"
// Lazy load these pages
const AllCategories = lazy(() => import("./components/All_Categories/components/AllCategories"))
const ProductGallery = lazy(() => import("./components/Product_Gallery/components/ProductGallery"))
const AboutUs = lazy(() => import("./components/About_Us/AboutUs"))
const Industries = lazy(() => import("./components/Industries/Industries"))

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<LandingPage />} />
        <Route
          path="/products"
          element={
            <Suspense fallback={<LoadingScreen />}>
              <AllCategories />
            </Suspense>
          }
        />
        <Route
          path="/products/:id"
          element={
            <Suspense fallback={<LoadingScreen />}>
              <ProductGallery />
            </Suspense>
          }
        />
        <Route
          path="/about"
          element={
            <Suspense fallback={<LoadingScreen />}>
              <AboutUs />
            </Suspense>
          }
        />
        <Route
          path="/industries"
          element={
            <Suspense fallback={<LoadingScreen />}>
              <Industries />
            </Suspense>
          }
        />
        <Route
          path="/news"
          element={
            <Suspense fallback={<LoadingScreen />}>
              <News />
            </Suspense>
          }
        />
        <Route
          path="/contact"
          element={
            <Suspense fallback={<LoadingScreen />}>
              <Contact />
            </Suspense>
          }
        />
      </Route>
    </Routes>
  )
}

export default App
