import { Box, Container, Typography, Card, CardContent } from "@mui/material"
import Grid from "@mui/material/Grid"
import ArrowForwardIcon from "@mui/icons-material/ArrowForward"
import { Link } from "react-router-dom"
import { industryData } from "./industryData"
const BRAND_BLUE = "#01B0F0"
const PRIMARY_FONT = '"Inter", "Roboto", "Helvetica", Arial, sans-serif'

const IndustriesCards = () => {
  return (
    <Box sx={{ py: 10, backgroundColor: "#ffffff" }}>
      <Container maxWidth="xl">
        <Box sx={{ mb: 8, textAlign: "center", maxWidth: "800px", mx: "auto" }}>
          <Typography
            variant="h3"
            sx={{
              fontWeight: 800,
              fontFamily: PRIMARY_FONT,
              color: "#1a1a1a",
              mb: 3,
              fontSize: { xs: "2rem", md: "2.5rem" },
            }}>
            Industries We Serve
          </Typography>
          <Typography
            variant="body1"
            sx={{
              fontFamily: PRIMARY_FONT,
              color: "#555",
              fontSize: "1.125rem",
              lineHeight: 1.8,
              "& span": {
                color: BRAND_BLUE,
                fontWeight: 600,
              },
            }}>
            For over two decades, we've been delivering precision-engineered solutions across the world's most demanding sectors. From powering <span>offshore operations</span> to supporting <span>sustainable energy transitions</span>, our technology drives efficiency and reliability where it matters most.
          </Typography>
        </Box>

        <Grid container spacing={4}>
          {industryData.map(industry => (
            /* Grid2 Item using the new 'size' prop */
            <Grid size={{ xs: 12, sm: 6, md: 4 }} key={industry.id}>
              <Card
                component={Link}
                to={`/industries/${industry.id}`}
                elevation={0}
                sx={{
                  textDecoration: "none",
                  height: "100%",
                  minHeight: "350px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  border: "1px solid #e0e0e0",
                  borderRadius: "0px",
                  overflow: "hidden",
                  transition: "all 0.3s ease-in-out",
                  cursor: "pointer",
                  "&:hover": {
                    boxShadow: `0px 10px 30px rgba(1, 176, 240, 0.15)`,
                    transform: "translateY(-5px)",
                    "& .industry-image": {
                      transform: "scale(1.05)",
                    },
                    "& .arrow-icon": {
                      transform: "translateX(5px)",
                    },
                  },
                }}>
                <Box
                  sx={{
                    width: "100%",
                    height: "250px",
                    overflow: "hidden",
                    position: "relative",
                  }}>
                  <Box
                    component="img"
                    src={industry.image}
                    alt={industry.title}
                    className="industry-image"
                    sx={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      transition: "transform 0.4s ease-in-out",
                    }}
                  />
                  <Box
                    sx={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      right: 0,
                      bottom: 0,
                      background: "linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,0.2) 100%)",
                    }}
                  />
                </Box>

                <CardContent sx={{ p: 3, flexGrow: 1, display: "flex", flexDirection: "column" }}>
                  <Typography
                    variant="h6"
                    sx={{
                      fontWeight: 700,
                      fontFamily: PRIMARY_FONT,
                      color: "#1a1a1a",
                      mb: 2,
                    }}>
                    {industry.title}
                  </Typography>
                  <Box
                    sx={{
                      width: "40px",
                      height: "3px",
                      backgroundColor: BRAND_BLUE,
                      mb: "auto",
                    }}
                  />

                  <Typography
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      color: BRAND_BLUE,
                      fontWeight: 700,
                      mt: 4,
                      fontFamily: PRIMARY_FONT,
                      fontSize: "0.875rem",
                    }}>
                    Find out more
                    <ArrowForwardIcon className="arrow-icon" sx={{ ml: 1, fontSize: "1.2rem", transition: "transform 0.2s" }} />
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  )
}

export default IndustriesCards
