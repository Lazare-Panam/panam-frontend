// @ts-nocheck
import React from "react"
import { Box, Typography, Button, Container, Stack } from "@mui/material"
import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay, Navigation, Pagination, EffectFade } from "swiper/modules"

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
    image: "https://images.unsplash.com/photo-1513828583688-c52646db42da?auto=format&fit=crop&q=80&w=2000",
  },
  {
    title: "Next-Gen Flow Control",
    subtitle: "Integrating smart technology with heavy-duty mechanical engineering.",
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=80&w=2000",
  },
]

const Carousel: React.FC = () => {
  return (
    <Box
      sx={{
        width: "100%",
        // Responsive height: Fixed 70vh on large screens, auto on small to prevent clipping
        height: { xs: "500px", md: "80vh" },
        position: "relative",
        overflow: "hidden",
      }}>
      <Swiper modules={[Autoplay, Navigation, Pagination, EffectFade]} effect="fade" speed={1000} autoplay={{ delay: 5000, disableOnInteraction: false }} pagination={{ clickable: true }} navigation loop style={{ height: "100%", width: "100%" }}>
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <Box
              sx={{
                position: "relative",
                width: "100%",
                height: "100%",
                backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.4)), url(${slide.image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                display: "flex",
                alignItems: "center",
                color: "white",
                pt: { xs: "70px", md: "80px" },
              }}>
              <Container maxWidth="lg">
                <Stack spacing={2} sx={{ maxWidth: { xs: "100%", md: 700 } }}>
                  <Typography
                    variant="h1"
                    sx={{
                      fontWeight: 900,
                      // Reduced font sizes for the shorter 70vh height
                      fontSize: { xs: "2.2rem", sm: "3rem", md: "3.8rem" },
                      lineHeight: 1.1,
                      textShadow: "0px 2px 10px rgba(0,0,0,0.3)",
                    }}>
                    {slide.title}
                  </Typography>
                  <Typography
                    variant="h5"
                    sx={{
                      fontWeight: 400,
                      fontSize: { xs: "1rem", md: "1.25rem" },
                      opacity: 0.9,
                      maxWidth: "550px",
                      lineHeight: 1.5,
                    }}>
                    {slide.subtitle}
                  </Typography>
                  <Stack direction="row" spacing={2} sx={{ pt: 1 }}>
                    <Button
                      variant="contained"
                      disableElevation
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
        .swiper-pagination-bullet { background: rgba(255,255,255,0.5); opacity: 1; }
        .swiper-pagination-bullet-active { background: ${BRAND_BLUE} !important; width: 24px; border-radius: 4px; transition: all 0.3s; }
        .swiper-button-next, .swiper-button-prev { color: white !important; transform: scale(0.5); opacity: 0.5; transition: 0.3s; }
        .swiper-button-next:hover, .swiper-button-prev:hover { opacity: 1; }
      `}</style>
    </Box>
  )
}

export default Carousel
