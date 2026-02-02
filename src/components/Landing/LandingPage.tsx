import Carousel from "./components/Carousel/Carousel"
import IntroSection from "./components/Intro/Intro"
import FeatureSection from "./components/FeatureSection/FeatureSection"
import PartnersCarousel from "./components/Carousel/PartnersCarousel"
import ScrollReveal from "../Common/ScrollReveal"
import ProductApplications from "./components/ProductApplications.tsx/ProductApplications"

const LandingPage = () => {
  return (
    <>
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

      <ScrollReveal delay={0.2}>
        <PartnersCarousel />
      </ScrollReveal>
    </>
  )
}
export default LandingPage
