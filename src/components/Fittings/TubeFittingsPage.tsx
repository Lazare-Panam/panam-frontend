import React from "react";
import {
  Box,
  Container,
  Typography,
  Grid,
  Divider,
  Button,
  Card,
  CardMedia,
  CardContent,
} from "@mui/material";

const PRIMARY_FONT = '"Inter", "Roboto", "Helvetica", Arial, sans-serif';
const BRAND_BLUE = "#01B0F0";

const LINKS = {
  heroExplore: "#series",
  heroQuote: "/enquiry",
  ctaEmail: "mailto:sales@panamvalves.com",
  ctaQuote: "/enquiry",
};

const TUBE_FITTING_SERIES = [
  {
    id: "tube-fitting-connectors",
    title: "Connectors",
    subtitle: "Straight & Elbow Configurations",
    description:
      "Single and double ferrule tube fitting connectors in straight, elbow, and reducing configurations. Designed for secure, leak-tight connections in high-pressure instrumentation and process systems.",
    image: "https://pblol2.blob.core.windows.net/panam-images/products/tube-fittings/Bulkhead-Connector.jpg",
    pressure: "High Pressure",
    tag: "Tube Fittings",
    link: "/instrumentation-fittings/tube-fittings/connectors",
  },
  {
    id: "tube-fitting-unions",
    title: "Unions",
    subtitle: "Inline & Bulkhead Unions",
    description:
      "Single and double ferrule tube fitting unions for inline and bulkhead installations. Provide reliable, repositionable leak-tight joints for instrumentation tubing systems.",
    image: "https://pblol2.blob.core.windows.net/panam-images/products/tube-fittings/union-cross.png",
    pressure: "High Pressure",
    tag: "Tube Fittings",
    link: "/instrumentation-fittings/tube-fittings/union",
  },
  {
    id: "tube-fitting-reducer",
    title: "Reducers",
    subtitle: "Straight, Elbow & Bulkhead Configurations",
    description:
      "Single and double ferrule tube fitting reducers in straight, elbow, and bulkhead configurations. Available in Imperial, Metric, and mixed Metric × Imperial sizes for transitioning between tube ODs.",
    image: "https://pblol2.blob.core.windows.net/panam-images/products/tube-fittings/reducer.jpg",
    pressure: "High Pressure",
    tag: "Tube Fittings",
    link: "/instrumentation-fittings/tube-fittings/reducer",
  },
  {
    id: "tube-fitting-adapters",
    title: "Adapters",
    subtitle: "Male & Female Thread Configurations",
    description:
      "Male and female adapter fittings connecting tube OD to NPT, BSPT, BSPP, RP, RG and SAE/MS threads. Available in Imperial and Metric tube OD with a wide range of thread sizes.",
    image: "https://pblol2.blob.core.windows.net/panam-images/products/tube-fittings/male_adaptor.jpg",
    pressure: "High Pressure",
    tag: "Tube Fittings",
    link: "/instrumentation-fittings/tube-fittings/adapter",
  },
  {
    id: "tube-fitting-port-connectors",
    title: "Port Connectors",
    subtitle: "Standard & Reducing Configurations",
    description:
      "Port connectors and reducing port connectors for direct tube-to-port connections. Available in Imperial and Metric tube OD for secure, leak-tight instrument port connections.",
    image: "https://pblol2.blob.core.windows.net/panam-images/products/tube-fittings/port-connector.jpg",
    pressure: "High Pressure",
    tag: "Tube Fittings",
    link: "/instrumentation-fittings/tube-fittings/port-connector",
  },
  {
    id: "tube-fitting-weld-gauge",
    title: "Weld & Gauge Connectors",
    subtitle: "Pipe Weld, Socket Weld & Gauge",
    description:
      "Male pipe weld connectors, male pipe weld elbows, tube socket weld connectors, tube socket weld elbows and gauge connectors. Covers butt weld, socket weld and BSPP/Metric gauge connections.",
    image: "https://pblol2.blob.core.windows.net/panam-images/products/tube-fittings/male-pipe-weld-connector.jpg",
    pressure: "High Pressure",
    tag: "Tube Fittings",
    link: "/instrumentation-fittings/tube-fittings/weld-gauge",
  },
  {
    id: "tube-fitting-accessories",
    title: "Accessories",
    subtitle: "Plugs, Caps, Nuts & Ferrules",
    description:
      "Tube plugs, tube caps, nuts, front ferrules, back ferrules and pipe inserts. Essential accessories for completing and maintaining tube fitting assemblies in Imperial and Metric sizes.",
    image: "https://pblol2.blob.core.windows.net/panam-images/products/tube-fittings/tube_plug.jpg",
    pressure: "High Pressure",
    tag: "Tube Fittings",
    link: "/instrumentation-fittings/tube-fittings/accessories",
  },
  {
    id: "tube-fitting-dielectric",
    title: "Dielectric Fittings & Gaskets",
    subtitle: "Union & Male Connector Configurations",
    description:
      "Stainless steel dielectric tube fittings designed to isolate instruments from electric currents, voltage and static discharges. Polyamideimide insulation rated to 5000 PSI and -40°C to 93°C.",
    image: "https://pblol2.blob.core.windows.net/panam-images/products/tube-fittings/dielectric-fittings.jpg",
    pressure: "High Pressure",
    tag: "Tube Fittings",
    link: "/instrumentation-fittings/tube-fittings/die-electric",
  },
]

