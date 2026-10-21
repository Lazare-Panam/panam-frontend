import { Box, Container, Grid, Stack, Typography } from "@mui/material"
import LocalShippingOutlinedIcon from "@mui/icons-material/LocalShippingOutlined"
import VerifiedOutlinedIcon from "@mui/icons-material/VerifiedOutlined"
import PublicOutlinedIcon from "@mui/icons-material/PublicOutlined"
import SupportAgentOutlinedIcon from "@mui/icons-material/SupportAgentOutlined"
import { Countup } from "./Countup"
import { C } from "../homeTokens"

const items = [
  { icon: <LocalShippingOutlinedIcon />, label: "Global Dispatch" },
  { icon: <VerifiedOutlinedIcon />, label: "ISO 9001:2015 Certified" },
  { icon: <PublicOutlinedIcon />, countTarget: "52+", labelSuffix: " Countries Served" },
  { icon: <SupportAgentOutlinedIcon />, countTarget: "24", labelSuffix: "h Technical Response" },
]

// Clean feature row: gradient icon discs separated by hairline dividers (no boxed tiles).
const TrustBar = () => {
  return (
    <Box sx={{ bgcolor: C.white, py: { xs: 4, md: 5 } }}>
      <Container maxWidth="lg">
        <Grid container rowSpacing={3}>
          {items.map((item, i) => (
            <Grid
              key={i}
              size={{ xs: 6, md: 3 }}
              sx={{
                display: "flex",
                justifyContent: "center",
                borderLeft: { md: i > 0 ? `1px solid ${C.border}` : "none" },
              }}>
              <Stack
                direction={{ xs: "column", sm: "row" }}
                spacing={1.5}
                alignItems="center"
                sx={{ textAlign: { xs: "center", sm: "left" }, px: 1.5, "&:hover .trust-icon": { transform: "translateY(-3px)", boxShadow: "0 10px 22px rgba(1,176,240,0.35)" } }}>
                <Box
                  className="trust-icon"
                  sx={{
                    width: 46,
                    height: 46,
                    flex: "none",
                    borderRadius: "50%",
                    background: `linear-gradient(135deg, ${C.brand}, ${C.brandDeep})`,
                    color: C.white,
                    display: "grid",
                    placeItems: "center",
                    boxShadow: "0 6px 16px rgba(1,176,240,0.25)",
                    transition: "transform 0.25s ease, box-shadow 0.25s ease",
                    "& svg": { fontSize: 22 },
                  }}>
                  {item.icon}
                </Box>
                <Typography sx={{ fontWeight: 600, fontSize: { xs: "0.85rem", md: "0.98rem" }, color: C.ink, lineHeight: 1.3 }}>
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
