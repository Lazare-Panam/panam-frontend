"use client"

import React, { useState } from "react"
import { Box, Container, Typography, Grid, Stack, Tabs, Tab, ThemeProvider, createTheme } from "@mui/material"
import LocalShippingIcon from "@mui/icons-material/LocalShipping"
import PublicIcon from "@mui/icons-material/Public"
import PaymentsIcon from "@mui/icons-material/Payments"
import TrackChangesIcon from "@mui/icons-material/TrackChanges"
import AssignmentReturnIcon from "@mui/icons-material/AssignmentReturn"
import EventBusyIcon from "@mui/icons-material/EventBusy"
import BlockIcon from "@mui/icons-material/Block"
import BuildCircleIcon from "@mui/icons-material/BuildCircle"
import { alpha } from "@mui/material/styles"

const BRAND_BLUE = "#01B0F0"
const PRIMARY_FONT = '"Inter", "Roboto", "Helvetica", Arial, sans-serif'

const theme = createTheme({
  palette: {
    primary: { main: BRAND_BLUE },
    background: { default: "#F7F9FA" },
  },
  typography: {
    fontFamily: PRIMARY_FONT,
  },
})

const deliveryPoints = [
  {
    icon: <LocalShippingIcon />,
    title: "Standard Delivery",
    text: "Orders dispatch within 1–2 working days and typically arrive in 2–4 working days via courier.",
  },
  {
    icon: <PublicIcon />,
    title: "International Shipping",
    text: "International lead times vary by destination and customs clearance — we'll confirm an estimated arrival at checkout or order confirmation.",
  },
  {
    icon: <PaymentsIcon />,
    title: "Delivery Costs",
    text: "Free delivery on orders over £50. Smaller orders incur a flat courier charge, calculated at checkout.",
  },
  {
    icon: <TrackChangesIcon />,
    title: "Order Tracking",
    text: "A tracking link is emailed as soon as your order leaves our warehouse.",
  },
]

const returnPoints = [
  {
    icon: <EventBusyIcon />,
    title: "30-Day Return Window",
    text: "Items may be returned within 30 days of delivery for a refund or exchange, provided they're unused and in original packaging.",
  },
  {
    icon: <BlockIcon />,
    title: "Non-Returnable Items",
    text: "Perishable, personalised, or made-to-order items are excluded from returns unless faulty or damaged.",
  },
  {
    icon: <BuildCircleIcon />,
    title: "Faulty or Damaged Goods",
    text: "Report faulty or damaged items within 48 hours of delivery. We'll arrange a replacement or full refund at no cost to you.",
  },
  {
    icon: <AssignmentReturnIcon />,
    title: "How to Start a Return",
    text: "Email us with your order number and reason for return. We'll issue return instructions within 1 working day.",
  },
]

const InfoCard = ({ icon, title, text }: { icon: React.ReactNode; title: string; text: string }) => (
  <Grid size={{ xs: 12, sm: 6 }}>
    <Stack
      spacing={2}
      sx={{
        height: "100%",
        p: 4,
        bgcolor: "#fff",
        border: "1px solid",
        borderColor: "divider",
        transition: "all 0.3s ease",
        "&:hover": {
          borderColor: "primary.main",
          boxShadow: theme => `0 15px 30px ${alpha(theme.palette.primary.main, 0.16)}`,
        },
      }}>
      <Box sx={{ color: "primary.main", display: "flex" }}>{icon}</Box>
      <Typography variant="subtitle1" sx={{ fontWeight: 800, color: "text.primary" }}>
        {title}
      </Typography>
      <Typography variant="body2" sx={{ color: "text.secondary", lineHeight: 1.7 }}>
        {text}
      </Typography>
    </Stack>
  </Grid>
)

const DeliveryReturnsPage = () => {
  const [tab, setTab] = useState(0)

  return (
    <ThemeProvider theme={theme}>
      <Box component="section" sx={{ bgcolor: "background.default" }}>
        {/* Header */}
        <Box
          sx={{
            bgcolor: "#fff",
            borderBottom: "1px solid",
            borderColor: "divider",
            py: 8,
          }}>
          <Container maxWidth="lg">
            <Stack direction="row" spacing={2} sx={{ alignItems: "center", mb: 2 }}>
              <Typography
                variant="overline"
                sx={{
                  fontWeight: 800,
                  color: "primary.main",
                  letterSpacing: 1.5,
                }}>
                Customer Service
              </Typography>
              <Box sx={{ width: 40, height: "1px", bgcolor: "primary.main" }} />
            </Stack>
            <Typography variant="h2" sx={{ fontWeight: 800, fontSize: { xs: "2.25rem", md: "3rem" } }}>
              Delivery{" "}
              <Box component="span" sx={{ color: "primary.main" }}>
                & Returns
              </Box>
            </Typography>
            <Typography variant="body1" sx={{ color: "text.secondary", maxWidth: 640, mt: 2 }}>
              Everything you need to know about how we ship your order, and how to return or exchange it if it's not right.
            </Typography>
          </Container>
        </Box>

        {/* Tabs */}
        <Box sx={{ bgcolor: "#fff", borderBottom: 1, borderColor: "divider" }}>
          <Container maxWidth="lg">
            <Tabs
              value={tab}
              onChange={(_e, v) => setTab(v)}
              sx={{
                "& .MuiTabs-indicator": {
                  bgcolor: "primary.main",
                  height: 3,
                  borderRadius: 0,
                },
                "& .MuiTab-root": {
                  fontWeight: 700,
                  textTransform: "none",
                  fontSize: "1rem",
                  color: "text.secondary",
                  "&.Mui-selected": { color: "text.primary" },
                },
              }}>
              <Tab label="Delivery Information" />
              <Tab label="Returns Policy" />
            </Tabs>
          </Container>
        </Box>

        <Container maxWidth="lg" sx={{ py: 10 }}>
          {tab === 0 && (
            <Stack spacing={6}>
              <Box sx={{ maxWidth: 700 }}>
                <Typography variant="h4" sx={{ fontWeight: 800, mb: 2 }}>
                  Delivery Information
                </Typography>
                <Typography variant="body1" sx={{ color: "text.secondary", lineHeight: 1.7 }}>
                  All orders are dispatched directly from our warehouse. Lead times below apply to standard stock items.
                </Typography>
              </Box>
              <Grid container spacing={3}>
                {deliveryPoints.map((p, i) => (
                  <InfoCard key={i} {...p} />
                ))}
              </Grid>
            </Stack>
          )}

          {tab === 1 && (
            <Stack spacing={6}>
              <Box sx={{ maxWidth: 700 }}>
                <Typography variant="h4" sx={{ fontWeight: 800, mb: 2 }}>
                  Returns Policy
                </Typography>
                <Typography variant="body1" sx={{ color: "text.secondary", lineHeight: 1.7 }}>
                  We want you to be happy with your order. If something isn't right, here's how returns work.
                </Typography>
              </Box>
              <Grid container spacing={3}>
                {returnPoints.map((p, i) => (
                  <InfoCard key={i} {...p} />
                ))}
              </Grid>
            </Stack>
          )}
        </Container>
      </Box>
    </ThemeProvider>
  )
}

export default DeliveryReturnsPage
