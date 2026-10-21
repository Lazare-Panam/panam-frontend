import React from "react"
import { Box, Typography, Button, Container, Stack, GlobalStyles } from "@mui/material"
import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay, Navigation, Pagination, EffectFade, A11y } from "swiper/modules"
import { Link as RouterLink } from "react-router-dom"
import ArrowForwardIcon from "@mui/icons-material/ArrowForward"
import { C, btn } from "../homeTokens"

const slides = [
  {
    title: "Precision Valves & Flow Control Systems",
    subtitle: "High-performance valves and instrumentation engineered for the world's most demanding industrial environments.",
    image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=2000",
  },
  {
    title: "Global Infrastructure, Local Expertise",
    subtitle: "UK-manufactured solutions built to withstand extreme pressures and ensure total operational safety.",
    image: "https://pblol2.blob.core.windows.net/panam-images/website-media/hero-banners/IMG-20170817-WA0012.jpg",
  },
  {
    title: "H2 Ready: The Future of Energy",
    subtitle: "Pioneering hydrogen-compatible technologies to power the next generation of clean energy infrastructure.",
    image: "https://pblol2.blob.core.windows.net/panam-images/panam-image-compressed/website-media/hero-banners/FACTORY-PHOTO-OPTION-1-JPEG.jpg",
  },
]

