import IndustriesCards from "./components/IndustriesCards"
import HeroSection from "../Common/HeroSection"
import ScrollReveal from "../Common/ScrollReveal"
import { industryData } from "./components/industryData"
const Industries = () => {
  return (
    <>
      <title>Industrial Valve Solutions | Panam Valves</title>
      <meta name="description" content="Precision engineered valve solutions for extreme pressure applications." />
      <meta property="og:title" content="Precision for the World's Toughest Applications" />
      <meta property="og:image" content="https://res.cloudinary.com/dm9rmmemx/image/upload/v1769616757/image.jpg" />
      <link rel="canonical" href="https://www.panamvalve.com/industries" />
      <meta name="robots" content="index, follow" />
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          name: "Industrial Valve Solutions | Panam Valves",
          description: "Precision engineered valve solutions for extreme pressure applications.",
          mainEntity: {
            "@type": "ItemList",
            itemListElement: industryData.map((industry, i) => ({
              "@type": "ListItem",
              position: i + 1,
              name: industry.title,
              url: `https://www.panamvalve.com/industries/${industry.id}`,
            })),
          },
        })}
      </script>
      <HeroSection
        overline="SECTORS WE SERVE"
        titleMain="Precision for the"
        titleAccent="World's Toughest"
        titleEnd="Applications."
        description="From cryogenic Hydrogen storage to offshore Oil & Gas, Panam Valves engineered solutions are built to withstand extreme pressures and safeguard global infrastructure."
        backgroundImage="https://pblol2.blob.core.windows.net/panam-images/industries/sean-pollock-PhYq704ffdA-unsplash.jpg"
      />
      <ScrollReveal delay={0.1}>
        <IndustriesCards />
      </ScrollReveal>
    </>
  )
}
export default Industries
