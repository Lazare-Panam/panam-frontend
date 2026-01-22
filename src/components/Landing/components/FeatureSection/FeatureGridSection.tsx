import React from "react"
import { Box, Container, Typography, Button, Divider } from "@mui/material"
import Grid from "@mui/material/Grid"
import { useNavigate } from "react-router-dom"

// Define the shape of each feature item
interface FeatureItem {
  image: string
  caption: React.ReactNode // ReactNode allows us to pass bolded text/links easily
  link: string
}

interface FeatureGridProps {
  sectionTitle: string
  items: FeatureItem[]
  buttonText: string
  onButtonClick?: () => void
}

const FeatureGridSection: React.FC<FeatureGridProps> = ({ sectionTitle, items, buttonText, onButtonClick }) => {
  const navigate = useNavigate()

  return (
    <Box sx={{ width: "100%", py: 8 }}>
      {/* Visual Divider to separate from previous sections */}
      <Divider sx={{ mb: 8, borderColor: "rgba(0,0,0,0.08)" }} />

      <Container maxWidth="lg">
        <Typography
          variant="h4"
          sx={{
            fontWeight: 800,
            mb: 6,
            color: "#1A1A1A",
            textAlign: { xs: "center", md: "left" },
          }}>
          {sectionTitle}
        </Typography>

        <Grid container spacing={4}>
          {items.map((item, index) => (
            <Grid key={index} size={{ xs: 12, sm: 6, md: 4 }} sx={{ cursor: "pointer" }} onClick={() => navigate(item.link)}>
              <Box
                component="img"
                src={item.image}
                alt={`Feature ${index}`}
                sx={{
                  width: "100%",
                  height: "200px",
                  objectFit: "cover",
                  borderRadius: "2px", // Sharper industrial look
                  mb: 2,
                  transition: "transform 0.3s ease",
                  "&:hover": { transform: "scale(1.02)" },
                }}
              />
              <Typography
                variant="body1"
                sx={{
                  color: "#444",
                  lineHeight: 1.6,
                  "& span": { color: "#01B0F0", fontWeight: 700 }, // Target bold/colored text
                }}>
                {item.caption}
              </Typography>
            </Grid>
          ))}
        </Grid>

        {/* Action Button */}
        <Box sx={{ display: "flex", justifyContent: "center", mt: 8 }}>
          <Button
            variant="outlined"
            size="large"
            onClick={onButtonClick}
            sx={{
              borderRadius: "50px", // Pills style from your reference image
              px: 4,
              py: 1.5,
              fontWeight: 700,
              textTransform: "uppercase",
              color: "#005596", // Corporate blue
              borderColor: "#005596",
              borderWidth: 2,
              "&:hover": {
                borderWidth: 2,
                backgroundColor: "rgba(0,85,150,0.05)",
              },
            }}>
            {buttonText}
          </Button>
        </Box>
      </Container>
    </Box>
  )
}

export default FeatureGridSection
