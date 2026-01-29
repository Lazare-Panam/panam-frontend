import { Routes, Route } from "react-router-dom"
import { lazy, Suspense } from "react"
import LandingPage from "./components/Landing/LandingPage"
import Layout from "./Layout"

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
            <Suspense fallback={<div>Loading...</div>}>
              <AllCategories />
            </Suspense>
          }
        />
        <Route
          path="/products/:id"
          element={
            <Suspense fallback={<div>Loading...</div>}>
              <ProductGallery />
            </Suspense>
          }
        />
        <Route
          path="/about"
          element={
            <Suspense fallback={<div>Loading...</div>}>
              <AboutUs />
            </Suspense>
          }
        />
        <Route
          path="/industries"
          element={
            <Suspense fallback={<div>Loading...</div>}>
              <Industries />
            </Suspense>
          }
        />
      </Route>
    </Routes>
  )
}

export default App
