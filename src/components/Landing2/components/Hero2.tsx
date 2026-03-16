
import { 
  Box, 
  Container, 
  Typography, 
  Button, 
  Stack, 
  alpha 
} from "@mui/material";
// Import Grid2 specifically
import Grid from '@mui/material/Grid'; 
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { useNavigate } from "react-router-dom";

// Swiper Core & CSS
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";

const BRAND_BLUE = "#01B0F0";
const PRIMARY_FONT = '"Inter", "Roboto", "Helvetica", Arial, sans-serif';

const slides = [
  { image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=2000" },
  { image: "https://res.cloudinary.com/dm9rmmemx/image/upload/v1770984276/FACTORY-PHOTO-OPTION-1-JPEG_v9hkcn.jpg" },
  { image: "https://res.cloudinary.com/dm9rmmemx/image/upload/v1772530175/Carousel_images_lvpbns.jpg" },
];

const Hero2 = () => {
  const navigate = useNavigate();

  return (
    <Box 
      component="section" 
      sx={{ 
        position: "relative", 
        width: "100%", 
        height: { xs: "auto", md: "100vh" }, 
        minHeight: "700px",
        overflow: "hidden",
        bgcolor: "#F8FAFC"
      }}
    >
      {/* --- LAYER 1: SWIPER BACKGROUND --- */}
      <Box 
        sx={{ 
          position: "absolute", 
          inset: 0, 
          zIndex: 0,
          "& .swiper": { width: "100%", height: "100%" }
        }}
      >
        <Swiper
          modules={[Autoplay, EffectFade]}
          effect="fade"
          speed={1500}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          loop
          style={{ height: "100%", width: "100%" }}
        >
          {slides.map((slide, index) => (
            <SwiperSlide key={index}>
              {/* The "zoom-bg" class is handled by the CSS at the bottom */}
              <Box
                className="zoom-bg"
                sx={{
                  width: "100%",
                  height: "100%",
                  backgroundImage: `linear-gradient(rgba(248, 250, 252, 0.88), rgba(248, 250, 252, 0.75)), url(${slide.image})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  transition: "transform 12s ease-out",
                  willChange: "transform",
                }}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </Box>

      {/* --- LAYER 2: HERO CONTENT OVERLAY (GRID2) --- */}
      <Container 
        maxWidth="lg" 
        sx={{ 
          position: "relative", 
          zIndex: 2, 
          height: "100%", 
          display: "flex", 
          alignItems: "center",
          py: { xs: 12, md: 0 } 
        }}
      >
        {/* Grid2 uses 'container' and 'size' props */}
        <Grid container spacing={8} alignItems="center">
          <Grid size={{ xs: 12, md: 7 }}>
            <Stack spacing={4}>
              <Stack direction="row" spacing={1.5} alignItems="center">
                <Box sx={{ width: 10, height: 10, borderRadius: "2px", bgcolor: BRAND_BLUE }} />
                <Typography variant="overline" sx={{ letterSpacing: 2, fontWeight: 700, color: "text.secondary" }}>
                  Precision Instrumentation
                </Typography>
              </Stack>

              <Typography variant="h1" sx={{ 
                fontSize: { xs: "2.8rem", md: "4.5rem" }, 
                fontWeight: 800, 
                lineHeight: 1.1,
                color: "#1E293B",
                fontFamily: PRIMARY_FONT,
                "& em": { fontStyle: "normal", color: BRAND_BLUE }
              }}>
                Engineered<br />for <em>Critical</em><br />Infrastructure.
              </Typography>

              <Typography variant="body1" sx={{ fontSize: "1.15rem", color: "#475569", maxWidth: 520, lineHeight: 1.6 }}>
                Every day, industry leaders trust our precision-engineered <strong>hydrogen solutions</strong> and valves to control high-pressure systems in the world's most demanding environments.
              </Typography>

              <Stack direction={{ xs: "column", sm: "row" }} spacing={2.5}>
                <Button 
                  variant="contained" 
                  size="large"
                  endIcon={<ArrowForwardIcon />}
                  onClick={() => navigate("/products")} 
                  sx={{ 
                    bgcolor: BRAND_BLUE, 
                    fontWeight: 800, 
                    px: 5, py: 2,
                    borderRadius: 0,
                    textTransform: "none",
                    boxShadow: `0 8px 20px ${alpha(BRAND_BLUE, 0.2)}`,
                    "&:hover": { bgcolor: "#0090C4", transform: "translateY(-2px)" }
                  }}
                >
                  Explore Products
                </Button>
                <Button 
                  variant="outlined" 
                  size="large"
                  onClick={() => navigate("/enquiry")}
                  sx={{ 
                    borderColor: "#CBD5E1", 
                    borderRadius: 0, 
                    color: "#475569", 
                    px: 5, py: 2, 
                    fontWeight: 700, 
                    textTransform: "none",
                    "&:hover": { borderColor: BRAND_BLUE, color: BRAND_BLUE, bgcolor: "rgba(1, 176, 240, 0.04)" } 
                  }}
                >
                  Contact Sales
                </Button>
              </Stack>

              <Grid container spacing={4} sx={{ pt: 4, borderTop: "1px solid rgba(0,0,0,0.1)" }}>
                {[
                  { num: "800lb", lbl: "Max Rating" },
                  { num: "UK", lbl: "Manufactured" },
                  { num: "24h", lbl: "Response" },
                  { num: "H²", lbl: "Ready" },
                ].map((stat, i) => (
                  <Grid size={{ xs: 6, sm: 3 }} key={i}>
                    <Typography variant="h5" sx={{ color: BRAND_BLUE, fontWeight: 800 }}>{stat.num}</Typography>
                    <Typography variant="caption" sx={{ textTransform: "uppercase", fontWeight: 600, color: "#94A3B8" }}>{stat.lbl}</Typography>
                  </Grid>
                ))}
              </Grid>
            </Stack>
          </Grid>
        </Grid>
      </Container>

      {/* --- STYLES FOR THE ANIMATION --- */}
      <style>{`
        /* When the slide becomes active, zoom in slowly */
        .swiper-slide-active .zoom-bg {
          transform: scale(1.18);
        }
        
        /* When the slide is not active, reset it immediately to 1.0 */
        .swiper-slide:not(.swiper-slide-active) .zoom-bg {
          transform: scale(1);
          transition: none !important;
        }

        /* Ensure smooth fade transition */
        .swiper-fade .swiper-slide {
          pointer-events: none;
          transition-property: opacity;
        }
        .swiper-fade .swiper-slide-active {
          pointer-events: auto;
        }
      `}</style>
    </Box>
  );
};

export default Hero2;