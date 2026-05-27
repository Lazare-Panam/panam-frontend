import React from 'react'
import {
  Box, Container, Typography, Grid, Divider, Button,
  Card, CardMedia, CardContent,
} from '@mui/material'

const PRIMARY_FONT = '"Inter", "Roboto", "Helvetica", Arial, sans-serif'
const BRAND_BLUE = '#01B0F0'

const LINKS = {
  heroExplore: '#categories',
  heroQuote: '/enquiry',
  ctaEmail: 'mailto:sales@panamvalves.com',
  ctaQuote: '/enquiry',
}

const CATEGORIES = [
  {
    id: 'two-way',
    title: '2-Way Ball Valves',
    subtitle: 'Floating Ball, On/Off Service',
    description: 'Two-way floating ball valves for reliable on/off shut-off in instrumentation and process lines. Rated to 10,000 psig with full range of end connections including NPT, BSPP, BSPT and PANAM® tube-fitting connections. Seat materials include Delrin, PTFE, PEEK and KEL-F.',
    image: 'https://pblol2.blob.core.windows.net/panam-images/products/ball-valves/PBV-2-S-04-FF-1.png',
    tag: 'Ball Valves',
    link: '/valves/ball-valves/two-way',
  },
  {
    id: 'three-way',
    title: '3-Way Ball Valves',
    subtitle: 'T-port & L-port Diverter Service',
    description: 'Three-way floating ball valves with T-port and L-port flow paths for diverting, mixing and selector service. Rated to 6,000 psig in sizes 1/8" through 1". Lever-handle and panel-mounting options available across selected sizes.',
    image: 'https://pblol2.blob.core.windows.net/panam-images/products/ball-valves/PBV-3-S-O4-OD-A.png',
    tag: 'Ball Valves',
    link: '/valves/ball-valves/three-way',
  },
  {
    id: 'high-bore',
    title: 'High Bore Ball Valves',
    subtitle: 'Full-bore, Maximum Flow Coefficient',
    description: 'High bore series with full-port ball geometry for maximum flow coefficient and minimal pressure drop. Ideal for sampling, drain and bypass applications where flow capacity is critical. Available in sizes 1/4" through 2" with full material options.',
    image: 'https://pblol2.blob.core.windows.net/panam-images/products/ball-valves/PBV-HB-S-08-FF.png',
    tag: 'Ball Valves',
    link: '/valves/ball-valves/high-bore',
  },
]

type CategoryItem = (typeof CATEGORIES)[0]

const CategoryCard: React.FC<CategoryItem> = ({ title, subtitle, description, image, tag, link }) => (
  <Card variant="outlined" sx={{
    borderRadius: 0, height: '100%', display: 'flex', flexDirection: 'column',
    border: '1px solid #e8e8e8', transition: 'box-shadow 0.2s',
    '&:hover': { boxShadow: '0 4px 24px rgba(1,176,240,0.10)' },
  }}>
    <Box sx={{
      display: 'flex', justifyContent: 'center', alignItems: 'center',
      bgcolor: '#ffffff', p: 3, borderBottom: '1px solid #f0f0f0', minHeight: 220,
    }}>
      <CardMedia component="img" image={image} alt={title}
        sx={{ width: '100%', maxWidth: 200, height: 180, objectFit: 'contain' }} />
    </Box>

    <CardContent sx={{ flexGrow: 1, p: 3 }}>
      <Typography variant="overline" sx={{
        color: BRAND_BLUE, fontWeight: 700, letterSpacing: 2,
        fontSize: 10, fontFamily: PRIMARY_FONT,
      }}>
        {tag}
      </Typography>
      <Typography variant="h6" sx={{
        fontWeight: 800, fontFamily: PRIMARY_FONT, color: '#1a1a1a',
        mt: 0.5, mb: 0.5, fontSize: '1.05rem',
      }}>
        {title} — {subtitle}
      </Typography>
      <Box sx={{
        display: 'inline-flex', alignItems: 'center', bgcolor: '#e8f7fd',
        border: '1px solid #b3e5f7', borderRadius: 0.5, px: 1.2, py: 0.3, mb: 2,
      }}>
        <Typography sx={{
          fontSize: 11, fontWeight: 700, color: BRAND_BLUE,
          fontFamily: PRIMARY_FONT, letterSpacing: 0.5,
        }}>
          SS316 · Duplex · Monel
        </Typography>
      </Box>
      <Typography variant="body2" sx={{
        color: '#666', lineHeight: 1.75, fontSize: '0.88rem', fontFamily: PRIMARY_FONT,
      }}>
        {description}
      </Typography>
    </CardContent>

    <Box sx={{ p: 2, display: 'flex', flexDirection: 'column', gap: 1 }}>
      <Button variant="contained" fullWidth size="small" href={link} sx={{
        bgcolor: BRAND_BLUE, color: '#fff', borderRadius: 0,
        fontWeight: 700, fontSize: 12, letterSpacing: 1, py: 1,
        '&:hover': { bgcolor: '#0090c8' },
      }}>
        VIEW RANGE
      </Button>
      <Button variant="outlined" fullWidth size="small" href={LINKS.ctaQuote} sx={{
        borderColor: '#ddd', color: '#444', borderRadius: 0,
        fontWeight: 600, fontSize: 12, letterSpacing: 1, py: 1,
        '&:hover': { bgcolor: '#f5f5f5', borderColor: '#bbb' },
      }}>
        REQUEST QUOTE
      </Button>
    </Box>
  </Card>
)

