import HeroSection from "../Common/HeroSection"
import ScrollReveal from "../Common/ScrollReveal"
import FAQSection from "./components/FaqSection"
import QuerySelector from "./components/QuerySelector"

const Contact = () => {
  return (
    <>
      <title>Contact Panam Valves Now | Global Engineering & Support</title>
      <meta name="description" content="Get in touch with Panam Valves' global engineering team for support with precision flow control solutions, technical inquiries, and project consultations." />

      {/* Social Media Preview Tags */}
      <meta property="og:title" content="Contact Our Engineering Team | Panam Valves" />
      <meta property="og:description" content="Our global team is ready to support your next project with precision flow control solutions." />
      <meta property="og:image" content="https://res.cloudinary.com/dm9rmmemx/image/upload/v1769690759/ben-o-bro-wpU4veNGnHg-unsplash_ryeikh.jpg" />
      <HeroSection overline="GET IN TOUCH" titleMain="How can we help" titleAccent="You?" description="Our global engineering team is ready to support your next project with precision flow control solutions." backgroundImage="https://res.cloudinary.com/dm9rmmemx/image/upload/v1769690759/ben-o-bro-wpU4veNGnHg-unsplash_ryeikh.jpg" />
      <ScrollReveal>
        <QuerySelector />
      </ScrollReveal>
      <ScrollReveal>
        <FAQSection />
      </ScrollReveal>
      
    </>
  )
}
export default Contact
