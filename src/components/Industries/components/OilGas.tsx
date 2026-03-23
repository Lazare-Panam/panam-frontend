import IndustryTemplate from "./IndustriesTemplate"

const OilGasPage = () => {
  const hero = {
    overline: "SECTORS WE SERVE",
    titleMain: "Fueling the World with",
    titleAccent: "Unmatched Precision",
    titleEnd: "and Safety.",
    description: "From upstream extraction to downstream refining, Panam provides the critical flow control components that keep the world's energy infrastructure moving safely.",
    backgroundImage: "https://res.cloudinary.com/dm9rmmemx/image/upload/v1769616666/zbynek-burival-GrmwVnVSSdU-unsplash_eruerc.jpg",
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
      <IndustryTemplate hero={hero} content={content} />
    </>
  )
}

export default OilGasPage