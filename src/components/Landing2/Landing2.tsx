import ContactBanner from "./components/ContactBanner"
import CoreProducts from "./components/CoreProducts"
import Hero2 from "./components/Hero2"
import HydrogenSection from "./components/HydrogenSection"
import IndustriesSection from "./components/IndustriesSection"
import PartnersSection from "./components/PartnersSection"
import TechnicalSupport from "./components/TechnicalSupport"
import Ticker from "./components/Ticker"
const Landing2 = () => {
    return(
        <>
        <Hero2/>
        <Ticker/>
        <CoreProducts/>
        <IndustriesSection/>
        <HydrogenSection/>
        <TechnicalSupport/>
        <PartnersSection/>
        <ContactBanner/>
        </>
    )
}
export default Landing2