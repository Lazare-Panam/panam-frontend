import { useNavigate } from "react-router-dom"
import FeatureGridSection from "./FeatureGridSection"
import ProductResources from "./ProductResources"
import ScrollReveal from "../../../Common/ScrollReveal"

const FeatureSection = () => {
  const navigate = useNavigate()
  const productData = [
    {
      image: "https://res.cloudinary.com/dm9rmmemx/image/upload/v1768569088/HP_Ball_Valve_2_aybek4.webp",
      caption: (
        <>
          High-performance <span>hydrogen solutions</span> designed for leak-tight containment in alternative fuel infrastructure.
        </>
      ),
      link: "/products/hydrogen",
    },
    {
      image: "https://res.cloudinary.com/dm9rmmemx/image/upload/v1769096692/WITH_SAND_BLASTING_-_JPEG_iqkqwa.jpg",
      caption: (
        <>
          Precision-engineered <span>instrumentation valves</span> providing reliable flow control for high-pressure industrial applications.
        </>
      ),
      link: "/products/valves",
    },
    {
      image: "https://res.cloudinary.com/dm9rmmemx/image/upload/v1768485615/block_bleed_-_flange_x_flange_-_H2_JPEG_bld2iz.webp",
      caption: (
        <>
          Advanced <span>Double Block and Bleed</span> (DBB) systems ensuring maximum safety and isolation in critical process lines.
        </>
      ),
      link: "/products/double-block-and-bleed-valves",
    },
  ]
  const hydrogenData = [
    {
      image: "https://images.unsplash.com/photo-1558449028-b53a39d100fc?auto=format&fit=crop&q=80&w=800",
      caption: (
        <>
          Specialized <span>Hydrogen Infrastructure</span> support for large-scale electrolyzer and refueling projects.
        </>
      ),
      link: "/hydrogen/infrastructure",
    },
    {
      image: "https://res.cloudinary.com/dm9rmmemx/image/upload/v1769604874/biel-morro-HCha-UHkIg8-unsplash_pl8qt9.jpg",
      caption: (
        <>
          Advanced <span>Leak-Detection Training</span> and engineering audits for high-pressure H2 storage systems.
        </>
      ),
      link: "/hydrogen/safety-services",
    },
    {
      image: "https://res.cloudinary.com/dm9rmmemx/image/upload/v1769604928/annie-spratt-Iqwnr00mfQM-unsplash_qtpa2u.jpg",
      caption: (
        <>
          A <span>Dedicated H2 Supply Chain</span> ensuring material compatibility and certification across global markets.
        </>
      ),
      link: "/hydrogen/global-supply",
    },
  ]

  return (
    <>
      <ScrollReveal delay={0.2}>
        <FeatureGridSection sectionTitle="Our Core Product Lines" items={productData} buttonText="View Full Product Catalog" onButtonClick={() => navigate("/products")} />
      </ScrollReveal>

      <ScrollReveal delay={0.2}>
        <FeatureGridSection sectionTitle="Hydrogen Product & Project Engineering" items={hydrogenData} buttonText="Find Out more about our work on hydrogen" onButtonClick={() => console.log("Button Clicked!")} />
      </ScrollReveal>
      <ScrollReveal delay={0.2}>
        <ProductResources />
      </ScrollReveal>
      {/* <FeatureGridSection sectionTitle="Global Expertise, Local Support" items={expertiseData} buttonText="Find Support from a Local Sales and Service Center" onButtonClick={() => console.log("Button Clicked!")} /> */}
    </>
  )
}
export default FeatureSection
