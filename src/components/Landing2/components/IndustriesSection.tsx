import React, { useEffect, useState } from 'react';
import { 
  Box, 
  Container, 
  Typography, 
  Button, 
  Stack, 
  Tabs, 
  Tab,
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
import { useReducedMotion } from 'framer-motion';
import { C, RADIUS, btn, sectionSx } from '../homeTokens';
import { SectionHeader } from '../homeStyles';

const industryData = [
  {
    id: 'marine',
    label: 'Marine & Subsea',
    path: '/industries/marine-subsea',
    title: 'Marine & Subsea',
    desc: 'Specialised instrumentation valves and manifolds designed for extreme hydrostatic pressures. We utilise high-grade Duplex materials to prevent corrosion in offshore energy and subsea production systems.',
    img: '/images/industries/marine-subsea.jpg',
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
    desc: 'Support for hydrogen infrastructure projects, from electrolyser integration to refuelling, with guidance on component selection for high-pressure H2 duty.',
    img: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=1400&q=80',
    specs: [
      { icon: <FlashOnIcon />, text: 'Valves and fittings selected for high-pressure hydrogen duty' },
      { icon: <ScienceIcon />, text: 'Material and sealing guidance for H2 systems' },
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
    img: 'https://images.unsplash.com/photo-1574943320219-553eb213f72d?w=1200&q=80',
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

const AUTO_ADVANCE_MS = 6000;

// Expanding image "flash cards": the active industry opens wide over its photo with the details;
// the others stay as slim image panels. Advances on its own and pauses while hovered.
const IndustriesSection = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [paused, setPaused] = useState(false);
  const prefersReducedMotion = useReducedMotion();
  const handleChange = (_event: React.SyntheticEvent, newValue: number) => {
    setActiveTab(newValue);
  };

  useEffect(() => {
    if (paused || prefersReducedMotion) return;
    const id = setInterval(() => setActiveTab(i => (i + 1) % industryData.length), AUTO_ADVANCE_MS);
    return () => clearInterval(id);
  }, [paused, prefersReducedMotion]);

  return (
    <Box component="section" id="industries" sx={sectionSx('white')}>
      <Container maxWidth="lg">
        <SectionHeader
          eyebrow="Product Applications"
          title="Industries We Serve"
          subtitle="Precision-engineered instrumentation valves trusted across the world’s most demanding industrial environments."
        />

        {/* Pill tabs (kept for quick navigation; synced with the cards) */}
        <Tabs
          value={activeTab}
          onChange={handleChange}
          variant="scrollable"
          scrollButtons="auto"
          allowScrollButtonsMobile
          sx={{
            mb: 3.5,
            minHeight: 0,
            '& .MuiTabs-indicator': { display: 'none' },
            '& .MuiTabs-flexContainer': { gap: 1 },
            '& .MuiTab-root': {
              minHeight: 0,
              py: 1.1,
              px: 2.25,
              borderRadius: RADIUS.pill,
              fontWeight: 600,
              textTransform: 'none',
              fontSize: '0.95rem',
              color: C.text,
              bgcolor: C.surface,
              border: `1px solid ${C.border}`,
              transition: 'all 0.2s ease',
              '&:hover': { borderColor: C.brand, color: C.brandDark },
              '&.Mui-selected': { color: C.white, bgcolor: C.brand, borderColor: C.brand, boxShadow: '0 6px 16px rgba(1,176,240,0.3)' },
            },
          }}
        >
          {industryData.map(item => (
            <Tab key={item.id} label={item.label} />
          ))}
        </Tabs>

        <Box
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          onFocusCapture={() => setPaused(true)}
          onBlurCapture={() => setPaused(false)}
          sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, gap: 1.5, height: { md: 560 } }}
        >
          {industryData.map((item, i) => {
            const active = i === activeTab;
            return (
              <Box
                key={item.id}
                role="button"
                tabIndex={0}
                aria-expanded={active}
                aria-label={item.title}
                onClick={() => setActiveTab(i)}
                onKeyDown={e => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); setActiveTab(i); } }}
                sx={{
                  position: 'relative',
                  overflow: 'hidden',
                  borderRadius: '22px',
                  bgcolor: C.brandDeep, // shows while the photo loads
                  cursor: active ? 'default' : 'pointer',
                  flex: { md: active ? '5 1 0' : '1 1 0' },
                  minWidth: 0,
                  height: { xs: active ? 560 : 84, md: 'auto' },
                  transition: 'flex 0.7s cubic-bezier(0.4, 0, 0.2, 1), height 0.6s cubic-bezier(0.4, 0, 0.2, 1), box-shadow 0.3s ease',
                  boxShadow: active ? '0 20px 50px rgba(3,104,166,0.22)' : 'none',
                  outline: 'none',
                  '&:focus-visible': { boxShadow: `0 0 0 3px ${C.brand}` },
                  '&:hover .ind-img': { transform: active ? 'scale(1.04)' : 'scale(1.1)' },
                }}
              >
                <Box
                  component="img"
                  className="ind-img"
                  src={item.img}
                  alt={item.title}
                  sx={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', color: 'transparent', transform: active ? 'scale(1.02)' : 'scale(1.08)', transition: 'transform 1.2s ease' }}
                />
                {/* Brand-blue scrim for legible text (no black) */}
                <Box
                  sx={{
                    position: 'absolute',
                    inset: 0,
                    background: active
                      ? 'linear-gradient(180deg, rgba(3,80,130,0) 25%, rgba(3,80,130,0.55) 55%, rgba(2,62,104,0.92) 100%)'
                      : 'linear-gradient(180deg, rgba(3,80,130,0.15) 0%, rgba(2,62,104,0.75) 100%)',
                    transition: 'background 0.6s ease',
                  }}
                />

                {/* Collapsed label */}
                <Box
                  sx={{
                    position: 'absolute',
                    inset: 0,
                    display: 'flex',
                    alignItems: { xs: 'center', md: 'flex-end' },
                    justifyContent: { xs: 'flex-start', md: 'center' },
                    px: { xs: 3, md: 0 },
                    pb: { md: 4 },
                    opacity: active ? 0 : 1,
                    transition: 'opacity 0.3s ease',
                    pointerEvents: 'none',
                  }}
                >
                  <Typography
                    sx={{
                      color: C.white,
                      fontWeight: 700,
                      fontSize: '1rem',
                      whiteSpace: 'nowrap',
                      writingMode: { md: 'vertical-rl' },
                      transform: { md: 'rotate(180deg)' },
                      letterSpacing: '0.01em',
                    }}
                  >
                    {item.label}
                  </Typography>
                </Box>

                {/* Expanded content */}
                <Box
                  sx={{
                    position: 'absolute',
                    left: 0,
                    right: 0,
                    bottom: 0,
                    p: { xs: 3, md: 4.5 },
                    color: C.white,
                    opacity: active ? 1 : 0,
                    transform: active ? 'none' : 'translateY(16px)',
                    transition: active ? 'opacity 0.5s ease 0.35s, transform 0.5s ease 0.35s' : 'opacity 0.2s ease, transform 0.2s ease',
                    pointerEvents: active ? 'auto' : 'none',
                    minWidth: { md: 460 },
                  }}
                >
                  <Typography variant="h4" component="h3" sx={{ fontWeight: 800, letterSpacing: '-0.02em', fontSize: { xs: '1.6rem', md: '2rem' }, mb: 1.5 }}>
                    {item.title}
                  </Typography>
                  <Typography sx={{ color: 'rgba(255,255,255,0.88)', lineHeight: 1.65, fontSize: '0.98rem', mb: 2.5, maxWidth: 560 }}>
                    {item.desc}
                  </Typography>
                  <Stack spacing={1.1} sx={{ mb: 3 }}>
                    {item.specs.map((spec, j) => (
                      <Stack key={j} direction="row" spacing={1.5} alignItems="center">
                        <Box sx={{ width: 30, height: 30, flex: 'none', borderRadius: '9px', bgcolor: 'rgba(255,255,255,0.18)', border: '1px solid rgba(255,255,255,0.25)', display: 'grid', placeItems: 'center', '& svg': { fontSize: 17 } }}>
                          {spec.icon}
                        </Box>
                        <Typography sx={{ fontWeight: 500, fontSize: '0.92rem' }}>{spec.text}</Typography>
                      </Stack>
                    ))}
                  </Stack>
                  <Button component={RouterLink} viewTransition to={item.path} endIcon={<ArrowForwardIcon />} tabIndex={active ? 0 : -1} sx={{ ...btn.light, color: C.brandDeep }}>
                    Explore {item.label}
                  </Button>
                </Box>

                {/* Progress bar for the auto-advance */}
                {active && !prefersReducedMotion && (
                  <Box
                    key={`${item.id}-${paused}`}
                    sx={{
                      position: 'absolute',
                      left: 0,
                      top: 0,
                      height: 3,
                      bgcolor: C.brand,
                      width: paused ? 0 : '100%',
                      animation: paused ? 'none' : `industryProgress ${AUTO_ADVANCE_MS}ms linear`,
                      '@keyframes industryProgress': { from: { width: 0 }, to: { width: '100%' } },
                    }}
                  />
                )}
              </Box>
            );
          })}
        </Box>
      </Container>
    </Box>
  );
};

export default IndustriesSection;
