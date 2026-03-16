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
import { useNavigate } from 'react-router-dom';

const BRAND_BLUE = "#01B0F0";

const ContactBanner = () => {
  const navigate = useNavigate();
  return (
    <Box 
      component="section" 
      id="contact" 
      sx={{ 
        py: { xs: 8, md: 12 }, 
        bgcolor: '#FFFFFF', // Clean white background
        color: '#1E293B', // Dark slate for text
        position: 'relative',
        overflow: 'hidden',
        borderTop: '1px solid #F1F5F9' // Optional subtle separator
      }}
    >
      {/* Subtle geometric background decoration - adjusted for light bg */}
      <Box sx={{
        position: 'absolute',
        top: 0, left: 0,
        width: '100%', height: '100%',
        opacity: 0.03, // Lowered opacity for light theme
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
            lineHeight: 1.1,
            color: '#0F172A' // Nearly black for heading
          }}
        >
          Can’t Find What<br />
          <Box component="span" sx={{ color: BRAND_BLUE, fontStyle: 'italic' }}>You Need?</Box>
        </Typography>

        <Typography 
          variant="body1" 
          sx={{ 
            color: '#64748B', // Slate gray for body
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
            onClick={() => navigate("/enquiry")}
            startIcon={<EmailIcon />}
            sx={{ 
              bgcolor: BRAND_BLUE, 
              color: '#FFFFFF',
              fontWeight: 700, 
              borderRadius: 0, 
              px: 4, py: 2,
              minWidth: '240px',
              '&:hover': { bgcolor: alpha(BRAND_BLUE, 0.9) }
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
              color: '#1E293B', 
              borderColor: '#1E293B', 
              fontWeight: 700, 
              borderRadius: 0, 
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