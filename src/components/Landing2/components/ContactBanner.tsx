import { Box, Container, Typography, Button, Stack, Grid, Divider } from "@mui/material"
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined"
import PhoneOutlinedIcon from "@mui/icons-material/PhoneOutlined"
import ArrowForwardIcon from "@mui/icons-material/ArrowForward"
import { Link as RouterLink } from "react-router-dom"
import { C, btn } from "../homeTokens"

// Same contact details already shown in the "Visit Our UK Headquarters" section above.
const contacts = [
  { icon: <EmailOutlinedIcon />, label: "Sales", value: "sales@panamvalves.co.uk", href: "mailto:sales@panamvalves.co.uk" },
  { icon: <EmailOutlinedIcon />, label: "Marketing", value: "marketing@panamvalve.com", href: "mailto:marketing@panamvalve.com" },
  { icon: <PhoneOutlinedIcon />, label: "Phone", value: "+44 7369 243459", href: "tel:+447369243459" },
]

const ContactBanner = () => {
  return (
    <Box component="section" id="contact" sx={{ bgcolor: C.white, py: { xs: 9, md: 12 }, borderTop: `1px solid ${C.border}` }}>
      <Container maxWidth="lg">
        <Grid container spacing={{ xs: 6, md: 10 }} alignItems="center">
          <Grid size={{ xs: 12, md: 6 }}>
            <Box sx={{ width: 40, height: 3, borderRadius: 2, bgcolor: C.brand, mb: 3 }} />
            <Typography component="h2" sx={{ fontWeight: 800, mb: 3, fontSize: { xs: "2.3rem", md: "3.2rem" }, lineHeight: 1.06, letterSpacing: "-0.035em", color: C.ink }}>
              Can’t Find What
              <br />
              <Box component="span" sx={{ color: C.brand }}>
                You Need?
              </Box>
            </Typography>
            <Typography sx={{ color: C.muted, fontSize: { xs: "1.05rem", md: "1.15rem" }, lineHeight: 1.75, mb: 4.5, maxWidth: 600 }}>Our engineering team can source and supply almost any instrumentation valve, fitting or manifold. Send us your specification or bill of materials and we’ll respond within 24 hours.</Typography>
            <Stack direction={{ xs: "column", sm: "row" }} spacing={1.5}>
              <Button component={RouterLink} viewTransition to="/enquiry" startIcon={<EmailOutlinedIcon />} endIcon={<ArrowForwardIcon />} sx={{ ...btn.primary, py: 1.6, px: 3.5 }}>
                SUBMIT AN RFQ
              </Button>
              <Button href="tel:+447369243459" startIcon={<PhoneOutlinedIcon />} sx={{ ...btn.secondary, py: 1.6, px: 3.5 }}>
                TALK TO AN ENGINEER
              </Button>
            </Stack>
          </Grid>

          <Grid size={{ xs: 12, md: 6 }}>
            <Box sx={{ p: { xs: 3, md: 4 }, borderRadius: "20px", bgcolor: C.surface, border: `1px solid ${C.border}` }}>
              {contacts.map((c, i) => (
                <Box key={c.label}>
                  {i > 0 && <Divider sx={{ my: 3, borderColor: C.border }} />}
                  <Stack direction="row" spacing={2.5} alignItems="center">
                    <Box sx={{ width: 56, height: 56, flex: "none", borderRadius: "14px", bgcolor: C.white, border: `1px solid ${C.border}`, color: C.brandDark, display: "grid", placeItems: "center", "& svg": { fontSize: 26 } }}>{c.icon}</Box>
                    <Box sx={{ minWidth: 0, overflow: "hidden" }}>
                      <Typography sx={{ color: C.muted, fontSize: "0.88rem", fontWeight: 500, mb: 0.25 }}>{c.label}</Typography>
                      <Typography component="a" href={c.href} sx={{ color: C.brandDark, fontWeight: 600, fontSize: { xs: "1rem", sm: "1.1rem", lg: "1.2rem" }, textDecoration: "none", textTransform: "none", whiteSpace: "nowrap", "&:hover": { color: C.brandDeep, textDecoration: "underline" } }}>
                        {c.value}
                      </Typography>
                    </Box>
                  </Stack>
                </Box>
              ))}
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}

export default ContactBanner
