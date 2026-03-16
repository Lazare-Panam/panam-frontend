import { 
  Box, 
  Container, 
  Typography, 
  Button, 
  Stack, 
  alpha 
} from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';

const BRAND_BLUE = "#01B0F0";

const ContactBanner = () => {
  return (
    <Box 
      component="section" 
      id="contact" 
      sx={{ 
        py: { xs: 8, md: 12 }, 
        bgcolor: '#111827', // Deep industrial navy
        color: '#FFFFFF',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      {/* Subtle geometric background decoration */}
      <Box sx={{
        position: 'absolute',
        top: 0, left: 0,
        width: '100%', height: '100%',
        opacity: 0.05,
        background: `linear-gradient(45deg, ${BRAND_BLUE} 25%, transparent 25%) -50px 0,
                     linear-gradient(-45deg, ${BRAND_BLUE} 25%, transparent 25%) -50px 0,
                     linear-gradient(45deg, transparent 75%, ${BRAND_BLUE} 75%),
                     linear-gradient(-45deg, transparent 75%, ${BRAND_BLUE} 75%)`,
        backgroundSize: '100px 100px',
        zIndex: 1
      }} />

      <Container maxWidth="md" sx={{ position: 'relative', zIndex: 2, textAlign: 'center' }}>
        <Typography 
          variant="h2" 
          sx={{ 
            fontWeight: 800, 
            mb: 3, 
            fontSize: { xs: '2.2rem', md: '3.5rem' },
            lineHeight: 1.1 
          }}
        >
          Can’t Find What<br />
          <Box component="span" sx={{ color: BRAND_BLUE, fontStyle: 'italic' }}>You Need?</Box>
        </Typography>

        <Typography 
          variant="body1" 
          sx={{ 
            color: '#94A3B8', 
            fontSize: '1.1rem', 
            mb: 6, 
            maxWidth: '700px', 
            mx: 'auto',
            lineHeight: 1.7 
          }}
        >
          Our engineering team can source and supply almost any instrumentation valve, fitting or manifold. 
          Send us your specification or bill of materials and we’ll respond within 24 hours.
        </Typography>

        <Stack 
          direction={{ xs: 'column', sm: 'row' }} 
          spacing={2} 
          justifyContent="center"
          alignItems="center"
        >
          <Button 
            variant="contained" 
            size="large"
            href="mailto:marketing@panamvalve.com"
            startIcon={<EmailIcon />}
            sx={{ 
              bgcolor: BRAND_BLUE, 
              fontWeight: 700, 
              borderRadius: 0, // Sharp corners
              px: 4, py: 2,
              minWidth: '240px',
              '&:hover': { bgcolor: alpha(BRAND_BLUE, 0.8) }
            }}
          >
            SUBMIT AN RFQ
          </Button>

          <Button 
            variant="outlined" 
            size="large"
            href="tel:+447369243459"
            startIcon={<PhoneIcon />}
            sx={{ 
              color: '#FFFFFF', 
              borderColor: '#FFFFFF', 
              fontWeight: 700, 
              borderRadius: 0, // Sharp corners
              px: 4, py: 2,
              minWidth: '240px',
              '&:hover': { 
                borderColor: BRAND_BLUE, 
                color: BRAND_BLUE,
                bgcolor: alpha(BRAND_BLUE, 0.05) 
              }
            }}
          >
            TALK TO AN ENGINEER
          </Button>
        </Stack>
      </Container>
    </Box>
  );
};

export default ContactBanner;