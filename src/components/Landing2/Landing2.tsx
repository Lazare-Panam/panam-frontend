import { Box } from "@mui/material"
import { FONT } from "./homeTokens"
import ContactBanner from "./components/ContactBanner"
import CoreProducts from "./components/CoreProducts"
import Hero2 from "./components/Hero2"
import HydrogenSection from "./components/HydrogenSection"
import IndustriesSection from "./components/IndustriesSection"
import MovingBanner from "./components/LiveInventory"
import PartnersSection from "./components/PartnersSection"
import TechnicalSupport from "./components/TechnicalSupport"
import SEOSection from "./components/SEOSection"
import Ticker from "./components/Ticker"
import CertificationsStrip from "./components/CertificationsStrip"
import LatestInsights from "./components/LatestInsights"
import Testimonials from "./components/Testimonials"
import ScrollReveal from "../Common/ScrollReveal"
import FAQSection from "./components/FAQSection"
import SectionDotNav from "./components/SectionDotNav"
import LocationMap from "./components/LocationMap"
import ToolsResources from "./components/ToolsResources"
import PartNumberFinder from "./components/PartNumberFinder"
const Landing2 = () => {
  /** */
  return (
    <>
      <title>Instrumentation Valves & Fittings | PANAM® UK Manufacturer</title>
      <meta name="description" content="Precision valves, manifolds and fittings for hydrogen, oil & gas and industrial applications. Global dispatch and full technical support." />
      <meta name="robots" content="index, follow" />
      <link rel="canonical" href="https://www.panamvalve.com/" />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="PANAM Valves" />
      <meta property="og:title" content="Instrumentation Valves & Fittings | PANAM® UK Manufacturer" />
      <meta property="og:description" content="Precision valves, manifolds and fittings for hydrogen, oil & gas and industrial applications. Global dispatch and full technical support." />
      <meta property="og:url" content="https://www.panamvalve.com/" />
      <meta property="og:image" content="https://www.panamvalve.com/p2.png" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Instrumentation Valves & Fittings | PANAM® UK Manufacturer" />
      <meta name="twitter:description" content="Precision valves, manifolds and fittings for hydrogen, oil & gas and industrial applications. Global dispatch and full technical support." />
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "Organization",
              "@id": "https://www.panamvalve.com/#organization",
              name: "PANAM Valves",
              url: "https://www.panamvalve.com/",
              logo: "https://www.panamvalve.com/p2.png",
              address: {
                "@type": "PostalAddress",
                streetAddress: "Ground Floor, St Edburgs Hall, Priory Road",
                addressLocality: "Bicester",
                postalCode: "OX26 6BL",
                addressCountry: "GB",
              },
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+44-7369-243459",
                contactType: "sales",
                email: "sales@panamvalves.co.uk",
                areaServed: "GB",
              },
              sameAs: [
                "https://uk.linkedin.com/company/panamvalves-ltd",
                "https://www.youtube.com/@panamengineersltd",
                "https://www.facebook.com/PanamEngineers/",
                "https://twitter.com/panamvalves",
              ],
            },
            {
              "@type": "WebSite",
              "@id": "https://www.panamvalve.com/#website",
              url: "https://www.panamvalve.com/",
              name: "PANAM Valves",
              publisher: { "@id": "https://www.panamvalve.com/#organization" },
            },
            {
              "@type": "VideoObject",
              name: "Panam - Instrumentation Fittings & Valves",
              description: "An overview of Panam Valves' instrumentation fittings and valve ranges for industrial flow control applications.",
              thumbnailUrl: "https://i.ytimg.com/vi/HRFxY37P0Lg/hqdefault.jpg",
              embedUrl: "https://www.youtube.com/embed/HRFxY37P0Lg",
              publisher: { "@id": "https://www.panamvalve.com/#organization" },
            },
          ],
        })}
      </script>
      {/* The site-wide body rule capitalises every word; the homepage copy is written in proper case. */}
      <Box
        sx={{
          textTransform: "none",
          fontFamily: FONT,
          "& .MuiTypography-root, & .MuiButton-root, & .MuiTab-root": { fontFamily: FONT },
        }}>
        <SectionDotNav />
        <Hero2 />
        <Ticker />
        {/* PartNumberFinder now includes the trust points (formerly TrustBar) */}
        <PartNumberFinder />
        <ScrollReveal>
          <SEOSection />
        </ScrollReveal>
        <MovingBanner />
        <ScrollReveal delay={0.1}>
          <CoreProducts />
        </ScrollReveal>
        <ScrollReveal delay={0.1}>
          <ToolsResources />
        </ScrollReveal>
        <ScrollReveal delay={0.1}>
          <IndustriesSection />
        </ScrollReveal>
        <ScrollReveal delay={0.1}>
          <HydrogenSection />
        </ScrollReveal>
        <ScrollReveal delay={0.1}>
          <CertificationsStrip />
        </ScrollReveal>
        <ScrollReveal delay={0.1}>
          <TechnicalSupport />
        </ScrollReveal>
        <ScrollReveal delay={0.1}>
          <LatestInsights />
        </ScrollReveal>
        <ScrollReveal delay={0.1}>
          <PartnersSection />
        </ScrollReveal>
        <ScrollReveal delay={0.1}>
          <Testimonials />
        </ScrollReveal>
        <ScrollReveal delay={0.1}>
          <FAQSection />
        </ScrollReveal>
        <ScrollReveal delay={0.1}>
          <LocationMap />
        </ScrollReveal>
        <ScrollReveal delay={0.1}>
          <ContactBanner />
        </ScrollReveal>
      </Box>
    </>
  )
}
export default Landing2
