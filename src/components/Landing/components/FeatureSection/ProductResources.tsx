import React from "react"
import { Box, Container, Typography, Button,  Stack } from "@mui/material"
import Grid from "@mui/material/Grid"

// Icons that match the technical resource style
import MenuBookIcon from "@mui/icons-material/MenuBook" // Catalog
import CalculateIcon from "@mui/icons-material/Calculate" // Flow Calculator
import ArchitectureIcon from "@mui/icons-material/Architecture" // CAD Files
import SettingsInputComponentIcon from "@mui/icons-material/SettingsInputComponent" // Flow Curve
import VerifiedIcon from "@mui/icons-material/Verified" // Certifications
import { useNavigate } from "react-router-dom"

const BRAND_BLUE = "#01B0F0"
const RESOURCE_GREEN = "#01B0F0"

const ProductResources: React.FC = () => {
  const navigate = useNavigate()
  const resources = [
    { icon: <MenuBookIcon fontSize="large" />, label: "Catalog Library", path: "/catalogPDFs" },
    { icon: <CalculateIcon fontSize="large" />, label: "2D/3D Drawings",path: "#" },
    { icon: <ArchitectureIcon fontSize="large" />, label: "CAD Files", path: "#" },
    { icon: <SettingsInputComponentIcon fontSize="large" />, label: "Test Type Reports", path: "#" },
    { icon: <VerifiedIcon fontSize="large" />, label: "QMS Certifications" ,path: "#" },
  ]

  return (
    <Box sx={{ width: "100%", py: 8, backgroundColor: "transparent" }}>
      <Container maxWidth="lg">
        <Typography
          variant="h4"
          sx={{
            fontWeight: 800,
            textAlign: "center",
            mb: 8,
            color: "#333",
            fontFamily: '"Inter", sans-serif',
          }}>
         Technical Support
        </Typography>

        <Grid container spacing={2} justifyContent="center">
          {resources.map((res, index) => (
            <Grid key={index} size={{ xs: 6, sm: 4, md: 2.4 }}>
              <Stack
                spacing={2}
                alignItems="center"
                onClick={() => res.path !== "#" && navigate(res.path)}
                sx={{
                  cursor: "pointer",
                  "&:hover .icon-box": { transform: "translateY(-5px)" },
                  "&:hover .label-text": { color: BRAND_BLUE },
                }}>
                <Box
                  className="icon-box"
                  sx={{
                    color: RESOURCE_GREEN,
                    transition: "transform 0.3s ease",
                  }}>
                  {res.icon}
                </Box>
                <Typography
                  className="label-text"
                  variant="body2"
                  sx={{
                    fontWeight: 700,
                    textAlign: "center",
                    color: RESOURCE_GREEN,
                    fontSize: "0.9rem",
                    lineHeight: 1.2,
                    transition: "color 0.3s ease",
                  }}>
                  {res.label}
                </Typography>
              </Stack>
            </Grid>
          ))}
        </Grid>

        <Box sx={{ display: "flex", justifyContent: "center", mt: 8 }}>
          <Button
            variant="outlined"
            sx={{
              borderRadius: "50px",
              px: 4,
              py: 1.2,
              fontWeight: 700,
              textTransform: "uppercase",
              color: BRAND_BLUE,
              borderColor: BRAND_BLUE,
              borderWidth: 2,
              "&:hover": {
                borderWidth: 2,
                backgroundColor: "rgba(0,85,150,0.05)",
              },
            }}>
            Find Fluid System Solutions You Can Trust
          </Button>
        </Box>
      </Container>
    </Box>
  )
}

export default ProductResources
