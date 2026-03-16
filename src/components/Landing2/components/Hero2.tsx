
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
const PRIMARY_FONT = '"Inter", "Roboto", "Helvetica", Arial, sans-serif';

const Hero2 = () => {
  const products = [
    {
      tag: "Most Popular",
      name: "Check Valves — 800 lb Rating",
      spec: "A105 · A182 F316 · A182 F304L",
      img: "https://res.cloudinary.com/dm9rmmemx/image/upload/v1773066005/PCV-S-08-OD-PNG-removebg-preview_gfigng.png",
      featured: true
    },
    {
      tag: "New",
      name: "2-Way Valve Manifold",
      spec: "SS316 · Duplex · Hastelloy",
      img: "https://res.cloudinary.com/dm9rmmemx/image/upload/v1773065762/2VM-SS-8-20M-RM_gviqce.png"
    },
    {
      tag: "H2 Ready",
      name: "Double Block & Bleed Valves",
      spec: "NACE · Full Traceability",
      img: "https://res.cloudinary.com/dm9rmmemx/image/upload/v1773065511/MONO-FLANGE-1_zo3vzq.png"
    }
  ];

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
          backgroundImage: "url('https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=1920')", // Modern bright engineering lab
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
                  Precision Instrumentation &middot; UK Manufacturer
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
                  sx={{ 
                    bgcolor: BRAND_BLUE, 
                    color: '#fff', 
                    fontWeight: 700, 
                    px: 5, 
                    py: 2,
                    borderRadius:0,
                    boxShadow: `0 10px 20px ${alpha(BRAND_BLUE, 0.3)}`,
                    '&:hover': { bgcolor: '#0090C4', boxShadow: `0 12px 25px ${alpha(BRAND_BLUE, 0.4)}` } 
                  }}
                >
                  Explore Products
                </Button>
                <Button 
                  variant="outlined" 
                  size="large"
                  sx={{ borderColor: '#CBD5E1',  borderRadius:0,color: '#475569', px: 5, fontWeight: 600, '&:hover': { borderColor: BRAND_BLUE, color: BRAND_BLUE } }}
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

          {/* Right Product Grid - Clean White Theme */}
          <Grid size={{ xs: 12, md: 5 }}>
            <Grid container spacing={3}>
              {products.map((product, idx) => (
                <Grid size={{ xs: 12 }} key={idx}>
                  <Box sx={{
                    p: 3,
                    display: 'flex',
                    alignItems: 'center',
                    gap: 3,
                    borderRadius: '0',
                    bgcolor: '#FFFFFF',
                    border: '1px solid #E2E8F0',
                    boxShadow: '0 4px 6px -1px rgba(0,0,0,0.05), 0 2px 4px -1px rgba(0,0,0,0.03)',
                    transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                    cursor: 'pointer',
                    '&:hover': {
                      transform: 'translateX(8px)',
                      borderColor: BRAND_BLUE,
                      boxShadow: `0 20px 25px -5px ${alpha(BRAND_BLUE, 0.1)}`
                    }
                  }}>
                    <Box 
                      component="img" 
                      src={product.img} 
                      sx={{ width: 80, height: 80, objectFit: 'contain', filter: 'drop-shadow(0 10px 10px rgba(0,0,0,0.1))' }} 
                    />
                    <Box sx={{ flex: 1 }}>
                      <Typography sx={{ color: BRAND_BLUE, fontSize: '0.75rem', fontWeight: 800, mb: 0.5 }}>
                        {product.tag}
                      </Typography>
                      <Typography variant="subtitle1" sx={{ fontWeight: 700, color: '#1E293B', lineHeight: 1.2 }}>
                        {product.name}
                      </Typography>
                      <Typography variant="caption" sx={{ color: '#64748B' }}>
                        {product.spec}
                      </Typography>
                    </Box>
                    <ArrowForwardIcon sx={{ color: '#CBD5E1', fontSize: 20 }} />
                  </Box>
                </Grid>
              ))}
            </Grid>
          </Grid>

        </Grid>
      </Container>
    </Box>
  );
};

export default Hero2;