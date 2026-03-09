import React, { useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import {
  Container, Typography, Box, Breadcrumbs, Avatar, Chip,
  Stack, Paper, Button, Divider,
} from "@mui/material";
import Grid from "@mui/material/Grid";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { blogs } from "./blogData";


const BlogTemplate: React.FC = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const post = blogs.find((b) => b.slug === slug);

  useEffect(() => { window.scrollTo(0, 0); }, [slug]);

  if (!post)
    return (
      <Typography variant="h4" sx={{ p: 10, textAlign: "center", fontWeight: 300 }}>
        Article not found.
      </Typography>
    );

  const cta = {
    heading: "Ready to optimize your systems?",
    body: "Speak with our engineering team today to discuss your specific high-pressure requirements.",
    buttonText: "Contact Our Experts",
    buttonLink: "/enquiry",
  };

  // ── Block renderer ───────────────────────────────────────────────────────
  const renderBlock = (section: any, index: number) => {
    const key = `${section.type}-${index}`;

    switch (section.type) {

      case "paragraph":
        return (
          <Typography key={key} variant="body1" sx={{ mb: 4, lineHeight: 1.8, fontSize: "1.15rem", color: "#333" }}>
            {section.text}
          </Typography>
        );

      case "subheading":
        return (
          <Typography key={key} variant="h4" sx={{ mt: 6, mb: 3, fontWeight: 700, color: "#000", fontSize: "1.8rem", letterSpacing: "-0.01em" }}>
            {section.text}
          </Typography>
        );

      case "image":
        return (
          <Box key={key} sx={{ my: 6 }}>
            <Box
              component="img"
              src={section.url}
              alt={section.caption ?? ""}
              sx={{ width: "100%", borderRadius: "4px", display: "block" }}
            />
            {section.caption && (
              <Typography variant="caption" sx={{ display: "block", mt: 1.5, color: "#888", textAlign: "center", fontStyle: "italic" }}>
                {section.caption}
              </Typography>
            )}
          </Box>
        );

      case "wrap-image": {
        const floatSide = section.side === "right" ? "right" : "left";
        const marginProp = floatSide === "left" ? { mr: { sm: 4 } } : { ml: { sm: 4 } };
        return (
          <Box key={key} sx={{ mb: 6, display: "flow-root" }}>
            <Box
              component="img"
              src={section.url}
              alt=""
              sx={{
                width: { xs: "100%", sm: "48%" },
                float: { sm: floatSide },
                mb: 2,
                borderRadius: "4px",
                ...marginProp,
              }}
            />
            <Typography variant="body1" sx={{ lineHeight: 1.8, fontSize: "1.15rem", color: "#333" }}>
              {section.text}
            </Typography>
          </Box>
        );
      }

      case "quote":
        return (
          <Box
            key={key}
            sx={{
              my: 8,
              pl: { xs: 3, md: 4 },
              borderLeft: "4px solid #01B0F0",
              position: "relative",
            }}
          >
            <Typography
              sx={{
                fontSize: { xs: "4rem", md: "6rem" },
                lineHeight: 0.8,
                color: "#01B0F0",
                opacity: 0.25,
                fontFamily: "Georgia, serif",
                mb: -2,
                display: "block",
              }}
            >
              &ldquo;
            </Typography>
            <Typography
              variant="h4"
              sx={{
                fontStyle: "italic",
                fontWeight: 400,
                color: "#01B0F0",
                lineHeight: 1.4,
                fontSize: { xs: "1.4rem", md: "1.8rem" },
              }}
            >
              {section.text}
            </Typography>
          </Box>
        );

      case "list":
        return (
          <Box component="ul" key={key} sx={{ mb: 6, pl: 2, listStyle: "none" }}>
            {section.items?.map((item: string, i: number) => (
              <Box component="li" key={i} sx={{ display: "flex", mb: 2 }}>
                <Box sx={{ color: "#01B0F0", mr: 2, fontWeight: "bold", flexShrink: 0 }}>—</Box>
                <Typography sx={{ fontSize: "1.1rem", color: "#444" }}>{item}</Typography>
              </Box>
            ))}
          </Box>
        );

      case "numbered-list":
        return (
          <Box component="ol" key={key} sx={{ mb: 6, pl: 2, listStyle: "none" }}>
            {section.items?.map((item: string, i: number) => (
              <Box component="li" key={i} sx={{ display: "flex", mb: 2, alignItems: "flex-start" }}>
                <Box sx={{
                  color: "#fff", bgcolor: "#01B0F0", mr: 2, fontWeight: 700,
                  width: 26, height: 26, borderRadius: "50%",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  fontSize: "0.75rem", flexShrink: 0, mt: "2px",
                }}>
                  {i + 1}
                </Box>
                <Typography sx={{ fontSize: "1.1rem", color: "#444" }}>{item}</Typography>
              </Box>
            ))}
          </Box>
        );

      case "code":
        return (
          <Box key={key} sx={{ my: 4 }}>
            {section.language && (
              <Typography variant="caption" sx={{ display: "block", mb: 0.5, color: "#888", fontWeight: 600, letterSpacing: "0.05em" }}>
                {section.language.toUpperCase()}
              </Typography>
            )}
            <Box
              component="pre"
              sx={{
                bgcolor: "#1A1A1A",
                color: "#E8E8E8",
                p: 3,
                borderRadius: "4px",
                overflowX: "auto",
                fontSize: "0.9rem",
                lineHeight: 1.6,
                fontFamily: '"Fira Code", "Consolas", monospace',
                m: 0,
              }}
            >
              <code>{section.text}</code>
            </Box>
          </Box>
        );

      case "divider":
        return <Divider key={key} sx={{ my: 6, borderColor: "#ECEEF0" }} />;

      default:
        return null;
    }
  };
  // ─────────────────────────────────────────────────────────────────────────

  return (
    <Box sx={{ bgcolor: "#ffffff", minHeight: "100vh" }}>

      {/* HEADER */}
      <Box sx={{ pt: { xs: 4, md: 8 }, pb: { xs: 4, md: 6 } }}>
        <Container maxWidth="md">
          <Breadcrumbs sx={{ mb: 4 }}>
            <Link to="/" style={{ textDecoration: "none", color: "#999", fontSize: "0.75rem", letterSpacing: "0.1em", fontWeight: 600 }}>HOME</Link>
            <Link to="/news" style={{ textDecoration: "none", color: "#999", fontSize: "0.75rem", letterSpacing: "0.1em", fontWeight: 600 }}>RESOURCES</Link>
            <Typography sx={{ fontSize: "0.75rem", letterSpacing: "0.1em", fontWeight: 700, color: "#01B0F0" }}>
              {post.category.toUpperCase()}
            </Typography>
          </Breadcrumbs>

          <Typography variant="h1" sx={{ fontWeight: 800, mb: 4, fontSize: { xs: "2.5rem", md: "4rem" }, lineHeight: 1, color: "#1A1A1A", letterSpacing: "-0.03em" }}>
            {post.title}
          </Typography>

          <Stack direction="row" alignItems="center" spacing={2} sx={{ mb: 2 }}>
            <Avatar sx={{ bgcolor: "#1A1A1A", width: 40, height: 40, fontSize: "1rem" }}>
              {post.author.charAt(0)}
            </Avatar>
            <Box>
              <Typography variant="subtitle2" sx={{ fontWeight: 700, color: "#1A1A1A" }}>{post.author}</Typography>
              <Typography variant="caption" sx={{ color: "#777", display: "block" }}>
                {post.date} • {post.readTime}
              </Typography>
            </Box>
          </Stack>
        </Container>
      </Box>

      {/* HERO IMAGE */}
      <Container maxWidth="lg" sx={{ mb: 8 }}>
        <Box
          component="img"
          src={post.image}
          sx={{ width: "100%", height: { xs: 300, md: 550 }, objectFit: "cover", borderRadius: "4px", boxShadow: "0 20px 40px rgba(0,0,0,0.05)" }}
        />
      </Container>

      {/* BODY + SIDEBAR */}
      <Container maxWidth="lg">
        <Grid container spacing={8}>

          {/* ── Main content ── */}
          <Grid size={{ xs: 12, md: 8 }}>
            {post.body.map(renderBlock)}

            {/* CTA */}
            <Paper elevation={0} sx={{ mt: 10, p: { xs: 4, md: 6 }, bgcolor: "#F8F9FA", border: "1px solid #ECEEF0", borderRadius: "8px" }}>
              <Typography variant="h4" sx={{ fontWeight: 800, mb: 2 }}>{cta.heading}</Typography>
              <Typography variant="body1" sx={{ color: "#666", mb: 4 }}>{cta.body}</Typography>
              <Button
                variant="contained"
                size="large"
                onClick={() => navigate(cta.buttonLink)}
                endIcon={<ArrowForwardIcon />}
                sx={{ bgcolor: "#01B0F0", color: "white", px: 4, py: 1.5, borderRadius: "4px", textTransform: "none", fontWeight: 700, "&:hover": { bgcolor: "#01B0F0" } }}
              >
                {cta.buttonText}
              </Button>
            </Paper>
          </Grid>

          {/* ── Sidebar ── */}
          <Grid size={{ xs: 12, md: 4 }}>
            <Box sx={{ position: "sticky", top: 40 }}>
              <Typography variant="overline" sx={{ fontWeight: 800, color: "#01B0F0", letterSpacing: "0.1em" }}>INSIGHTS</Typography>
              <Typography variant="h6" sx={{ mb: 3, fontWeight: 800 }}>Key Takeaways</Typography>
              <Stack spacing={2} sx={{ mb: 6 }}>
                {post.takeaways.map((text) => (
                  <Box key={text} sx={{ pb: 2, borderBottom: "1px solid #EEE" }}>
                    <Typography variant="body2" sx={{ fontWeight: 500, color: "#555" }}>• {text}</Typography>
                  </Box>
                ))}
              </Stack>
              <Box sx={{ mt: 6 }}>
                <Typography variant="caption" sx={{ color: "#999", fontWeight: 700, display: "block", mb: 2, letterSpacing: "0.1em" }}>TAGS</Typography>
                <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap>
                  <Chip label={post.category} size="small" sx={{ borderRadius: "4px", fontWeight: 600 }} />
                  <Chip label="Engineering" size="small" variant="outlined" sx={{ borderRadius: "4px" }} />
                </Stack>
              </Box>
            </Box>
          </Grid>

        </Grid>
      </Container>
      <Box sx={{ py: 10 }} />
    </Box>
  );
};

export default BlogTemplate;