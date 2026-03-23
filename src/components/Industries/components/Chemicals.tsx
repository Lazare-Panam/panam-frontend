import IndustryTemplate from "./IndustriesTemplate"

const ChemicalsPage = () => {
  const hero = {
    overline: "SECTORS WE SERVE",
    titleMain: "Integrity for",
    titleAccent: "Complex Chemical",
    titleEnd: "Processing.",
    description: "Handling aggressive chemicals requires superior metallurgy. Our valves are designed for maximum corrosion resistance in the toughest process loops.",
    backgroundImage: "https://images.unsplash.com/photo-1574943320219-553eb213f72d?w=1200&q=80",
  }

  const content = {
    subHeading: "CHEMICAL PROCESSING",
    heading: "Corrosion Resistance for Toxic Media.",
    bodyText: "Managing lethal or highly corrosive fluids requires specialized sealing and material science. We offer valves in Hastelloy, Monel, and Inconel to ensure compatibility with aggressive acids and bases. \n\nOur modular designs allow for easy maintenance and zero-leakage performance in continuous process environments.",
  }

  return (
    <>
      <title>Chemical & Petrochemical | Corrosion-Resistant Process Valves</title>
      <meta name="description" content={hero.description} />
      <IndustryTemplate hero={hero} content={content} />
    </>
  )
}

export default ChemicalsPage