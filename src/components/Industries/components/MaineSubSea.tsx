import IndustryTemplate from "./IndustriesTemplate"

const MarineSubseaPage = () => {
  const hero = {
    overline: "SECTORS WE SERVE",
    titleMain: "Engineering for the",
    titleAccent: "Deepest Frontiers",
    titleEnd: "on Earth.",
    description: "Our marine-grade valve solutions are engineered to withstand extreme hydrostatic pressure.",
    backgroundImage: "/images/industries/marine-subsea.jpg",
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
      <link rel="canonical" href="https://www.panamvalve.com/industries/marine-subsea" />
      <meta name="robots" content="index, follow" />
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebPage",
          name: "Marine & Subsea | Engineering for the Deepest Frontiers",
          description: hero.description,
        })}
      </script>
      <IndustryTemplate hero={hero} content={content} />
    </>
  )
}

export default MarineSubseaPage