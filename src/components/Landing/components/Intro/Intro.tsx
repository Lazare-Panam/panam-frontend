import React, { useState } from "react"
import { Box, Container, Grid, Typography, Stack } from "@mui/material"
import PlayArrowIcon from "@mui/icons-material/PlayArrow"

const VIDEO_ID = "HRFxY37P0Lg"

const YouTubeThumbnail: React.FC = () => {
  const [playing, setPlaying] = useState(false)

  return (
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
        cursor: playing ? "default" : "pointer",
      }}
      onClick={() => !playing && setPlaying(true)}
    >
      {playing ? (
        <iframe
          style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", border: 0 }}
          src={`https://www.youtube.com/embed/${VIDEO_ID}?autoplay=1&enablejsapi=1`}
          title="Panam Valves Product Showcase"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        />
      ) : (
        <>
          <Box
            component="img"
            src={`https://img.youtube.com/vi/${VIDEO_ID}/maxresdefault.jpg`}
            alt="Panam Valves Product Showcase"
            sx={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
          <Box
            sx={{
              position: "absolute",
              inset: 0,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: "rgba(0,0,0,0.3)",
              transition: "background-color 0.2s",
              "&:hover": { backgroundColor: "rgba(0,0,0,0.5)" },
            }}
          >
            <Box
              sx={{
                width: 72,
                height: 72,
                borderRadius: "50%",
                backgroundColor: "#FF0000",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                boxShadow: "0 4px 20px rgba(0,0,0,0.4)",
              }}
            >
              <PlayArrowIcon sx={{ color: "#fff", fontSize: 40 }} />
            </Box>
          </Box>
        </>
      )}
    </Box>
  )
}

const IntroSection: React.FC = () => {
  return (
    <Box sx={{ py: { xs: 8, md: 3 }, backgroundColor: "transparent" }}>
      <Container maxWidth="lg">
        <Grid container spacing={8} alignItems="center">
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

          <Grid size={{ xs: 12, md: 6 }}>
            <YouTubeThumbnail />
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}

export default IntroSection