export default function BallValvesIndexPage() {
  return (
    <>
    <title>PANAM Instrumentation Ball Valves | 2-Way, 3-Way & High Bore | PANAM®</title>
    <meta name="description" content="PANAM® floating ball valves rated to 10,000 psig. 2-way, 3-way and high bore configurations. SS316, Duplex, Monel and Hastelloy. PTFE, PEEK, KEL-F seats. NACE MR0175 available." />
    <meta name="keywords" content="instrumentation ball valves, floating ball valve, 10000 psi ball valve, 2 way ball valve, 3 way ball valve, high bore ball valve, SS316 ball valve, NACE MR0175 ball valve, Duplex ball valve, Hastelloy ball valve, PTFE seat ball valve, PEEK seat ball valve, anti blowout stem ball valve" />
    <meta property="og:title" content="Instrumentation Ball Valves | 2-Way · 3-Way · High Bore | PANAM®" />
    <meta property="og:description" content="Floating ball valves to 10,000 psig in 2-way, 3-way and high bore series. SS316, Duplex, Monel, Hastelloy. NACE MR0175 available." />
    <meta property="og:type" content="website" />    
    <Box sx={{ bgcolor: '#fff', minHeight: '100vh' }}>

      {/* ── HERO ── */}
      <Box sx={{
        position: 'relative', width: '100%',
        minHeight: { xs: '60vh', md: '75vh' },
        display: 'flex', alignItems: 'center', overflow: 'hidden',
        backgroundImage: `linear-gradient(rgba(0,0,0,0.52), rgba(0,0,0,0.52)), url("https://pblol2.blob.core.windows.net/panam-images/products/ball-valves/ball-valves-hero.jpg")`,
        backgroundSize: 'cover', backgroundPosition: 'center',
        py: { xs: 8, md: 12 },
      }}>
        <Container maxWidth="lg">
          <Typography variant="overline" sx={{
            color: BRAND_BLUE, letterSpacing: 3, fontSize: 11,
            fontWeight: 700, fontFamily: PRIMARY_FONT,
          }}>
            PANAM® Instrumentation
          </Typography>
          <Typography variant="h1" sx={{
            fontSize: { xs: 38, md: 68 }, fontWeight: 900, color: '#fff',
            mt: 1, mb: 3, lineHeight: 1.08, maxWidth: 750,
            fontFamily: PRIMARY_FONT, letterSpacing: '-0.03em',
          }}>
            Ball Valves
            <br />
            <span style={{ color: BRAND_BLUE }}>Leak-tight. Under Pressure.</span>
          </Typography>
          <Typography sx={{
            fontSize: { xs: 16, md: 19 }, color: 'rgba(255,255,255,0.88)',
            maxWidth: 580, mb: 5, lineHeight: 1.75, fontFamily: PRIMARY_FONT,
          }}>
            Floating ball valves rated up to 10,000 psig in 2-way and 3-way configurations.
            Engineered for reliable shut-off and flow control across instrumentation, sampling
            and process applications.
          </Typography>
          <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
            <Button variant="contained" size="large" href={LINKS.heroExplore} sx={{
              bgcolor: BRAND_BLUE, color: '#fff', borderRadius: 0,
              px: 4, py: 1.5, fontWeight: 700, fontFamily: PRIMARY_FONT,
              '&:hover': { bgcolor: '#0090c8' },
            }}>
              Explore Range
            </Button>
            <Button variant="outlined" size="large" href={LINKS.heroQuote} sx={{
              borderColor: 'rgba(255,255,255,0.5)', color: '#fff', borderRadius: 0,
              px: 4, py: 1.5, fontWeight: 600, fontFamily: PRIMARY_FONT,
              '&:hover': { bgcolor: 'rgba(255,255,255,0.08)', borderColor: '#fff' },
            }}>
              Request Quote
            </Button>
          </Box>
        </Container>
      </Box>

      {/* ── MARQUEE ── */}
      <Box sx={{
        borderBottom: '1px solid #eee', py: 1.5, bgcolor: '#fff',
        overflow: 'hidden', whiteSpace: 'nowrap',
      }}>
        <style>{`@keyframes marquee { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }`}</style>
        <Box sx={{
          display: 'flex', width: 'max-content',
          animation: 'marquee 28s linear infinite',
          '&:hover': { animationPlayState: 'paused' },
        }}>
          {[1, 2].map(i => (
            <Box key={i} sx={{ display: 'flex', gap: 6, pr: 6 }}>
              {[
                'Rated to 10,000 psig (689 bar)',
                'SS316 · Duplex · Monel · Hastelloy',
                '1/8" to 2" size range',
                '2-Way · 3-Way · High Bore',
                'T-port & L-port flow paths',
                'Anti-blow-out stem on every valve',
                'NACE MR0175 certification available',
                'Delrin · PTFE · PEEK · KEL-F seats',
              ].map(item => (
                <Typography key={item} sx={{
                  fontSize: 13, fontWeight: 500, color: 'text.secondary',
                  display: 'flex', alignItems: 'center', gap: 1.5, fontFamily: PRIMARY_FONT,
                }}>
                  <Box component="span" sx={{
                    width: 6, height: 6, borderRadius: '50%',
                    bgcolor: BRAND_BLUE, flexShrink: 0,
                  }} />
                  {item}
                </Typography>
              ))}
            </Box>
          ))}
        </Box>
      </Box>

      <Container maxWidth="lg" sx={{ py: { xs: 8, md: 12 } }}>

        {/* ── INTRO ── */}
        <Grid container spacing={6} sx={{ mb: 8 }}>
          <Grid size={{ xs: 12, md: 7 }}>
            <Typography variant="h2" sx={{
              fontSize: { xs: 26, md: 34 }, fontWeight: 800, mb: 3,
              fontFamily: PRIMARY_FONT, color: '#1a1a1a', letterSpacing: '-0.02em',
            }}>
              Three configurations.
              <br />
              One engineered platform.
            </Typography>
            <Typography sx={{ color: '#555', lineHeight: 1.85, mb: 2.5, fontFamily: PRIMARY_FONT }}>
              PANAM® Ball Valves deliver leak-tight shut-off and flow control across the full
              range of instrumentation and process pressures. The floating-ball design provides
              positive sealing under severe pressure cycling.
            </Typography>
            <Typography sx={{ color: '#555', lineHeight: 1.85, mb: 2.5, fontFamily: PRIMARY_FONT }}>
              Every valve incorporates an internally loaded anti-blow-out stem for operator safety.
              Seat materials include Delrin, PTFE, PEEK and KEL-F to suit a wide range of media
              and temperature conditions.
            </Typography>
            <Typography sx={{ color: '#555', lineHeight: 1.85, fontFamily: PRIMARY_FONT }}>
              SS316 is standard, with Duplex, Monel and Hastelloy available on request. NACE
              MR0175 certification and full heat-code material traceability are available across
              the full range.
            </Typography>
          </Grid>
        </Grid>

        <Divider sx={{ mb: 8 }} />

        {/* ── CATEGORIES ── */}
        <Box id="categories" sx={{ mb: 10 }}>
          <Typography variant="overline" sx={{
            color: BRAND_BLUE, fontWeight: 700, letterSpacing: 3,
            fontSize: 11, fontFamily: PRIMARY_FONT, display: 'block', mb: 1,
          }}>
            Product Categories
          </Typography>
          <Typography variant="h2" sx={{
            fontSize: { xs: 26, md: 32 }, fontWeight: 800, mb: 1.5,
            fontFamily: PRIMARY_FONT, color: '#1a1a1a', letterSpacing: '-0.02em',
          }}>
            Three series. Every application.
          </Typography>
          <Typography sx={{
            color: '#666', fontFamily: PRIMARY_FONT, mb: 6, maxWidth: 560, lineHeight: 1.8,
          }}>
            Select by valve series to filter the full range by size, end connection, seat material and handle option.
          </Typography>
          <Grid container spacing={3}>
            {CATEGORIES.map(c => (
              <Grid key={c.id} size={{ xs: 12, sm: 6, md: 4 }}>
                <CategoryCard {...c} />
              </Grid>
            ))}
          </Grid>
        </Box>

        <Divider sx={{ mb: 10 }} />

        {/* ── KEY FEATURES ── */}
        <Box sx={{ mb: 10 }}>
          <Typography variant="h3" sx={{
            fontSize: { xs: 24, md: 30 }, fontWeight: 800, mb: 2,
            fontFamily: PRIMARY_FONT, color: '#1a1a1a',
          }}>
            Why specify PANAM® Ball Valves
          </Typography>
          <Typography sx={{
            color: '#666', lineHeight: 1.8, mb: 5, maxWidth: 620, fontFamily: PRIMARY_FONT,
          }}>
            Engineered to perform under pressure — with the materials, certifications and
            traceability that critical instrumentation service demands.
          </Typography>
          <Grid container spacing={2}>
            {[
              'Rated up to 10,000 psig (689 bar) across the range',
              'SS316 standard — Duplex, Monel, Hastelloy on request',
              'Internally loaded anti-blow-out stem on every valve',
              '2-Way, 3-Way and High Bore configurations available',
              'Seat materials: Delrin, PTFE, PEEK, KEL-F',
              'NACE MR0175 certification available on request',
              'Full heat-code material traceability provided',
              'Panel-mounting and lever-handle options on selected sizes',
            ].map(feat => (
              <Grid key={feat} size={{ xs: 12, sm: 6 }}>
                <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 1.5 }}>
                  <Box sx={{
                    width: 8, height: 8, borderRadius: '50%',
                    bgcolor: BRAND_BLUE, flexShrink: 0, mt: '6px',
                  }} />
                  <Typography sx={{
                    fontSize: 14, color: '#555', fontFamily: PRIMARY_FONT, lineHeight: 1.7,
                  }}>
                    {feat}
                  </Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Box>

        <Divider sx={{ mb: 10 }} />

        {/* ── CTA ── */}
        <Box sx={{ textAlign: 'center', py: 6 }}>
          <Typography variant="h3" sx={{
            fontSize: { xs: 24, md: 32 }, fontWeight: 800, mb: 2,
            fontFamily: PRIMARY_FONT, color: '#1a1a1a',
          }}>
            Specify your ball valve
          </Typography>
          <Typography sx={{
            color: '#666', lineHeight: 1.8, mb: 4, maxWidth: 520,
            mx: 'auto', fontFamily: PRIMARY_FONT,
          }}>
            Send us your size, pressure rating, end connection and seat material requirements.
            Our technical team responds to instrumentation enquiries within 24 hours.
          </Typography>
          <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center', flexWrap: 'wrap' }}>
            <Button variant="contained" size="large" href={LINKS.ctaEmail} sx={{
              bgcolor: BRAND_BLUE, color: '#fff', borderRadius: 0,
              px: 4, py: 1.5, fontWeight: 700, fontFamily: PRIMARY_FONT,
              '&:hover': { bgcolor: '#0090c8' },
            }}>
              Email Technical Sales
            </Button>
            <Button variant="outlined" size="large" href={LINKS.ctaQuote} sx={{
              borderColor: '#ddd', color: '#333', borderRadius: 0,
              px: 4, py: 1.5, fontWeight: 600, fontFamily: PRIMARY_FONT,
              '&:hover': { bgcolor: '#f5fbfe', borderColor: BRAND_BLUE },
            }}>
              Request Quote
            </Button>
          </Box>
        </Box>

      </Container>
    </Box>
    </>

  )
}