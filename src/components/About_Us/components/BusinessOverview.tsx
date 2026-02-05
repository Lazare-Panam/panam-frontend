import { Box, Typography, Container, Stack, Button } from "@mui/material"
import Grid from "@mui/material/Grid"

const PRIMARY_FONT = '"Inter", "Roboto", "Helvetica", Arial, sans-serif'
const TEXT_GREY = "#666"

const BusinessOverview = () => {
  return (
    <Box sx={{ pt: 10, pb: 0 }}>
      <Box sx={{ textAlign: "center", maxWidth: "950px", mx: "auto", mb: 8 }}>
        <Typography
          variant="h3"
          sx={{
            fontFamily: PRIMARY_FONT,
            fontWeight: 300,
            color: "#333",
            mb: 4,
            fontSize: { xs: "2rem", md: "2.5rem" },
          }}>
          Our Business
        </Typography>
        <Typography
          sx={{
            fontFamily: PRIMARY_FONT,
            fontSize: "1.25rem",
            lineHeight: 1.6,
            color: TEXT_GREY,
            fontWeight: 300,
          }}>
          Panam Valves' industry-leading portfolio enables us to identify and confront the challenges of an increasingly complex and unpredictable marketplace from a position of strength, driving near- and long-term value as a trusted partner for our customers.
        </Typography>
      </Box>

      {/* 1. Mission & Vision Section (Image Right) */}
      <Box sx={{ width: "100%", py: 8 }}>
        <Container maxWidth="lg">
          <Grid container spacing={6} alignItems="center">
            {/* LEFT: TEXT CONTENT */}
            <Grid size={{ xs: 12, md: 6 }}>
              <Stack spacing={3}>
                <Typography
                  variant="h3"
                  sx={{
                    fontWeight: 800,
                    color: "#1A1A1A",
                    lineHeight: 1.2,
                    fontSize: { xs: "2rem", md: "2.8rem" },
                  }}>
                  Mission & Vision
                </Typography>

                <Typography
                  variant="body1"
                  sx={{
                    color: "#4A4A4A",
                    fontSize: "1.1rem",
                    lineHeight: 1.7,
                  }}>
                  Industry leaders are looking to Panam as a trusted partner that continuously innovates to help them meet the next big challenge. Our robust automation portfolio enables us to collaborate across our businesses to develop more complete solutions for customers based on our deep industry experience. We leverage our global presence, domain expertise and industrial software to help
                  industries achieve key sustainability and operational goals.
                </Typography>

                <Box sx={{ pt: 2 }}>
                  <Button
                    variant="outlined"
                    sx={{
                      borderRadius: "50px",
                      px: 4,
                      py: 1.2,
                      fontWeight: 700,
                      textTransform: "uppercase",
                      color: "#01B0F0",
                      borderColor: "#01B0F0",
                      borderWidth: 2,
                      "&:hover": {
                        borderWidth: 2,
                        backgroundColor: "rgba(0,85,150,0.05)",
                      },
                    }}>
                    Find Information About Panam
                  </Button>
                </Box>
              </Stack>
            </Grid>

            {/* RIGHT: IMAGE */}
            <Grid size={{ xs: 12, md: 6 }}>
              <Box
                component="img"
                src="https://res.cloudinary.com/dm9rmmemx/image/upload/v1770220550/jared-erondu-6Fq2U47SKtE-unsplash_e2hhj9.jpg"
                alt="Panam Headquarters"
                sx={{
                  width: "100%",
                  height: "auto",
                  maxHeight: "600px",
                  objectFit: "cover",
                  borderRadius: "2px",
                  boxShadow: "0px 10px 30px rgba(0,0,0,0.05)",
                }}
              />
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* 2. Manufacturing Excellence Section (Image Left) */}
      <Box sx={{ py: 8, backgroundColor: "#f9f9f9" }}>
        <Container maxWidth="lg">
          <Grid container spacing={6} alignItems="center">
            {/* LEFT: IMAGE */}
            <Grid size={{ xs: 12, md: 6 }}>
              <Box
                component="img"
                src="https://res.cloudinary.com/dm9rmmemx/image/upload/v1770218903/_DSC6667_cqlkmi.webp"
                alt="Manufacturing Excellence"
                sx={{
                  width: "100%",
                  height: "auto",
                  maxHeight: "500px",
                  objectFit: "cover",
                  borderRadius: "2px",
                  boxShadow: "0px 10px 30px rgba(0,0,0,0.05)",
                }}
              />
            </Grid>

            {/* RIGHT: TEXT CONTENT */}
            <Grid size={{ xs: 12, md: 6 }}>
              <Stack spacing={3}>
                <Typography
                  variant="h3"
                  sx={{
                    fontWeight: 800,
                    color: "#1A1A1A",
                    lineHeight: 1.2,
                    fontSize: { xs: "2rem", md: "2.8rem" },
                  }}>
                  Manufacturing Excellence
                </Typography>

                <Typography
                  variant="body1"
                  sx={{
                    color: "#4A4A4A",
                    fontSize: "1.1rem",
                    lineHeight: 1.7,
                  }}>
                  At the heart of Panam lies a commitment to precision. Our manufacturing facilities utilize state-of-the-art automation and rigorous quality control to ensure every solution meets the highest international standards. We don't just build products; we engineer reliability.
                </Typography>

                <Box sx={{ pt: 2 }}>
                  <Button
                    variant="outlined"
                    sx={{
                      borderRadius: "50px",
                      px: 4,
                      py: 1.2,
                      fontWeight: 700,
                      textTransform: "uppercase",
                      color: "#01B0F0",
                      borderColor: "#01B0F0",
                      borderWidth: 2,
                      "&:hover": {
                        borderWidth: 2,
                        backgroundColor: "rgba(0,176,240,0.05)",
                      },
                    }}>
                    Explore Our Facilities
                  </Button>
                </Box>
              </Stack>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* 3. Quality Control Section (Image Right) */}
      <Box sx={{ py: 8 }}>
        <Container maxWidth="lg">
          <Grid container spacing={6} alignItems="center">
            {/* LEFT: TEXT CONTENT */}
            <Grid size={{ xs: 12, md: 6 }}>
              <Stack spacing={3}>
                <Typography
                  variant="h3"
                  sx={{
                    fontWeight: 800,
                    color: "#1A1A1A",
                    lineHeight: 1.2,
                    fontSize: { xs: "2rem", md: "2.8rem" },
                  }}>
                  Quality Control
                </Typography>

                <Typography
                  variant="body1"
                  sx={{
                    color: "#4A4A4A",
                    fontSize: "1.1rem",
                    lineHeight: 1.7,
                  }}>
                  Our uncompromising approach to quality ensures that every valve leaving our facility performs flawlessly in the most demanding environments. Through rigorous testing, material traceability, and adherence to global certifications, we guarantee safety and efficiency for your critical operations.
                </Typography>

                <Box sx={{ pt: 2 }}>
                  <Button
                    variant="outlined"
                    sx={{
                      borderRadius: "50px",
                      px: 4,
                      py: 1.2,
                      fontWeight: 700,
                      textTransform: "uppercase",
                      color: "#01B0F0",
                      borderColor: "#01B0F0",
                      borderWidth: 2,
                      "&:hover": {
                        borderWidth: 2,
                        backgroundColor: "rgba(0,85,150,0.05)",
                      },
                    }}>
                    Our Certifications
                  </Button>
                </Box>
              </Stack>
            </Grid>

            {/* RIGHT: IMAGE */}
            <Grid size={{ xs: 12, md: 6 }}>
              <Box
                component="img"
                src="https://res.cloudinary.com/dm9rmmemx/image/upload/v1770222963/hoi-an-and-da-nang-photographer-pEd5UevsexQ-unsplash_oge3vm.jpg"
                alt="Quality Control and Testing"
                sx={{
                  width: "100%",
                  height: "auto",
                  maxHeight: "500px",
                  objectFit: "cover",
                  borderRadius: "2px",
                  boxShadow: "0px 10px 30px rgba(0,0,0,0.05)",
                }}
              />
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Box>
  )
}

export default BusinessOverview
