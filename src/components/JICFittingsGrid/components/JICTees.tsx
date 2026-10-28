import JICFittingPage from "../JICFittingsGrid"
export default function JICTees() {
  return (
    <>
      <title>JIC Tees & Crosses | PANAM® Instrumentation</title>
      <meta name="description" content="PANAM® 37° JIC tees and crosses in SS316: branch, run, union and adapter types. NPT, BSPT, BSPP, SAE/MS and Metric threads, 1/8 to 2 inch." />
      <meta property="og:title" content="JIC Tees & Crosses | PANAM® Instrumentation" />
      <meta property="og:description" content="37° JIC tees and crosses in SS316. Male, female, union, and adapter configurations across all major thread standards." />
      <meta property="og:type" content="product" />
      <meta name="twitter:card" content="summary_large_image" />
      <link rel="canonical" href="https://www.panamvalve.com/instrumentation-fittings/jic-fittings/tees" />
      <meta name="robots" content="index, follow" />
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          name: "JIC Tees & Crosses",
          description: "PANAM® 37° JIC Tees and Crosses — branch, run, union, and adapter configurations in SS316. NPT, BSPT, BSPP, SAE/MS and Metric threads, 1/8 to 2 inch.",
          url: "https://www.panamvalve.com/instrumentation-fittings/jic-fittings/tees",
        })}
      </script>
      <JICFittingPage defaultFittingTypes={["MBT", "AMBT", "MRT", "FBT", "FRT", "UT", "SRT", "SBT", "UC"]} title="JIC Tees" section="tees" />
    </>
  )
}