type SeriesItem = (typeof TUBE_FITTING_SERIES)[0];

const SeriesCard: React.FC<SeriesItem> = ({
  title,
  subtitle,
  description,
  image,
  pressure,
  tag,
  link,
}) => (
  <Card
    variant="outlined"
    sx={{
      borderRadius: 0,
      height: "100%",
      display: "flex",
      flexDirection: "column",
      border: "1px solid #e8e8e8",
      transition: "box-shadow 0.2s",
      "&:hover": { boxShadow: "0 4px 24px rgba(1,176,240,0.10)" },
    }}
  >
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        bgcolor: "#ffffff",
        p: 3,
        borderBottom: "1px solid #f0f0f0",
        minHeight: 220,
      }}
    >
      <CardMedia
        component="img"
        image={image}
        alt={title}
        sx={{ width: "100%", maxWidth: 200, height: 180, objectFit: "contain" }}
      />
    </Box>

    <CardContent sx={{ flexGrow: 1, p: 3 }}>
      <Typography
        variant="overline"
        sx={{
          color: BRAND_BLUE,
          fontWeight: 700,
          letterSpacing: 2,
          fontSize: 10,
          fontFamily: PRIMARY_FONT,
        }}
      >
        {tag}
      </Typography>
      <Typography
        variant="h6"
        sx={{
          fontWeight: 800,
          fontFamily: PRIMARY_FONT,
          color: "#1a1a1a",
          mt: 0.5,
          mb: 0.5,
          fontSize: "1.05rem",
        }}
      >
        {title} — {subtitle}
      </Typography>
      <Box
        sx={{
          display: "inline-flex",
          alignItems: "center",
          bgcolor: "#e8f7fd",
          border: "1px solid #b3e5f7",
          borderRadius: 0.5,
          px: 1.2,
          py: 0.3,
          mb: 2,
        }}
      >
        <Typography
          sx={{
            fontSize: 11,
            fontWeight: 700,
            color: BRAND_BLUE,
            fontFamily: PRIMARY_FONT,
            letterSpacing: 0.5,
          }}
        >
          {pressure}
        </Typography>
      </Box>
      <Typography
        variant="body2"
        sx={{
          color: "#666",
          lineHeight: 1.75,
          fontSize: "0.88rem",
          fontFamily: PRIMARY_FONT,
        }}
      >
        {description}
      </Typography>
    </CardContent>

    <Box sx={{ p: 2, display: "flex", flexDirection: "column", gap: 1 }}>
      <Button
        variant="contained"
        fullWidth
        size="small"
        href={link}
        sx={{
          bgcolor: BRAND_BLUE,
          color: "#fff",
          borderRadius: 0,
          fontWeight: 700,
          fontSize: 12,
          letterSpacing: 1,
          py: 1,
          "&:hover": { bgcolor: "#0090c8" },
        }}
      >
        VIEW RANGE
      </Button>
      <Button
        variant="outlined"
        fullWidth
        size="small"
        href={LINKS.ctaQuote}
        sx={{
          borderColor: "#ddd",
          color: "#444",
          borderRadius: 0,
          fontWeight: 600,
          fontSize: 12,
          letterSpacing: 1,
          py: 1,
          "&:hover": { bgcolor: "#f5f5f5", borderColor: "#bbb" },
        }}
      >
        REQUEST QUOTE
      </Button>
    </Box>
  </Card>
);

