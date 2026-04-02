import { Box, Container, Typography } from "@mui/material";
import Grid from "@mui/material/Grid";

const BRAND_BLUE = "#01B0F0";

const SEOSection = () => {
  return (
    <Box component="section" sx={{ py: 10, bgcolor: "#FFFFFF", borderTop: "1px solid #E2E8F0" }}>
      <Container maxWidth="lg">
        <Grid container spacing={8} alignItems="center">
          
          {/* Main Text Content */}
          <Grid size={{ xs: 12, md: 7 }}>
            <Typography variant="overline" component="span" sx={{ fontWeight: 800, color: BRAND_BLUE, letterSpacing: 1.5, display: 'block', mb: 1 }}>
              Instrumentation
            </Typography>
            
            <Typography variant="h2" component="h2" sx={{ fontWeight: 800, color: "#1E293B", mb: 3, fontSize: { xs: "2rem", md: "2.5rem" }, lineHeight: 1.2 }}>
              Valves & Flow Control Products
            </Typography>

            <Typography variant="body1" sx={{ color: "#475569", mb: 3, lineHeight: 1.8, fontSize: "1.05rem" }}>
              PANAM Valves provides a complete range of high-quality instrumentation valves and flow control products designed for performance in demanding industrial environments. Our solutions are widely used across <strong>oil & gas, petrochemical, and process industries</strong> where reliability and precision are critical.
            </Typography>

            <Typography variant="body1" sx={{ color: "#475569", mb: 4, lineHeight: 1.8, fontSize: "1.05rem" }}>
              Our product portfolio includes <strong>needle valves, check valves, and non return check valves</strong>, alongside advanced solutions such as the <strong>block and bleed valve</strong> for safe isolation and pressure control. We also supply a wide range of <strong>pipe and fittings</strong>, including <strong>stainless steel fittings</strong>, ensuring compatibility across a variety of industrial systems.
            </Typography>

            <Typography variant="h3" component="h3" sx={{ fontWeight: 800, color: "#1E293B", mb: 2, fontSize: "1.5rem" }}>
              Precision-Engineered for Industrial Applications
            </Typography>

            <Typography variant="body1" sx={{ color: "#475569", lineHeight: 1.8, fontSize: "1.05rem" }}>
              All PANAM products are manufactured using premium materials to ensure durability and long service life. Our range of <strong>fitting tube</strong> solutions and <strong>flare fittings</strong> are designed for secure, leak-free connections in high-pressure environments.
            </Typography>
          </Grid>

          {/* Sidebar Video Container */}
          <Grid size={{ xs: 12, md: 5 }}>
            <Box
              sx={{
                width: "100%",
                aspectRatio: "16 / 9",
                borderRadius: 0, // Set to 0
                overflow: "hidden",
                boxShadow: "0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)",
              }}
            >
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/HRFxY37P0Lg"
                title="Panam - Instrumentation Fittings & Valves"
                // frameBorder="0" removed
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                // border style removed to allow default frame border
              ></iframe>
            </Box>
          </Grid>

        </Grid>
      </Container>
    </Box>
  );
};

export default SEOSection;