import React from "react"
import { Box, Container, Typography, Button, Divider, Stack } from "@mui/material"
import Grid from "@mui/material/Grid"

const Commitments: React.FC = () => {
  return (
    <Box sx={{ width: "100%", py: 8 }}>
      {/* Visual Divider on Top */}
      <Divider sx={{ mb: 8, borderColor: "rgba(0,0,0,0.1)", borderWidth: 1 }} />

      <Container maxWidth="lg">
        <Grid container spacing={6} alignItems="center">
          {/* LEFT: TEXT CONTENT */}
          <Grid size={{ xs: 12, md: 6 }}>
            <Stack spacing={3}>
              <Typography
                variant="h3"
                sx={{
                  fontWeight: 800,
                  color: "#1A1A1A",
                  lineHeight: 1.2,
                  fontSize: { xs: "2rem", md: "2.8rem" },
                }}>
                Our Company’s Commitments
              </Typography>

              <Typography
                variant="body1"
                sx={{
                  color: "#4A4A4A",
                  fontSize: "1.1rem",
                  lineHeight: 1.7,
                }}>
                Read about our commitments to the Panam associates who make our positive impact on the world possible, the communities in which we work and live, and the shared values that drive everything we do.
              </Typography>

              <Box sx={{ pt: 2 }}>
                <Button
                  variant="outlined"
                  sx={{
                    borderRadius: "50px",
                    px: 4,
                    py: 1.2,
                    fontWeight: 700,
                    textTransform: "uppercase",
                    color: "#01B0F0",
                    borderColor: "#01B0F0",
                    borderWidth: 2,
                    "&:hover": {
                      borderWidth: 2,
                      backgroundColor: "rgba(0,85,150,0.05)",
                    },
                  }}>
                  Find Information About Panam
                </Button>
              </Box>
            </Stack>
          </Grid>

          {/* RIGHT: IMAGE */}
          <Grid size={{ xs: 12, md: 6 }}>
            <Box
              component="img"
              src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1200"
              alt="Panam Headquarters"
              sx={{
                width: "100%",
                height: "auto",
                maxHeight: "400px",
                objectFit: "cover",
                borderRadius: "2px",
                boxShadow: "0px 10px 30px rgba(0,0,0,0.05)",
              }}
            />
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}

export default Commitments
