import IndustryTemplate from "./IndustriesTemplate"

const MarineSubseaPage = () => {
  const hero = {
    overline: "SECTORS WE SERVE",
    titleMain: "Engineering for the",
    titleAccent: "Deepest Frontiers",
    titleEnd: "on Earth.",
    description: "Our marine-grade valve solutions are engineered to withstand extreme hydrostatic pressures and corrosive saltwater environments, ensuring uptime for offshore energy and subsea exploration.",
    backgroundImage: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=1200&q=80",
  }

  const content = {
    subHeading: "MARINE & SUBSEA EXPERTISE",
    heading: "Reliability Where Failure is Not an Option.",
    bodyText: "Operating thousands of feet below sea level requires more than just standard equipment. We provide specialized instrumentation valves and manifolds designed for ROVs, subsea production systems, and vessel propulsion. \n\nOur products feature high-grade Duplex and Super Duplex materials to prevent pitting and crevice corrosion, ensuring a service life measured in decades, not years.",
  }

  return (
    <>
      <title>Marine & Subsea | Engineering for the Deepest Frontiers</title>
      <meta name="description" content={hero.description} />
      <IndustryTemplate hero={hero} content={content} />
    </>
  )
}

export default MarineSubseaPage