import React from "react";
import { Box, Typography, Container, Card, CardContent, CardActionArea, Stack } from "@mui/material";
import Grid from "@mui/material/Grid";
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';

const BRAND_BLUE = "#01B0F0";
const PRIMARY_FONT = '"Inter", "Roboto", "Helvetica", Arial, sans-serif';

const CertificationsPage: React.FC = () => {
  // Add your certification titles and image links here
  const certifications = [
    {
      title: "ISO 9001:2015",
      subtitle: "Quality Management System",
      image: "https://res.cloudinary.com/dm9rmmemx/image/upload/v1775560746/1fc73a96-6be8-4f07-b669-995c757244e7_nvlomw.jpg", // Replace with your JPG link
    },
    {
      title: "ISO 14001:2015",
      subtitle: "Environmental Management",
      image: "https://res.cloudinary.com/dm9rmmemx/image/upload/v1775560757/fac05a42-dc4f-42a3-ba05-f19db55fd180_hfjugm.jpg", // Replace with your JPG link
    },
    {
      title: "ISO 45001:2018",
      subtitle: "Occupantional Health & Safety Manangement System",
      image: "https://res.cloudinary.com/dm9rmmemx/image/upload/v1775560749/7b59e985-6f05-4afe-95de-4fe95df9c821_wtjbyp.jpg",
    },
    {
      title: "ISO 9001:2015",
      subtitle: "Enviormental Management System Standard",
      image: "https://res.cloudinary.com/dm9rmmemx/image/upload/v1775560757/fac05a42-dc4f-42a3-ba05-f19db55fd180_hfjugm.jpg", // Replace with your JPG link
    },
    
  ];

  const handleOpenCert = (url: string) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <Box sx={{ backgroundColor: "#F2F4F7", minHeight: "100vh", fontFamily: PRIMARY_FONT }}>
      {/* Header Section */}
      <Box 
        sx={{ 
          backgroundColor: BRAND_BLUE, 
          color: "white", 
          py: { xs: 8, md: 10 }, 
         
        }}
      >
        <Container maxWidth="lg">
          <Stack direction="row" alignItems="center" spacing={2} sx={{ mb: 2 }}>
            <VerifiedUserIcon sx={{ color: BRAND_BLUE, fontSize: 32 }} />
            <Typography 
              variant="overline" 
              sx={{ letterSpacing: "0.3em", fontWeight: 700, opacity: 0.6 }}
            >
              Compliance & Quality
            </Typography>
          </Stack>
          <Typography 
            variant="h2" 
            sx={{ 
              fontWeight: 900, 
              fontFamily: PRIMARY_FONT, 
              fontSize: { xs: "2.5rem", md: "3.5rem" },
              textTransform: "uppercase",
              letterSpacing: "-0.02em"
            }}
          >
            Official Certifications
          </Typography>
        </Container>
      </Box>

      {/* Grid Section */}
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Grid container spacing={3}>
          {certifications.map((cert, index) => (
            <Grid size={{ xs: 12, sm: 6, md: 4 }} key={index}>
              <Card 
                sx={{ 
                  borderRadius: 0, 
                  border: "1px solid rgba(0,0,0,0.1)",
                  boxShadow: "none",
                  backgroundColor: "#fff",
                  transition: "all 0.2s ease-in-out",
                  "&:hover": {
                    borderColor: BRAND_BLUE,
                    transform: "scale(1.02)",
                    zIndex: 2,
                    boxShadow: "0 10px 30px rgba(0,0,0,0.1)"
                  }
                }}
              >
                <CardActionArea 
                  onClick={() => handleOpenCert(cert.image)}
                  sx={{ p: 0 }}
                >
                  {/* Visual Placeholder for the Certificate Image */}
                  <Box 
                    sx={{ 
                      width: "100%", 
                      height: "200px", 
                      backgroundColor: "#f8f9fa",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      borderBottom: "1px solid rgba(0,0,0,0.05)",
                      overflow: "hidden"
                    }}
                  >
                    <img 
                      src={cert.image} 
                      alt={cert.title} 
                      style={{ width: "100%", height: "100%", objectFit: "contain", opacity: 0.8 }}
                    />
                  </Box>

                  <CardContent sx={{ p: 3 }}>
                    <Stack direction="row" justifyContent="space-between" alignItems="flex-start">
                      <Box>
                        <Typography 
                          sx={{ 
                            fontWeight: 900, 
                            fontSize: "1.1rem", 
                            color: "#0A121A",
                            textTransform: "uppercase",
                            mb: 0.5
                          }}
                        >
                          {cert.title}
                        </Typography>
                        <Typography 
                          sx={{ 
                            fontSize: "0.85rem", 
                            color: "#64748B",
                            fontWeight: 500
                          }}
                        >
                          {cert.subtitle}
                        </Typography>
                      </Box>
                      <OpenInNewIcon sx={{ fontSize: 20, color: BRAND_BLUE, mt: 0.5 }} />
                    </Stack>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
          ))}
        </Grid>

        {/* Technical Footer Note */}
        <Box 
          sx={{ 
            mt: 8, 
            p: 4, 
            border: "2px solid #0A121A", 
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            alignItems: "center",
            justifyContent: "space-between",
            gap: 3
          }}
        >
          <Typography sx={{ fontWeight: 700, color: "#0A121A", fontFamily: PRIMARY_FONT }}>
            REGULATORY NOTICE: ALL DOCUMENTS ARE VALID FOR THE CURRENT FISCAL YEAR.
          </Typography>
        
        </Box>
      </Container>
    </Box>
  );
};

export default CertificationsPage;