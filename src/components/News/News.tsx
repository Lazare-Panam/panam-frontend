import HeroSection from "../Common/HeroSection"
import NewsCards from "./components/NewsCards"
const News = () => {
  return (
    <>
    <title>Insights & Valve Innovation | Panam Valves News</title>
      <meta name="description" content="Explore the latest technical breakthroughs in flow control, extreme-pressure safety updates, and industrial valve innovation from Panam Valves." />
      
      {/* Social Media Preview Tags (Open Graph) */}
      <meta property="og:title" content="Engineering the Future of Flow Control | Panam Valves" />
      <meta property="og:description" content="Stay informed on technical breakthroughs and regulatory shifts in the valve industry." />
      <meta property="og:image" content="https://res.cloudinary.com/dm9rmmemx/image/upload/v1769687272/tecnic-bioprocess-solutions-JygfGeV7daQ-unsplash_psxxk7.jpg" />
      <meta property="og:type" content="website" />
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
