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
    id: 'twin-series',
    title: 'Twin Series',
    subtitle: 'Tube Clamps',
    description: 'Twin series tube clamps in DIN Groups 1–5. Covers pipe OD from 6mm to 42mm. Each set includes one top plate, one bottom plate, one hex bolt, and one pair of PP jaws.',
    image: 'https://pblol2.blob.core.windows.net/panam-images/products/tube-clamps/Twin-Series-Tube-Clamp.jpeg',
    tag: 'Tube Clamps',
    link: '/instrumentation-fittings/tube-clamps/twin-series',
    specs: ['DIN Groups 1–5', '6mm – 42mm OD', 'M6 / M8 Bolts'],
  },
  {
    id: 'single-layer',
    title: 'Single Layer',
    subtitle: 'Tube Clamps',
    description: 'Single layer tube clamps in DIN Groups 1–10. Covers pipe OD from 6mm to 42mm. Each set includes one top plate, one bottom plate, 2 hex bolts, and one pair of PP jaws.',
    image: 'https://pblol2.blob.core.windows.net/panam-images/products/tube-clamps/Single-Layer-Tube-Clamp.jpeg',
    tag: 'Tube Clamps',
    link: '/instrumentation-fittings/tube-clamps/single-layer',
    specs: ['DIN Groups 1–10', '6mm – 42mm OD', 'M6 Bolts'],
  },
  {
    id: 'double-layer',
    title: 'Double Layer, Standard Series',
    subtitle: 'Tube Clamps',
    description: 'Double layer tube clamps in DIN Groups 1–6. Covers pipe OD from 4mm to 50.8mm. Each set includes one top plate, one bottom plate, 2 hex bolts, two pairs of PP jaws, 2 stacking bolts, and 1 locking plate.',
    image: 'https://pblol2.blob.core.windows.net/panam-images/products/tube-clamps/Double-Layer-Tube-Clamp.jpeg',
    tag: 'Tube Clamps',
    link: '/instrumentation-fittings/tube-clamps/double-layer',
    specs: ['DIN Groups 1–6', '4mm – 50.8mm OD', 'M6 Bolts'],
  },
  {
    id: 'heavy',
    title: 'Heavy Series, Single Layer',
    subtitle: 'Tube Clamps',
    description: 'Heavy duty tube clamps in DIN Groups 1–10. Covers pipe OD from 6mm to 219mm. Each set includes one top plate, one bottom plate, 2 hex bolts (4.6 Grades), and one pair of PP jaws.',
    image: 'https://pblol2.blob.core.windows.net/panam-images/products/tube-clamps/Heavy-Series-Tube-Clamp.jpeg',
    tag: 'Tube Clamps',
    link: '/instrumentation-fittings/tube-clamps/heavy-single-layer',
    specs: ['DIN Groups 1–10', '6mm – 219mm OD', 'M10 – M30 Bolts'],
  },
  {
    id: 'heavy-double-layer',
    title: 'Heavy Series, Double Layer',
    subtitle: 'Tube Clamps',
    description: 'Heavy series double layer tube clamps DIN 3015 in DIN Groups 1–8. Covers pipe OD from 6mm to 219mm. Each set includes top plate, bottom plate, locking plate, 2 stacking bolts, 2 hex bolts, and 2 set PP jaws.',
    image: 'https://pblol2.blob.core.windows.net/panam-images/products/tube-clamps/Heavy-Series-Tube-Clamp.jpeg',
    tag: 'Tube Clamps',
    link: '/instrumentation-fittings/tube-clamps/heavy-double-layer',
    specs: ['DIN 3015', 'DIN Groups 1–8', '6mm – 219mm OD'],
  },
]

type CategoryItem = (typeof CATEGORIES)[0]

