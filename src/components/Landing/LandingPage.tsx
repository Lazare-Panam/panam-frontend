import Carousel from "./components/Carousel/Carousel"
import IntroSection from "./components/Intro/Intro"
import Commitments from "./components/Commitments/Commitments"
import FeatureSection from "./components/FeatureSection/FeatureSection"

const LandingPage = () => {
  return (
    <>
      <Carousel />
      <IntroSection />
      <FeatureSection />
      <Commitments />
      {/* <GetConnected /> */}
    </>
  )
}
export default LandingPage
