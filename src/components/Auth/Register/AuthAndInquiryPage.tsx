import { Box } from "@mui/material";
import HeroSection from "../../Common/HeroSection";
import { RegistrationSection } from "./Register";
import { InquirySection } from "../../Contact/components/InquirySection";

const AuthAndInquiryPage = () => {
  return (
    <Box>
      {/* 1. HERO */}
      <HeroSection
        overline="THE FUTURE OF FLOW CONTROL"
        titleMain="Engineering a"
        titleAccent="Sustainable"
        titleEnd="Tomorrow."
        description="Bridging the gap between traditional industry and the renewable future. Panam Valves provides the critical precision required for the global transition to Hydrogen and clean energy."
        backgroundImage="https://res.cloudinary.com/dm9rmmemx/image/upload/v1769618379/igal-ness-wQfV9njQxW4-unsplash_cyolxm.jpg"
      />

      {/* 2. REGISTRATION */}
      <RegistrationSection />

      {/* 3. INQUIRY */}
      <InquirySection />
    </Box>
  );
};

export default AuthAndInquiryPage;