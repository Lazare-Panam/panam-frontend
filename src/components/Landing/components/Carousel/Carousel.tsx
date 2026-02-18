import React from "react"
import { Box, Typography, Button, Container, Stack } from "@mui/material"
import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay, Navigation, Pagination, EffectFade } from "swiper/modules"
import { useNavigate } from "react-router-dom"
const BRAND_BLUE = "#01B0F0"

const slides = [
  {
    title: "Precision Engineered Valves",
    subtitle: "High-performance solutions for oil, gas, and industrial applications.",
    image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=2000",
  },
  {
    title: "Global Infrastructure Support",
    subtitle: "Built to withstand the most demanding environments on Earth.",
    image: "https://res.cloudinary.com/dm9rmmemx/image/upload/v1770984276/FACTORY-PHOTO-OPTION-1-JPEG_v9hkcn.jpg",
  },
  {
    title: "Next-Gen Flow Control",
    subtitle: "Integrating smart technology with heavy-duty mechanical engineering.",
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=80&w=2000",
  },
]

const Carousel: React.FC = () => {
  const navigate = useNavigate();
  return (
    <Box
      sx={{
        width: "100%",
        height: { xs: "500px", md: "80vh" },
        position: "relative",
        overflow: "hidden",
        backgroundColor: "#000", // Prevents white flash on load
      }}>
      <Swiper
        modules={[Autoplay, Navigation, Pagination, EffectFade]}
        effect="fade"
        speed={1200}
        autoplay={{ delay: 2000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        navigation
        loop
        watchSlidesProgress={true} // Forces Swiper to calculate visibility for the first slide
        style={{ height: "100%", width: "100%" }}>
        {slides.map(slide => (
          <SwiperSlide key={slide.title}>
            <Box
              sx={{
                position: "relative",
                width: "100%",
                height: "100%",
                display: "flex",
                alignItems: "center",
                color: "white",
                pt: { xs: "70px", md: "80px" },
                overflow: "hidden",
              }}>
              {/* Background Image Layer */}
              <Box
                className="zoom-bg"
                sx={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                  zIndex: -1,
                  backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.4)), url(${slide.image})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  transition: "transform 8s ease-out", // Long, cinematic zoom
                  willChange: "transform",
                }}
              />

              <Container maxWidth="lg">
                <Stack spacing={2} sx={{ maxWidth: { xs: "100%", md: 700 } }}>
                  <Typography
                    variant="h1"
                    className="fade-up-1"
                    sx={{
                      fontWeight: 900,
                      fontSize: { xs: "2.2rem", sm: "3rem", md: "3.8rem" },
                      lineHeight: 1.1,
                      textShadow: "0px 2px 10px rgba(0,0,0,0.3)",
                    }}>
                    {slide.title}
                  </Typography>

                  <Typography
                    variant="h5"
                    className="fade-up-2"
                    sx={{
                      fontWeight: 400,
                      fontSize: { xs: "1rem", md: "1.25rem" },
                      opacity: 0.9,
                      maxWidth: "550px",
                      lineHeight: 1.5,
                    }}>
                    {slide.subtitle}
                  </Typography>

                  <Stack direction="row" spacing={2} sx={{ pt: 1 }} className="fade-up-3">
                    <Button
                      variant="contained"
                      disableElevation
                      onClick={()=>navigate("/products")}
                      sx={{
                        backgroundColor: BRAND_BLUE,
                        px: { xs: 2, md: 4 },
                        py: 1.2,
                        fontWeight: 700,
                        textTransform: "none",
                        "&:hover": { backgroundColor: "#0090C5" },
                      }}>
                      Explore Products
                    </Button>
                    <Button
                      variant="outlined"
                       onClick={()=>navigate("/enquiry")}
                      sx={{
                        color: "white",
                        borderColor: "rgba(255,255,255,0.5)",
                        px: { xs: 2, md: 4 },
                        fontWeight: 700,
                        textTransform: "none",
                        "&:hover": { borderColor: "white", backgroundColor: "rgba(255,255,255,0.1)" },
                      }}>
                      Contact Sales
                    </Button>
                  </Stack>
                </Stack>
              </Container>
            </Box>
          </SwiperSlide>
        ))}
      </Swiper>

      <style>{`
        /* 1. Zoom Logic */
        /* We target both active and duplicate-active for seamless looping */
        .swiper-slide-active .zoom-bg,
        .swiper-slide-duplicate-active .zoom-bg {
          transform: scale(1.15);
        }

        /* 2. Text/Content Reveal Logic */
        .fade-up-1, .fade-up-2, .fade-up-3 {
          opacity: 0;
          transform: translateY(30px);
          transition: all 0.8s cubic-bezier(0.215, 0.61, 0.355, 1);
          will-change: transform, opacity;
        }

        /* Staggered delays so they pop in one by one */
        .swiper-slide-active .fade-up-1,
        .swiper-slide-duplicate-active .fade-up-1 { opacity: 1; transform: translateY(0); transition-delay: 0.4s; }
        
        .swiper-slide-active .fade-up-2,
        .swiper-slide-duplicate-active .fade-up-2 { opacity: 0.9; transform: translateY(0); transition-delay: 0.6s; }
        
        .swiper-slide-active .fade-up-3,
        .swiper-slide-duplicate-active .fade-up-3 { opacity: 1; transform: translateY(0); transition-delay: 0.8s; }

        /* 3. Navigation Styling */
        .swiper-pagination-bullet { background: rgba(255,255,255,0.5); opacity: 1; }
        .swiper-pagination-bullet-active { background: ${BRAND_BLUE} ; width: 24px; border-radius: 4px; transition: all 0.3s; }
        .swiper-button-next, .swiper-button-prev { color: white ; transform: scale(0.5); opacity: 0.5; transition: 0.3s; }
        .swiper-button-next:hover, .swiper-button-prev:hover { opacity: 1; }
      `}</style>
    </Box>
  )
}

export default Carousel
