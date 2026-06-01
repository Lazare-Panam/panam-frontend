import { useNavigate } from 'react-router-dom'
import {
  Box, Typography, Stack, Chip, Button, Divider,
  Card, CardActionArea, CardContent,
} from '@mui/material'
import Grid from '@mui/material/Grid'
import { alpha } from '@mui/material/styles'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'
import { useCartStore } from '../store/useCartStore'

const BRAND_BLUE = '#01B0F0'
const PRIMARY_FONT = '"Inter", "Roboto", "Helvetica", Arial, sans-serif'

interface SpecItem { label: string; value: string }
interface ChipItem { label: string; color: string; variant?: 'filled' | 'outlined' }
interface RelatedItem {
  partNumber: string
  label: string
  image: string
  href: string
  chipLabel: string
  chipColor: string
}
interface CartItem {
  cartItemId: string
  id: string
  name: string
  image: string
  quantity: number
  partNumber: string
  specs: Record<string, string>
}

interface Props {
  backHref: string
  backLabel: string
  image: string
  partNumber: string
  title: string
  description: string
  chips?: ChipItem[]
  specs: SpecItem[]
  cartItem: CartItem
  related?: RelatedItem[]
}

function SpecBlock({ label, value }: SpecItem) {
  return (
    <Box sx={{ minWidth: 130 }}>
      <Typography variant="caption" color="text.secondary" fontWeight={700}
        sx={{ display: 'block', textTransform: 'uppercase', mb: 0.5, letterSpacing: 0.5, fontFamily: PRIMARY_FONT }}>
        {label}
      </Typography>
      <Typography variant="body2" fontWeight={700} sx={{ fontFamily: PRIMARY_FONT }}>
        {value}
      </Typography>
    </Box>
  )
}

