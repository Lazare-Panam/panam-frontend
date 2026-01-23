import { useNavigate } from "react-router-dom"
import FeatureGridSection from "./FeatureGridSection"
import ProductResources from "./ProductResources"

const FeatureSection = () => {
  const navigate = useNavigate()
  const expertiseData = [
    {
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800",
      caption: (
        <>
          Authorized sales and service centers in 70 countries provide <span>local access</span> to fluid system solutions.
        </>
      ),
      link: "/locations",
    },
    {
      image: "https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?auto=format&fit=crop&q=80&w=800",
      caption: (
        <>
          Local specialists offer <span>engineering services</span> that help customers address fluid system issues.
        </>
      ),
      link: "/services",
    },
    {
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=800",
      caption: (
        <>
          The <span>global Panam network</span> facilitates convenient access to technical expertise worldwide.
        </>
      ),
      link: "/network",
    },
  ]
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

  return (
    <>
      <FeatureGridSection sectionTitle="Our Core Product Lines" items={productData} buttonText="View Full Product Catalog" onButtonClick={() => navigate("/products")} />
      <ProductResources />
      <FeatureGridSection sectionTitle="Hydrogen & Project Engineering" items={expertiseData} buttonText="Find Support from a Local Sales and Service Center" onButtonClick={() => console.log("Button Clicked!")} />
      <FeatureGridSection sectionTitle="Global Expertise, Local Support" items={expertiseData} buttonText="Find Support from a Local Sales and Service Center" onButtonClick={() => console.log("Button Clicked!")} />
    </>
  )
}
export default FeatureSection
