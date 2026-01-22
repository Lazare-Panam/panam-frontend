import { Routes, Route } from "react-router-dom"
import AllCategories from "./components/All_Categories/components/AllCategories"
import ProductGallery from "./components/Product_Gallery/components/ProductGallery"
import LandingPage from "./components/Landing/LandingPage"
function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/products" element={<AllCategories />} />
      <Route path="/products/:id" element={<ProductGallery />} />
    </Routes>
  )
}

export default App
