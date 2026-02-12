import HeroSection from "../Common/HeroSection"
import AllCategories from "./components/AllCategories"

const ProductPage = () => {
  return (
    <div style={containerStyle}>
      <div style={watermarkStyle} />
      <div style={{ position: "relative", zIndex: 1 }}>
        <HeroSection
          overline="COMPREHENSIVE SOLUTIONS"
          titleMain="Engineering Excellence"
          titleAccent="Across"
          titleEnd="Applications."
          description="Explore our full range of high-performance instrumentation valves and fittings. Designed for absolute integrity, Panam components are the backbone of critical flow control systems worldwide."
          backgroundImage="https://res.cloudinary.com/dm9rmmemx/image/upload/v1769772200/encata-pd-SRqJ3eli-4I-unsplash_jgpfgl.jpg"
        />
        <AllCategories />
      </div>
    </div>
  )
}

// Exactly the styles you requested
const containerStyle: React.CSSProperties = {
  position: "relative",
  width: "100%",
  minHeight: "100vh",
  backgroundColor: "#ffffff", 
}

const watermarkStyle: React.CSSProperties = {
  position: "fixed",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  zIndex: 0,
  backgroundImage: `url("https://res.cloudinary.com/dm9rmmemx/image/upload/v1770828489/3e23e20e-56fd-4194-87f9-318349186f1d_xxoxyc.jpg")`,
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  filter: "brightness(1.1) contrast(0.8) grayscale(1) blur(11px)", 
  opacity: 0.07, 
  mixBlendMode: "multiply", 
  pointerEvents: "none",
}

export default ProductPage