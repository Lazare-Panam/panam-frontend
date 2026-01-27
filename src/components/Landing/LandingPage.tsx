import Carousel from "./components/Carousel/Carousel"
import IntroSection from "./components/Intro/Intro"
import Commitments from "./components/Commitments/Commitments"
import FeatureSection from "./components/FeatureSection/FeatureSection"
import PartnersCarousel from "./components/Carousel/PartnersCarousel"
const LandingPage = () => {
  return (
    <>
      <Carousel />
      <IntroSection />
      <FeatureSection />
      <Commitments />
      <PartnersCarousel />
      {/* <GetConnected /> */}
    </>
  )
}
export default LandingPage
