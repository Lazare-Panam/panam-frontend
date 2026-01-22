import Navbar from "../AppBar/NavBar"
import Carousel from "./components/Carousel/Carousel"
import IntroSection from "./components/Intro/Intro"
import Commitments from "./components/Commitments/Commitments"
import FeatureSection from "./components/FeatureSection/FeatureSection"
import Footer from "./components/Footer/Footer"
const LandingPage = () => {
  return (
    <>
      <Navbar />
      <Carousel />
      <IntroSection />
      <FeatureSection />
      <Commitments />
      <Footer />
    </>
  )
}
export default LandingPage
