import JICFittingPage from "../JICFittingsGrid"
export default function JICElbows() {
  return (
    <>
      <title>JIC Elbows | PANAM® Instrumentation</title>
      <meta name="description" content="PANAM® 37° JIC Elbows — male, female, union, and adapter elbows in SS316. NPT, BSPT, BSPP, SAE/MS and Metric threads, 1/8 to 2 inch. Request a quote." />
      <meta property="og:title" content="JIC Elbows | PANAM® Instrumentation" />
      <meta property="og:description" content="37° JIC elbows in SS316. Male, female, union, and adapter configurations across all major thread standards." />
      <meta property="og:type" content="product" />
      <meta name="twitter:card" content="summary_large_image" />
      <JICFittingPage defaultFittingTypes={['ME', 'AME', 'LME', 'FE', 'UE']} title="37° Flared JIC Elbows" />
    </>
  )
}