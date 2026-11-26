import CorporatePillars from "./components/CorporatePillars"
import BusinessOverview from "./components/BusinessOverview"
import GlobalReachMetrics from "./components/GlobalReact"
import AboutHero from "./components/AboutHero"
import ScrollReveal from "../Common/ScrollReveal"
import ContactBanner from "../Landing2/components/ContactBanner"
import { FONT } from "../Landing2/homeTokens"
import { Box } from "@mui/material"
const AboutUs = () => {
  return (
    <>
      <title>About PANAM® | Instrumentation Valve &amp; Fittings Manufacturer</title>
      <meta name="description" content="PANAM® manufactures precision instrumentation valves, fittings and manifolds for oil & gas, hydrogen and process industries. Learn about our quality, capabilities and experience." />

      {/* Open Graph / Social Media */}
      <meta property="og:title" content="Engineering a Sustainable Tomorrow | Panam Valves" />
      <meta property="og:description" content="Bridging the gap between traditional industry and the renewable future with high-precision valve solutions." />
      <meta property="og:image" content="https://pblol2.blob.core.windows.net/panam-images/about/hero-image" />
      <link rel="canonical" href="https://www.panamvalve.com/about" />
      <meta name="robots" content="index, follow" />
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "AboutPage",
          name: "Engineering a Sustainable Tomorrow | Panam Valves",
          description: "Bridging the gap between traditional industry and the renewable future. Panam Valves provides the critical precision required for the global transition to Hydrogen and clean energy.",
          mainEntity: {
            "@type": "Organization",
            name: "PANAM®",
          },
        })}
      </script>
      {/* textTransform reset: the site capitalises Typography globally, the homepage-style sections use sentence case */}
      <Box sx={{ fontFamily: FONT, textTransform: "none", "& .MuiTypography-root, & .MuiButton-root": { fontFamily: FONT, textTransform: "none" } }}>
        <AboutHero
          overline="THE FUTURE OF FLOW CONTROL"
          titleMain="Engineering a"
          titleAccent="Sustainable"
          titleEnd="Tomorrow."
          description="Bridging the gap between traditional industry and the renewable future. Panam Valves provides the critical precision required for the global transition to Hydrogen and clean energy."
          backgroundImage="https://pblol2.blob.core.windows.net/panam-images/about/hero-image"
        />
        <BusinessOverview />
        <CorporatePillars />
        <ScrollReveal>
          <GlobalReachMetrics />
        </ScrollReveal>
        <ContactBanner />
      </Box>
    </>
  )
}
export default AboutUs
