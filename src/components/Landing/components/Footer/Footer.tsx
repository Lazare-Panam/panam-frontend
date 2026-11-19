import React from "react"
import { Box, Typography, Link, Stack } from "@mui/material"
import FacebookIcon from "@mui/icons-material/Facebook"
import LinkedInIcon from "@mui/icons-material/LinkedIn"
import TwitterIcon from "@mui/icons-material/Twitter"
import YouTubeIcon from "@mui/icons-material/YouTube"
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined"
import PhoneOutlinedIcon from "@mui/icons-material/PhoneOutlined"
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined"
import { C, GRADIENT } from "../../../Landing2/homeTokens"

const FONT = '"Inter", sans-serif'
// Content sits in a centred block (not edge-to-edge) so the columns stay close together.
const CONTENT_MAX_WIDTH = 1200

const LOGO_SRC = "https://pblol2.blob.core.windows.net/panam-images/panam-image-compressed/website-media/panam-no-bg.png"
const MAPS_URL = "https://maps.google.com/?q=St+Edburgs+Hall,+Priory+Road,+Bicester,+OX26+6BL"

const SOCIAL_LINKS = [
  { Icon: LinkedInIcon, name: "LinkedIn", url: "https://uk.linkedin.com/company/panamvalves-ltd" },
  { Icon: YouTubeIcon, name: "YouTube", url: "https://www.youtube.com/@panamengineersltd" },
  { Icon: FacebookIcon, name: "Facebook", url: "https://www.facebook.com/PanamEngineers/" },
  { Icon: TwitterIcon, name: "Twitter", url: "https://twitter.com/panamvalves" },
]

const COMPANY_LINKS = [
  { label: "About Us", href: "/about" },
  { label: "Certificates", href: "/certificates" },
  { label: "Blog", href: "/blog" },
  { label: "Contact Us", href: "/enquiry" },
]

const PRODUCT_LINKS = [
  { label: "Valves", href: "/valves" },
  { label: "Manifolds", href: "/manifolds" },
  { label: "Double Block & Bleed", href: "/double-block-and-bleed-valves" },
  { label: "Single Block & Bleed", href: "/single-block-and-bleed-valves" },
  { label: "Fittings", href: "/instrumentation-fittings" },
  { label: "Filters", href: "/filters" },
  { label: "High Pressure", href: "/high-pressure" },
]

const INDUSTRY_LINKS = [
  { label: "Hydrogen", href: "/industries/hydrogen" },
  { label: "Oil & Gas", href: "/industries/oil-gas" },
  { label: "All Industries", href: "/industries" },
]

const RESOURCE_LINKS = [
  { label: "Product Configurator", href: "/products" },
  { label: "Catalog & CAD Files", href: "/catalogPDFs" },
  { label: "Request a Quote", href: "/enquiry" },
  { label: "Delivery & Returns", href: "/delivery-returns" },
  { label: "Sitemap", href: "/sitemap" },
]

const LEGAL_LINKS = [
  { label: "Privacy Policy", href: "#" },
  { label: "Terms of Use", href: "#" },
]

const sectionHeading = {
  fontFamily: FONT,
  fontWeight: 700,
  fontSize: "0.78rem",
  letterSpacing: "0.08em",
  textTransform: "uppercase" as const,
  color: "white",
  mb: 2,
}

const navLink = {
  fontFamily: FONT,
  fontSize: "0.85rem",
  color: "rgba(255,255,255,0.85)",
  width: "fit-content",
  transition: "color 0.2s, transform 0.2s",
  "&:hover": { color: "white", transform: "translateX(3px)" },
}

const visuallyHidden = {
  position: "absolute", width: 1, height: 1, p: 0, m: "-1px", overflow: "hidden", clip: "rect(0 0 0 0)", whiteSpace: "nowrap", border: 0,
}

