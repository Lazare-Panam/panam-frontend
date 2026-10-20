import React, { useState } from 'react';
import { 
  Box, 
  Container, 
  Typography, 
  Button, 
  Grid, 
  Stack, 
  Tabs, 
  Tab,
  alpha 
} from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import HandymanIcon from '@mui/icons-material/Handyman';
import SettingsIcon from '@mui/icons-material/Settings';
import AssignmentIcon from '@mui/icons-material/Assignment';
import LocalGasStationIcon from '@mui/icons-material/LocalGasStation';
import ScienceIcon from '@mui/icons-material/Science';
import AirplanemodeActiveIcon from '@mui/icons-material/AirplanemodeActive';
import FlashOnIcon from '@mui/icons-material/FlashOn';
import RestaurantIcon from '@mui/icons-material/Restaurant';
import { Link as RouterLink } from 'react-router-dom';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
const BRAND_BLUE = "#01B0F0";

const industryData = [
  {
    id: 'marine',
    label: 'Marine & Subsea',
    path: '/industries/marine-subsea',
    title: 'Marine & Subsea',
    desc: 'Specialised instrumentation valves and manifolds designed for extreme hydrostatic pressures. We utilise high-grade Duplex materials to prevent corrosion in offshore energy and subsea production systems.',
    img: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800&q=75',
    specs: [
      { icon: <HandymanIcon />, text: 'Duplex & Super Duplex for maximum corrosion resistance' },
      { icon: <SettingsIcon />, text: 'Pressure ratings confirmed for your application at enquiry' },
      { icon: <AssignmentIcon />, text: 'Material certificates available on request' },
    ]
  },
  {
    id: 'oilgas',
    label: 'Oil & Gas',
    path: '/industries/oil-gas',
    title: 'Oil & Gas',
    desc: 'High-performance valves and fittings for upstream, midstream and downstream operations. Engineered to withstand extreme pressures and aggressive media in refineries.',
    img: 'https://images.unsplash.com/photo-1558449028-b53a39d100fc?auto=format&fit=crop&q=75&w=800',
    specs: [
      { icon: <LocalGasStationIcon />, text: 'Globe, gate and check valves for process control' },
      { icon: <ScienceIcon />, text: 'A105, A182 F316, F51 Duplex material grades' },
      { icon: <SettingsIcon />, text: 'Socket weld and double ferrule connections' },
    ]
  },
  {
    id: 'hydrogen',
    label: 'Hydrogen',
    path: '/industries/hydrogen',
    title: 'Hydrogen Infrastructure',
    desc: 'Specialised hydrogen infrastructure support for large-scale electrolyser and refuelling projects. Advanced leak-detection and dedicated H2 supply chain.',
    img: 'https://res.cloudinary.com/dm9rmmemx/image/upload/w_800,f_auto,q_auto/v1769604874/biel-morro-HCha-UHkIg8-unsplash_pl8qt9.jpg',
    specs: [
      { icon: <FlashOnIcon />, text: 'H2-rated valves for 350 bar+ service' },
      { icon: <ScienceIcon />, text: 'Leak-detection training and engineering audits' },
      { icon: <AssignmentIcon />, text: 'Documentation requirements confirmed at enquiry' },
    ]
  },
  {
    id: 'aerospace',
    label: 'Aerospace',
    path: '/industries/aerospace-defense',
    title: 'Aerospace & Defence',
    desc: 'Precision instrumentation from an ISO 9001 certified quality management system, with material certificates available on request.',
    img: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&q=75',
    specs: [
      { icon: <AirplanemodeActiveIcon />, text: 'ISO 9001, ISO 14001 and ISO 45001 certified management systems' },
      { icon: <AssignmentIcon />, text: 'Material certificates available on request' },
      { icon: <HandymanIcon />, text: 'Hastelloy, Inconel and Super Duplex available' },
    ]
  },
  {
    id: 'chemicals',
    label: 'Chemicals',
    path: '/industries/chemicals-petrochemical',
    title: 'Chemicals & Petrochemical',
    desc: 'Corrosion-resistant valves and fittings for aggressive chemical environments. Stainless steel and exotic alloy options for demanding process conditions.',
    img: 'https://res.cloudinary.com/dm9rmmemx/image/upload/w_800,f_auto,q_auto/v1769604928/annie-spratt-Iqwnr00mfQM-unsplash_qtpa2u.jpg',
    specs: [
      { icon: <ScienceIcon />, text: 'Full material range for aggressive service' },
      { icon: <LocalGasStationIcon />, text: 'Sour service requirements reviewed at enquiry' },
      { icon: <SettingsIcon />, text: 'Custom manifold designs for skid integration' },
    ]
  },
  {
    id: 'food',
    label: 'Food & Bev',
    path: '/industries/food-beverages',
    title: 'Food & Beverages',
    desc: 'Hygienic instrumentation solutions meeting the highest food-grade standards. Electropolished components for clean-in-place (CIP) systems.',
    img: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800&q=75',
    specs: [
      { icon: <RestaurantIcon />, text: 'Electropolished SS316 for hygienic applications' },
      { icon: <AssignmentIcon />, text: 'FDA-compliant materials and certifications' },
      { icon: <SettingsIcon />, text: 'CIP-compatible manifolds and fittings' },
    ]
  }
];

