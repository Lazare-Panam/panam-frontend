import HeroSection from "../Common/HeroSection"

const NotFound = () => {
  return (
    <>
      <title>Page Not Found | PANAM Valves</title>
      <meta name="robots" content="noindex, follow" />
      <HeroSection
        overline="ERROR 404 — SYSTEM INTERRUPTION"
        titleMain="Requested Path"
        titleAccent="Not Found."
        description="The page or product specification you are looking for has been moved, decommissioned, or the link has expired. Please return to the landing page to continue navigating our catalog."
        backgroundImage="https://res.cloudinary.com/dm9rmmemx/image/upload/v1769782798/nathan-dumlao-a3ra9eXUjvo-unsplash_rr1b7x.jpg"
      />
    </>
  )
}
export default NotFound
