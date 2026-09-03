import { 
  Box, 
  Container, 
  Typography, 
  Button, 
  Grid, 
  Stack, 
  alpha 
} from '@mui/material';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import DesignServicesIcon from '@mui/icons-material/DesignServices';
import ViewInArIcon from '@mui/icons-material/ViewInAr';
import VerifiedIcon from '@mui/icons-material/Verified';
import { Link as RouterLink } from 'react-router-dom';

const BRAND_BLUE = "#01B0F0";

const docs = [
  { icon: <LibraryBooksIcon />, title: "Catalog Library", desc: "Full product catalogue with specifications" },
  { icon: <DesignServicesIcon />, title: "2D/3D Drawings", desc: "CAD files for all standard products" },
  { icon: <ViewInArIcon />, title: "CAD Files", desc: "Ready for direct import into your design workflow" },
  { icon: <VerifiedIcon />, title: "QMS Certifications", desc: "Quality management system documentation" },
];

const TechnicalSupport = () => {
  return (
    <Box component="section" id="technical" sx={{ py: 12, bgcolor: '#F8FAFC' }}>
      <Container maxWidth="lg">
        <Grid container spacing={8} alignItems="flex-start">
          
          {/* Left Side: Header Content */}
          <Grid size={{ xs: 12, md: 5 }}>
            <Stack direction="row" spacing={2} alignItems="center" sx={{ mb: 2 }}>
              <Typography variant="overline" sx={{ fontWeight: 800, color: BRAND_BLUE, letterSpacing: 1.5 }}>
                Technical Support
              </Typography>
              <Box sx={{ width: 40, height: '1px', bgcolor: BRAND_BLUE }} />
            </Stack>

            <Typography variant="h2" sx={{ 
              fontWeight: 800, 
              color: '#1E293B', 
              mb: 3, 
              fontSize: { xs: '2.5rem', md: '3.2rem' },
              lineHeight: 1.1
            }}>
              Technical Docs<br />
              <Box component="span" sx={{ color: BRAND_BLUE }}>You Need</Box>
            </Typography>

            <Typography variant="body1" sx={{ color: '#64748B', mb: 4, lineHeight: 1.7 }}>
              Full technical documentation available on every order. We provide the engineering support 
              your procurement and design teams need to move fast.
            </Typography>

            <Button
              component={RouterLink} viewTransition
              to="/catalogPDFs"
              variant="contained"
              disableElevation
              sx={{
                bgcolor: BRAND_BLUE,
                fontWeight: 700,
                borderRadius: 0,
                px: 4, py: 1.5,
                transition: 'transform 0.2s ease, box-shadow 0.2s ease, background-color 0.2s ease',
                '&:hover': { bgcolor: alpha(BRAND_BLUE, 0.9), transform: 'translateY(-2px)', boxShadow: `0 8px 20px ${alpha(BRAND_BLUE, 0.35)}` },
                '&:active': { transform: 'translateY(0)' },
              }}
            >
              Request Technical Documents
            </Button>
          </Grid>

          {/* Right Side: Document Grid */}
          <Grid size={{ xs: 12, md: 7 }}>
            <Grid container spacing={0} sx={{ borderTop: '1px solid #E2E8F0', borderLeft: '1px solid #E2E8F0' }}>
              {docs.map((doc, i) => (
                <Grid size={{ xs: 12, sm: 6 }} key={i} sx={{ 
                  p: 3, 
                  bgcolor: '#FFFFFF',
                  borderRight: '1px solid #E2E8F0', 
                  borderBottom: '1px solid #E2E8F0',
                  transition: '0.2s',
                  '&:hover': { bgcolor: alpha(BRAND_BLUE, 0.02) }
                }}>
                  <Stack direction="row" spacing={2}>
                    <Box sx={{ color: BRAND_BLUE }}>{doc.icon}</Box>
                    <Box>
                      <Typography variant="subtitle2" sx={{ fontWeight: 800, color: '#1E293B' }}>{doc.title}</Typography>
                      <Typography variant="caption" sx={{ color: '#64748B' }}>{doc.desc}</Typography>
                    </Box>
                  </Stack>
                </Grid>
              ))}

             
             
            </Grid>
          </Grid>

        </Grid>
      </Container>
    </Box>
  );
};

export default TechnicalSupport;