export default function ProductDetailPage({
  backHref, backLabel, image, partNumber, title,
  description, chips, specs, cartItem, related = [],
}: Props) {
  const navigate = useNavigate()
  const addItem  = useCartStore(s => s.addItem)

  return (
    <Box sx={{ bgcolor: '#f8f9fa', minHeight: '100vh' }}>

      {/* ── BACK BAR ── */}
      <Box sx={{ bgcolor: 'background.paper', borderBottom: '1px solid rgba(0,0,0,0.07)', px: { xs: 2, md: 5 }, py: 1.5 }}>
        <Button
          startIcon={<ArrowBackIcon />}
          onClick={() => navigate(backHref)}
          sx={{ textTransform: 'none', color: 'text.secondary', fontWeight: 600, fontFamily: PRIMARY_FONT,
            '&:hover': { color: BRAND_BLUE, bgcolor: 'transparent' } }}
        >
          Back to {backLabel}
        </Button>
      </Box>

      <Box sx={{ maxWidth: 1200, mx: 'auto', px: { xs: 2, md: 5 }, py: { xs: 4, md: 6 } }}>
        <Grid container spacing={6}>

          {/* ── LEFT: Image ── */}
          <Grid size={{ xs: 12, md: 5 }}>
            <Box sx={{
              position: 'sticky', top: 24,
              bgcolor: '#fff',
              border: '1px solid rgba(0,0,0,0.08)',
              borderRadius: '12px',
              p: 5,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              minHeight: 380,
            }}>
              <Box component="img" src={image} alt={partNumber}
                sx={{ maxWidth: '100%', maxHeight: 300, objectFit: 'contain' }} />
            </Box>
          </Grid>

          {/* ── RIGHT: Detail ── */}
          <Grid size={{ xs: 12, md: 7 }}>

            {/* Chips */}
            {chips && chips.length > 0 && (
              <Stack direction="row" spacing={1} mb={2} flexWrap="wrap" gap={1}>
                {chips.map(c => (
                  <Chip key={c.label} label={c.label} size="small"
                    variant={c.variant === 'outlined' ? 'outlined' : 'filled'}
                    sx={{
                      fontWeight: 700, fontSize: '0.7rem',
                      ...(c.variant === 'outlined'
                        ? { borderColor: c.color, color: c.color }
                        : { bgcolor: alpha(c.color, 0.12), color: c.color }),
                    }}
                  />
                ))}
              </Stack>
            )}

            {/* Part number + title */}
            <Typography variant="caption"
              sx={{ fontFamily: 'monospace', color: BRAND_BLUE, fontWeight: 700, fontSize: '0.85rem', display: 'block', mb: 0.5 }}>
              {partNumber}
            </Typography>
            <Typography variant="h4" fontWeight={800} mb={3} sx={{ fontFamily: PRIMARY_FONT, lineHeight: 1.2 }}>
              {title}
            </Typography>

            {/* Description */}
            <Typography variant="body1" color="text.secondary" sx={{ lineHeight: 1.8, mb: 4, fontFamily: PRIMARY_FONT }}>
              {description}
            </Typography>

            <Divider sx={{ mb: 4 }} />

            {/* Specs */}
            <Typography variant="caption" fontWeight={900}
              sx={{ letterSpacing: 1.5, display: 'block', mb: 2.5, color: BRAND_BLUE, fontFamily: PRIMARY_FONT }}>
              SPECIFICATIONS
            </Typography>
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 3, mb: 4 }}>
              {specs.map(s => <SpecBlock key={s.label} {...s} />)}
            </Box>

            <Divider sx={{ mb: 4 }} />

            {/* Actions */}
            <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
              <Button
                variant="contained"
                size="large"
                startIcon={<ShoppingCartIcon />}
                onClick={() => addItem(cartItem)}
                sx={{
                  bgcolor: BRAND_BLUE, color: '#fff',
                  fontWeight: 700, textTransform: 'none',
                  borderRadius: '8px', px: 4, py: 1.5,
                  fontFamily: PRIMARY_FONT, boxShadow: 'none',
                  '&:hover': { bgcolor: '#0199d4', boxShadow: 'none' },
                }}
              >
                Add to Quote
              </Button>
              <Button
                variant="outlined"
                size="large"
                href={`mailto:sales@panamvalves.com?subject=Enquiry: ${partNumber}`}
                sx={{
                  borderColor: BRAND_BLUE, color: BRAND_BLUE,
                  fontWeight: 700, textTransform: 'none',
                  borderRadius: '8px', px: 4, py: 1.5,
                  fontFamily: PRIMARY_FONT,
                  '&:hover': { bgcolor: alpha(BRAND_BLUE, 0.05) },
                }}
              >
                Email Enquiry
              </Button>
            </Stack>
          </Grid>
        </Grid>

        {/* ── RELATED ── */}
        {related.length > 0 && (
          <Box sx={{ mt: 8 }}>
            <Divider sx={{ mb: 4 }} />
            <Typography variant="h6" fontWeight={800} mb={3} sx={{ fontFamily: PRIMARY_FONT }}>
              Related Products
            </Typography>
            <Grid container spacing={2}>
              {related.map(r => (
                <Grid size={{ xs: 12, sm: 6, md: 3 }} key={r.partNumber}>
                  <Card elevation={0} sx={{
                    border: '1px solid rgba(0,0,0,0.08)', borderRadius: '10px',
                    transition: 'all 0.15s ease',
                    '&:hover': { borderColor: BRAND_BLUE, boxShadow: `0 4px 16px ${alpha(BRAND_BLUE, 0.12)}`, transform: 'translateY(-2px)' },
                  }}>
                    <CardActionArea onClick={() => navigate(r.href)}>
                      <Box sx={{ p: 2, bgcolor: '#f8f9fa', display: 'flex', alignItems: 'center', justifyContent: 'center', height: 120 }}>
                        <Box component="img" src={r.image} alt={r.partNumber}
                          sx={{ maxHeight: 90, maxWidth: '100%', objectFit: 'contain' }} />
                      </Box>
                      <CardContent sx={{ p: 2 }}>
                        <Typography variant="caption"
                          sx={{ fontFamily: 'monospace', fontWeight: 700, color: BRAND_BLUE, display: 'block', mb: 0.5 }}>
                          {r.partNumber}
                        </Typography>
                        <Typography variant="caption" color="text.secondary"
                          sx={{ display: 'block', mb: 1, fontFamily: PRIMARY_FONT, fontSize: '0.72rem' }}>
                          {r.label}
                        </Typography>
                        <Chip label={r.chipLabel} size="small"
                          sx={{ fontSize: '0.62rem', fontWeight: 700, bgcolor: alpha(r.chipColor, 0.1), color: r.chipColor }} />
                      </CardContent>
                    </CardActionArea>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Box>
        )}
      </Box>
    </Box>
  )
}