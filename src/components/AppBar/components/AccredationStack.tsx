import { Stack, Box } from "@mui/material";

const ACCREDITATIONS = [
  { name: "BFPA", url: "https://res.cloudinary.com/dm9rmmemx/image/upload/v1773743216/BFPA_300-removebg-preview_ee8kgx.png", height: 85 },
  { name: "HEA", url: "https://res.cloudinary.com/dm9rmmemx/image/upload/v1773743101/HEA_SumbolAsset-13_etp9iy.svg", height: 40 },
];

const AccreditationStack = () => {
  return (
    <Stack 
      direction="row" 
      spacing={3} 
      alignItems="center" 
      sx={{ 
        display: { xs: "none", lg: "flex" }, // Hide on smaller desktop screens to save space
        mr: 3, 
        borderRight: "1px solid #E0E0E0", 
        pr: 3 
      }}
    >
      {ACCREDITATIONS.map((logo) => (
        <Box
          key={logo.name}
          component="img"
          src={logo.url}
          alt={logo.name}
          sx={{
            height: logo.height,
            width: "auto",
           
         
            transition: "0.3s",
            "&:hover": {
              filter: "grayscale(0%)",
              opacity: 1,
              transform: "scale(1.1)"
            },
          }}
        />
      ))}
    </Stack>
  );
};

export default AccreditationStack;