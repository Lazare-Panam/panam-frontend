import React from "react";
import { Box, Typography, Stack, Link } from "@mui/material";
import { useNavigate } from "react-router-dom";

const BRAND_BLUE = "#01B0F0";
const PRIMARY_FONT = '"Inter", "Roboto", "Helvetica", Arial, sans-serif';

const MovingBanner: React.FC = () => {
  const navigate = useNavigate();

  const tickerText = "UK STOCK AVAILABLE • READY FOR IMMEDIATE SHIPMENT • REDUCED LEAD TIMES • GLOBAL DISPATCH • ";

  return (
    <Box
      sx={{
        width: "100%",
        background: "#F8FAFC",
        borderBottom: `1px solid rgba(0,0,0,0.1)`,
        // Increased padding for a larger overall footprint
        py: 2.5, 
        overflow: "hidden",
        position: "relative",
        display: "flex",
        alignItems: "center",
        fontFamily: PRIMARY_FONT,
      }}
    >
      {/* "Announcement" Label - Scaled up */}
      <Box
        sx={{
          position: "absolute",
          left: 0,
          zIndex: 10,
          background: "#F8FAFC",
          pl: { xs: 2, md: 5 },
          pr: 3,
          display: "flex",
          alignItems: "center",
          gap: 2,
          // Stronger shadow to ensure it stays readable over the moving text
          boxShadow: "25px 0 30px #F8FAFC", 
        }}
      >
        <Typography
          sx={{
            fontWeight: 900,
            fontSize: "0.85rem", // Bigger font
            fontFamily: PRIMARY_FONT,
            color: "#64748B",
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            position: "relative",
            // Added a small underline to the label for extra "pop"
            "&::after": {
              content: '""',
              position: "absolute",
              bottom: -4,
              left: 0,
              width: "40%",
              height: "2px",
              backgroundColor: BRAND_BLUE,
            }
          }}
        >
          Announcement
        </Typography>
      </Box>

      {/* The Scrolling Track */}
      <Box
        sx={{
          display: "flex",
          whiteSpace: "nowrap",
          width: "max-content",
          animation: "scroll 100s linear infinite", // Slightly slower to match the larger scale
          "&:hover": { animationPlayState: "paused" },
        }}
      >
        {[...Array(8)].map((_, i) => (
          <Stack key={i} direction="row" alignItems="center">
            <Typography
              sx={{
                fontSize: "1.1rem", // Significantly bigger font size
                fontWeight: 600,
                fontFamily: PRIMARY_FONT,
                color: "#1E293B",
                mx: 4, // More spacing between segments
                letterSpacing: "0.03em",
              }}
            >
              {tickerText}
            </Typography>
            <Link
              onClick={() => navigate("/enquiry")}
              sx={{
                fontSize: "1.1rem", // Matching the ticker size
                fontWeight: 800,
                fontFamily: PRIMARY_FONT,
                color: BRAND_BLUE,
                cursor: "pointer",
                textDecoration: "none",
                mr: 8, // Larger gap before the next loop
                transition: "all 0.3s ease",
                borderBottom: "2px solid transparent",
                "&:hover": { 
                    color: "#0086B8",
                    borderBottom: `2px solid ${BRAND_BLUE}` 
                },
              }}
            >
              CONTACT SALES →
            </Link>
          </Stack>
        ))}
      </Box>

      <style>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </Box>
  );
};

export default MovingBanner;