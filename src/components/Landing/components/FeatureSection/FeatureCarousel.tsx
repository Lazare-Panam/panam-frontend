import React, { useMemo } from "react"
import { Box, Typography, Container, Stack, Divider, Button } from "@mui/material"
import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay, FreeMode } from "swiper/modules"
import { useNavigate } from "react-router-dom"

const BRAND_BLUE = "#01B0F0"

const ALL_PRODUCTS = [
  { name: "Pipe Fittings", image: "https://res.cloudinary.com/dm9rmmemx/image/upload/v1769424835/female_connector_-_tsw_-_jpg_izsfqp.jpg", link: "/products/pipe-fittings" },
  { name: "Tube Fittings", image: "https://res.cloudinary.com/dm9rmmemx/image/upload/v1769424685/TUBE_CAP_-_TUBE_OD_-_JPG_vp4xzn.jpg", link: "/products/fittings" },
  { name: "37 JIC Fittings", image: "https://res.cloudinary.com/dm9rmmemx/image/upload/v1769424806/union_-_jpg_x7siq3.jpg", link: "/products/37-jic-fittings" },
  { name: "Weld Fittings", image: "https://res.cloudinary.com/dm9rmmemx/image/upload/v1770636232/REDUCING_UNION_-_TUBE_OD_-_JPG_aiut8d.jpg", link: "/products/weld-fittings" },
  { name: "High Pressure Fittings", image: "https://res.cloudinary.com/dm9rmmemx/image/upload/v1768992887/male_street_tee_-_jpg_da53bn.webp", link: "/products/pipe-fittings-high-pressure" },
  { name: "Hydrogen Valves", image: "https://res.cloudinary.com/dm9rmmemx/image/upload/v1770305815/Img7247_s2ueis.jpg", link: "/products/hydrogen-valve" },
  { name: "Needle Valves", image: "https://res.cloudinary.com/dm9rmmemx/image/upload/v1768296756/11111_e7ywry.webp", link: "/products/needle-valves" },
  { name: "Check Valves", image: "https://res.cloudinary.com/dm9rmmemx/image/upload/v1769096692/WITH_SAND_BLASTING_-_JPEG_iqkqwa.jpg", link: "/products/check-valves" },
  { name: "Ball Valves", image: "https://res.cloudinary.com/dm9rmmemx/image/upload/v1770305964/HP_Ball_Valves_t6ou16.webp", link: "/products/ball-valves" },
  { name: "Relief Valves", image: "https://res.cloudinary.com/dm9rmmemx/image/upload/v1770306127/PRVH-SS-04-FF-G_-_JPG_w0zmnl.jpg", link: "/products/relief-valves" },
  { name: "Gauge Root Valves", image: "https://res.cloudinary.com/dm9rmmemx/image/upload/v1770306213/final-gauge-root-ff_oforuw.webp", link: "/products/gauge-root-valves" },
  { name: "2-Way Valve Manifold", image: "https://res.cloudinary.com/dm9rmmemx/image/upload/v1768295925/1_edofmn.jpg", link: "/products/2-way-valve-manifold" },
  { name: "3-Way Valve Manifold", image: "https://res.cloudinary.com/dm9rmmemx/image/upload/v1768922283/3VM-SS-8-DM_-_JPG_skitwh.jpg", link: "/products/3-way-valve-manifold" },
  { name: "5-Way Valve Manifold", image: "https://res.cloudinary.com/dm9rmmemx/image/upload/v1768296193/5VM-SS-H_-_JPG_qrcujq.jpg", link: "/products/5-way-valve-manifold" },
  { name: "Pressure Transmitter", image: "https://res.cloudinary.com/dm9rmmemx/image/upload/v1770726940/PRESSURE_TRANSMITTERS_-_2_-_JPEG_gu0les.jpg", link: "/products/pressure-regulator-transmitter" },
  { name: "Double Block and bleed valves", image: "https://res.cloudinary.com/dm9rmmemx/image/upload/v1768835558/mono_flange_-_1_-_JPEG_1_plsmpe.webp", link: "/products/double-block-and-bleed-valves" },
  { name: "Filters", image: "https://res.cloudinary.com/dm9rmmemx/image/upload/v1768988115/T-TYPE-FILTER-PNG_c9xazu.webp", link: "/products/filters" },
  { name: "System Integration", image: "https://res.cloudinary.com/dm9rmmemx/image/upload/v1770727010/GRAB-SAMPLING-SYSTEM-PNG_n3glyc.png", link: "/products/system-integration" },
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
