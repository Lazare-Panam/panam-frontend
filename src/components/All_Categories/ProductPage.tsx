import HeroSection from "../Common/HeroSection"
import AllCategories from "./components/AllCategories"

const ProductPage = () => {
  return (
    <>
      <HeroSection
        overline="COMPREHENSIVE SOLUTIONS"
        titleMain="Engineering Excellence"
        titleAccent="Across"
        titleEnd="Applications."
        description="Explore our full range of high-performance instrumentation valves and fittings. Designed for absolute integrity, Panam components are the backbone of critical flow control systems worldwide."
        backgroundImage="https://res.cloudinary.com/dm9rmmemx/image/upload/v1769772200/encata-pd-SRqJ3eli-4I-unsplash_jgpfgl.jpg"
      />
      <AllCategories />
    </>
  )
}
export default ProductPage
