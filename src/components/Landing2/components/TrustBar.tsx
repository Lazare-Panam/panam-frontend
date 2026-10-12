import { Box, Container, Grid, Stack, Typography } from "@mui/material"
import LocalShippingIcon from "@mui/icons-material/LocalShipping"
import VerifiedIcon from "@mui/icons-material/Verified"
import PublicIcon from "@mui/icons-material/Public"
import SupportAgentIcon from "@mui/icons-material/SupportAgent"
import { Countup } from "./Countup"

const BRAND_BLUE = "#01B0F0"

const items = [
  { icon: <LocalShippingIcon />, label: "Global Dispatch" },
  { icon: <VerifiedIcon />, label: "ISO 9001:2015 Certified" },
  { icon: <PublicIcon />, countTarget: "52+", labelSuffix: " Countries Served" },
  { icon: <SupportAgentIcon />, countTarget: "24", labelSuffix: "h Technical Response" },
]

const TrustBar = () => {
  return (
    <Box sx={{ bgcolor: "#FFFFFF", borderBottom: "1px solid #F1F5F9", py: { xs: 3, md: 3.5 } }}>
      <Container maxWidth="lg">
        <Grid container spacing={{ xs: 2, md: 3 }}>
          {items.map((item, i) => (
            <Grid key={i} size={{ xs: 6, md: 3 }}>
              <Stack
                direction="row"
                spacing={1.5}
                alignItems="center"
                justifyContent={{ xs: "flex-start", md: "center" }}
                sx={{
                  "&:hover .trust-icon": { transform: "scale(1.15)", color: "#0090C8" },
                }}>
                <Box
                  className="trust-icon"
                  sx={{ color: BRAND_BLUE, display: "flex", transition: "transform 0.25s ease, color 0.25s ease" }}>
                  {item.icon}
                </Box>
                <Typography sx={{ fontWeight: 700, fontSize: { xs: "0.78rem", md: "0.88rem" }, color: "#1E293B" }}>
                  {item.countTarget ? (
                    <>
                      <Countup target={item.countTarget} />
                      {item.labelSuffix}
                    </>
                  ) : (
                    item.label
                  )}
                </Typography>
              </Stack>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  )
}

export default TrustBar
