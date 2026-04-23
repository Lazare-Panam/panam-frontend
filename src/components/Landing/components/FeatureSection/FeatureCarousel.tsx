import React, { useMemo } from "react"
import { Box, Typography, Container, Stack, Divider, Button } from "@mui/material"
import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay, FreeMode } from "swiper/modules"
import { useNavigate } from "react-router-dom"

const BRAND_BLUE = "#01B0F0"

const ALL_PRODUCTS = [
  { name: "Pipe Fittings", image: "https://res.cloudinary.com/dm9rmmemx/image/upload/v1773065185/reducing-hex-couplings-npt_dlncbd.png", link: "product-grid/pipe-fittings" },
  { name: "Tube Fittings", image: "https://res.cloudinary.com/dm9rmmemx/image/upload/v1773065253/UNION-CROSS-IMPERIAL-PUC-04-SS_usickt.png", link: "/products/fittings" },
  { name: "37 JIC Fittings", image: "https://res.cloudinary.com/dm9rmmemx/image/upload/v1773065297/union-cross_ktkzxj.png", link: "/products/37-jic-fittings" },
  { name: "Weld Fittings", image: "https://res.cloudinary.com/dm9rmmemx/image/upload/v1773065327/male-connector-tube-socket-weld-x-npt_pyqtf0.png", link: "/products/weld-fittings" },
  { name: "Needle Valves", image: "https://res.cloudinary.com/dm9rmmemx/image/upload/w_400,f_auto,q_auto/v1768296756/11111_e7ywry.webp", link: "/products/needle-valves" },
  { name: "Gauge Root Valves", image: "https://res.cloudinary.com/dm9rmmemx/image/upload/w_400,f_auto,q_auto/v1770306213/final-gauge-root-ff_oforuw.webp", link: "/products/gauge-root-valves" },
{ name: "High Pressure Fittings", image: "https://res.cloudinary.com/dm9rmmemx/image/upload/v1773065950/cross-npt-1_r7ivzj.png", link: "/products/pipe-fittings-high-pressure" },
 

  { name: "Check Valves", image: "https://res.cloudinary.com/dm9rmmemx/image/upload/v1773066005/PCV-S-08-OD-PNG-removebg-preview_gfigng.png", link: "/products/check-valves" },
  
  { name: "Ball Valves", image: "https://res.cloudinary.com/dm9rmmemx/image/upload/v1773065898/PBV-3-S-O4-OD-A_vpgv95.png", link: "/products/ball-valves" },
  { name: "Relief Valves", image: "https://res.cloudinary.com/dm9rmmemx/image/upload/v1773065866/PRVH-SS-08-MF-15K_tnunca.png", link: "/products/relief-valves" },
  { name: "2-Way Valve Manifold", image: "https://res.cloudinary.com/dm9rmmemx/image/upload/v1773065762/2VM-SS-8-20M-RM_gviqce.png", link: "/products/2-way-valve-manifold" },
  { name: "3-Way Valve Manifold", image: "https://res.cloudinary.com/dm9rmmemx/image/upload/v1773065795/3VM-SS-H_xhzpkr.png", link: "/products/3-way-valve-manifold" },
  { name: "5-Way Valve Manifold", image: "https://res.cloudinary.com/dm9rmmemx/image/upload/v1773065822/5VM-SS-H_lnxzwa.png", link: "/products/5-way-valve-manifold" },
  { name: "Pressure Transmitter", image: "https://res.cloudinary.com/dm9rmmemx/image/upload/v1773065582/APC-2000ALW-PNG-removebg-preview_jxvqjx.png", link: "/products/pressure-regulator-transmitter" },
  { name: "Double Block and bleed valves", image: "https://res.cloudinary.com/dm9rmmemx/image/upload/v1773065511/MONO-FLANGE-1_zo3vzq.png", link: "/products/double-block-and-bleed-valves" },
  { name: "Filters", image: "https://res.cloudinary.com/dm9rmmemx/image/upload/v1773065475/PTF-TC-06-60-SS_qvotij.png", link: "/products/filters" },
  { name: "System Integration", image: "https://res.cloudinary.com/dm9rmmemx/image/upload/v1773065393/Img11695_kst9gv.png", link: "/products/system-integration" },
]

const FeatureCarousel: React.FC = () => {
  const navigate = useNavigate()
  const displayedProducts = useMemo(() => {
    return [...ALL_PRODUCTS]
      .sort(() => Math.random() - 0.5) // Randomize the order
      .slice(0, 8) // Take only 8 items
  }, [])
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
            Our Core Product Lines
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
            {displayedProducts.map((item, index) => (
              <SwiperSlide key={index}>
                {/* Flex column with center alignment keeps everything on the same level */}
                <Stack
                  onClick={() => navigate(item.link)}
                  component="a"
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
                      height: "250px", // We set a container height ONLY to keep the names aligned horizontally
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
              Find All Of Our Products
            </Button>
          </Box>
        </Container>
      </Box>
    </Box>
  )
}

export default FeatureCarousel
