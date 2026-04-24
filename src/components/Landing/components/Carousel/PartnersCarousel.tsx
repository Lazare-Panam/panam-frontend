import React from "react"
import { Box, Typography, Container, Stack, Divider, Button } from "@mui/material"
import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay, FreeMode } from "swiper/modules"

const BRAND_BLUE = "#01B0F0"

const partnerSlides = [
  { name: "R & G Group", image: "https://pblol2.blob.core.windows.net/panam-images/brands/logo.png", url: "https://www.rgfluidpower.com/" },
  // { name: "Rubix", image: "https://res.cloudinary.com/dm9rmmemx/image/upload/v1769516301/download_lwcmhn.png", url: "https://uk.rubix.com/en" },
  { name: "Hydraulic Megastore", image: "https://res.cloudinary.com/dm9rmmemx/image/upload/v1769516390/download_1_ixgkup.jpg", url: "https://www.hydraulicmegastore.com/" },
  { name: "Ram Universal", image: "https://res.cloudinary.com/dm9rmmemx/image/upload/v1769521921/ram-logo_endebu.png", url: "https://www.ramuniversal.co.uk/" },
  { name: "OMV", image: "https://res.cloudinary.com/dm9rmmemx/image/upload/v1769522389/49dc2b_94be551593d14559b5895c083a396ec2_mv2_mnpehy.avif", url: "https://www.omv.as/" },
  { name: "AC Valves", image: "https://res.cloudinary.com/dm9rmmemx/image/upload/v1769521817/eafe29df-39d4-412b-ba55-35534adb2578_b5kiaj.jpg", url: "https://acv-group.com/" },
  { name: "Andro Mach", image: "https://res.cloudinary.com/dm9rmmemx/image/upload/v1769522584/67802ddc81f9ad5db58223d2_logo-svg-shape_jiketc.svg", url: "https://www.andromach.space/" },
]

const PartnersCarousel: React.FC = () => {
  return (
    <Box sx={{ bgcolor: "transparent" }}>
      <Divider sx={{ borderColor: "#eee", width: "100%" }} />

      <Box sx={{ py: 10 }}>
        <Container maxWidth="lg" sx={{ mb: 8 }}>
          <Typography
            variant="h3"
            sx={{
              fontWeight: 800,
              color: "#1A1A1A",
              lineHeight: 1.2,
              fontSize: { xs: "2rem", md: "2.8rem" },
            }}>
            Our Partners
          </Typography>
        </Container>

        <Box sx={{ width: "100%", overflow: "hidden", mb: 8 }}>
          <Swiper
            modules={[Autoplay, FreeMode]}
            loop={true}
            slidesPerView={2}
            spaceBetween={50} // Increased space since there are no boxes
            freeMode={true}
            speed={12000}
            autoplay={{
              delay: 0,
              disableOnInteraction: false,
            }}
            breakpoints={{
              640: { slidesPerView: 3 },
              1024: { slidesPerView: 5 },
            }}
            className="product-moving-swiper">
            {partnerSlides.map((item, index) => (
              <SwiperSlide key={index}>
                {/* Flex column with center alignment keeps everything on the same level */}
                <Stack
                  component="a"
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  spacing={3}
                  sx={{
                    textDecoration: "none",
                    alignItems: "center",
                    justifyContent: "center",
                  }}>
                  {/* Image Container - No fixed height, No border */}
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      height: "120px", // We set a container height ONLY to keep the names aligned horizontally
                      width: "100%",
                      transition: "transform 0.3s ease",
                      "&:hover": {
                        transform: "scale(1.1)",
                      },
                    }}>
                    <img
                      src={item.image}
                      alt={item.name}
                      style={{
                        maxWidth: "100%",
                        maxHeight: "100%",
                        width: "auto",
                        height: "auto",
                        display: "block",
                      }}
                    />
                  </Box>

                  <Box sx={{ textAlign: "center" }}>
                    <Typography
                      variant="caption"
                      sx={{
                        fontWeight: 700,
                        color: "#666",
                        fontSize: "0.85rem",
                        lineHeight: 1.2,
                        textTransform: "uppercase",
                        letterSpacing: 1,
                        display: "block",
                      }}>
                      {item.name}
                    </Typography>
                  </Box>
                </Stack>
              </SwiperSlide>
            ))}
          </Swiper>
        </Box>

        <Container maxWidth="lg">
          <Box sx={{ display: "flex", justifyContent: "center", mt: 4 }}>
            <Button
              variant="outlined"
              sx={{
                borderRadius: "50px",
                px: 6,
                py: 1.5,
                fontWeight: 700,
                textTransform: "uppercase",
                color: BRAND_BLUE,
                borderColor: BRAND_BLUE,
                borderWidth: 2,
                fontSize: "0.9rem",
                letterSpacing: 1,
                "&:hover": {
                  borderWidth: 2,
                  backgroundColor: "rgba(1, 176, 240, 0.05)",
                  borderColor: BRAND_BLUE,
                },
              }}>
              Find Information About Our Partners
            </Button>
          </Box>
        </Container>
      </Box>
    </Box>
  )
}

export default PartnersCarousel
