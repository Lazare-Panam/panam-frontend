import { Box } from "@mui/material";
import { EnquiryRegistration } from "./Enquiry/EnquiryRegistration";
import { LoggedInEnquiry } from "./Enquiry/LoggedInEnquiry";// We'll create this next
import { useUserStore } from "../store/useUserStore";

const AuthAndInquiryPage = () => {
  const { isAuthenticated } = useUserStore();

  return (
    <Box>
      <title>Request a Quote | Valves & Fittings Enquiry | PANAM®</title>
      <meta name="description" content="Send PANAM® an enquiry for instrumentation valves, fittings, manifolds and high-pressure components. Our sales team replies with pricing and lead times." />
      <link rel="canonical" href="https://www.panamvalve.com/enquiry" />
      <meta name="robots" content="index, follow" />
      {/* Conditional Rendering based on Auth State */}
      {isAuthenticated ? (
        <LoggedInEnquiry />
      ) : (
        <EnquiryRegistration />
      )}
    </Box>
  );
};

export default AuthAndInquiryPage;