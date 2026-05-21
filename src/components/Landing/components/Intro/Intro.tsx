import React from "react"
import { Box, Container, Grid, Typography, Stack } from "@mui/material"

const IntroSection: React.FC = () => {
  return (
    <Box sx={{ py: { xs: 8, md: 3 }, backgroundColor: "transparent" }}>
      <Container maxWidth="lg">
        {/* Parent Grid remains the same */}
        <Grid container spacing={8} alignItems="center">
          {/* LEFT: THE HOOK - Changed to use 'size' prop */}
          <Grid size={{ xs: 12, md: 6 }}>
            <Stack spacing={2.5}>
              <Typography
                variant="overline"
                sx={{
                  color: "#01B0F0",
                  fontWeight: 800,
                  letterSpacing: 1.5,
                  fontSize: "0.9rem",
                }}>
                The Panam Standard
              </Typography>

              <Typography
                variant="h3"
                sx={{
                  fontWeight: 900,
                  color: "#1A1A1A",
                  lineHeight: 1.1,
                  fontSize: { xs: "2rem", md: "2.8rem" },
                }}>
                Helping People Feel Confident in Their Fluid Systems
              </Typography>

              <Box sx={{ width: "60px", height: "4px", backgroundColor: "#01B0F0", mb: 1 }} />

              <Typography
                variant="body1"
                sx={{
                  color: "#555",
                  fontSize: "1.05rem",
                  lineHeight: 1.7,
                  textAlign: "justify",
                }}>
                Every day, customers count on us to help them contain and control liquids and gases in critical applications. They trust in the quality of our products and the knowledge of our experts to meet the unrelenting demands of their industries.
              </Typography>

              <Typography
                variant="body1"
                sx={{
                  color: "#555",
                  fontSize: "1.05rem",
                  lineHeight: 1.7,
                  textAlign: "justify",
                }}>
                We take that trust seriously, knowing even the smallest fluid system component can play a big role in protecting their profitability, their people, and our planet.
              </Typography>
            </Stack>
          </Grid>

          {/* RIGHT: THE VIDEO - Removed 'container', changed to use 'size' prop */}
          <Grid size={{ xs: 12, md: 6 }}>
            <Box
              sx={{
                position: "relative",
                width: "100%",
                aspectRatio: "16/9",
                borderRadius: "4px",
                overflow: "hidden",
                boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.15)",
                backgroundColor: "#000",
                border: "1px solid rgba(0,0,0,0.05)",
              }}>
             <iframe
  style={{
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    border: 0,
  }}
  src="https://www.youtube.com/embed/HRFxY37P0Lg?enablejsapi=1"
  title="Panam Valves Product Showcase"
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
  allowFullScreen
/>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}

export default IntroSection
