import HeroSection from "../Common/HeroSection"
import NewsCards from "./components/NewsCards"
const News = () => {
  return (
    <>
      <HeroSection
        overline="INSIGHTS & INNOVATION"
        titleMain="Engineering the"
        titleAccent="Future"
        titleEnd="of Flow Control."
        description="Stay informed on the latest technical breakthroughs, regulatory shifts, and Panam Valves' ongoing commitment to extreme-pressure safety."
        backgroundImage="https://res.cloudinary.com/dm9rmmemx/image/upload/v1769687272/tecnic-bioprocess-solutions-JygfGeV7daQ-unsplash_psxxk7.jpg"
      />
      <NewsCards />
    </>
  )
}
export default News
