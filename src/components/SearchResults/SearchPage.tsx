// pages/SearchPage.tsx
import { useState, useEffect, useCallback } from 'react'
import { useSearchParams, useNavigate } from 'react-router-dom'
import {
  Box, TextField, Typography, Card, CardMedia, CardContent,
  Chip, Divider, CircularProgress, Pagination, Collapse,
  IconButton, InputAdornment, Badge
} from '@mui/material'
import SearchIcon from '@mui/icons-material/Search'
import TuneIcon from '@mui/icons-material/Tune'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import ExpandLessIcon from '@mui/icons-material/ExpandLess'
import ClearIcon from '@mui/icons-material/Clear'
import { searchApi, type SearchRequest, type ProductDocument, type SearchResult } from '../../api/searchApi'

const BRAND_BLUE = '#01B0F0'
const PRIMARY_FONT = '"Inter", "Roboto", "Helvetica", Arial, sans-serif'

const FACET_LABELS: Record<string, string> = {
  category: 'Category',
  productFamily: 'Product Family',
  series: 'Series',
  pressureRating: 'Pressure Rating',
  configuration: 'Configuration',
  connectionSize: 'Connection Size',
  connectionType: 'Connection Type',
  tubeSize: 'Tube Size',
  tubeUnit: 'Tube Unit',
  portThread: 'Port Thread',
  portSize: 'Port Size',
}

type Filters = Omit<SearchRequest, 'q' | 'page' | 'hitsPerPage'>

