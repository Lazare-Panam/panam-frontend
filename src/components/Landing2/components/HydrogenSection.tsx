import { 
  Box, 
  Container, 
  Typography, 
  Button, 
   Grid, 
  Stack, 
   
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import ScienceIcon from '@mui/icons-material/Science';
import SpeedIcon from '@mui/icons-material/Speed';
import PublicIcon from '@mui/icons-material/Public';
import AssignmentIcon from '@mui/icons-material/Assignment';

const BRAND_BLUE = "#01B0F0";

const HydrogenSection = () => {
  const navigate = useNavigate();

  const features = [
    { icon: <ScienceIcon fontSize="small" />, title: "H2-Compatible Materials", desc: "SS316, Duplex, Super Duplex, Inconel — tested for hydrogen embrittlement resistance." },
    { icon: <SpeedIcon fontSize="small" />, title: "Advanced Leak-Detection", desc: "Training and engineering audits for high-pressure H2 storage systems." },
    { icon: <PublicIcon fontSize="small" />, title: "Global H2 Supply Chain", desc: "Material compatibility and certification support across global markets." },
    { icon: <AssignmentIcon fontSize="small" />, title: "Full H2 Certification", desc: "Pressure test reports, material certs, NACE compliance and QMS documentation." }
  ];

  const stats = [
    { num: "350", unit: "bar", label: "MAX RATED PRESSURE" },
    { num: "100", unit: "%", label: "MATERIAL TESTED" },
    { num: "3", unit: "", label: "CONTINENTS SERVED" },
    { num: "24", unit: "h", label: "TECHNICAL RESPONSE" }
  ];

  return (
    <Box component="section" id="hydrogen" sx={{ py: 12, bgcolor: BRAND_BLUE, color: '#FFFFFF' }}>
      <Container maxWidth="lg">
        <Grid container spacing={6} alignItems="center">
          
          {/* LEFT CONTENT */}
          <Grid size={{ xs: 12, md: 7 }}>
            {/* Small Badge */}
            <Box sx={{ 
              display: 'inline-flex', alignItems: 'center', gap: 1, 
              bgcolor: 'rgba(255, 255, 255, 0.15)', color: '#FFFFFF',
              px: 1.5, py: 0.5, mb: 3, border: '1px solid rgba(255, 255, 255, 0.3)'
            }}>
              <Typography variant="caption" sx={{ fontWeight: 900, fontSize: '0.7rem' }}>
                HYDROGEN INFRASTRUCTURE
              </Typography>
            </Box>

            <Typography variant="h2" sx={{ 
              fontWeight: 800, mb: 2, fontSize: { xs: '2.5rem', md: '3.8rem' }, lineHeight: 1.1, color: '#FFFFFF'
            }}>
              The Future<br />Runs on <Box component="span" sx={{ color: 'rgba(255,255,255,0.7)', fontStyle: 'italic' }}>H₂</Box>
            </Typography>

            <Typography variant="body1" sx={{ color: 'rgba(255, 255, 255, 0.8)', mb: 5, maxWidth: 550, lineHeight: 1.6 }}>
              Dedicated hydrogen product engineering and project support for large-scale electrolyser and refuelling infrastructure. Our H2 supply chain ensures material compatibility.
            </Typography>

            {/* Features Grid */}
            <Grid container spacing={3} sx={{ mb: 5 }}>
              {features.map((feat, i) => (
                <Grid size={{ xs: 12, sm: 6 }} key={i}>
                  <Stack direction="row" spacing={1.5}>
                    <Box sx={{ color: '#FFFFFF', mt: 0.3 }}>{feat.icon}</Box>
                    <Box>
                      <Typography variant="subtitle2" sx={{ fontWeight: 700, fontSize: '0.9rem', color: '#FFFFFF' }}>
                        {feat.title}
                      </Typography>
                      <Typography variant="caption" sx={{ color: 'rgba(255, 255, 255, 0.7)', display: 'block', lineHeight: 1.4, mt: 0.5 }}>
                        {feat.desc}
                      </Typography>
                    </Box>
                  </Stack>
                </Grid>
              ))}
            </Grid>

            {/* CTAs */}
            <Stack direction="row" spacing={2}>
              <Button 
                variant="contained" 
                disableElevation
                onClick={() => navigate('/products/hydrogen')}
                endIcon={<ArrowForwardIcon />}
                sx={{ 
                  bgcolor: '#FFFFFF', 
                  color: BRAND_BLUE, 
                  fontWeight: 800, 
                  borderRadius: 0, 
                  px: 3, py: 1.2,
                  '&:hover': { bgcolor: '#f0f0f0' } 
                }}
              >
                SHOP H2 PRODUCTS
              </Button>
              <Button 
                variant="outlined" 
                startIcon={<MenuBookIcon />}
                sx={{ 
                  color: '#FFFFFF', 
                  borderColor: 'rgba(255, 255, 255, 0.5)', 
                  borderRadius: 0, px: 3, 
                  '&:hover': { borderColor: '#FFFFFF', bgcolor: 'rgba(255, 255, 255, 0.1)' } 
                }}
              >
                H2 TECHNICAL GUIDE
              </Button>
            </Stack>
          </Grid>

          {/* RIGHT STATS GRID */}
          <Grid size={{ xs: 12, md: 5 }}>
            <Box sx={{ 
              display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', 
              gap: 0, border: '1px solid rgba(255, 255, 255, 0.2)', position: 'relative', zIndex: 1 
            }}>
              {stats.map((stat, i) => (
                <Box key={i} sx={{ 
                  p: 4, textAlign: 'center', border: '1px solid rgba(255, 255, 255, 0.2)',
                  bgcolor: 'rgba(255, 255, 255, 0.05)',
                  transition: '0.3s',
                  '&:hover': { bgcolor: 'rgba(255, 255, 255, 0.1)' }
                }}>
                  <Typography variant="h3" sx={{ fontWeight: 800, color: '#FFFFFF', display: 'flex', alignItems: 'baseline', justifyContent: 'center' }}>
                    {stat.num}
                    <Typography component="span" sx={{ fontSize: '1rem', ml: 0.5, fontWeight: 700, color: 'rgba(255, 255, 255, 0.6)' }}>
                      {stat.unit}
                    </Typography>
                  </Typography>
                  <Typography variant="caption" sx={{ color: 'rgba(255, 255, 255, 0.8)', fontWeight: 700, letterSpacing: 1, mt: 1, display: 'block' }}>
                    {stat.label}
                  </Typography>
                </Box>
              ))}
            </Box>
          </Grid>

        </Grid>
      </Container>
    </Box>
  );
};

export default HydrogenSection;