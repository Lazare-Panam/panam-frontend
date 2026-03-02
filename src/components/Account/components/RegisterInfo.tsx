import React from "react"
import { Box, Typography, List, ListItem, ListItemIcon, ListItemText, Button } from "@mui/material"
import CircleIcon from "@mui/icons-material/Circle"
import ChevronRightIcon from "@mui/icons-material/ChevronRight"
import { useNavigate } from "react-router-dom"
const PRIMARY_FONT = '"Inter", "Roboto", "Helvetica", Arial, sans-serif'
const TEXT_SECONDARY = "#555555"
const BRAND_BLUE = "#01B0F0"
const BRAND_BLUE_LIGHT = "#E6F7FE"
const BRAND_BLUE_DARK = "#0088BA"

const RegisterInfo: React.FC = () => {
  const navigate = useNavigate();
  const benefits = [
    "Expedited procurement and order tracking",
    "Customizable engineering specifications",
    "Full access to technical data sheets and CAD files",
    "Direct connection to our global network of experts",
    "Historical quote and project management tools",
  ]

  return (
    <Box sx={{ flex: 1.2 }}>
      <Typography
        variant="h3"
        sx={{
          fontFamily: PRIMARY_FONT,
          color: BRAND_BLUE,
          fontWeight: 800,
          mb: 2,
          fontSize: { xs: "2.2rem", md: "3rem" },
        }}
      >
        New Customer
      </Typography>
      <Typography variant="body1" sx={{ fontFamily: PRIMARY_FONT, color: TEXT_SECONDARY, fontSize: "1.1rem", mb: 4 }}>
        Join the Panam Valves ecosystem for engineering excellence:
      </Typography>

      <List sx={{ mb: 4 }}>
        {benefits.map((text, index) => (
          <ListItem key={index} sx={{ alignItems: "flex-start", px: 0, py: 1 }}>
            <ListItemIcon sx={{ minWidth: "28px", mt: 1 }}>
              <CircleIcon sx={{ fontSize: 6, color: BRAND_BLUE }} />
            </ListItemIcon>
            <ListItemText
              primary={text}
              primaryTypographyProps={{
                fontFamily: PRIMARY_FONT,
                color: TEXT_SECONDARY,
                fontSize: "1.05rem",
                lineHeight: 1.5,
              }}
            />
          </ListItem>
        ))}
      </List>

      <Box sx={{ p: 3, backgroundColor: BRAND_BLUE_LIGHT, borderLeft: `4px solid ${BRAND_BLUE}`, mb: 5 }}>
        <Typography variant="body2" sx={{ fontFamily: PRIMARY_FONT, color: BRAND_BLUE_DARK, fontWeight: 600 }}>
          Official Business Email Required
        </Typography>
        <Typography variant="body2" sx={{ fontFamily: PRIMARY_FONT, color: TEXT_SECONDARY, mt: 0.5, fontStyle: "italic" }}>
          For security and verification, generic email providers are not accepted for corporate accounts.
        </Typography>
      </Box>

      <Button
        variant="contained"
        endIcon={<ChevronRightIcon />}
        onClick={()=>navigate("/register")}
        sx={{
          backgroundColor: BRAND_BLUE,
          "&:hover": { backgroundColor: BRAND_BLUE_DARK },
          py: 2,
          px: 6,
          fontWeight: 700,
          borderRadius: 0,
          fontFamily: PRIMARY_FONT,
          width: { xs: "100%", sm: "fit-content" },
          boxShadow: "none",
           
        }}
      >
        CREATE ACCOUNT
      </Button>
    </Box>
  )
}

export default RegisterInfo