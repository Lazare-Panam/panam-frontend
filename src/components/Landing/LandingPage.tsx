import Carousel from "./components/Carousel/Carousel"
import IntroSection from "./components/Intro/Intro"
import FeatureSection from "./components/FeatureSection/FeatureSection"
import PartnersCarousel from "./components/Carousel/PartnersCarousel"
import ScrollReveal from "../Common/ScrollReveal"

import ProductApplications from "./components/ProductApplications.tsx/ProductApplications"
import ProductResources from "./components/FeatureSection/ProductResources"

const LandingPage = () => {
  return (
    <div style={containerStyle}>
      <div style={watermarkStyle} />
      <div style={{ position: "relative", zIndex: 1 }}>
        <Carousel />
        <ScrollReveal>
          <IntroSection />
        </ScrollReveal>
        <ScrollReveal delay={0.2}>
          <FeatureSection />
        </ScrollReveal>
        <ScrollReveal delay={0.2}>
          <ProductApplications />
        </ScrollReveal>
       <div id="resources" style={{ scrollMarginTop: "80px" }}>
  <ScrollReveal delay={0.2}>
    <ProductResources />
  </ScrollReveal>
</div>
        <ScrollReveal delay={0.2}>
          <PartnersCarousel />
        </ScrollReveal>
      </div>
    </div>
  )
}

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
  backgroundImage: `url("https://res.cloudinary.com/dm9rmmemx/image/upload/v1770824294/Hanuman_Image_gq2kct.jpg")`,
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  filter: "brightness(1.1) contrast(0.8) grayscale(1) blur(4px)",
  opacity: 0.07,
  mixBlendMode: "multiply",
  pointerEvents: "none",
}

export default LandingPage
