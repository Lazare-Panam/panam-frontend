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
      <meta name="robots" content="index, follow" />
      <link rel="canonical" href="https://www.panamvalve.com/" />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="PANAM Valves" />
      <meta property="og:title" content="PANAM® UK | Top Valve Manufacture for every fit" />
      <meta property="og:description" content="Precision valves, manifolds and fittings for hydrogen, oil & gas and industrial applications. UK stock, fast dispatch and full technical support." />
      <meta property="og:url" content="https://www.panamvalve.com/" />
      <meta property="og:image" content="https://www.panamvalve.com/p2.png" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="PANAM® UK | Top Valve Manufacture for every fit" />
      <meta name="twitter:description" content="Precision valves, manifolds and fittings for hydrogen, oil & gas and industrial applications. UK stock, fast dispatch and full technical support." />
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
            },
            {
              "@type": "WebSite",
              "@id": "https://www.panamvalve.com/#website",
              url: "https://www.panamvalve.com/",
              name: "PANAM Valves",
              publisher: { "@id": "https://www.panamvalve.com/#organization" },
            },
          ],
        })}
      </script>
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
