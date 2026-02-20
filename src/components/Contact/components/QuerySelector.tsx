import { Box, Typography, Stack, Button, Container } from "@mui/material";
import { useNavigate } from "react-router-dom";

const BRAND_BLUE = "#01B0F0";
const DARK_BLUE = "#0096cc";
const PRIMARY_FONT = '"Inter", "Roboto", "Helvetica", Arial, sans-serif';

// 1. Defined structured data for routes
const QUERY_OPTIONS = [
   { label: "General Inquiry", path: "/enquiry" },
  { label: "Order Tracking", path: "/login" },
  { label: "Component Configuration", path: "/products" },
  { label: "Technical Support", path: "/#resources" },
];

const QuerySelector = () => {
  const navigate = useNavigate();

  return (
    <Box 
      sx={{ 
        width: "100%",
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
            color: "rgba(255, 255, 255, 0.9)",
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
          {QUERY_OPTIONS.map((option) => (
            <Button
              key={option.path}
              // 2. Clean navigation using the predefined path
              onClick={() => navigate(option.path)}
              variant="outlined"
              sx={{
                px: 4,
                py: 2,
                borderRadius: "4px",
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
                  transform: "translateY(-3px)",
                  boxShadow: "0px 10px 20px rgba(0,0,0,0.1)"
                },
              }}
            >
              {option.label}
            </Button>
          ))}
        </Stack>
      </Container>
    </Box>
  );
};

export default QuerySelector;