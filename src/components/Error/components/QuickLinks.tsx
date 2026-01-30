import { Box, Container, Grid, Typography, Paper, ButtonBase } from "@mui/material"
import { useNavigate } from "react-router-dom"

const BRAND_BLUE = "#01B0F0"
const PRIMARY_FONT = '"Inter", "Roboto", "Helvetica", Arial, sans-serif'

const QuickLinks = () => {
  const navigate = useNavigate()

  const paths = [
    { title: "Product Catalog", desc: "Browse our full range of valves and fittings.", path: "/products" },
    { title: "Industries", desc: "Solutions for Hydrogen, Oil & Gas, and more.", path: "/industries" },
    { title: "Technical Support", desc: "Contact our engineering team for assistance.", path: "/contact" },
  ]

  return (
    <Box sx={{ bgcolor: "#f8f9fa", py: 8 }}>
      <Container maxWidth="lg">
        <Typography
          variant="h5"
          sx={{
            fontFamily: PRIMARY_FONT,
            fontWeight: 800,
            mb: 4,
            textAlign: "center",
            color: "#1a1a1a",
          }}>
          REROUTE TO SYSTEM SECTORS
        </Typography>

        <Grid container spacing={3}>
          {paths.map(item => (
            <Grid size={{ xs: 12, md: 4 }} key={item.title}>
              <ButtonBase onClick={() => navigate(item.path)} sx={{ width: "100%", textAlign: "left", display: "block" }}>
                <Paper
                  elevation={0}
                  sx={{
                    p: 4,
                    height: "100%",
                    border: "1px solid #e0e0e0",
                    transition: "all 0.3s ease",
                    "&:hover": {
                      borderColor: BRAND_BLUE,
                      boxShadow: "0px 10px 30px rgba(1, 176, 240, 0.1)",
                      transform: "translateY(-5px)",
                    },
                  }}>
                  <Typography variant="h6" sx={{ fontWeight: 800, fontFamily: PRIMARY_FONT, mb: 1 }}>
                    {item.title}
                  </Typography>
                  <Typography variant="body2" sx={{ color: "#666", fontFamily: PRIMARY_FONT, lineHeight: 1.6 }}>
                    {item.desc}
                  </Typography>
                </Paper>
              </ButtonBase>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  )
}

export default QuickLinks
