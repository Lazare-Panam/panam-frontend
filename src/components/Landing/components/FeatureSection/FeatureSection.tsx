import FeatureGridSection from "./FeatureGridSection"
import ScrollReveal from "../../../Common/ScrollReveal"
import FeatureCarousel from "./FeatureCarousel"

const FeatureSection = () => {
  const hydrogenData = [
    {
      image: "https://images.unsplash.com/photo-1558449028-b53a39d100fc?auto=format&fit=crop&q=80&w=1920",
      caption: (
        <>
          Specialized <span>Hydrogen Infrastructure</span> support for large-scale electrolyzer and refueling projects.
        </>
      ),
     
    },
    {
      image: "https://res.cloudinary.com/dm9rmmemx/image/upload/w_1920,f_auto,q_auto/v1769604874/biel-morro-HCha-UHkIg8-unsplash_pl8qt9.jpg",
      caption: (
        <>
          Expert <span>H2 application support</span> for component selection in high-pressure hydrogen systems.
        </>
      ),
     
    },
    {
      image: "https://res.cloudinary.com/dm9rmmemx/image/upload/w_1920,f_auto,q_auto/v1769604928/annie-spratt-Iqwnr00mfQM-unsplash_qtpa2u.jpg",
      caption: (
        <>
          A <span>Dedicated H2 Supply Chain</span> supporting material compatibility and documentation across global markets.
        </>
      ),
      
    },
  ]

  return (
    <>
      <ScrollReveal delay={0.2}>
        <FeatureCarousel />
      </ScrollReveal>

      <ScrollReveal delay={0.2}>
        <FeatureGridSection sectionTitle="Hydrogen Products & Projects" items={hydrogenData} buttonText="Find Out more about our work on hydrogen" onButtonClick={() => console.log("Button Clicked!")} />
      </ScrollReveal>
     
      {/* <FeatureGridSection sectionTitle="Global Expertise, Local Support" items={expertiseData} buttonText="Find Support from a Local Sales and Service Center" onButtonClick={() => console.log("Button Clicked!")} /> */}
    </>
  )
}
export default FeatureSection