const CategoryCard: React.FC<CategoryItem> = ({ title, subtitle, description, image, tag, link, specs }) => (
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
      <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap', mb: 2 }}>
        {specs.map(s => (
          <Box key={s} sx={{
            display: 'inline-flex', alignItems: 'center', bgcolor: '#e8f7fd',
            border: '1px solid #b3e5f7', borderRadius: 0.5, px: 1.2, py: 0.3,
          }}>
            <Typography sx={{
              fontSize: 11, fontWeight: 700, color: BRAND_BLUE,
              fontFamily: PRIMARY_FONT, letterSpacing: 0.5,
            }}>
              {s}
            </Typography>
          </Box>
        ))}
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

export default function TubeClampIndexPage() {
  return (
    <>
          <title>Tube Clamps | PANAM® Instrumentation</title>
      <meta name="description" content="PANAM® Tube Clamps — Twin, Single Layer, Double Layer, Heavy Single and Heavy Double series. DIN Groups 1 to 10, 4mm to 219mm pipe OD, M6 to M30 bolts, PP jaws included. Request a quote." />
      <meta name="keywords" content="tube clamps, DIN tube clamps, instrumentation pipe clamps, twin series clamps, heavy series tube clamps, DIN 3015" />
      <meta property="og:title" content="Tube Clamps | PANAM® Instrumentation" />
      <meta property="og:description" content="Five series of tube clamps from one source. DIN Groups 1 to 10, 4mm to 219mm OD, complete sets supplied as standard." />
      <meta property="og:image" content="https://pblol2.blob.core.windows.net/panam-images/products/tube-clamps/tube-clamps-hero.jpg" />
      <meta property="og:type" content="product" />
      <meta name="twitter:card" content="summary_large_image" />
    <Box sx={{ bgcolor: '#fff', minHeight: '100vh' }}>

      {/* HERO */}
      <Box sx={{
        position: 'relative', width: '100%',
        minHeight: { xs: '60vh', md: '75vh' },
        display: 'flex', alignItems: 'center', overflow: 'hidden',
        backgroundImage: `linear-gradient(rgba(0,0,0,0.52), rgba(0,0,0,0.52)), url("https://pblol2.blob.core.windows.net/panam-images/products/tube-clamps/tube-clamps-hero.jpg")`,
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
            Tube Clamps
            <br />
            <span style={{ color: BRAND_BLUE }}>Built to Hold.</span>
          </Typography>
          <Typography sx={{
            fontSize: { xs: 16, md: 19 }, color: 'rgba(255,255,255,0.88)',
            maxWidth: 580, mb: 5, lineHeight: 1.75, fontFamily: PRIMARY_FONT,
          }}>
            Twin, single layer, double layer and heavy series tube clamps. DIN Groups 1–10,
            covering pipe OD from 4mm to 219mm with M6 through M30 bolt sizes.
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

      {/* MARQUEE */}
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
                'Twin · Single Layer · Double Layer · Heavy Series',
                'DIN Groups 1–10',
                '4mm to 219mm Pipe OD',
                'M6 through M30 Bolt Sizes',
                'PP Jaws Included',
                'Stainless Steel',
                'Dimensions in mm',
                'One Set — Complete Assembly',
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

        {/* INTRO */}
        <Grid container spacing={6} sx={{ mb: 8 }}>
          <Grid size={{ xs: 12, md: 7 }}>
            <Typography variant="h2" sx={{
              fontSize: { xs: 26, md: 34 }, fontWeight: 800, mb: 3,
              fontFamily: PRIMARY_FONT, color: '#1a1a1a', letterSpacing: '-0.02em',
            }}>
              Five series. Every installation requirement.
            </Typography>
            <Typography sx={{ color: '#555', lineHeight: 1.85, mb: 2.5, fontFamily: PRIMARY_FONT }}>
              PANAM® Tube Clamps cover the full range of pipe support configurations required
              in instrumentation and process installations — from compact twin series clamps
              for small bore tubing to heavy series clamps for large diameter pipes up to 219mm OD.
            </Typography>
            <Typography sx={{ color: '#555', lineHeight: 1.85, mb: 2.5, fontFamily: PRIMARY_FONT }}>
              All clamps are supplied as complete sets including plates, bolts, and PP jaws.
              Double layer clamps additionally include stacking bolts and a locking plate for
              multi-tube installations.
            </Typography>
            <Typography sx={{ color: '#555', lineHeight: 1.85, fontFamily: PRIMARY_FONT }}>
              DIN group sizing ensures straightforward selection by pipe OD.
              Dimensions are provided in mm across all series.
            </Typography>
          </Grid>
        </Grid>

        <Divider sx={{ mb: 8 }} />

        {/* CATEGORIES */}
        <Box id="categories" sx={{ mb: 10 }}>
          <Typography variant="overline" sx={{
            color: BRAND_BLUE, fontWeight: 700, letterSpacing: 3,
            fontSize: 11, fontFamily: PRIMARY_FONT, display: 'block', mb: 1,
          }}>
            Product Series
          </Typography>
          <Typography variant="h2" sx={{
            fontSize: { xs: 26, md: 32 }, fontWeight: 800, mb: 1.5,
            fontFamily: PRIMARY_FONT, color: '#1a1a1a', letterSpacing: '-0.02em',
          }}>
            Five series. One source.
          </Typography>
          <Typography sx={{
            color: '#666', fontFamily: PRIMARY_FONT, mb: 6, maxWidth: 560, lineHeight: 1.8,
          }}>
            Select by series to filter the full range by DIN group and pipe OD.
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

        {/* KEY FEATURES */}
        <Box sx={{ mb: 10 }}>
          <Typography variant="h3" sx={{
            fontSize: { xs: 24, md: 30 }, fontWeight: 800, mb: 2,
            fontFamily: PRIMARY_FONT, color: '#1a1a1a',
          }}>
            Why specify PANAM® Tube Clamps
          </Typography>
          <Typography sx={{
            color: '#666', lineHeight: 1.8, mb: 5, maxWidth: 620, fontFamily: PRIMARY_FONT,
          }}>
            Complete sets supplied as standard — no sourcing individual components.
            DIN group sizing for straightforward selection across all five series.
          </Typography>
          <Grid container spacing={2}>
            {[
              'Five series — Twin, Single Layer, Double Layer, Heavy Single and Heavy Double',
              'DIN Groups 1–10 across the full range',
              'Pipe OD coverage from 4mm to 219mm',
              'M6 through M30 bolt sizes',
              'PP jaws included in every set',
              'Double layer series includes stacking bolts and locking plate',
              'Heavy series rated for large diameter industrial pipe',
              'All dimensions in mm — reference drawings available',
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

        {/* CTA */}
        <Box sx={{ textAlign: 'center', py: 6 }}>
          <Typography variant="h3" sx={{
            fontSize: { xs: 24, md: 32 }, fontWeight: 800, mb: 2,
            fontFamily: PRIMARY_FONT, color: '#1a1a1a',
          }}>
            Specify your tube clamp
          </Typography>
          <Typography sx={{
            color: '#666', lineHeight: 1.8, mb: 4, maxWidth: 520,
            mx: 'auto', fontFamily: PRIMARY_FONT,
          }}>
            Send us your pipe OD, DIN group and series requirement. Our technical team
            responds to instrumentation enquiries within 24 hours.
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