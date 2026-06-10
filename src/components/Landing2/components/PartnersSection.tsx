import { 
  Box, 
  Container, 
  Typography, 
   Grid, 
  Stack, 
  alpha 
} from '@mui/material';

const BRAND_BLUE = "#01B0F0";

const PartnersSection = () => {
  
const partners = [
  { name: "R & G Group", logo: "https://pblol2.blob.core.windows.net/panam-images/brands/logo.png", url: "https://www.rgfluidpower.com/" },
  // { name: "Rubix", img: "https://res.cloudinary.com/dm9rmmemx/image/upload/v1769516301/download_lwcmhn.png", url: "https://uk.rubix.com/en" },
  { name: "Hydraulic Megastore", logo: "https://pblol2.blob.core.windows.net/panam-images/brands/hydraulic-logo-white-320x79.webp", url: "https://www.hydraulicmegastore.com/" },
  { name: "Ram Universal", logo: "https://pblol2.blob.core.windows.net/panam-images/brands/ram-logo.png", url: "https://www.ramuniversal.co.uk/" },
  { name: "AC Valves", logo: "https://pblol2.blob.core.windows.net/panam-images/brands/download.jpg", url: "https://acv-group.com/" },
  { name: "Andro Mach", logo: "https://pblol2.blob.core.windows.net/panam-images/brands/download.png", url: "http://andromach.space/" },
  { name: "UK Atomic Energy Authority", logo: "https://pblol2.blob.core.windows.net/panam-images/brands/ukaea-logo.png", url: "https://www.ukaea.org/" },
];

  return (
    <Box component="section" sx={{ py: 12, bgcolor: BRAND_BLUE, color: '#FFFFFF' }}>
      <Container maxWidth="lg">
        {/* Header Area */}
        <Stack 
          direction={{ xs: 'column', md: 'row' }} 
          justifyContent="space-between" 
          alignItems={{ xs: 'flex-start', md: 'flex-end' }} 
          spacing={3}
          sx={{ mb: 8 }}
        >
          <Box>
            <Stack direction="row" spacing={2} alignItems="center" sx={{ mb: 2 }}>
              <Typography variant="overline" sx={{ fontWeight: 800, color: '#FFFFFF', letterSpacing: 1.5 }}>
                Our Partners
              </Typography>
              <Box sx={{ width: 40, height: '2px', bgcolor: '#FFFFFF' }} />
            </Stack>
            <Typography variant="h2" sx={{ 
              fontWeight: 800, 
              color: '#FFFFFF', 
              fontSize: { xs: '2.5rem', md: '3.2rem' },
              lineHeight: 1.1 
            }}>
              Trusted By<br />
              <Box component="span" sx={{ color: alpha('#FFFFFF', 0.7) }}>Industry Leaders</Box>
            </Typography>
          </Box>
        </Stack>

        {/* Partners Grid */}
        <Grid container spacing={0} sx={{ borderTop: '1px solid #E2E8F0', borderLeft: '1px solid #E2E8F0' }}>
          {partners.map((partner, i) => (
            <Grid 
              size={{ xs: 6, sm: 4, md: 3 }} 
              key={i}
              component="a"
              href={partner.url}
              target="_blank"
              rel="noopener noreferrer"
              sx={{ 
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                p: 4,
                height: 180,
                textDecoration: 'none',
                bgcolor: '#FFFFFF', // Set to solid white as default
                borderRight: '1px solid #E2E8F0',
                borderBottom: '1px solid #E2E8F0',
                transition: 'all 0.3s ease',
                '&:hover': { 
                  bgcolor: '#F8FAFC', // Very light grey on hover
                  zIndex: 1,
                  transform: 'translateY(-4px)', // Added a "lift" instead of a color flip
                  boxShadow: '0 10px 30px rgba(0,0,0,0.1)'
                }
              }}
            >
              <Box 
                sx={{ 
                  width: '100%',
                  height: '70px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  mb: 2
                }}
              >
                <Box 
                  component="img" 
                  src={partner.logo} 
                  alt={partner.name}
                  sx={{ 
                    maxWidth: '100%', 
                    maxHeight: '100%', 
                    objectFit: 'contain'
                  }}
                />
              </Box>
              <Typography 
                variant="caption" 
                sx={{ 
                  fontWeight: 800, 
                  color: BRAND_BLUE, // Defaulted text to blue
                  textAlign: 'center',
                  textTransform: 'uppercase',
                  letterSpacing: 0.5
                }}
              >
                {partner.name}
              </Typography>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default PartnersSection;