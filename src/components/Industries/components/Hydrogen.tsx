import IndustryTemplate from "./IndustriesTemplate"

const HydrogenPage = () => {
  const hero = {
    overline: "SECTORS WE SERVE",
    titleMain: "Instrumentation for the",
    titleAccent: "Hydrogen",
    titleEnd: "Value Chain.",
    description:
      "From electrolysis and production to storage, transport and refuelling, hydrogen puts demanding requirements on valves, fittings and sealing. We help engineers specify instrumentation suited to hydrogen service.",
    backgroundImage: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=1200&q=80",
  }

  const content = {
    subHeading: "THE HYDROGEN ECONOMY",
    heading: "Specifying for the smallest molecule.",
    // NOTE FOR TECHNICAL SIGN-OFF: this copy avoids asserting specific capabilities (embrittlement
    // prevention, cryogenic ratings, exact pressure figures, manufacturing origin) that the Nov-2026
    // SEO audit flagged as needing verification. If the technical team confirms them, they can be
    // stated explicitly here. Until then the framing is consultative, not a guarantee.
    bodyText:
      "Hydrogen is a small, highly diffusive molecule, and it can embrittle certain metals under the right conditions. That makes material selection, sealing and component rating important considerations across every part of a hydrogen system.\n\n" +
      "Hydrogen infrastructure spans a wide range of conditions — from electrolyser and production skids, through compression and high-pressure storage, to pipelines, trailers and refuelling stations. Each stage has its own pressure, temperature and purity demands.\n\n" +
      "Our instrumentation valves, manifolds and fittings — including our high-pressure range — are used across industrial and energy applications. Talk to our team about your hydrogen duty and we will help you work through the right configuration, materials and documentation for your project.",
  }

  const cta = {
    heading: "Looking for high-pressure components?",
    text: "The part numbers for high-pressure needle valves, double block & bleed valves, manifolds, cones, adaptors, connectors, unions and fittings live in our High Pressure range.",
    buttonLabel: "Explore the High Pressure range",
    buttonTo: "/high-pressure",
  }

  const pageTitle = "Hydrogen Valves & Instrumentation | H2 Value Chain | PANAM®"
  const pageUrl = "https://www.panamvalve.com/industries/hydrogen"
  const ogImage = hero.backgroundImage

  return (
    <>
      <title>{pageTitle}</title>
      <meta name="description" content={hero.description} />
      <link rel="canonical" href={pageUrl} />
      <meta name="robots" content="index, follow" />

      {/* Open Graph */}
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="PANAM®" />
      <meta property="og:title" content={pageTitle} />
      <meta property="og:description" content={hero.description} />
      <meta property="og:url" content={pageUrl} />
      <meta property="og:image" content={ogImage} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={pageTitle} />
      <meta name="twitter:description" content={hero.description} />
      <meta name="twitter:image" content={ogImage} />

      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebPage",
          name: pageTitle,
          description: hero.description,
          url: pageUrl,
        })}
      </script>
      <IndustryTemplate hero={hero} content={content} cta={cta} currentIndustryId="hydrogen" />
    </>
  )
}

export default HydrogenPage
