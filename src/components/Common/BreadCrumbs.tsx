import { Box, Breadcrumbs, Container, Typography, Link as MuiLink } from "@mui/material"
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined"
import ChevronRightRoundedIcon from "@mui/icons-material/ChevronRightRounded"
import { useLocation, Link } from "react-router-dom" // Added Link here

const formatSlug = (slug: string) =>
  slug.split("-").map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(" ")

const ROUTE_LABELS: Record<string, string> = {
  products: "Products",
  industries: "Industries",
  news: "Resources",
  about: "About Us",
  cart: "Cart",
  dashboard: "Dashboard",
  enquiry: "Enquiry",
}

export default function AppBreadcrumbs() {
  const { pathname } = useLocation()

  if (pathname === "/") return null

  const segments = pathname.split("/").filter(Boolean)

  const crumbs = [
    { label: "Home", path: "/" },
    ...segments.map((seg, i) => ({
      label: ROUTE_LABELS[seg] ?? formatSlug(seg),
      path: "/" + segments.slice(0, i + 1).join("/"),
    })),
  ]

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: crumbs.map((crumb, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: crumb.label,
      item: `https://www.panamvalve.com${crumb.path === "/" ? "" : crumb.path}`,
    })),
  }

  return (
    <>
      <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>
      {/* Same container as the page content so it lines up with the nav and sections below */}
      <Container maxWidth="lg" sx={{ py: { xs: 1.25, md: 1.75 } }}>
        <Breadcrumbs
          aria-label="Breadcrumb"
          separator={<ChevronRightRoundedIcon sx={{ fontSize: 18, color: "#B4C0CC" }} />}
          sx={{
            fontFamily: '"Inter", "Roboto", "Helvetica", Arial, sans-serif',
            textTransform: "none",
            "& .MuiBreadcrumbs-ol": { flexWrap: "nowrap", overflowX: "auto", scrollbarWidth: "none", "&::-webkit-scrollbar": { display: "none" } },
            "& .MuiBreadcrumbs-li": { whiteSpace: "nowrap", flex: "none" },
            "& .MuiBreadcrumbs-separator": { mx: 0.5 },
          }}>
          {crumbs.map((crumb, i) =>
            i < crumbs.length - 1 ? (
              <MuiLink
                key={crumb.path}
                component={Link}
                to={crumb.path}
                underline="none"
                aria-label={i === 0 ? "Home" : undefined}
                sx={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 0.75,
                  px: i === 0 ? 0.75 : 1,
                  ml: i === 0 ? -0.75 : 0, // icon (not its hover pad) sits on the content edge
                  py: 0.5,
                  borderRadius: "8px",
                  color: "#64748B",
                  fontSize: "0.85rem",
                  fontWeight: 500,
                  transition: "all 0.2s ease",
                  "&:hover": { color: "#0089BD", bgcolor: "#EEF8FD" },
                }}>
                {i === 0 ? <HomeOutlinedIcon sx={{ fontSize: 18 }} /> : crumb.label}
              </MuiLink>
            ) : (
              <Box
                component="span"
                key={crumb.path}
                aria-current="page"
                sx={{ display: "inline-flex", alignItems: "center", px: 1.25, py: 0.5, borderRadius: "999px", bgcolor: "#EEF8FD", border: "1px solid rgba(1,176,240,0.2)", color: "#0089BD", fontSize: "0.85rem", fontWeight: 600 }}>
                <Typography component="span" sx={{ font: "inherit" }}>
                  {crumb.label}
                </Typography>
              </Box>
            )
          )}
        </Breadcrumbs>
      </Container>
    </>
  )
}