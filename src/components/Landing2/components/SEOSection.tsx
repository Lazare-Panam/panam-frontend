import { useState } from "react";
import { Box, Container, Typography } from "@mui/material";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import Grid from "@mui/material/Grid";

const BRAND_BLUE = "#01B0F0";
const YOUTUBE_ID = "HRFxY37P0Lg";

const SEOSection = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <Box component="section" sx={{ py: 10, bgcolor: "#FFFFFF", borderTop: "1px solid #E2E8F0" }}>
      <Container maxWidth="lg">
        <Grid container spacing={8} alignItems="center">

          {/* Main Text Content */}
          <Grid size={{ xs: 12, md: 6 }}>
            <Typography variant="overline" component="span" sx={{ fontWeight: 800, color: BRAND_BLUE, letterSpacing: 1.5, display: 'block', mb: 1 }}>
              Instrumentation
            </Typography>
            
            <Typography variant="h2" component="h2" sx={{ fontWeight: 800, color: "#1E293B", mb: 3, fontSize: { xs: "2rem", md: "2.5rem" }, lineHeight: 1.2 }}>
              Valves & Flow Control Products
            </Typography>

            <Typography variant="body1" sx={{ color: "#475569", mb: 3, lineHeight: 1.8, fontSize: "1.05rem" }}>
              PANAM Valves provides a complete range of high-quality instrumentation valves and flow control products designed for performance in demanding industrial environments. Our solutions are widely used across <strong>oil & gas, petrochemical, and process industries</strong> where reliability and precision are critical.
            </Typography>

            <Typography variant="body1" sx={{ color: "#475569", mb: 4, lineHeight: 1.8, fontSize: "1.05rem" }}>
              Our product portfolio includes <strong>needle valves, check valves, and non return check valves</strong>, alongside advanced solutions such as the <strong>block and bleed valve</strong> for safe isolation and pressure control. We also supply a wide range of <strong>pipe and fittings</strong>, including <strong>stainless steel fittings</strong>, ensuring compatibility across a variety of industrial systems.
            </Typography>

            <Typography variant="h3" component="h3" sx={{ fontWeight: 800, color: "#1E293B", mb: 2, fontSize: "1.5rem" }}>
              Precision-Engineered for Industrial Applications
            </Typography>

            <Typography variant="body1" sx={{ color: "#475569", lineHeight: 1.8, fontSize: "1.05rem" }}>
              All PANAM products are manufactured using premium materials to ensure durability and long service life. Our range of <strong>tube fitting</strong> solutions and <strong>flare fittings</strong> are designed for secure, leak-free connections in high-pressure environments.
            </Typography>
          </Grid>

          {/* Featured Video */}
          <Grid size={{ xs: 12, md: 6 }}>
            <Typography variant="overline" sx={{ fontWeight: 800, color: BRAND_BLUE, letterSpacing: 1.5, display: "block", mb: 1.5 }}>
              Watch Panam In Action
            </Typography>
            <Box
              sx={{
                width: "100%",
                aspectRatio: "16 / 9",
                position: "relative",
                overflow: "hidden",
                border: `1px solid ${BRAND_BLUE}33`,
                boxShadow: "0 25px 40px -10px rgb(1 176 240 / 0.2), 0 10px 15px -6px rgb(0 0 0 / 0.1)",
              }}
            >
              {isPlaying ? (
                <iframe
                  width="100%"
                  height="100%"
                  src={`https://www.youtube.com/embed/${YOUTUBE_ID}?autoplay=1`}
                  title="Panam - Instrumentation Fittings & Valves"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  style={{ border: 0, display: "block" }}
                ></iframe>
              ) : (
                <Box
                  component="button"
                  onClick={() => setIsPlaying(true)}
                  aria-label="Play video: Panam - Instrumentation Fittings & Valves"
                  sx={{
                    width: "100%",
                    height: "100%",
                    p: 0,
                    border: "none",
                    cursor: "pointer",
                    position: "relative",
                    backgroundImage: `url(https://i.ytimg.com/vi/${YOUTUBE_ID}/hqdefault.jpg)`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    "&:hover .play-badge": { transform: "translate(-50%, -50%) scale(1.1)" },
                  }}
                >
                  <Box sx={{ position: "absolute", inset: 0, bgcolor: "rgba(15,23,42,0.25)" }} />
                  <Box
                    className="play-badge"
                    sx={{
                      position: "absolute",
                      top: "50%",
                      left: "50%",
                      transform: "translate(-50%, -50%)",
                      width: 76,
                      height: 76,
                      borderRadius: "50%",
                      bgcolor: BRAND_BLUE,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      boxShadow: "0 8px 24px rgba(1,176,240,0.5)",
                      transition: "transform 0.25s ease",
                    }}
                  >
                    <PlayArrowIcon sx={{ color: "#fff", fontSize: 40 }} />
                  </Box>
                </Box>
              )}
            </Box>
          </Grid>

        </Grid>
      </Container>
    </Box>
  );
};

export default SEOSection;