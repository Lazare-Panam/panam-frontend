import IndustriesCards from "./components/IndustriesCards"
import HeroSection from "../Common/HeroSection"
const Industries = () => {
  return (
    <>
      <HeroSection
        overline="SECTORS WE SERVE"
        titleMain="Precision for the"
        titleAccent="World's Toughest"
        titleEnd="Applications."
        description="From cryogenic Hydrogen storage to offshore Oil & Gas, Panam Valves engineered solutions are built to withstand extreme pressures and safeguard global infrastructure."
        backgroundImage="https://res.cloudinary.com/dm9rmmemx/image/upload/v1769616757/andreas-brucker-C2Dyr5FhGPQ-unsplash_vpudgb.jpg"
      />
      <IndustriesCards />
    </>
  )
}
export default Industries
