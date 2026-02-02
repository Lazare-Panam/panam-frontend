import { useState } from "react"
import Box from "@mui/material/Box"
import Typography from "@mui/material/Typography"
import Container from "@mui/material/Container"
import Stack from "@mui/material/Stack"
import Tab from "@mui/material/Tab"
import Tabs from "@mui/material/Tabs"
import { useTheme } from "@mui/material/styles"
import useMediaQuery from "@mui/material/useMediaQuery"
import { motion, AnimatePresence } from "framer-motion"

const BRAND_BLUE_LIGHT = "#33C1FF"

const APPLICATIONS_DATA = [
  {
    id: "semiconductor",
    label: "Semiconductor and Specialty Gases",
    title: "Semiconductor and Specialty Gases",
    description: "High-purity gas delivery systems designed for the rigorous demands of semiconductor manufacturing, ensuring zero contamination and maximum precision.",
    image: "https://res.cloudinary.com/dm9rmmemx/image/upload/v1770033270/vishnu-mohanan-zs4gtT8thO0-unsplash_hotyyf.jpg",
  },
  {
    id: "hydrogen",
    label: "Hydrogen",
    title: "Hydrogen Solutions",
    description: "Cutting-edge infrastructure for the hydrogen economy. Our components handle high-pressure storage and transport with industry-leading safety standards.",
    image: "https://res.cloudinary.com/dm9rmmemx/image/upload/v1770033418/karsten-wurth-ZKWgoRUYuMk-unsplash_osxgcu.jpg",
  },
  {
    id: "offshore",
    label: "Offshore and Subsea",
    title: "Offshore and Subsea",
    description: "With extensive design expertise in offshore and subsea applications, FITOK delivers efficient, safe, and cost-effective solutions for deep-sea drilling equipment and floating production units.",
    image: "https://res.cloudinary.com/dm9rmmemx/image/upload/v1770033512/arvind-vallabh-rqWWhKzVCaU-unsplash_ijy6oa.jpg",
  },
]

const ProductApplications = () => {
  const [activeIdx, setActiveIdx] = useState(0)
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down("md"))

  const current = APPLICATIONS_DATA[activeIdx]

  return (
    <Box
      sx={{
        position: "relative",
        minHeight: "50vh",
        display: "flex",
        alignItems: "center",
        color: "white",
        py: 10,
        overflow: "hidden",
        backgroundColor: "#000c17",
        backgroundImage: `url('https://res.cloudinary.com/dm9rmmemx/image/upload/v1770033141/ricardo-gomez-angel-41X6FwTwPh4-unsplash_1_u84x0e.jpg')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        "&::before": {
          content: '""',
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: "linear-gradient(180deg, rgba(0,21,41,0.75) 0%, rgba(0,12,23,0.9) 100%)",
          zIndex: 1,
        },
      }}>
      <Container maxWidth="xl" sx={{ position: "relative", zIndex: 2 }}>
        <Typography variant="h3" textAlign="center" fontWeight={800} sx={{ mb: 6, letterSpacing: -1 }}>
          Product <span style={{ color: BRAND_BLUE_LIGHT }}>Applications</span>
        </Typography>

        <Box sx={{ borderBottom: 1, borderColor: "rgba(255,255,255,0.15)", mb: 8 }}>
          <Tabs
            value={activeIdx}
            onChange={(_, newValue) => setActiveIdx(newValue)}
            variant={isMobile ? "scrollable" : "standard"}
            centered={!isMobile}
            sx={{
              "& .MuiTab-root": {
                color: "rgba(255,255,255,0.6)",
                textTransform: "none",
                fontSize: "1.1rem",
                fontWeight: 500,
                transition: "all 0.3s ease",
              },
              "& .Mui-selected": { color: "#ffffff" },
              "& .MuiTabs-indicator": { backgroundColor: BRAND_BLUE_LIGHT, height: 3 },
            }}>
            {APPLICATIONS_DATA.map(item => (
              <Tab key={item.id} label={item.label} />
            ))}
          </Tabs>
        </Box>

        <AnimatePresence mode="wait">
          <motion.div key={activeIdx} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} transition={{ duration: 0.5, ease: "easeOut" }}>
            <Stack
              direction={{ xs: "column", md: "row" }}
              spacing={10}
              alignItems="center"
              justifyContent="center" // Keeps the group centered
            >
              {/* Text Content - Flex 1 */}
              <Box sx={{ flex: 1.2 }}>
                <Typography variant="overline" sx={{ color: BRAND_BLUE_LIGHT, fontWeight: 700, letterSpacing: 2 }}>
                  Industrial Excellence
                </Typography>
                <Typography variant="h2" fontWeight={800} sx={{ fontSize: { xs: "2.5rem", md: "3.5rem" }, mb: 3, lineHeight: 1.2 }}>
                  {current.title}
                </Typography>
                <Typography variant="body1" sx={{ color: "rgba(255,255,255,0.8)", mb: 5, lineHeight: 1.9, fontSize: "1.15rem", maxWidth: "550px" }}>
                  {current.description}
                </Typography>

                <Box
                  component="button"
                  sx={{
                    bgcolor: "transparent",
                    color: "white",
                    border: `1px solid ${BRAND_BLUE_LIGHT}`,
                    px: 4,
                    py: 1.5,
                    fontSize: "0.9rem",
                    fontWeight: 600,
                    cursor: "pointer",
                    transition: "all 0.3s",
                    "&:hover": {
                      bgcolor: BRAND_BLUE_LIGHT,
                      color: "#000",
                      transform: "translateY(-2px)",
                    },
                  }}>
                  VIEW CASE STUDIES
                </Box>
              </Box>

              {/* Smaller Image Container - Flex 0.8 */}
              <Box
                sx={{
                  flex: 0.8,
                  width: "100%",
                  maxWidth: { md: "500px" }, // Hard limit on desktop size
                  position: "relative",
                  display: "flex",
                  justifyContent: "center",
                }}>
                <Box
                  sx={{
                    position: "absolute",
                    top: "10%",
                    left: "10%",
                    right: "10%",
                    bottom: "10%",
                    background: BRAND_BLUE_LIGHT,
                    filter: "blur(80px)",
                    opacity: 0.15,
                    zIndex: -1,
                  }}
                />

                <Box
                  component="img"
                  src={current.image}
                  alt={current.title}
                  sx={{
                    width: "100%",
                    height: "auto", // Slightly rounder for a cleaner look
                    boxShadow: "0px 20px 50px rgba(0,0,0,0.8)",
                    border: "1px solid rgba(255,255,255,0.1)",
                  }}
                />
              </Box>
            </Stack>
          </motion.div>
        </AnimatePresence>
      </Container>
    </Box>
  )
}

export default ProductApplications
