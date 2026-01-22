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
    <Box sx={{ width: "100%", height: "70vh", position: "relative", mt: 0 }}>
      <Swiper modules={[Autoplay, Navigation, Pagination, EffectFade]} effect="fade" speed={1000} autoplay={{ delay: 5000, disableOnInteraction: false }} pagination={{ clickable: true }} navigation loop style={{ height: "100%", width: "100%" }}>
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <Box
              sx={{
                position: "relative",
                width: "100%",
                height: "100%",
                backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${slide.image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                display: "flex",
                alignItems: "center",
                color: "white",
              }}>
              <Container maxWidth="lg">
                <Stack spacing={3} sx={{ maxWidth: 800 }}>
                  <Typography
                    variant="h1"
                    sx={{
                      fontWeight: 900,
                      fontSize: { xs: "2.5rem", md: "4.5rem" },
                      lineHeight: 1.1,
                    }}>
                    {slide.title}
                  </Typography>
                  <Typography
                    variant="h5"
                    sx={{
                      fontWeight: 400,
                      opacity: 0.9,
                      fontFamily: '"Inter", sans-serif',
                    }}>
                    {slide.subtitle}
                  </Typography>
                  <Stack direction="row" spacing={2} sx={{ pt: 2 }}>
                    <Button
                      variant="contained"
                      size="large"
                      sx={{
                        backgroundColor: BRAND_BLUE,
                        px: 4,
                        py: 1.5,
                        fontWeight: 700,
                        borderRadius: "4px", // Industrial look
                        "&:hover": { backgroundColor: "#0090C5" },
                      }}>
                      Explore Products
                    </Button>
                    <Button
                      variant="outlined"
                      size="large"
                      sx={{
                        color: "white",
                        borderColor: "white",
                        px: 4,
                        fontWeight: 700,
                        "&:hover": { borderColor: BRAND_BLUE, color: BRAND_BLUE },
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

      {/* Global CSS Overrides for Swiper dots to match BRAND_BLUE */}
      <style>{`
        .swiper-pagination-bullet-active { background: ${BRAND_BLUE} !important; }
        .swiper-button-next, .swiper-button-prev { color: white !important; transform: scale(0.7); }
      `}</style>
    </Box>
  )
}

export default Carousel
