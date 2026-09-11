import IndustryTemplate from "./IndustriesTemplate"

const OilGasPage = () => {
  const hero = {
    overline: "SECTORS WE SERVE",
    titleMain: "Fueling the World with",
    titleAccent: "Unmatched Precision",
    titleEnd: "and Safety.",
    description: "From upstream extraction to downstream refining.",
    backgroundImage: "https://pblol2.blob.core.windows.net/panam-images/industries/david-thielen-R5Ob28wpWzo-unsplash.jpg",
  }

  const content = {
    subHeading: "OIL & GAS SOLUTIONS",
    heading: "High-Pressure Performance for Harsh Environments.",
    bodyText: "In an industry where safety and environmental protection are paramount, our valves meet the most stringent API and ASME standards. \n\nWe specialize in Double Block and Bleed (DBB) solutions, high-pressure needle valves, and fugitive emission-certified components that reduce leak paths and maximize site safety across global refineries and drilling platforms.",
  }

  return (
    <>
      <title>Oil & Gas | High-Pressure Flow Control & Safety Solutions</title>
      <meta name="description" content={hero.description} />
      <link rel="canonical" href="https://www.panamvalve.com/industries/oil-gas" />
      <meta name="robots" content="index, follow" />
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebPage",
          name: "Oil & Gas | High-Pressure Flow Control & Safety Solutions",
          description: hero.description,
        })}
      </script>
      <IndustryTemplate hero={hero} content={content} />
    </>
  )
}

export default OilGasPage
