import React from 'react'
import {
  Box, Container, Typography, Grid, Divider, Button,
  Card, CardMedia, CardContent,
} from '@mui/material'
import { Link as RouterLink } from "react-router-dom"
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
    description: 'Male and female weld connectors in tube socket weld configuration. Available across NPT thread standards in fractional inch and metric tube OD sizes.',
    image: 'https://pblol2.blob.core.windows.net/panam-images/products/weld-fittings/male-connector-weld.jpg',
    tag: 'Weld Fittings',
    link: '/instrumentation-fittings/weld-fittings/connectors',
  },
  {
    id: 'elbows',
    title: 'Elbows',
    subtitle: 'Male & Female Elbows',
    description: 'Male and female weld elbows in tube socket weld configuration. Available across NPT thread standards in fractional inch tube OD sizes from 1/8" to 1-1/2".',
    image: 'https://pblol2.blob.core.windows.net/panam-images/products/weld-fittings/elbow-weld.jpg',
    tag: 'Weld Fittings',
    link: '/instrumentation-fittings/weld-fittings/elbows',
  },
  {
    id: 'tees',
    title: 'Tees',
    subtitle: 'Male Run & Branch Tees',
    description: 'Male run and branch tees in tube socket weld configuration. Available across NPT thread standards in fractional inch tube OD sizes from 1/8" to 2".',
    image: 'https://pblol2.blob.core.windows.net/panam-images/products/weld-fittings/male-run-tee-weld.jpg',
    tag: 'Weld Fittings',
    link: '/instrumentation-fittings/weld-fittings/tees',
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

export default function WeldFittingsIndexPage() {
  return (
    <>
      <title>Weld Fittings | Socket & Butt Weld | PANAM®</title>
      <meta name="description" content={'PANAM® weld fittings in socket & butt weld configurations for permanent, high-integrity connections in hydrogen systems, chemical processing & industrial gas. To 10,000 psig.'} />
      <link rel="canonical" href="https://www.panamvalves.com/instrumentation-fittings/weld-fittings" />
      <meta name="robots" content="index, follow" />

      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="Panam Valves" />
      <meta property="og:title" content="Weld Fittings | Socket & Butt Weld | PANAM®" />
      <meta property="og:description" content={'PANAM® socket & butt weld fittings for permanent, high-integrity connections in hydrogen, chemical & industrial gas systems. SS316, Duplex, Monel & Hastelloy.'} />
      <meta property="og:url" content="https://www.panamvalves.com/instrumentation-fittings/weld-fittings" />
      <meta property="og:image" content="https://pblol2.blob.core.windows.net/panam-images/products/weld-fittings/connector-weld.jpg" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Weld Fittings | Socket & Butt Weld | PANAM®" />
      <meta name="twitter:description" content={'PANAM® socket & butt weld fittings for permanent, high-integrity connections in hydrogen, chemical & industrial gas systems. SS316, Duplex, Monel & Hastelloy.'} />
      <meta name="twitter:image" content="https://pblol2.blob.core.windows.net/panam-images/products/weld-fittings/connector-weld.jpg" />

    <Box sx={{ bgcolor: '#fff', minHeight: '100vh' }}>

      {/* HERO */}
      <Box sx={{
        position: 'relative', width: '100%',
        minHeight: { xs: '60vh', md: '75vh' },
        display: 'flex', alignItems: 'center', overflow: 'hidden',
        backgroundImage: `linear-gradient(rgba(0,0,0,0.52), rgba(0,0,0,0.52)), url("https://pblol2.blob.core.windows.net/panam-images/website-media/guille-b-ONZIRho_-TM-unsplash.jpg")`,
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
            Weld Fittings
            <br />
            <span style={{ color: BRAND_BLUE }}>Precision. Every Weld.</span>
          </Typography>
          <Typography sx={{
            fontSize: { xs: 16, md: 19 }, color: 'rgba(255,255,255,0.88)',
            maxWidth: 580, mb: 5, lineHeight: 1.75, fontFamily: PRIMARY_FONT,
          }}>
            Tube socket weld, tube butt weld and pipe socket weld fittings in SS316.
            Available across NPT, BSPT and BSPP thread standards in fractional inch and metric sizes.
          </Typography>
          <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
<Button
  component={RouterLink}
  to="/instrumentation-fittings/weld-fittings/all"
  variant="contained"
  size="large"
  sx={{
    bgcolor: BRAND_BLUE, color: '#fff', borderRadius: 0,
    px: 4, py: 1.5, fontWeight: 700, fontFamily: PRIMARY_FONT,
    '&:hover': { bgcolor: '#0090c8' },
  }}
>
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
                'SS316 Stainless Steel',
                'Tube Socket Weld · Butt Weld · Pipe Socket Weld',
                'NPT · BSPT · BSPP',
                '1/8" to 2" fractional · 6mm to 38mm metric',
                'Male & Female Connectors',
                'Elbows · Tees · Unions',
                'Full heat-code traceability',
                'NACE MR0175 on request',
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
              Every weld configuration.
              <br />
              One trusted source.
            </Typography>
            <Typography sx={{ color: '#555', lineHeight: 1.85, mb: 2.5, fontFamily: PRIMARY_FONT }}>
              PANAM® Weld Fittings cover the complete range of connection geometries required
              in instrumentation and process piping — from standard male and female connectors
              to elbows, tees and unions in both socket weld and butt weld configurations.
            </Typography>
            <Typography sx={{ color: '#555', lineHeight: 1.85, mb: 2.5, fontFamily: PRIMARY_FONT }}>
              All fittings are manufactured in SS316 as standard. Thread standards include NPT,
              ISO Tapered (BSPT) and ISO Parallel (BSPP). Available in both fractional inch
              and metric tube OD sizes.
            </Typography>
            <Typography sx={{ color: '#555', lineHeight: 1.85, fontFamily: PRIMARY_FONT }}>
              Full heat-code material traceability is provided on all components. Size range
              covers 1/8" through 2" fractional and 6mm through 38mm metric.
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
            Product Categories
          </Typography>
          <Typography variant="h2" sx={{
            fontSize: { xs: 26, md: 32 }, fontWeight: 800, mb: 1.5,
            fontFamily: PRIMARY_FONT, color: '#1a1a1a', letterSpacing: '-0.02em',
          }}>
            Two categories. Every weld configuration.
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

        {/* KEY FEATURES */}
        <Box sx={{ mb: 10 }}>
          <Typography variant="h3" sx={{
            fontSize: { xs: 24, md: 30 }, fontWeight: 800, mb: 2,
            fontFamily: PRIMARY_FONT, color: '#1a1a1a',
          }}>
            Why specify PANAM® Weld Fittings
          </Typography>
          <Typography sx={{
            color: '#666', lineHeight: 1.8, mb: 5, maxWidth: 620, fontFamily: PRIMARY_FONT,
          }}>
            Built to the same engineering standard as every PANAM® product — full traceability,
            broad thread standard coverage, and availability in both inch and metric sizes.
          </Typography>
          <Grid container spacing={2}>
            {[
              'SS316 as standard — Duplex, Monel, Hastelloy on request',
              'Tube Socket Weld, Butt Weld and Pipe Socket Weld',
              'NPT, BSPT and BSPP thread standards',
              'Full heat-code traceability on all components',
              '1/8" to 2" fractional and 6–38mm metric tube OD',
              'NACE MR0175 certification available on request',
              'Male, female and union configurations',
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

        {/* CTA */}
        <Box sx={{ textAlign: 'center', py: 6 }}>
          <Typography variant="h3" sx={{
            fontSize: { xs: 24, md: 32 }, fontWeight: 800, mb: 2,
            fontFamily: PRIMARY_FONT, color: '#1a1a1a',
          }}>
            Specify your weld fitting
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
    </>

  )
}