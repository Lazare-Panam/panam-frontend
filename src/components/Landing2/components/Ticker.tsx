import { Box, Typography, Link as MuiLink } from '@mui/material';
import { keyframes } from '@mui/system';

const BRAND_BLUE = "#01B0F0";
// A slightly lighter, softer tint of your brand blue
const LIGHT_BRAND_BLUE = "#E6F7FF"; 
const scroll = keyframes`
  0% { transform: translateX(0); }
  100% { transform: translateX(-50%); }
`;

const partners = [
  { name: "R & G Group", img: "https://res.cloudinary.com/dm9rmmemx/image/upload/v1769514658/download_pmaswn.jpg", url: "https://www.rgfluidpower.com/" },
  { name: "Rubix", img: "https://res.cloudinary.com/dm9rmmemx/image/upload/v1769516301/download_lwcmhn.png", url: "https://uk.rubix.com/en" },
  { name: "Hydraulic Megastore", img: "https://res.cloudinary.com/dm9rmmemx/image/upload/v1769516390/download_1_ixgkup.jpg", url: "https://www.hydraulicmegastore.com/" },
  { name: "Ram Universal", img: "https://res.cloudinary.com/dm9rmmemx/image/upload/v1769521921/ram-logo_endebu.png", url: "https://www.ramuniversal.co.uk/" },
  { name: "AC Valves", img: "https://res.cloudinary.com/dm9rmmemx/image/upload/v1769521817/eafe29df-39d4-412b-ba55-35534adb2578_b5kiaj.jpg", url: "https://acv-group.com/" },
  { name: "Andro Mach", img: "https://res.cloudinary.com/dm9rmmemx/image/upload/v1769522584/67802ddc81f9ad5db58223d2_logo-svg-shape_jiketc.svg", url: "http://andromach.space/" },
];

const Ticker = () => {
  const duplicatedPartners = [...partners, ...partners];

  return (
    <Box 
      sx={{ 
        width: '100%', 
        overflow: 'hidden', 
        bgcolor: BRAND_BLUE, // Lightest shade of Panam blue
        py: 2.5,
        borderTop: `1px solid ${BRAND_BLUE}`,
        borderBottom: `1px solid ${BRAND_BLUE}`,
        position: 'relative',
        '&::before, &::after': {
          content: '""',
          position: 'absolute',
          top: 0,
          width: 100,
          height: '100%',
          zIndex: 2,
          pointerEvents: 'none',
        },
        '&::before': { left: 0, background: `linear-gradient(to right, ${LIGHT_BRAND_BLUE}, transparent)` },
        '&::after': { right: 0, background: `linear-gradient(to left, ${LIGHT_BRAND_BLUE}, transparent)` },
      }}
    >
      <Box
        sx={{
          display: 'flex',
          width: 'max-content',
          alignItems: 'center',
          animation: `${scroll} 40s linear infinite`,
          '&:hover': { animationPlayState: 'paused' },
        }}
      >
        {duplicatedPartners.map((partner, index) => (
          <Box key={index} sx={{ display: 'flex', alignItems: 'center' }}>
            <MuiLink
              href={partner.url}
              target="_blank"
              rel="noopener noreferrer"
              sx={{
                display: 'flex',
                alignItems: 'center',
                px: 5,
                gap: 2,
                textDecoration: 'none',
                filter: 'grayscale(0%)', 
                transition: 'all 0.3s ease',
                '&:hover': {
                  transform: 'translateY(-2px)',
                  cursor: 'pointer'
                }
              }}
            >
              <Box
                component="img"
                src={partner.img}
                alt={partner.name}
                sx={{
                  height: 32,
                  width: 'auto',
                  objectFit: 'contain',
                }}
              />
              <Typography
                variant="body2"
                sx={{
                  fontWeight: 800,
                  color: "#ffff", // Dark blue for contrast on light blue
                  whiteSpace: 'nowrap',
                  letterSpacing: 0.5,
                  fontSize: '0.7rem',
                  textTransform: 'uppercase'
                }}
              >
                {partner.name}
              </Typography>
            </MuiLink>

            <Typography 
              sx={{ 
                color: BRAND_BLUE, 
                fontSize: '10px',
                userSelect: 'none',
                opacity: 0.5
              }}
            >
              &#9670;
            </Typography>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default Ticker;