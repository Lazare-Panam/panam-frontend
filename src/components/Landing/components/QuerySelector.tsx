import { Box, Typography, Stack, Button, Divider } from "@mui/material";
import { useNavigate } from "react-router-dom";

const BRAND_BLUE = "#01B0F0";
const PRIMARY_FONT = '"Inter", "Roboto", "Helvetica", Arial, sans-serif';

const queryTypes = ["Existing Order", "Component Search", "Technical Support", "General Inquiry"];

const QuerySelector = () => {
  const navigate = useNavigate();

  const handleNavigation = (type: string) => {
    // encodeURIComponent handles spaces in the string for the URL
    const typeParam = encodeURIComponent(type);
    
    // Navigate to /contact?type=Technical%20Support
    navigate(`/contact?type=${typeParam}`);
  };

  return (
    <><Divider sx={{ borderColor: "#eee", width: "100%" }} />
    <Box sx={{ mb: 6, textAlign: "center", py: 4 }}>
      <Typography variant="subtitle2" sx={{ fontWeight: 800, color: BRAND_BLUE, letterSpacing: 1.5, mb: 2 }}>
        WHAT IS YOUR QUERY REGARDING?
      </Typography>
      <Stack direction="row" spacing={2} flexWrap="wrap" justifyContent="center" useFlexGap>
        {queryTypes.map(type => (
          <Button
            key={type}
            onClick={() => handleNavigation(type)}
            sx={{
              px: 4, py: 1.5,
              borderRadius: "0px",
              border: "2px solid #e0e0e0",
              color: "#666",
              fontWeight: 700,
              fontFamily: PRIMARY_FONT,
              "&:hover": {
                bgcolor: "rgba(1, 176, 240, 0.05)",
                borderColor: BRAND_BLUE,
                color: BRAND_BLUE
              },
            }}>
            {type}
          </Button>
        ))}
      </Stack>
    </Box></>
     
  );
};

export default QuerySelector;