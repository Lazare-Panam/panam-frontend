import React from "react";
import { Box, Typography, Container, Card, CardContent, CardActionArea, Stack } from "@mui/material";
import Grid from "@mui/material/Grid"; 
import { useNavigate } from "react-router-dom";
import MenuBookIcon from '@mui/icons-material/MenuBook'; 
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const BRAND_BLUE = "#01B0F0";
const PRIMARY_FONT = '"Inter", "Roboto", "Helvetica", Arial, sans-serif';

const ResourcesPage: React.FC = () => {
  const navigate = useNavigate();

  const resourceCards = [
    {
      title: "TECHNICAL CATALOGUES",
      description: "Access our comprehensive range of product specifications, flow data, and technical drawings for industrial applications.",
      path: "/catalogPdfs",
      icon: <MenuBookIcon sx={{ fontSize: 40, color: BRAND_BLUE }} />,
    },
    {
      title: "QUALITY & CERTIFICATIONS",
      description: "View our ISO 9001, ISO 14001 and ISO 45001 certificates and ATEX and PED documents.",
      path: "/certificates",
      icon: <VerifiedUserIcon sx={{ fontSize: 40, color: BRAND_BLUE }} />,
    }
  ];

  return (
      <>
    <title>Technical Resources | Panam Valves – Catalogues & Certifications</title>
    <meta name="description" content="Access Panam Valves' technical resources including product catalogues, ISO certifications, safety documentation and compliance records for industrial valve applications." />
    <meta name="robots" content="index, follow" />
    <meta property="og:title" content="Technical Resources | Panam Valves" />
    <meta property="og:description" content="Product catalogues, ISO certifications, and compliance documentation for industrial valves and fittings." />
    <meta property="og:type" content="website" />
    <meta property="og:url" content="https://www.panamvalve.com/resources" />
    <link rel="canonical" href="https://www.panamvalve.com/resources" />
    <Box sx={{ backgroundColor: "#F2F4F7", minHeight: "100vh", fontFamily: PRIMARY_FONT }}>
      {/* Header Section: Solid Deep Navy/Charcoal */}
      <Box 
        sx={{ 
          backgroundColor: BRAND_BLUE, 
          color: "white", 
          py: { xs: 8, md: 12 }, 
          textAlign: "left",
        }}
      >
        <Container maxWidth="lg">
          <Typography 
            variant="h2" 
            sx={{ 
              fontWeight: 900, 
              fontFamily: PRIMARY_FONT, 
              mb: 1,
              fontSize: { xs: "2.5rem", md: "3.5rem" },
              letterSpacing: "-0.04em",
              textTransform: "uppercase"
            }}
          >
            Technical Resources
          </Typography>
          <Box sx={{ width: "60px", height: "4px", bgcolor: BRAND_BLUE, mb: 3 }} />
          <Typography 
            variant="h6" 
            sx={{ 
              fontWeight: 400, 
              opacity: 0.7, 
              lineHeight: 1.6,
              fontFamily: PRIMARY_FONT,
              maxWidth: "800px",
            }}
          >
            Engineering data, certifications, and procurement documentation 
            for global infrastructure projects.
          </Typography>
        </Container>
      </Box>

      {/* Main Content Area */}
      <Container maxWidth="lg" sx={{ mt: 6, pb: 12 }}>
        <Grid container spacing={0} sx={{ border: "1px solid rgba(0,0,0,0.1)" }}>
          {resourceCards.map((card) => (
            <Grid size={{ xs: 12, md: 6 }} key={card.title}>
              <Card 
                sx={{ 
                  height: "100%", 
                  borderRadius: 0, // Hard edges
                  border: "1px solid rgba(0,0,0,0.05)",
                  boxShadow: "none",
                  backgroundColor: "#FFFFFF",
                  transition: "all 0.3s ease",
                  "&:hover": {
                    backgroundColor: "#FBFCFD",
                    zIndex: 1,
                    boxShadow: "inset 0 -6px 0 0 " + BRAND_BLUE, // Blue accent on bottom
                  }
                }}
              >
                <CardActionArea 
                  onClick={() => navigate(card.path)}
                  sx={{ height: "100%", p: 2 }}
                >
                  <CardContent sx={{ py: 6, px: 4 }}>
                    <Box sx={{ mb: 4 }}>
                      {card.icon}
                    </Box>
                    <Typography 
                      variant="h4" 
                      sx={{ 
                        fontWeight: 900, 
                        fontFamily: PRIMARY_FONT,
                        color: "#0A121A",
                        mb: 2,
                        fontSize: "1.5rem",
                        letterSpacing: "0.02em"
                      }}
                    >
                      {card.title}
                    </Typography>
                    <Typography 
                      variant="body1" 
                      sx={{ 
                        color: "#475569", 
                        mb: 5, 
                        lineHeight: 1.8,
                        fontSize: "1rem"
                      }}
                    >
                      {card.description}
                    </Typography>
                    
                    <Stack direction="row" alignItems="center" spacing={1}>
                      <Typography 
                        sx={{ 
                          fontWeight: 800, 
                          color: BRAND_BLUE, 
                          textTransform: "uppercase", 
                          fontSize: "0.8rem",
                          letterSpacing: "0.15em"
                        }}
                      >
                        Download Files
                      </Typography>
                      <ArrowForwardIcon sx={{ fontSize: 16, color: BRAND_BLUE }} />
                    </Stack>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
          ))}
        </Grid>

        {/* Support Section: High Contrast Minimalist */}
        <Box 
          sx={{ 
            mt: 6, 
            p: { xs: 4, md: 6 }, 
            borderRadius: 0, 
            backgroundColor: BRAND_BLUE, 
            color: "white",
            textAlign: "left",
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            alignItems: "center",
            justifyContent: "space-between",
            gap: 4
          }}
        >
          <Box>
            <Typography 
              variant="h5" 
              sx={{ 
                fontWeight: 900, 
                mb: 1, 
                fontFamily: PRIMARY_FONT,
                textTransform: "uppercase",
                letterSpacing: "0.02em"
              }}
            >
              Custom Documentation Request
            </Typography>
            <Typography 
              sx={{ 
                color: "rgba(255,255,255,0.6)", 
                maxWidth: "600px",
                fontFamily: PRIMARY_FONT 
              }}
            >
              Need specific CAD drawings or material certificates for your project? 
              Our engineering team provides custom technical support.
            </Typography>
          </Box>
          
          <Box
            component="button"
            onClick={() => navigate("/enquiry")}
            sx={{
              backgroundColor: "transparent",
              color: "white",
              border: `2px solid ${BRAND_BLUE}`,
              borderRadius: 0,
              px: 6,
              py: 2,
              fontWeight: 800,
              fontSize: "0.9rem",
              textTransform: "uppercase",
              letterSpacing: "0.1em",
              cursor: "pointer",
              transition: "all 0.3s",
              fontFamily: PRIMARY_FONT,
              whiteSpace: "nowrap",
              "&:hover": {
                backgroundColor: BRAND_BLUE,
                color: "#0A121A"
              }
            }}
          >
            Contact Engineering
          </Box>
        </Box>
      </Container>
    </Box>
    </>
  );
};

export default ResourcesPage;