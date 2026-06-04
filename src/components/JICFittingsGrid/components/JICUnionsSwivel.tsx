import JICFittingPage from "../JICFittingsGrid"
export default function JICUnionsSwivel() {
  return (
    <>
      <title>JIC Unions & Swivel Fittings | PANAM® Instrumentation</title>
      <meta name="description" content="PANAM® 37° JIC Unions and Swivel Fittings — straight, elbow, bulkhead, and lock nut configurations in SS316. NPT, BSPT, BSPP, SAE/MS and Metric threads, 1/8 to 2 inch. Request a quote." />
      <meta property="og:title" content="JIC Unions & Swivel Fittings | PANAM® Instrumentation" />
      <meta property="og:description" content="37° JIC unions and swivel fittings in SS316. Straight, elbow, bulkhead, and lock nut configurations across all major thread standards." />
      <meta property="og:type" content="product" />
      <meta name="twitter:card" content="summary_large_image" />
      <JICFittingPage defaultFittingTypes={['U', 'UL', 'SU', 'BU', 'BLN']} />
    </>
  )
}