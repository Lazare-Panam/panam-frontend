import { Box, Typography, Link as MuiLink } from '@mui/material';
import { keyframes } from '@mui/system';

const BRAND_BLUE = "#01B0F0";

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
        bgcolor: '#FFFFFF', 
        py: 4,
        borderTop: '1px solid #E2E8F0',
        borderBottom: '1px solid #E2E8F0',
        position: 'relative',
        '&::before, &::after': {
          content: '""',
          position: 'absolute',
          top: 0,
          width: 120,
          height: '100%',
          zIndex: 2,
          pointerEvents: 'none',
        },
        '&::before': { left: 0, background: 'linear-gradient(to right, white, transparent)' },
        '&::after': { right: 0, background: 'linear-gradient(to left, white, transparent)' },
      }}
    >
      <Box
        sx={{
          display: 'flex',
          width: 'max-content',
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
                px: 6,
                gap: 2,
                textDecoration: 'none',
                filter: 'grayscale(100%)',
                opacity: 0.6,
                transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                '&:hover': {
                  filter: 'grayscale(0%)',
                  opacity: 1,
                  transform: 'scale(1.05)',
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
                  fontWeight: 700,
                  color: '#475569',
                  whiteSpace: 'nowrap',
                  letterSpacing: 0.5,
                }}
              >
                {partner.name}
              </Typography>
            </MuiLink>

            {/* Separator sits outside the link to keep the hit-box clean */}
            <Typography 
              sx={{ 
                color: BRAND_BLUE, 
                fontSize: '10px',
                userSelect: 'none'
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