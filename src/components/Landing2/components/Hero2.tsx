import React, { useRef } from "react"
import { Box, Typography, Button, Container, Stack, GlobalStyles } from "@mui/material"
import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay, Navigation, Pagination, EffectFade, A11y } from "swiper/modules"
import { Link as RouterLink } from "react-router-dom"
const BRAND_BLUE = "#01B0F0"

const PARALLAX_MAX_PX = 14

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

const Hero2: React.FC = () => {
  const heroRef = useRef<HTMLDivElement>(null)
  const prefersReducedMotion = typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    if (!heroRef.current) return
    const rect = heroRef.current.getBoundingClientRect()
    // Glow position — plain pixel offset from the container's own top-left corner
    heroRef.current.style.setProperty("--glow-x", `${event.clientX - rect.left}px`)
    heroRef.current.style.setProperty("--glow-y", `${event.clientY - rect.top}px`)
    heroRef.current.style.setProperty("--glow-opacity", "1")

    if (prefersReducedMotion) return
    const offsetX = ((event.clientX - rect.left) / rect.width - 0.5) * 2 // -1 to 1
    const offsetY = ((event.clientY - rect.top) / rect.height - 0.5) * 2 // -1 to 1
    heroRef.current.style.setProperty("--parallax-x", `${offsetX * PARALLAX_MAX_PX}px`)
    heroRef.current.style.setProperty("--parallax-y", `${offsetY * PARALLAX_MAX_PX}px`)
  }

  const handleMouseLeave = () => {
    if (!heroRef.current) return
    heroRef.current.style.setProperty("--parallax-x", "0px")
    heroRef.current.style.setProperty("--parallax-y", "0px")
    heroRef.current.style.setProperty("--glow-opacity", "0")
  }

  return (
    <Box
      id="home"
      ref={heroRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      sx={{
        width: "100%",
        height: { xs: "500px", md: "80vh" },
        position: "relative",
        overflow: "hidden",
        backgroundColor: "#000", // Prevents white flash on load
      }}>
      <Swiper
        modules={[Autoplay, Navigation, Pagination, EffectFade, A11y]}
        a11y={{ enabled: true, prevSlideMessage: "Previous slide", nextSlideMessage: "Next slide" }}
        effect="fade"
        speed={1200}
        autoplay={{ delay: 5500, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        navigation
        loop
        watchSlidesProgress={true} // Forces Swiper to calculate visibility for the first slide
        style={{ height: "100%", width: "100%" }}>
        {slides.map((slide, index) => (
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
              {/* Parallax Layer — translate lives here, separate from the zoom-bg's own scale transform below */}
              <Box
                className="parallax-layer"
                sx={{
                  position: "absolute",
                  top: -PARALLAX_MAX_PX * 2,
                  left: -PARALLAX_MAX_PX * 2,
                  right: -PARALLAX_MAX_PX * 2,
                  bottom: -PARALLAX_MAX_PX * 2,
                  zIndex: -1,
                  transform: "translate3d(var(--parallax-x, 0px), var(--parallax-y, 0px), 0)",
                  transition: "transform 0.3s ease-out",
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
                    backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.4)), url(${slide.image})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    transition: "transform 8s ease-out", // Long, cinematic zoom
                    willChange: "transform",
                  }}
                />
              </Box>

              {/* Mouse-follow glow */}
              <Box
                sx={{
                  position: "absolute",
                  inset: 0,
                  zIndex: 0,
                  pointerEvents: "none",
                  opacity: "var(--glow-opacity, 0)",
                  transition: "opacity 0.4s ease",
                  background: "radial-gradient(420px circle at var(--glow-x, 50%) var(--glow-y, 50%), rgba(1,176,240,0.35), transparent 70%)",
                  mixBlendMode: "screen",
                }}
              />

              <Container maxWidth="lg">
                <Stack spacing={2} sx={{ maxWidth: { xs: "100%", md: 700 } }}>
                  <Typography
                    variant="h1"
                    component={index === 0 ? "h1" : "p"}
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
                      component={RouterLink} viewTransition
                      to="/products"
                      variant="contained"
                      disableElevation
                      sx={{
                        backgroundColor: BRAND_BLUE,
                        px: { xs: 2, md: 4 },
                        py: 1.2,
                        fontWeight: 700,
                        textTransform: "none",
                        transition: "transform 0.2s ease, box-shadow 0.2s ease, background-color 0.2s ease",
                        "&:hover": { backgroundColor: "#0090C5", transform: "translateY(-2px)", boxShadow: "0 8px 20px rgba(1,176,240,0.35)" },
                        "&:active": { transform: "translateY(0)" },
                      }}>
                      Explore Products
                    </Button>
                    <Button
                      component={RouterLink} viewTransition
                      to="/enquiry"
                      variant="outlined"
                      sx={{
                        color: "white",
                        borderColor: "rgba(255,255,255,0.5)",
                        px: { xs: 2, md: 4 },
                        fontWeight: 700,
                        textTransform: "none",
                        transition: "transform 0.2s ease, box-shadow 0.2s ease, background-color 0.2s ease, border-color 0.2s ease",
                        "&:hover": { borderColor: "white", backgroundColor: "rgba(255,255,255,0.1)", transform: "translateY(-2px)" },
                        "&:active": { transform: "translateY(0)" },
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

      <GlobalStyles
        styles={{
          // 1. Zoom Logic — targets both active and duplicate-active for seamless looping
          ".swiper-slide-active .zoom-bg, .swiper-slide-duplicate-active .zoom-bg": {
            transform: "scale(1.15)",
          },
          // 2. Text/Content Reveal Logic
          ".fade-up-1, .fade-up-2, .fade-up-3": {
            opacity: 0,
            transform: "translateY(30px)",
            transition: "all 0.8s cubic-bezier(0.215, 0.61, 0.355, 1)",
            willChange: "transform, opacity",
          },
          // Staggered delays so they pop in one by one
          ".swiper-slide-active .fade-up-1, .swiper-slide-duplicate-active .fade-up-1": {
            opacity: 1, transform: "translateY(0)", transitionDelay: "0.4s",
          },
          ".swiper-slide-active .fade-up-2, .swiper-slide-duplicate-active .fade-up-2": {
            opacity: 0.9, transform: "translateY(0)", transitionDelay: "0.6s",
          },
          ".swiper-slide-active .fade-up-3, .swiper-slide-duplicate-active .fade-up-3": {
            opacity: 1, transform: "translateY(0)", transitionDelay: "0.8s",
          },
          // 3. Navigation Styling
          ".swiper-pagination-bullet": { background: "rgba(255,255,255,0.5)", opacity: 1 },
          ".swiper-pagination-bullet-active": { background: BRAND_BLUE, width: 24, borderRadius: 4, transition: "all 0.3s" },
          ".swiper-button-next, .swiper-button-prev": { color: "white", transform: "scale(0.5)", opacity: 0.5, transition: "0.3s" },
          ".swiper-button-next:hover, .swiper-button-prev:hover": { opacity: 1 },
        }}
      />
    </Box>
  )
}

export default Hero2;
