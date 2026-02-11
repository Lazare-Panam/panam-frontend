import CorporatePillars from "./components/CorporatePillars"
import BusinessOverview from "./components/BusinessOverview"
import GlobalReachMetrics from "./components/GlobalReact"
import HeroSection from "../Common/HeroSection"
import ScrollReveal from "../Common/ScrollReveal"
const AboutUs = () => {
  return (
    <>
      <HeroSection
        overline="THE FUTURE OF FLOW CONTROL"
        titleMain="Engineering a"
        titleAccent="Sustainable"
        titleEnd="Tomorrow."
        description="Bridging the gap between traditional industry and the renewable future. Panam Valves provides the critical precision required for the global transition to Hydrogen and clean energy."
        backgroundImage="https://res.cloudinary.com/dm9rmmemx/image/upload/v1769618379/igal-ness-wQfV9njQxW4-unsplash_cyolxm.jpg"
      />

      <ScrollReveal>
        <BusinessOverview />
      </ScrollReveal>

      <ScrollReveal delay={0.2}>
        <CorporatePillars />
      </ScrollReveal>

      <ScrollReveal delay={0.3}>
        <GlobalReachMetrics />
      </ScrollReveal>
    </>
  )
}
export default AboutUs
