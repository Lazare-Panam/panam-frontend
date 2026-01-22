import React from "react"
import { Box, Container, Typography, Link, Stack, Divider } from "@mui/material"
import Grid from "@mui/material/Grid"
// Import MUI Icons that match the reference
import SettingsSuggestIcon from "@mui/icons-material/SettingsSuggest"
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined"
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined"

const BRAND_BLUE = "#01B0F0" // Standard corporate blue
const ACCENT_GREEN = "#76bc21" // The green from your reference image

const GetConnected: React.FC = () => {
  const connectionItems = [
    {
      icon: <SettingsSuggestIcon sx={{ fontSize: 40, color: "#999" }} />,
      title: "Need Specialized Assistance?",
      text: "Find your ",
      linkText: "sales and service center.",
      link: "/locations",
    },
    {
      icon: <ShoppingCartOutlinedIcon sx={{ fontSize: 40, color: "#999" }} />,
      title: "Looking for Pricing or a Quote?",
      text: "Log in or ",
      linkText: "register now.",
      link: "/register",
    },
    {
      icon: <InfoOutlinedIcon sx={{ fontSize: 40, color: "#999" }} />,
      title: "Need More Information?",
      text: "Contact us ",
      linkText: "for answers.",
      link: "/contact",
    },
  ]

  return (
    <Box sx={{ width: "100%", py: 8, backgroundColor: "#fff" }}>
      <Divider sx={{ mb: 8, borderColor: "rgba(0,0,0,0.1)", borderWidth: 1 }} />
      <Container maxWidth="lg">
        <Typography
          variant="h4"
          sx={{
            fontWeight: 800,
            mb: 6,
            color: "#1A1A1A",
            fontFamily: '"Inter", sans-serif',
          }}>
          Get Connected
        </Typography>

        <Grid container spacing={4}>
          {connectionItems.map((item, index) => (
            <Grid key={index} size={{ xs: 12, md: 4 }}>
              <Stack spacing={2} alignItems={{ xs: "center", md: "flex-start" }}>
                <Box
                  sx={{
                    width: 100,
                    height: 100,
                    borderRadius: "50%",
                    border: "1px solid #e0e0e0",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    boxShadow: "inset 0px 2px 5px rgba(0,0,0,0.05)",
                    mb: 2,
                  }}>
                  {item.icon}
                </Box>

                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: 700,
                    color: BRAND_BLUE,
                    fontSize: "1.1rem",
                  }}>
                  {item.title}
                </Typography>

                <Typography variant="body2" sx={{ color: "#666", fontSize: "0.95rem" }}>
                  {item.text}
                  <Link
                    href={item.link}
                    sx={{
                      color: ACCENT_GREEN,
                      fontWeight: 700,
                      textDecoration: "none",
                      "&:hover": { textDecoration: "underline" },
                    }}>
                    {item.linkText}
                  </Link>
                </Typography>
              </Stack>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  )
}

export default GetConnected
