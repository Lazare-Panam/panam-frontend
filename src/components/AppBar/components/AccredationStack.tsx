import { Stack, Box, Typography, Link } from "@mui/material";


const ACCREDITATIONS = [
  { 
    name: "Logo with a grey swirling abstract symbol on the left and bold blue letters ‘BFPA’ on the right. Beneath the letters, smaller grey text reads ‘Representing Hydraulic & Pneumatic Industries.", 
    url: "https://cdn.jsdelivr.net/gh/Lazare-Panam/panam-images@main/certificates/bfpa-logo.jpg", 
    height: 55,
    website: "https://bfpa.co.uk/" ,
    priority: true
  },
  // { 
  //   name: "Abstract geometric design made of paired circular shapes arranged in a spiralling pattern, transitioning from green on the left to blue on the right.", 
  //   url: "https://cdn.jsdelivr.net/gh/Lazare-Panam/panam-images@main/certificates/HEA_SumbolAsset-13%20(1).png", 
  //   height: 60,
  //   website: "https://ukhea.co.uk/" ,
  //   priority: true
  // },
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
              loading={logo.priority ? "eager" : "lazy"}
              fetchPriority={logo.priority ? "high" : "auto"}
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