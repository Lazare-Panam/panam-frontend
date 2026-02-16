import { Box, Typography, Stack, Button, Container } from "@mui/material";
import { useNavigate } from "react-router-dom";

const BRAND_BLUE = "#01B0F0";
const DARK_BLUE = "#0096cc"; // For a subtle gradient effect
const PRIMARY_FONT = '"Inter", "Roboto", "Helvetica", Arial, sans-serif';

const queryTypes = ["Existing Order", "Component Search", "Technical Support", "General Inquiry"];

const QuerySelector = () => {
  const navigate = useNavigate();

  const handleNavigation = (type: string) => {
    const typeParam = encodeURIComponent(type);
    navigate(`/contact?type=${typeParam}`);
  };

  return (
    <Box 
      sx={{ 
        width: "100%",
        // Using a gradient makes the brand color look more modern/premium
        background: `linear-gradient(135deg, ${BRAND_BLUE} 0%, ${DARK_BLUE} 100%)`, 
        py: { xs: 6, md: 8 }, 
        color: "white" 
      }}
    >
      <Container maxWidth="lg">
        <Typography 
          variant="overline" 
          sx={{ 
            display: "block",
            fontWeight: 800, 
            color: "rgba(255, 255, 255, 0.9)", // Soft white
            letterSpacing: 2, 
            mb: 1,
            textAlign: "center"
          }}
        >
          NEED ASSISTANCE?
        </Typography>
        
        <Typography 
          variant="h4" 
          sx={{ 
            fontWeight: 900, 
            fontFamily: PRIMARY_FONT,
            mb: 5, 
            textAlign: "center",
            textTransform: "uppercase"
          }}
        >
          What is your query regarding?
        </Typography>

        <Stack 
          direction="row" 
          spacing={2} 
          flexWrap="wrap" 
          justifyContent="center" 
          useFlexGap
        >
          {queryTypes.map((type) => (
            <Button
              key={type}
              onClick={() => handleNavigation(type)}
              variant="outlined"
              sx={{
                px: 4,
                py: 2,
                borderRadius: "4px", // Tiny bit of rounding looks better than 0px
                border: "2px solid white",
                color: "white",
                fontWeight: 800,
                fontSize: "0.9rem",
                fontFamily: PRIMARY_FONT,
                transition: "all 0.2s ease-in-out",
                "&:hover": {
                  bgcolor: "white",
                  borderColor: "white",
                  color: BRAND_BLUE,
                  transform: "translateY(-3px)", // Subtle lift effect
                  boxShadow: "0px 10px 20px rgba(0,0,0,0.1)"
                },
              }}
            >
              {type}
            </Button>
          ))}
        </Stack>
      </Container>
    </Box>
  );
};

export default QuerySelector;