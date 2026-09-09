import { Breadcrumbs, Typography, Link as MuiLink } from "@mui/material"
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
    { label: "HOME", path: "/" },
    ...segments.map((seg, i) => ({
      label: (ROUTE_LABELS[seg] ?? formatSlug(seg)).toUpperCase(),
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
      <Breadcrumbs separator="/" sx={{ px: 4, py: 2 }}>
      {crumbs.map((crumb, i) =>
        i < crumbs.length - 1 ? (
          <MuiLink
            key={crumb.path}
            component={Link} // This bridges MUI to React Router
            to={crumb.path}   // React Router needs 'to'
            underline="hover" // Adds the underline on hover
            sx={{
              textDecoration: "none",
              color: "#999",
              fontSize: "0.75rem",
              letterSpacing: "0.1em",
              fontWeight: 600,
              "&:hover": {
                color: "#01B0F0",
              },
            }}
          >
            {crumb.label}
          </MuiLink>
        ) : (
          <Typography
            key={crumb.path}
            sx={{ 
              fontSize: "0.75rem", 
              letterSpacing: "0.1em", 
              fontWeight: 700, 
              color: "#01B0F0" 
            }}
          >
            {crumb.label}
          </Typography>
        )
      )}
      </Breadcrumbs>
    </>
  )
}