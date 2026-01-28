import { Routes, Route } from "react-router-dom"
import AllCategories from "./components/All_Categories/components/AllCategories"
import ProductGallery from "./components/Product_Gallery/components/ProductGallery"
import LandingPage from "./components/Landing/LandingPage"
import AboutUs from "./components/About_Us/AboutUs"
import Layout from "./Layout"
import Industries from "./components/Industries/Industries"
function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<LandingPage />} />
        <Route path="/products" element={<AllCategories />} />
        <Route path="/products/:id" element={<ProductGallery />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/industries" element={<Industries />} />
      </Route>
    </Routes>
  )
}

export default App