const LinkColumn = ({ title, links }: { title: string; links: { label: string; href: string }[] }) => (
  <Box component="nav" aria-label={title}>
    <Typography component="h2" sx={sectionHeading}>{title}</Typography>
    <Stack spacing={1.25}>
      {links.map(({ label, href }) => (
        <Link key={label} href={href} underline="none" sx={navLink}>{label}</Link>
      ))}
    </Stack>
  </Box>
)

const SocialIcons = () => (
  <Stack direction="row" spacing={1}>
    {SOCIAL_LINKS.map(({ Icon, name, url }) => (
      <Box
        key={name}
        component="a"
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Panam Valves on ${name}`}
        title={`Panam Valves on ${name}`}
        sx={{
          position: "relative",
          width: 34,
          height: 34,
          borderRadius: "50%",
          display: "grid",
          placeItems: "center",
          color: "white",
          border: "1px solid rgba(255,255,255,0.35)",
          transition: "all 0.2s",
          "&:hover": { bgcolor: "white", borderColor: "white", color: C.brandDeep, transform: "translateY(-2px)" },
        }}
      >
        <Icon sx={{ fontSize: "1rem" }} />
        {/* Real anchor text for crawlers (SE Ranking flags icon-only links as empty anchors);
            visually hidden so the footer still shows just the icon. */}
        <Box component="span" sx={visuallyHidden}>Panam Valves on {name}</Box>
      </Box>
    ))}
  </Stack>
)

const ContactRow = ({ Icon, href, children, external }: {
  Icon: typeof PhoneOutlinedIcon
  href: string
  children: React.ReactNode
  external?: boolean
}) => (
  <Box
    component="a"
    href={href}
    {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
    sx={{ display: "flex", alignItems: "flex-start", gap: 1.25, textDecoration: "none", color: "rgba(255,255,255,0.9)", "&:hover": { color: "white" } }}
  >
    <Icon sx={{ fontSize: "1rem", mt: "3px", color: "rgba(255,255,255,0.8)" }} />
    <Typography component="span" sx={{ fontFamily: FONT, fontSize: "0.85rem", lineHeight: 1.6, color: "inherit", wordBreak: "break-word" }}>
      {children}
    </Typography>
  </Box>
)

const Footer: React.FC = () => (
  <Box
    id="site-footer"
    component="footer"
    sx={{
      color: "white",
      mt: 8,
      // body sets text-transform: capitalize globally; keep emails/sentences as written here.
      textTransform: "none",
      "& *": { textTransform: "none" },
      position: "relative",
      overflow: "hidden",
      // Same brand gradient as the home page feature cards.
      background: GRADIENT.brand,
    }}
  >
    {/* decorative rings + grid, matching the home page Product Configurator card */}
    <Box aria-hidden sx={{ position: "absolute", right: -140, bottom: -160, width: 520, height: 520, borderRadius: "50%", border: "70px solid rgba(255,255,255,0.10)", pointerEvents: "none" }} />
    <Box aria-hidden sx={{ position: "absolute", right: 60, bottom: 60, width: 200, height: 200, borderRadius: "50%", border: "2px solid rgba(255,255,255,0.18)", pointerEvents: "none" }} />
    <Box
      aria-hidden
      sx={{
        position: "absolute",
        inset: 0,
        pointerEvents: "none",
        backgroundImage: "linear-gradient(rgba(255,255,255,0.07) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.07) 1px, transparent 1px)",
        backgroundSize: "44px 44px",
        maskImage: "linear-gradient(135deg, #000 0%, transparent 60%)",
        WebkitMaskImage: "linear-gradient(135deg, #000 0%, transparent 60%)",
      }}
    />

    {/* Main columns */}
    <Box
      sx={{
        position: "relative",
        maxWidth: CONTENT_MAX_WIDTH,
        mx: "auto",
        px: { xs: 3, sm: 5 },
        pt: { xs: 6, md: 7 },
        pb: { xs: 5, md: 6 },
        display: "grid",
        gridTemplateColumns: { xs: "1fr 1fr", sm: "repeat(4, 1fr)", md: "1.5fr repeat(4, 1fr)" },
        columnGap: { xs: 3, md: 4 },
        rowGap: 5,
      }}
    >
      {/* Brand + contact */}
      <Box sx={{ gridColumn: { xs: "1 / -1", md: "auto" }, maxWidth: 340 }}>
        <Box component="img" src={LOGO_SRC} alt="Panam Valves Logo" sx={{ height: { xs: 56, md: 64 }, width: "auto", filter: "brightness(0) invert(1)", display: "block", mb: 2 }} />
        <Typography sx={{ fontFamily: FONT, fontSize: "0.85rem", lineHeight: 1.7, color: "rgba(255,255,255,0.85)", mb: 2.5 }}>
          Precision-engineered instrumentation solutions for critical global infrastructure.
        </Typography>
        <Stack spacing={1.25} sx={{ mb: 3 }}>
          <ContactRow Icon={EmailOutlinedIcon} href="mailto:sales@panamvalves.co.uk">sales@panamvalves.co.uk</ContactRow>
          <ContactRow Icon={EmailOutlinedIcon} href="mailto:marketing@panamvalve.com">marketing@panamvalve.com</ContactRow>
          <ContactRow Icon={PhoneOutlinedIcon} href="tel:+447369243459">+44 (0) 7369243459</ContactRow>
          <ContactRow Icon={LocationOnOutlinedIcon} href={MAPS_URL} external>
            Ground Floor, St Edburgs Hall<br />
            Priory Road, Bicester, OX26 6BL<br />
            United Kingdom
          </ContactRow>
        </Stack>
        <SocialIcons />
      </Box>

      <LinkColumn title="Company" links={COMPANY_LINKS} />
      <LinkColumn title="Products" links={PRODUCT_LINKS} />
      <LinkColumn title="Industries" links={INDUSTRY_LINKS} />
      <LinkColumn title="Resources" links={RESOURCE_LINKS} />
    </Box>

    {/* Bottom bar — full-width rule, everything aligned left so the floating
        "Request a Quote" button (fixed bottom-right) never covers a link. */}
    <Box sx={{ position: "relative", borderTop: "1px solid rgba(255,255,255,0.2)" }}>
      <Stack
        direction={{ xs: "column", md: "row" }}
        alignItems={{ xs: "flex-start", md: "center" }}
        justifyContent="flex-start"
        spacing={{ xs: 2, md: 4 }}
        sx={{ maxWidth: CONTENT_MAX_WIDTH, mx: "auto", px: { xs: 3, sm: 5 }, pt: 2.5, pb: { xs: 12, md: 2.5 } }}
      >
        <Stack direction="row" spacing={3} useFlexGap flexWrap="wrap" alignItems="center">
          <Typography sx={{ color: "rgba(255,255,255,0.8)", fontSize: "0.75rem", fontFamily: FONT }}>
            © {new Date().getFullYear()} Panam Valves Ltd. All Rights Reserved.
          </Typography>
          {LEGAL_LINKS.map(({ label, href }) => (
            <Link key={label} href={href} underline="none" sx={{ color: "rgba(255,255,255,0.8)", fontSize: "0.75rem", fontFamily: FONT, "&:hover": { color: "white" } }}>
              {label}
            </Link>
          ))}
        </Stack>

        {/* Google "Preferred sources" button. publisher.js (loaded in index.html) injects the button
            into the inner div by its `google-add-preferred-source-btn` attribute. This is a plain <div>,
            NOT MUI <Box>: Box filters props through Emotion's is-prop-valid, which would strip this
            non-standard attribute. The attribute is spread in (not in React's typed div props);
            suppressHydrationWarning because Google's async script may populate this node around hydration. */}
        <div suppressHydrationWarning {...({ "google-add-preferred-source-btn": "", "data-theme": "dark" } as Record<string, string>)} />
      </Stack>
    </Box>
  </Box>
)

export default Footer
