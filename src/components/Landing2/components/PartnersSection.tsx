
import { 
  Box, 
  Container, 
  Typography, 
  Button, 
   Grid, 
  Stack, 
  alpha 
} from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const BRAND_BLUE = "#01B0F0";

const PartnersSection = () => {
  const partners = [
    { name: "R & G Group", logo: "https://res.cloudinary.com/dm9rmmemx/image/upload/v1769514658/download_pmaswn.jpg", url: "https://www.rgfluidpower.com/" },
    { name: "Rubix", logo: "https://res.cloudinary.com/dm9rmmemx/image/upload/v1769516301/download_lwcmhn.png", url: "https://uk.rubix.com/en" },
    { name: "Hydraulic Megastore", logo: "https://res.cloudinary.com/dm9rmmemx/image/upload/v1769516390/download_1_ixgkup.jpg", url: "https://www.hydraulicmegastore.com/" },
    { name: "Ram Universal", logo: "https://res.cloudinary.com/dm9rmmemx/image/upload/v1769521921/ram-logo_endebu.png", url: "https://www.ramuniversal.co.uk/" },
    { name: "OMV", logo: "https://res.cloudinary.com/dm9rmmemx/image/upload/v1769522389/49dc2b_94be551593d14559b5895c083a396ec2_mv2_mnpehy.avif", url: "https://www.omv.as/" },
    { name: "AC Valves", logo: "https://res.cloudinary.com/dm9rmmemx/image/upload/v1769521817/eafe29df-39d4-412b-ba55-35534adb2578_b5kiaj.jpg", url: "https://acv-group.com/" },
    { name: "Andro Mach", logo: "https://res.cloudinary.com/dm9rmmemx/image/upload/v1769522584/67802ddc81f9ad5db58223d2_logo-svg-shape_jiketc.svg", url: "https://www.andromach.space/" },
  ];

  return (
    <Box component="section" sx={{ py: 10, bgcolor: '#FFFFFF' }}>
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
              <Typography variant="overline" sx={{ fontWeight: 800, color: BRAND_BLUE, letterSpacing: 1.5 }}>
                Our Partners
              </Typography>
              <Box sx={{ width: 40, height: '2px', bgcolor: BRAND_BLUE }} />
            </Stack>
            <Typography variant="h2" sx={{ 
              fontWeight: 800, 
              color: '#1E293B', 
              fontSize: { xs: '2.5rem', md: '3.2rem' },
              lineHeight: 1.1 
            }}>
              Trusted By<br />
              <Box component="span" sx={{ color: BRAND_BLUE }}>Industry Leaders</Box>
            </Typography>
          </Box>

          <Button 
            variant="outlined" 
            endIcon={<ArrowForwardIcon />}
            sx={{ 
              borderRadius: 0, 
              color: '#1E293B', 
              borderColor: '#E2E8F0',
              fontWeight: 700,
              px: 3, py: 1.2,
              '&:hover': { borderColor: BRAND_BLUE, color: BRAND_BLUE, bgcolor: 'transparent' }
            }}
          >
            View All Partners
          </Button>
        </Stack>

        {/* Partners Grid */}
        <Grid container spacing={0} sx={{ borderTop: '1px solid #F1F5F9', borderLeft: '1px solid #F1F5F9' }}>
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
                height: 160,
                textDecoration: 'none',
                bgcolor: '#FFFFFF',
                borderRight: '1px solid #F1F5F9',
                borderBottom: '1px solid #F1F5F9',
                transition: 'all 0.3s ease',
                filter: 'grayscale(100%)',
                opacity: 0.6,
                '&:hover': { 
                  filter: 'grayscale(0%)', 
                  opacity: 1,
                  bgcolor: alpha(BRAND_BLUE, 0.02),
                  zIndex: 1,
                  boxShadow: '0 0 20px rgba(0,0,0,0.05)'
                }
              }}
            >
              <Box 
                component="img" 
                src={partner.logo} 
                alt={partner.name}
                sx={{ 
                  maxWidth: '80%', 
                  maxHeight: '60px', 
                  objectFit: 'contain',
                  mb: 2 
                }}
              />
              <Typography variant="caption" sx={{ fontWeight: 700, color: '#64748B', textAlign: 'center' }}>
                {partner.name}
              </Typography>
            </Grid>
          ))}
          
          {/* Placeholder for "Join our network" or extra space */}
    
        </Grid>
      </Container>
    </Box>
  );
};

export default PartnersSection;