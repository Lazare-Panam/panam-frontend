import IndustryTemplate from "./IndustriesTemplate"

const FoodBeveragePage = () => {
  const hero = {
    overline: "SECTORS WE SERVE",
    titleMain: "Purity for",
    titleAccent: "Global Food & Drink",
    titleEnd: "Production.",
    description: "Maintaining sanitary conditions is the top priority. We provide high-quality stainless steel solutions that meet strict hygienic standards.",
    backgroundImage: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=1200&q=80",
  }

  const content = {
    subHeading: "FOOD & BEVERAGE INDUSTRY",
    heading: "Sanitary Solutions for Mass Production.",
    bodyText: "Our valves for the F&B sector focus on cleanability and contamination prevention. Using high-polish 316L Stainless Steel and sealing materials selected for your process, we support everything from dairy processing to large-scale brewery operations. \n\nEvery component is designed to withstand frequent CIP (Clean-In-Place) cycles without degrading.",
  }

  return (
    <>
      <title>Food & Beverages | Hygienic & Sanitary Flow Solutions</title>
      <meta name="description" content={hero.description} />
      <link rel="canonical" href="https://www.panamvalve.com/industries/food-beverages" />
      <meta name="robots" content="index, follow" />
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebPage",
          name: "Food & Beverages | Hygienic & Sanitary Flow Solutions",
          description: hero.description,
        })}
      </script>
      <IndustryTemplate hero={hero} content={content} />
    </>
  )
}

export default FoodBeveragePage