function highlightMatch(text: string | null | undefined, query: string) {
  if (!text || !query.trim()) return <span>{text ?? ''}</span>
  // Highlight each query WORD, not the whole phrase - so "male reducing nipple" lights up
  // "reducing" and "nipple" wherever they appear. Words absent from this card's text (like
  // "male" on a hex-nipple) simply don't match, which is expected.
  const tokens = query.trim().split(/\s+/).filter(Boolean)
  const escaped = tokens.map(t => t.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'))
  if (escaped.length === 0) return <span>{text}</span>
  const tokenSet = new Set(tokens.map(t => t.toLowerCase()))
  const regex = new RegExp(`(${escaped.join('|')})`, 'gi')
  const parts = text.split(regex)
  return (
    <>
      {parts.map((part, i) =>
        tokenSet.has(part.toLowerCase()) ? (
          <Box
            component="span"
            key={i}
            sx={{
              backgroundColor: '#FFF9C4',
              borderRadius: '2px',
              px: '2px',
              fontWeight: 700,
              color: BRAND_BLUE,
            }}
          >
            {part}
          </Box>
        ) : (
          <span key={i}>{part}</span>
        )
      )}
    </>
  )
}

function FacetGroup({
  facetKey,
  label,
  values,
  activeValue,
  onSelect,
}: {
  facetKey: string
  label: string
  values: Record<string, number>
  activeValue?: string
  onSelect: (key: string, value: string) => void
}) {
  const [open, setOpen] = useState(true)
  const entries = Object.entries(values).sort((a, b) => b[1] - a[1])
  if (entries.length === 0) return null

  return (
    <Box mb={2}>
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        onClick={() => setOpen(o => !o)}
        sx={{ cursor: 'pointer', py: 0.5 }}
      >
        <Typography
          variant="caption"
          fontWeight={700}
          letterSpacing={1}
          color="text.secondary"
          sx={{ fontFamily: PRIMARY_FONT, textTransform: 'uppercase' }}
        >
          {label}
        </Typography>
        {open ? <ExpandLessIcon fontSize="small" /> : <ExpandMoreIcon fontSize="small" />}
      </Box>
      <Collapse in={open}>
        <Box display="flex" flexDirection="column" gap={0.5} mt={0.5}>
          {entries.map(([value, count]) => {
            const active = activeValue === value
            return (
              <Box
                key={value}
                onClick={() => onSelect(facetKey, value)}
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                sx={{
                  px: 1.5,
                  py: 0.75,
                  borderRadius: 1,
                  cursor: 'pointer',
                  backgroundColor: active ? BRAND_BLUE : 'transparent',
                  color: active ? '#fff' : 'text.primary',
                  '&:hover': {
                    backgroundColor: active ? BRAND_BLUE : 'rgba(1,176,240,0.08)',
                  },
                  transition: 'background-color 0.15s',
                }}
              >
                <Typography
                  variant="body2"
                  sx={{ fontFamily: PRIMARY_FONT, fontSize: 13, fontWeight: active ? 600 : 400 }}
                >
                  {value}
                </Typography>
                <Typography
                  variant="caption"
                  sx={{ color: active ? 'rgba(255,255,255,0.75)' : 'text.disabled', ml: 1 }}
                >
                  {count}
                </Typography>
              </Box>
            )
          })}
        </Box>
      </Collapse>
      <Divider sx={{ mt: 1.5 }} />
    </Box>
  )
}

function ProductCard({ product, query }: { product: ProductDocument; query: string }) {
  const navigate = useNavigate()

  const handleClick = () => {
    const path = product.productUrl.replace('https://www.panamvalve.com', '')
    navigate(path)
  }

const descriptionLine = [
  product.tubeSize && `${product.tubeSize}${product.tubeUnit === 'Metric' ? 'mm' : '"'}`,
  product.portThread,
  product.portSize,
  product.configuration,
  product.connectionSize,
  product.connectionType,
  product.pressureRating,
].filter(Boolean).join(' · ')

  return (
    <Card
      onClick={handleClick}
      elevation={0}
      sx={{
        border: '1px solid',
        borderColor: 'grey.200',
        borderRadius: 2,
        cursor: 'pointer',
        transition: 'all 0.2s',
        '&:hover': {
          borderColor: BRAND_BLUE,
          boxShadow: `0 4px 20px rgba(1,176,240,0.15)`,
          transform: 'translateY(-2px)',
        },
        fontFamily: PRIMARY_FONT,
      }}
    >
      <CardMedia
        component="img"
        image={product.imageUrl}
        alt={product.partNumber}
        sx={{
          height: 160,
          objectFit: 'contain',
          backgroundColor: '#f8f9fa',
          p: 2,
        }}
      />
      <CardContent sx={{ p: 2, '&:last-child': { pb: 2 } }}>
        <Typography
          variant="caption"
          sx={{
            color: BRAND_BLUE,
            fontWeight: 600,
            fontFamily: PRIMARY_FONT,
            letterSpacing: 0.3,
          }}
        >
          {highlightMatch(product.productFamily, query)}
        </Typography>
        <Typography
          variant="subtitle2"
          fontWeight={700}
          sx={{ fontFamily: PRIMARY_FONT, mt: 0.5, mb: 1, fontSize: 13 }}
        >
          {highlightMatch(product.partNumber, query)}
        </Typography>
        <Box display="flex" flexWrap="wrap" gap={0.5}>
          {product.pressureRating && (
            <Chip
              label={product.pressureRating}
              size="small"
              sx={{ fontSize: 11, height: 20, backgroundColor: 'rgba(1,176,240,0.1)', color: BRAND_BLUE, fontWeight: 600 }}
            />
          )}
          {product.series && (
            <Chip
              label={`Series ${product.series}`}
              size="small"
              sx={{ fontSize: 11, height: 20 }}
            />
          )}
          {product.category && (
            <Chip
              label={product.category}
              size="small"
              sx={{ fontSize: 11, height: 20, backgroundColor: 'rgba(0,0,0,0.05)' }}
            />
          )}
        </Box>
        <Typography
          variant="caption"
          color="text.secondary"
          display="block"
          sx={{ mt: 1, fontFamily: PRIMARY_FONT, lineHeight: 1.6 }}
        >
          {highlightMatch(descriptionLine, query)}
        </Typography>
      </CardContent>
    </Card>
  )
}

export default function SearchPage() {
  const [searchParams] = useSearchParams()
  const [query, setQuery] = useState(searchParams.get('q') ?? '')
  const [filters, setFilters] = useState<Filters>({})
  const [results, setResults] = useState<SearchResult | null>(null)
  const [loading, setLoading] = useState(false)
  const [page, setPage] = useState(1)
  const HITS_PER_PAGE = 18

  useEffect(() => {
    const q = searchParams.get('q') ?? ''
    setQuery(q)
    setFilters({})
    setPage(1)
  }, [searchParams])

  const activeFilterCount = Object.values(filters).filter(Boolean).length

  const doSearch = useCallback(async () => {
    setLoading(true)
    try {
      const { data } = await searchApi.search({
        q: query,
        ...filters,
        page,
        hitsPerPage: HITS_PER_PAGE,
      })
      setResults(data)
    } finally {
      setLoading(false)
    }
  }, [query, filters, page])

  useEffect(() => {
    const timer = setTimeout(doSearch, 300)
    return () => clearTimeout(timer)
  }, [doSearch])

  const updateFilter = (key: string, value: string) => {
    setFilters(prev => ({
      ...prev,
      [key]: prev[key as keyof Filters] === value ? undefined : value,
    }))
    setPage(1)
  }

  const clearFilters = () => {
    setFilters({})
    setPage(1)
  }

  const totalPages = results ? Math.ceil(results.totalHits / HITS_PER_PAGE) : 0

  return (
    <Box display="flex" minHeight="calc(100vh - 90px)" fontFamily={PRIMARY_FONT} bgcolor="#fafafa">

      {/* Sidebar */}
      <Box
        sx={{
          width: 260,
          flexShrink: 0,
          backgroundColor: '#fff',
          borderRight: '1px solid',
          borderColor: 'grey.200',
          p: 2.5,
          overflowY: 'auto',
          position: 'sticky',
          top: 90,
          height: 'calc(100vh - 90px)',
        }}
      >
        <Box display="flex" justifyContent="space-between" alignItems="center" mb={2}>
          <Box display="flex" alignItems="center" gap={1}>
            <TuneIcon sx={{ fontSize: 18, color: BRAND_BLUE }} />
            <Typography variant="subtitle2" fontWeight={700} fontFamily={PRIMARY_FONT}>
              Filters
            </Typography>
            {activeFilterCount > 0 && (
              <Badge badgeContent={activeFilterCount} color="primary" sx={{ '& .MuiBadge-badge': { backgroundColor: BRAND_BLUE } }} />
            )}
          </Box>
          {activeFilterCount > 0 && (
            <Typography
              variant="caption"
              onClick={clearFilters}
              sx={{ color: BRAND_BLUE, cursor: 'pointer', fontWeight: 600, '&:hover': { textDecoration: 'underline' } }}
            >
              Clear all
            </Typography>
          )}
        </Box>

        <Divider sx={{ mb: 2 }} />

        {results?.facetDistribution &&
          Object.entries(FACET_LABELS).map(([key, label]) => {
            const facet = results.facetDistribution[key]
            if (!facet) return null
            return (
              <FacetGroup
                key={key}
                facetKey={key}
                label={label}
                values={facet}
                activeValue={filters[key as keyof Filters]}
                onSelect={updateFilter}
              />
            )
          })}
      </Box>

      {/* Main */}
      <Box flex={1} p={3}>

        {/* Search Bar */}
        <Box mb={3}>
          <TextField
            fullWidth
            value={query}
            onChange={e => { setQuery(e.target.value); setPage(1) }}
            placeholder="Search by part number, type, size, pressure rating..."
            variant="outlined"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon sx={{ color: BRAND_BLUE }} />
                </InputAdornment>
              ),
              endAdornment: query ? (
                <InputAdornment position="end">
                  <IconButton size="small" onClick={() => setQuery('')}>
                    <ClearIcon fontSize="small" />
                  </IconButton>
                </InputAdornment>
              ) : null,
              sx: {
                fontFamily: PRIMARY_FONT,
                borderRadius: 2,
                backgroundColor: '#fff',
                '& fieldset': { borderColor: 'grey.300' },
                '&:hover fieldset': { borderColor: BRAND_BLUE },
                '&.Mui-focused fieldset': { borderColor: BRAND_BLUE },
              },
            }}
          />
        </Box>

        {/* Active Filter Chips */}
        {activeFilterCount > 0 && (
          <Box display="flex" flexWrap="wrap" gap={1} mb={2}>
            {Object.entries(filters).map(([key, value]) =>
              value ? (
                <Chip
                  key={key}
                  label={`${FACET_LABELS[key] ?? key}: ${value}`}
                  onDelete={() => updateFilter(key, value)}
                  size="small"
                  sx={{
                    backgroundColor: 'rgba(1,176,240,0.1)',
                    color: BRAND_BLUE,
                    fontWeight: 600,
                    '& .MuiChip-deleteIcon': { color: BRAND_BLUE },
                  }}
                />
              ) : null
            )}
          </Box>
        )}

        {/* Results Header */}
        <Box display="flex" justifyContent="space-between" alignItems="center" mb={2}>
          <Typography variant="body2" color="text.secondary" fontFamily={PRIMARY_FONT}>
            {loading ? 'Searching...' : `${results?.totalHits ?? 0} products found`}
          </Typography>
        </Box>

        {/* Loading */}
        {loading && (
          <Box display="flex" justifyContent="center" py={8}>
            <CircularProgress sx={{ color: BRAND_BLUE }} />
          </Box>
        )}

        {/* Grid */}
        {!loading && (
          <Box
            display="grid"
            gridTemplateColumns="repeat(auto-fill, minmax(240px, 1fr))"
            gap={2}
          >
            {results?.hits.map((product: ProductDocument) => (
              <ProductCard key={product.id} product={product} query={query} />
            ))}
          </Box>
        )}

        {/* Empty State */}
        {!loading && results?.hits.length === 0 && (
          <Box textAlign="center" py={10}>
            <Typography variant="h6" color="text.secondary" fontFamily={PRIMARY_FONT}>
              No products found
            </Typography>
            <Typography variant="body2" color="text.disabled" mt={1}>
              Try a different search term or clear your filters
            </Typography>
          </Box>
        )}

        {/* Pagination */}
        {totalPages > 1 && !loading && (
          <Box display="flex" justifyContent="center" mt={4}>
            <Pagination
              count={totalPages}
              page={page}
              onChange={(_, val) => setPage(val)}
              sx={{
                '& .MuiPaginationItem-root.Mui-selected': {
                  backgroundColor: BRAND_BLUE,
                  color: '#fff',
                },
              }}
            />
          </Box>
        )}
      </Box>
    </Box>
  )
}