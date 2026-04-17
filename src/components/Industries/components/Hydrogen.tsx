import IndustryTemplate from "./IndustriesTemplate"

const HydrogenPage = () => {
  const hero = {
    overline: "SECTORS WE SERVE",
    titleMain: "Pioneering the",
    titleAccent: "Clean Energy",
    titleEnd: "Transition.",
    description: "Hydrogen presents unique challenges, from embrittlement to cryogenic temperatures. Our specialized valve range is built specifically for the H2 value chain.",
    backgroundImage: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=1200&q=80",
  }

  const content = {
    subHeading: "THE HYDROGEN ECONOMY",
    heading: "Mastering the Smallest Molecule.",
    bodyText: "Hydrogen is notoriously difficult to contain. Our engineering team has developed specialized seal technologies and material selections that prevent hydrogen embrittlement. \n\nFrom electrolyzer integration to high-pressure storage and refueling stations, we are the trusted partner for companies scaling up green and blue hydrogen infrastructure globally.",
  }

  return (
    <>
      <title>Hydrogen Energy | Specialized Valves for the H2 Value Chain</title>
      <meta name="description" content={hero.description} />
      <IndustryTemplate hero={hero} content={content} />
    </>
  )
}

export default HydrogenPage