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
import { useNavigate } from 'react-router-dom';

const BRAND_BLUE = "#01B0F0";
const PRIMARY_FONT = '"Inter", "Roboto", "Helvetica", Arial, sans-serif';

const Hero2 = () => {
  const navigate = useNavigate();
  return (
    <Box 
      component="section" 
      sx={{ 
        position: 'relative', 
        minHeight: '100vh', 
        bgcolor: '#F8FAFC', // Light grey/white background
        color: '#0F172A',   // Dark slate text
        fontFamily: PRIMARY_FONT,
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'center'
      }}
    >
      {/* Background Image - Lighter Finish */}
      <Box 
        sx={{
          position: 'absolute',
          inset: 0,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: 0.15,
          zIndex: 0
        }}
      />
      
      {/* Soft White Gradient Overlay */}
      <Box 
        sx={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(135deg, #F8FAFC 30%, rgba(248, 250, 252, 0.6) 100%)',
          zIndex: 1
        }}
      />

      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 2, py: 10 }}>
        <Grid container spacing={8} alignItems="center">
          
          {/* Left Content */}
          <Grid size={{ xs: 12, md: 7 }}>
            <Stack spacing={4}>
              <Stack direction="row" spacing={1.5} alignItems="center">
                <Box sx={{ width: 10, height: 10, borderRadius: '2px', bgcolor: BRAND_BLUE }} />
                <Typography variant="overline" sx={{ letterSpacing: 2, fontWeight: 700, color: 'text.secondary' }}>
                  Precision Instrumentation 
                </Typography>
              </Stack>

              <Typography variant="h1" sx={{ 
                fontSize: { xs: '2.5rem', md: '4.5rem' }, 
                fontWeight: 800, 
                lineHeight: 1.1,
                color: '#1E293B',
                '& em': { fontStyle: 'normal', color: BRAND_BLUE }
              }}>
                Engineered<br />for <em>Critical</em><br />Infrastructure.
              </Typography>

              <Typography variant="body1" sx={{ fontSize: '1.15rem', color: '#64748B', maxWidth: 520, lineHeight: 1.6 }}>
                Every day, industry leaders trust our precision-engineered <strong>hydrogen solutions</strong> and valves to control high-pressure systems in the world's most demanding environments.
              </Typography>

              <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2.5}>
                <Button 
                  variant="contained" 
                  size="large"
                  endIcon={<ArrowForwardIcon />}
                 
                  onClick={() => navigate("/products")} 
                  sx={{ 
                    bgcolor: BRAND_BLUE, 
                    color: '#fff', 
                    fontWeight: 800, // Slightly heavier for industrial feel
                    px: 5, 
                    py: 2,
                    borderRadius: 0, // Keeps the sharp edge you like
                    textTransform: 'none', // Prevents all-caps if your theme defaults to it
                    fontSize: '1rem',
                    boxShadow: `0 8px 16px ${alpha(BRAND_BLUE, 0.25)}`,
                    transition: 'all 0.2s ease-in-out',
                    '&:hover': { 
                      bgcolor: '#0090C4', 
                      boxShadow: `0 12px 25px ${alpha(BRAND_BLUE, 0.4)}`,
                      transform: 'translateY(-2px)' // Adds a professional "lift" on hover
                    },
                    '&:active': {
                      transform: 'translateY(0)' // Sinks back down when clicked
                    }
                  }}
                >
                  Explore Products
                </Button>
                <Button 
                  variant="outlined" 
                  size="large"
                  onClick={() => navigate("/enquiry")}
                  sx={{ 
                    borderColor: '#CBD5E1', 
                    borderRadius: 0, 
                    color: '#475569', 
                    px: 5, 
                    py: 2, 
                    fontWeight: 700, 
                    textTransform: 'none',
                    transition: 'all 0.2s ease-in-out',
                    '&:hover': { 
                      borderColor: BRAND_BLUE, 
                      color: BRAND_BLUE,
                      bgcolor: alpha(BRAND_BLUE, 0.02) 
                    } 
                  }}
                >
                Contact Sales
              </Button>
              </Stack>

              <Grid container spacing={4} sx={{ pt: 4, borderTop: '1px solid #E2E8F0' }}>
                {[
                  { num: "800lb", lbl: "Max Rating" },
                  { num: "UK", lbl: "Manufactured" },
                  { num: "24h", lbl: "Response" },
                  { num: "H²", lbl: "Ready" },
                ].map((stat, i) => (
                  <Grid size={{ xs: 6, sm: 3 }} key={i}>
                    <Typography variant="h5" sx={{ color: BRAND_BLUE, fontWeight: 800 }}>{stat.num}</Typography>
                    <Typography variant="caption" sx={{ textTransform: 'uppercase', fontWeight: 600, color: '#94A3B8' }}>{stat.lbl}</Typography>
                  </Grid>
                ))}
              </Grid>
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Hero2;