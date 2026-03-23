import { Stack, Box, Typography, Link } from "@mui/material";

const ACCREDITATIONS = [
  { 
    name: "BFPA", 
    url: "https://res.cloudinary.com/dm9rmmemx/image/upload/v1773743216/BFPA_300-removebg-preview_ee8kgx.png", 
    height: 125,
    website: "https://res.cloudinary.com/dm9rmmemx/image/upload/v1774287523/BFPA_Panam_Valves_2026_wijobb.jpg" 
  },
  { 
    name: "HEA", 
    url: "https://res.cloudinary.com/dm9rmmemx/image/upload/v1773743101/HEA_SumbolAsset-13_etp9iy.svg", 
    height: 60,
    website: "https://ukhea.co.uk/" 
  },
];

const AccreditationStack = () => {
  return (
    <Stack 
      direction="row" 
      spacing={3} 
      alignItems="center" 
      sx={{ 
        display: { xs: "none", lg: "flex" }, 
        mr: 3, 
        pr: 3 
      }}
    >
      {ACCREDITATIONS.map((logo) => (
        <Link 
          key={logo.name} 
          href={logo.website} 
          target="_blank" 
          rel="noopener noreferrer"
          sx={{ 
            textDecoration: "none", 
            display: "flex", 
            alignItems: "center" 
          }}
        >
          <Stack direction="row" alignItems="center" spacing={1.5}>
            <Box
              component="img"
              src={logo.url}
              alt={logo.name}
              sx={{
                height: logo.height,
                width: "auto",
                transition: "0.3s",
                "&:hover": {
                  transform: "scale(1.1)"
                },
              }}
            />
            {/* Conditional text for HEA */}
            {logo.name === "HEA" && (
              <Typography 
                variant="caption" 
                sx={{ 
                  fontWeight: 700, 
                  color: "#1A1A1A", 
                  lineHeight: 1.2, 
                  maxWidth: "80px", 
                  textTransform: "uppercase",
                  fontSize: "0.90rem",
                  letterSpacing: "0.05em",
                  "&:hover": { color: "primary.main" } // Optional hover effect for text
                }}
              >
                Hydrogen Energy Association
              </Typography>
            )}
          </Stack>
        </Link>
      ))}
    </Stack>
  );
};

export default AccreditationStack;