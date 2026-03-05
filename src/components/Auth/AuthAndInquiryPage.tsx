import { Box } from "@mui/material";
import { EnquiryRegistration } from "./Enquiry/EnquiryRegistration";
import { LoggedInEnquiry } from "./Enquiry/LoggedInEnquiry";// We'll create this next
import { useUserStore } from "../store/useUserStore";

const AuthAndInquiryPage = () => {
  const { isAuthenticated } = useUserStore();

  return (
    <Box>
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