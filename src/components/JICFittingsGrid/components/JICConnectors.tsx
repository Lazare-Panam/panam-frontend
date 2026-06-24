import JICFittingPage from "../JICFittingsGrid"
export default function JICConnectors() {
  return (
    <>
      <title>JIC Connectors | PANAM® Instrumentation</title>
      <meta name="description" content="PANAM® 37° JIC Male and Female Connectors — SS316, NPT, BSPT, BSPP, SAE/MS and Metric threads, 1/8 to 2 inch. Request a quote." />
      <meta property="og:title" content="JIC Connectors | PANAM® Instrumentation" />
      <meta property="og:description" content="37° JIC male and female connectors in SS316. Full range of thread standards and sizes." />
      <meta property="og:type" content="product" />
      <meta name="twitter:card" content="summary_large_image" />
      <JICFittingPage defaultFittingTypes={["MC", "FC"]} title="37° Flared JIC Connectors" section="connectors" />
    </>
  )
}
