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
    id: 'connectors',
    title: 'Connectors',
    subtitle: 'Male & Female Connectors',
    description: 'Male and female connectors in 37° JIC flare. Available in JIC x NPT, JIC x BSPT, JIC x BSPP, JIC x SAE/MS and JIC Swivel configurations across a full size range.',
    image: 'https://pblol2.blob.core.windows.net/panam-images/products/jic/flare/male-connector-jic.jpg',
    tag: '37° Flared Tube Fittings',
    link: '/instrumentation-fittings/jic-fittings/connectors',
  },
  {
    id: 'unions-swivel',
    title: 'Unions & Swivel',
    subtitle: 'Unions, Large Hex, Swivel & Bulkhead',
    description: 'Standard unions, large hex unions, swivel unions, bulkhead unions and bulkhead lock nuts in 37° JIC flare. Designed for secure, repositionable connections in instrumentation tubing systems.',
    image: 'https://pblol2.blob.core.windows.net/panam-images/products/jic/flare/Union.jpg',
    tag: '37° Flared Tube Fittings',
    link: '/instrumentation-fittings/jic-fittings/unions-swivel',
  },
  {
    id: 'adapters-reducers',
    title: 'Adapters & Reducers',
    subtitle: 'Reducing Adapters & Sleeves',
    description: 'Reducing adapters and sleeves for transitioning between tube OD sizes in 37° JIC flare. Available in a full range of size combinations in both JIC and Metric tube OD.',
    image: 'https://pblol2.blob.core.windows.net/panam-images/products/jic/flare/reducing-adaptors.jpg',
    tag: '37° Flared Tube Fittings',
    link: '/instrumentation-fittings/jic-fittings/adapters-reducers',
  },
  {
    id: 'elbows',
    title: 'Elbows',
    subtitle: 'Male, 45°, Female, Union & Swivel Elbows',
    description: 'Male elbows, 45° male elbows, female elbows, union elbows, swivel union elbows and adjustable male elbows in 37° JIC flare. Available in JIC x NPT, BSPT, BSPP, SAE/MS and JIC Swivel.',
    image: 'https://pblol2.blob.core.windows.net/panam-images/products/jic/flare/male-elbow.jpg',
    tag: '37° Flared Tube Fittings',
    link: '/instrumentation-fittings/jic-fittings/elbows',
  },
  {
    id: 'tees',
    title: 'Tees',
    subtitle: 'Male, Female, Union, Swivel & Run Tees',
    description: 'Male branch tees, female branch tees, female run tees, union tees, swivel union tees, swivel run tees, swivel branch tees and union cross in 37° JIC flare.',
    image: 'https://pblol2.blob.core.windows.net/panam-images/products/jic/flare/male-branch-tees.jpg',
    tag: '37° Flared Tube Fittings',
    link: '/instrumentation-fittings/jic-fittings/tees',
  },
  {
    id: 'plugs-caps-nuts',
    title: 'Plugs, Caps & Nuts',
    subtitle: 'Nuts, Tube Caps, Cap Assembly & Plugs',
    description: 'Nuts, tube caps, tube cap assemblies and tube plugs in 37° JIC flare. Used for terminating and capping tube end connections across a full size range.',
    image: 'https://pblol2.blob.core.windows.net/panam-images/products/jic/flare/tube-plug.jpg',
    tag: '37° Flared Tube Fittings',
    link: '/instrumentation-fittings/jic-fittings/plugs-caps-nuts',
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
          SS316 Stainless Steel
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

export default function JICFittingsIndexPage() {
  return (
    <Box sx={{ bgcolor: '#fff', minHeight: '100vh' }}>

      {/* ── HERO ── */}
      <Box sx={{
        position: 'relative', width: '100%',
        minHeight: { xs: '60vh', md: '75vh' },
        display: 'flex', alignItems: 'center', overflow: 'hidden',
        backgroundImage: `linear-gradient(rgba(0,0,0,0.52), rgba(0,0,0,0.52)), url("https://pblol2.blob.core.windows.net/panam-images/products/jic/flare/flare-hero.jpg")`,
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
            37° Flared JIC Fittings
            <br />
            <span style={{ color: BRAND_BLUE }}>Leak-Tight. Every Flare.</span>
          </Typography>
          <Typography sx={{
            fontSize: { xs: 16, md: 19 }, color: 'rgba(255,255,255,0.88)',
            maxWidth: 580, mb: 5, lineHeight: 1.75, fontFamily: PRIMARY_FONT,
          }}>
            Male and female connectors, unions, elbows, tees and adapters in 37° JIC flare.
            Available across NPT, BSPT, BSPP, SAE/MS and Metric thread standards in SS316.
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
                'SS316 Stainless Steel',
                '37° JIC / SAE Flare',
                'NPT · BSPT · BSPP · SAE/MS · Metric',
                '1/8" to 2" tube OD range',
                'Male & Female Connectors',
                'Unions · Bulkhead · Swivel',
                'Reducing Adapters · Sleeves',
                'Full heat-code traceability',
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
              Every connection geometry.
              <br />
              One flare standard.
            </Typography>
            <Typography sx={{ color: '#555', lineHeight: 1.85, mb: 2.5, fontFamily: PRIMARY_FONT }}>
              PANAM® 37° Flared JIC Fittings cover the complete range of connection geometries
              required in hydraulic and instrumentation tubing systems — from standard male and
              female connectors to unions, elbows, tees and reducing adapters.
            </Typography>
            <Typography sx={{ color: '#555', lineHeight: 1.85, mb: 2.5, fontFamily: PRIMARY_FONT }}>
              All fittings are manufactured in SS316 as standard, conforming to SAE J514 and
              ISO 8434-2. Thread standards include NPT, ISO Tapered (BSPT), ISO Parallel (BSPP),
              SAE/MS Straight Thread and Metric.
            </Typography>
            <Typography sx={{ color: '#555', lineHeight: 1.85, fontFamily: PRIMARY_FONT }}>
              Full heat-code material traceability is provided on all components. Tube OD range
              covers 1/8" through 2" fractional and 3mm through 50mm metric.
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
            Six categories. Full coverage.
          </Typography>
          <Typography sx={{
            color: '#666', fontFamily: PRIMARY_FONT, mb: 6, maxWidth: 560, lineHeight: 1.8,
          }}>
            Select by fitting category to filter the full range by type, tube OD and thread standard.
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
            Why specify PANAM® JIC Fittings
          </Typography>
          <Typography sx={{
            color: '#666', lineHeight: 1.8, mb: 5, maxWidth: 620, fontFamily: PRIMARY_FONT,
          }}>
            Built to the same engineering standard as every PANAM® product — full traceability,
            broad thread standard coverage, and conformance to SAE J514 and ISO 8434-2.
          </Typography>
          <Grid container spacing={2}>
            {[
              'SS316 as standard — Duplex, Monel, Hastelloy on request',
              'Conforms to SAE J514 and ISO 8434-2',
              'NPT, BSPT, BSPP, SAE/MS and Metric thread standards',
              'Full heat-code traceability on all components',
              '1/8" to 2" fractional and 3–50mm metric tube OD',
              'NACE MR0175 certification available on request',
              'Male, female, swivel and bulkhead configurations',
              'Technical support from our instrumentation team',
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
            Specify your JIC fitting
          </Typography>
          <Typography sx={{
            color: '#666', lineHeight: 1.8, mb: 4, maxWidth: 520,
            mx: 'auto', fontFamily: PRIMARY_FONT,
          }}>
            Send us your tube OD, thread standard and configuration. Our technical team
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
  )
}