export default function TubeFittingsPage() {
  return (
    <Box sx={{ bgcolor: "#fff", minHeight: "100vh" }}>
      {/* ── HERO ── */}
      <Box
        sx={{
          position: "relative",
          width: "100%",
          minHeight: { xs: "60vh", md: "75vh" },
          display: "flex",
          alignItems: "center",
          overflow: "hidden",
          backgroundImage: `linear-gradient(rgba(0,0,0,0.52), rgba(0,0,0,0.52)), url("https://pblol2.blob.core.windows.net/panam-images/website-media/aleon3004-6z0IreU7EnI-unsplash.jpg")`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          py: { xs: 8, md: 12 },
        }}
      >
        <Container maxWidth="lg">
          <Typography
            variant="overline"
            sx={{
              color: BRAND_BLUE,
              letterSpacing: 3,
              fontSize: 11,
              fontWeight: 700,
              fontFamily: PRIMARY_FONT,
            }}
          >
            PANAM® Instrumentation
          </Typography>
          <Typography
            variant="h1"
            sx={{
              fontSize: { xs: 38, md: 68 },
              fontWeight: 900,
              color: "#fff",
              mt: 1,
              mb: 3,
              lineHeight: 1.08,
              maxWidth: 750,
              fontFamily: PRIMARY_FONT,
              letterSpacing: "-0.03em",
            }}
          >
            Tube Fittings
            <br />
            <span style={{ color: BRAND_BLUE }}>Leak-Tight. Every Time.</span>
          </Typography>
          <Typography
            sx={{
              fontSize: { xs: 16, md: 19 },
              color: "rgba(255,255,255,0.88)",
              maxWidth: 580,
              mb: 5,
              lineHeight: 1.75,
              fontFamily: PRIMARY_FONT,
            }}
          >
            Single and double ferrule tube fittings in fractional and metric sizes — engineered
            for secure, leak-tight performance across the world's most demanding instrumentation
            and process systems.
          </Typography>
          <Box sx={{ display: "flex", gap: 2, flexWrap: "wrap" }}>
            <Button
              variant="contained"
              size="large"
              href={LINKS.heroExplore}
              sx={{
                bgcolor: BRAND_BLUE,
                color: "#fff",
                borderRadius: 0,
                px: 4,
                py: 1.5,
                fontWeight: 700,
                fontFamily: PRIMARY_FONT,
                "&:hover": { bgcolor: "#0090c8" },
              }}
            >
              Explore Range
            </Button>
            <Button
              variant="outlined"
              size="large"
              href={LINKS.heroQuote}
              sx={{
                borderColor: "rgba(255,255,255,0.5)",
                color: "#fff",
                borderRadius: 0,
                px: 4,
                py: 1.5,
                fontWeight: 600,
                fontFamily: PRIMARY_FONT,
                "&:hover": {
                  bgcolor: "rgba(255,255,255,0.08)",
                  borderColor: "#fff",
                },
              }}
            >
              Request Quote
            </Button>
          </Box>
        </Container>
      </Box>

      {/* ── MARQUEE ── */}
      <Box
        sx={{
          borderBottom: "1px solid #eee",
          py: 1.5,
          bgcolor: "#fff",
          overflow: "hidden",
          whiteSpace: "nowrap",
        }}
      >
        <style>{`@keyframes marquee { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }`}</style>
        <Box
          sx={{
            display: "flex",
            width: "max-content",
            animation: "marquee 28s linear infinite",
            "&:hover": { animationPlayState: "paused" },
          }}
        >
          {[1, 2].map((i) => (
            <Box key={i} sx={{ display: "flex", gap: 6, pr: 6 }}>
              {[
                "Single & double ferrule designs",
                "SS316 · Duplex · Monel · Hastelloy · Brass",
                "ASTM F1387 type tested",
                "1/16\" to 2\" OD · 3 mm to 50 mm OD",
                "NACE MR0175 available on request",
                "Full heat-code material traceability",
                "NPT · BSPP · BSPT · 37° Flare",
              ].map((item) => (
                <Typography
                  key={item}
                  sx={{
                    fontSize: 13,
                    fontWeight: 500,
                    color: "text.secondary",
                    display: "flex",
                    alignItems: "center",
                    gap: 1.5,
                    fontFamily: PRIMARY_FONT,
                  }}
                >
                  <Box
                    component="span"
                    sx={{
                      width: 6,
                      height: 6,
                      borderRadius: "50%",
                      bgcolor: BRAND_BLUE,
                      flexShrink: 0,
                    }}
                  />
                  {item}
                </Typography>
              ))}
            </Box>
          ))}
        </Box>
      </Box>

      <Container maxWidth="lg" sx={{ py: { xs: 8, md: 12 } }}>
        {/* ── INTRO ── */}
        <Grid size={{ xs: 12, md: 7 }}>
          <Typography
            variant="h2"
            sx={{
              fontSize: { xs: 26, md: 34 },
              fontWeight: 800,
              mb: 3,
              fontFamily: PRIMARY_FONT,
              color: "#1a1a1a",
              letterSpacing: "-0.02em",
            }}
          >
            Low torque assembly.
            <br />
            High-pressure integrity.
          </Typography>
          <Typography
            sx={{ color: "#555", lineHeight: 1.85, mb: 2.5, fontFamily: PRIMARY_FONT }}
          >
            PANAM® Tube Fittings are available in both single and double ferrule designs,
            engineered to deliver secure, leak-tight performance in demanding instrumentation
            and process applications. Manufactured in SS316, Duplex, Monel, Hastelloy, Brass,
            and other alloys upon request, these fittings support a wide range of system
            requirements.
          </Typography>
          <Typography
            sx={{ color: "#555", lineHeight: 1.85, mb: 2.5, fontFamily: PRIMARY_FONT }}
          >
            A full variety of end connection options is offered, including male and female NPT,
            BSPP, BSPT, and 37° flare configurations. Size options range from 1/16" to 2" OD
            and 3 mm to 50 mm OD, ensuring compatibility with both fractional and metric tubing.
          </Typography>
          <Typography sx={{ color: "#555", lineHeight: 1.85, fontFamily: PRIMARY_FONT }}>
            Designed for low torque assembly, PANAM® fittings are type tested to ASTM F1387
            and provide high-pressure, leak-tight connections suitable for critical service
            environments. NACE certification is available upon request, and heat code
            traceability is provided for full material verification and quality assurance.
          </Typography>
        </Grid>

        <Divider sx={{ mt: 5, mb: 5 }} />

        {/* ── SERIES GRID ── */}
        <Box id="series" sx={{ mb: 10 }}>
          <Typography
            variant="overline"
            sx={{
              color: BRAND_BLUE,
              fontWeight: 700,
              letterSpacing: 3,
              fontSize: 11,
              fontFamily: PRIMARY_FONT,
              display: "block",
              mb: 1,
            }}
          >
            Product Range
          </Typography>
          <Typography
            variant="h2"
            sx={{
              fontSize: { xs: 26, md: 32 },
              fontWeight: 800,
              mb: 1.5,
              fontFamily: PRIMARY_FONT,
              color: "#1a1a1a",
              letterSpacing: "-0.02em",
            }}
          >
            Every Configuration. One Standard.
          </Typography>
          <Typography
            sx={{
              color: "#666",
              fontFamily: PRIMARY_FONT,
              mb: 6,
              maxWidth: 560,
              lineHeight: 1.8,
            }}
          >
            Each fitting type is purpose-built for a specific connection geometry. Select by
            configuration, size range, or end connection.
          </Typography>
          <Grid container spacing={3}>
            {TUBE_FITTING_SERIES.map((s) => (
              <Grid key={s.id} size={{ xs: 12, sm: 6, md: 4 }}>
                <SeriesCard {...s} />
              </Grid>
            ))}
          </Grid>
        </Box>

        <Divider sx={{ mb: 10 }} />

        {/* ── KEY FEATURES ── */}
        <Box sx={{ mb: 10 }}>
          <Typography
            variant="h3"
            sx={{
              fontSize: { xs: 24, md: 30 },
              fontWeight: 800,
              mb: 2,
              fontFamily: PRIMARY_FONT,
              color: "#1a1a1a",
            }}
          >
            Why specify PANAM® Tube Fittings
          </Typography>
          <Typography
            sx={{
              color: "#666",
              lineHeight: 1.8,
              mb: 5,
              maxWidth: 620,
              fontFamily: PRIMARY_FONT,
            }}
          >
            Built around the same engineering standard as every PANAM® product — full
            traceability, broad material availability, and performance tested to industry
            standards.
          </Typography>
          <Grid container spacing={2}>
            {[
              "Single and double ferrule designs available",
              "ASTM F1387 type tested for leak-tight performance",
              "SS316, Duplex, Monel, Hastelloy, and Brass",
              "NACE MR0175 / ISO 15156 certification available",
              "Full heat-code traceability on all components",
              "Low torque assembly — no special tools required",
              '1/16" to 2" OD fractional and 3–50 mm OD metric',
              "NPT, BSPP, BSPT, and 37° flare end connections",
            ].map((feat) => (
              <Grid key={feat} size={{ xs: 12, sm: 6, md: 6 }}>
                <Box sx={{ display: "flex", alignItems: "flex-start", gap: 1.5 }}>
                  <Box
                    sx={{
                      width: 8,
                      height: 8,
                      borderRadius: "50%",
                      bgcolor: BRAND_BLUE,
                      flexShrink: 0,
                      mt: "6px",
                    }}
                  />
                  <Typography
                    sx={{
                      fontSize: 14,
                      color: "#555",
                      fontFamily: PRIMARY_FONT,
                      lineHeight: 1.7,
                    }}
                  >
                    {feat}
                  </Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Box>

        <Divider sx={{ mb: 10 }} />

        {/* ── CTA ── */}
        <Box sx={{ textAlign: "center", py: 6 }}>
          <Typography
            variant="h3"
            sx={{
              fontSize: { xs: 24, md: 32 },
              fontWeight: 800,
              mb: 2,
              fontFamily: PRIMARY_FONT,
              color: "#1a1a1a",
            }}
          >
            Specify your tube fitting
          </Typography>
          <Typography
            sx={{
              color: "#666",
              lineHeight: 1.8,
              mb: 4,
              maxWidth: 520,
              mx: "auto",
              fontFamily: PRIMARY_FONT,
            }}
          >
            Send us your size, material requirement, and end connections. Our technical team
            responds to instrumentation enquiries within 24 hours.
          </Typography>
          <Box sx={{ display: "flex", gap: 2, justifyContent: "center", flexWrap: "wrap" }}>
            <Button
              variant="contained"
              size="large"
              href={LINKS.ctaEmail}
              sx={{
                bgcolor: BRAND_BLUE,
                color: "#fff",
                borderRadius: 0,
                px: 4,
                py: 1.5,
                fontWeight: 700,
                fontFamily: PRIMARY_FONT,
                "&:hover": { bgcolor: "#0090c8" },
              }}
            >
              Email Technical Sales
            </Button>
            <Button
              variant="outlined"
              size="large"
              href={LINKS.ctaQuote}
              sx={{
                borderColor: "#ddd",
                color: "#333",
                borderRadius: 0,
                px: 4,
                py: 1.5,
                fontWeight: 600,
                fontFamily: PRIMARY_FONT,
                "&:hover": { bgcolor: "#f5fbfe", borderColor: BRAND_BLUE },
              }}
            >
              Request Quote
            </Button>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}