// Full-bleed photo hero with a light wash: the image stays visible on the right, while a white
// gradient on the left keeps dark text crisp — bright and clean rather than a dark overlay.
const Hero2: React.FC = () => {
  return (
    <Box
      id="home"
      sx={{
        width: "100%",
        height: { xs: 600, md: "min(82vh, 780px)" },
        minHeight: { md: 620 },
        position: "relative",
        overflow: "hidden",
        bgcolor: "#F2F8FC",
      }}>
      <Swiper
        modules={[Autoplay, Navigation, Pagination, EffectFade, A11y]}
        a11y={{ enabled: true, prevSlideMessage: "Previous slide", nextSlideMessage: "Next slide" }}
        effect="fade"
        speed={1100}
        autoplay={{ delay: 6000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        navigation
        loop
        watchSlidesProgress
        className="hero-swiper"
        style={{ height: "100%", width: "100%" }}>
        {slides.map((slide, index) => (
          <SwiperSlide key={slide.title}>
            <Box sx={{ position: "relative", width: "100%", height: "100%", display: "flex", alignItems: "center", overflow: "hidden" }}>
              <Box
                className="zoom-bg"
                sx={{
                  position: "absolute",
                  inset: 0,
                  backgroundImage: `url(${slide.image})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  transition: "transform 9s ease-out",
                  willChange: "transform",
                }}
              />
              {/* Feathered light glow behind the copy — no box edges, fades straight into the photo */}
              <Box
                sx={{
                  position: "absolute",
                  inset: 0,
                  background: {
                    xs: "linear-gradient(180deg, rgba(255,255,255,0.45) 0%, rgba(255,255,255,0.78) 55%, rgba(255,255,255,0.85) 100%)",
                    md: "radial-gradient(ellipse 58% 80% at 24% 52%, rgba(255,255,255,0.86) 0%, rgba(255,255,255,0.62) 42%, rgba(255,255,255,0.18) 68%, rgba(255,255,255,0) 82%)",
                  },
                }}
              />
              {/* Fade into the page below */}
              <Box aria-hidden sx={{ position: "absolute", left: 0, right: 0, bottom: 0, height: 90, background: "linear-gradient(180deg, transparent, rgba(255,255,255,0.9))" }} />

              <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
                <Stack spacing={3} sx={{ maxWidth: 620, "& .hero-text": { textShadow: "0 1px 18px rgba(255,255,255,0.9)" } }}>
                  <Box className="fade-up-1" sx={{ width: 56, height: 4, borderRadius: 2, background: `linear-gradient(90deg, ${C.brand}, ${C.brandDeep})` }} />
                  <Typography
                    component={index === 0 ? "h1" : "p"}
                    className="fade-up-1 hero-text"
                    sx={{ fontWeight: 800, letterSpacing: "-0.035em", lineHeight: 1.04, fontSize: { xs: "2.2rem", sm: "2.9rem", md: "3.5rem" }, color: C.ink }}>
                    {slide.title}
                  </Typography>
                  <Typography className="fade-up-2 hero-text" sx={{ fontSize: { xs: "1.05rem", md: "1.22rem" }, lineHeight: 1.65, color: "#2C4156", fontWeight: 500, maxWidth: 540 }}>
                    {slide.subtitle}
                  </Typography>
                  <Stack direction={{ xs: "column", sm: "row" }} spacing={1.5} sx={{ pt: 1 }} className="fade-up-3">
                    <Button component={RouterLink} viewTransition to="/products" endIcon={<ArrowForwardIcon />} sx={{ ...btn.primary, py: 1.6, px: 3.75 }}>
                      Explore Products
                    </Button>
                    <Button
                      component={RouterLink}
                      viewTransition
                      to="/enquiry"
                      sx={{ ...btn.secondary, py: 1.6, px: 3.75, bgcolor: "rgba(255,255,255,0.75)", backdropFilter: "blur(8px)" }}>
                      Contact Sales
                    </Button>
                  </Stack>
                </Stack>
              </Container>
            </Box>
          </SwiperSlide>
        ))}
      </Swiper>

      <GlobalStyles
        styles={{
          ".hero-swiper .swiper-slide-active .zoom-bg, .hero-swiper .swiper-slide-duplicate-active .zoom-bg": { transform: "scale(1.06)" },
          ".hero-swiper .fade-up-1, .hero-swiper .fade-up-2, .hero-swiper .fade-up-3": {
            opacity: 0,
            transform: "translateY(20px)",
            transition: "opacity 0.7s cubic-bezier(0.215, 0.61, 0.355, 1), transform 0.7s cubic-bezier(0.215, 0.61, 0.355, 1)",
          },
          ".hero-swiper .swiper-slide-active .fade-up-1": { opacity: 1, transform: "none", transitionDelay: "0.2s" },
          ".hero-swiper .swiper-slide-active .fade-up-2": { opacity: 1, transform: "none", transitionDelay: "0.35s" },
          ".hero-swiper .swiper-slide-active .fade-up-3": { opacity: 1, transform: "none", transitionDelay: "0.5s" },
          "@media (prefers-reduced-motion: reduce)": {
            ".hero-swiper .fade-up-1, .hero-swiper .fade-up-2, .hero-swiper .fade-up-3": { opacity: 1, transform: "none", transition: "none" },
            ".hero-swiper .zoom-bg": { transition: "none !important", transform: "none !important" },
          },
          // The pagination bar spans the full width; let clicks pass through to the arrows (dots stay clickable)
          ".hero-swiper .swiper-pagination": { bottom: "40px !important", pointerEvents: "none" },
          ".hero-swiper .swiper-pagination-bullet": { background: "rgba(15,34,54,0.22)", opacity: 1, width: 8, height: 8, transition: "all 0.3s", pointerEvents: "auto" },
          ".hero-swiper .swiper-pagination-bullet-active": { background: C.brand, width: 28, borderRadius: 4 },
          ".hero-swiper .swiper-button-next, .hero-swiper .swiper-button-prev": {
            color: C.ink,
            width: 46,
            height: 46,
            borderRadius: "50%",
            backgroundColor: "rgba(255,255,255,0.85)",
            border: "1px solid rgba(15,34,54,0.08)",
            boxShadow: "0 6px 20px rgba(15,34,54,0.10)",
            backdropFilter: "blur(8px)",
            transition: "background-color 0.2s, color 0.2s",
            display: "none",
          },
          ".hero-swiper .swiper-button-next::after, .hero-swiper .swiper-button-prev::after": { fontSize: 15, fontWeight: 800 },
          ".hero-swiper .swiper-button-next:hover, .hero-swiper .swiper-button-prev:hover": { backgroundColor: C.brand, color: C.white },
          // Arrows in the bottom corners (left / right), clear of the fixed section dots on the right edge
          "@media (min-width: 1200px)": {
            ".hero-swiper .swiper-button-next, .hero-swiper .swiper-button-prev": { display: "flex", top: "auto", bottom: "26px", marginTop: 0, zIndex: 20 },
            // aligned to the content edges so the floating WhatsApp button (fixed bottom-left) never covers them
            ".hero-swiper .swiper-button-prev": { left: "max(120px, calc((100% - 1200px) / 2 + 24px))", right: "auto" },
            ".hero-swiper .swiper-button-next": { right: "max(120px, calc((100% - 1200px) / 2 + 24px))", left: "auto" },
          },
        }}
      />
    </Box>
  )
}

export default Hero2
