import IndustryTemplate from "./IndustriesTemplate"

const AerospaceDefensePage = () => {
  const hero = {
    overline: "SECTORS WE SERVE",
    titleMain: "Mission Critical",
    titleAccent: "Aerospace Systems",
    titleEnd: "Engineering.",
    description: "When precision is measured in microns and failure is not an option, the world's leading aerospace firms turn to Panam for specialized fluid control.",
    backgroundImage: "https://images.unsplash.com/photo-1517976487492-5750f3195933?w=1200&q=80",
  }

  const content = {
    subHeading: "AEROSPACE & DEFENSE",
    heading: "Precision for High-Altitude Performance.",
    bodyText: "We provide lightweight, high-strength valve solutions for ground support equipment, engine testing rigs, and flight systems. \n\nOur components undergo rigorous vibration and thermal shock testing to ensure they perform under the extreme G-forces and temperature fluctuations found in aerospace applications.",
  }

  return (
    <>
      <title>Aerospace & Defense | Mission-Critical Fluid Control Systems</title>
      <meta name="description" content={hero.description} />
      <IndustryTemplate hero={hero} content={content} />
    </>
  )
}

export default AerospaceDefensePage