const IndustriesSection = () => {
  const [activeTab, setActiveTab] = useState(0);
  const prefersReducedMotion = useReducedMotion();
  const handleChange = (_event: React.SyntheticEvent, newValue: number) => {
  setActiveTab(newValue);
};

  const current = industryData[activeTab];

  return (
    <Box component="section" id="industries" sx={{ py: 12, bgcolor: '#F8FAFC' }}>
      <Container maxWidth="lg">
        {/* Header */}
        <Box sx={{ mb: 6 }}>
          <Stack direction="row" spacing={2} alignItems="center" sx={{ mb: 2 }}>
            <Typography variant="overline" sx={{ fontWeight: 800, color: BRAND_BLUE, letterSpacing: 1.5 }}>
              Product Applications
            </Typography>
            <Box sx={{ width: 40, height: '1px', bgcolor: BRAND_BLUE }} />
          </Stack>
          <Typography variant="h2" sx={{ fontWeight: 800, color: '#1E293B', mb: 3 }}>
            Industries <Box component="span" sx={{ color: BRAND_BLUE }}>We Serve</Box>
          </Typography>
          <Typography variant="body1" sx={{ color: '#64748B', maxWidth: 600 }}>
            Precision-engineered instrumentation valves trusted across the world’s most demanding industrial environments.
          </Typography>
        </Box>

        {/* Tabs Navigation */}
        <Box sx={{ borderBottom: 1, borderColor: 'divider', mb: 6 }}>
          <Tabs 
            value={activeTab} 
            onChange={handleChange} 
            variant="scrollable"
            scrollButtons="auto"
            sx={{
              '& .MuiTabs-indicator': { bgcolor: BRAND_BLUE, height: 3,borderRadius: 0 },
              '& .MuiTab-root': { 
                fontWeight: 700, 
                textTransform: 'none', 
                fontSize: '1rem',
                color: '#94A3B8',
                borderRadius: 0,
                '&.Mui-selected': { color: '#1E293B' }
              }
            }}
          >
            {industryData.map((item,) => (
              <Tab key={item.id} label={item.label} />
            ))}
          </Tabs>
        </Box>

        {/* Tab Panel Content */}
        <Box 
          sx={{ 
            bgcolor: '#FFFFFF', 
            borderRadius: '0', 
            overflow: 'hidden', 
            boxShadow: '0 10px 30px rgba(0,0,0,0.04)',
            border: '1px solid #E2E8F0'
          }}
        >
          <Grid container>
            <AnimatePresence mode="wait">
              <motion.div
                key={current.id}
                initial={prefersReducedMotion ? false : { opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={prefersReducedMotion ? undefined : { opacity: 0, y: -12 }}
                transition={{ duration: prefersReducedMotion ? 0 : 0.35, ease: [0.21, 0.47, 0.32, 0.98] }}
                style={{ display: "contents" }}
              >
                {/* Left Body */}
                <Grid size={{ xs: 12, md: 6 }} sx={{ p: { xs: 4, md: 8 } }}>
                  <Stack spacing={4}>
                    <Typography variant="h4" component="h3" sx={{ fontWeight: 800, color: '#1E293B' }}>
                      {current.title}
                    </Typography>
                    <Typography variant="body1" sx={{ color: '#64748B', lineHeight: 1.7 }}>
                      {current.desc}
                    </Typography>

                    <Stack spacing={2.5}>
                      {current.specs.map((spec, i) => (
                        <Stack key={i} direction="row" spacing={2} alignItems="center">
                          <Box sx={{ color: BRAND_BLUE, display: 'flex' }}>
                            {spec.icon}
                          </Box>
                          <Typography variant="body2" sx={{ fontWeight: 600, color: '#475569' }}>
                            {spec.text}
                          </Typography>
                        </Stack>
                      ))}
                    </Stack>

                    <Box sx={{ pt: 2 }}>
                      <Button
                        component={RouterLink} viewTransition
                        to={current.path}
                        variant="contained"
                        size="large"
                        endIcon={<ArrowForwardIcon />}
                        sx={{
                          bgcolor: BRAND_BLUE,
                          fontWeight: 700,
                          px: 4, py: 1.5,
                          borderRadius: '0',
                          transition: 'transform 0.2s ease, box-shadow 0.2s ease, background-color 0.2s ease',
                          '&:hover': { bgcolor: alpha(BRAND_BLUE, 0.9), transform: 'translateY(-2px)', boxShadow: `0 8px 20px ${alpha(BRAND_BLUE, 0.35)}` },
                          '&:active': { transform: 'translateY(0)' },
                        }}
                      >
                        Explore {current.label}
                      </Button>
                    </Box>
                  </Stack>
                </Grid>

                {/* Right Visual */}
                <Grid size={{ xs: 12, md: 6 }} sx={{ position: 'relative', minHeight: { xs: 300, md: 'auto' } }}>
                  <Box
                    component="img"
                    src={current.img}
                    alt={current.title}
                    loading="lazy"
                    sx={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      display: 'block'
                    }}
                  />
                  <Box
                    sx={{
                      position: 'absolute',
                      bottom: 24,
                      left: 24,
                      bgcolor: alpha('#1E293B', 0.8),
                      backdropFilter: 'blur(8px)',
                      color: 'white',
                      px: 3, py: 1,
                      borderRadius: '4px',
                      fontWeight: 700,
                      fontSize: '0.875rem'
                    }}
                  >
                    {current.label}
                  </Box>
                </Grid>
              </motion.div>
            </AnimatePresence>
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};

export default IndustriesSection;