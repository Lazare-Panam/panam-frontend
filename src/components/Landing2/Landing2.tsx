import ContactBanner from "./components/ContactBanner"
import CoreProducts from "./components/CoreProducts"
import Hero2 from "./components/Hero2"
import HydrogenSection from "./components/HydrogenSection"
import IndustriesSection from "./components/IndustriesSection"
import MovingBanner from "./components/LiveInventory"
import PartnersSection from "./components/PartnersSection"
import SEOSection from "./components/SEOSection"
import TechnicalSupport from "./components/TechnicalSupport"
import Ticker from "./components/Ticker"
const Landing2 = () => {
  return (
    <>
      <title>PANAM® UK | Top Valve Manufacture for every fit</title>
      <meta name="description" content="Precision valves, manifolds and fittings for hydrogen, oil & gas and industrial applications. UK stock, fast dispatch and full technical support." />
      <Hero2 />
      <Ticker />
      <SEOSection/>
      <MovingBanner/>
      <CoreProducts />
      <IndustriesSection />
      <HydrogenSection />
      <TechnicalSupport />
      <PartnersSection />
      <ContactBanner />
    </>
  )
}
export default Landing2
