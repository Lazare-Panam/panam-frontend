import React, { useState, useEffect } from 'react'
import { Box, InputBase, IconButton, Container, Dialog, Typography, Stack } from '@mui/material'
import TrendingUpRoundedIcon from '@mui/icons-material/TrendingUpRounded'
import KeyboardReturnRoundedIcon from '@mui/icons-material/KeyboardReturnRounded'
import SearchIcon from '@mui/icons-material/Search'
import CloseIcon from '@mui/icons-material/Close'

const BRAND_BLUE = '#01B0F0'
const PRIMARY_FONT = '"Inter", "Roboto", "Helvetica", Arial, sans-serif'

const SEARCH_TERMS = [
  'Check Valves',
  'Ball Valves',
  'High Pressure Needle Valves',
  'Manifolds',
  'Double Block & Bleed',
  'Tube Fittings',
  'Relief Valves',
  'HP Ball Valves 20,000 psi',
  'NPT Female 3/8"',
  'SS 316 Needle Valve',
]

// `inline`: compact pill that sits inside the nav row (large screens); default: full-width row under the nav.
const SearchBar: React.FC<{ inline?: boolean }> = ({ inline = false }) => {
  const [query, setQuery] = useState('')
  const [placeholder, setPlaceholder] = useState('')
  const [displayText, setDisplayText] = useState('')
  const [isTyping, setIsTyping] = useState(true)
  const [focused, setFocused] = useState(false)
  const [overlayOpen, setOverlayOpen] = useState(false)

  // Pick a random term on mount and whenever we cycle
  useEffect(() => {
    const random = SEARCH_TERMS[Math.floor(Math.random() * SEARCH_TERMS.length)]
    setPlaceholder(random)
    setDisplayText('')
    setIsTyping(true)
  }, [])

  // Typewriter effect
  useEffect(() => {
    if (focused) return

    if (isTyping) {
      if (displayText.length < placeholder.length) {
        const timeout = setTimeout(() => {
          setDisplayText(placeholder.slice(0, displayText.length + 1))
        }, 60)
        return () => clearTimeout(timeout)
      } else {
        // Pause then start erasing
        const timeout = setTimeout(() => setIsTyping(false), 2000)
        return () => clearTimeout(timeout)
      }
    } else {
      if (displayText.length > 0) {
        const timeout = setTimeout(() => {
          setDisplayText(displayText.slice(0, -1))
        }, 30)
        return () => clearTimeout(timeout)
      } else {
        // Pick next random term
        const next = SEARCH_TERMS[Math.floor(Math.random() * SEARCH_TERMS.length)]
        setPlaceholder(next)
        setIsTyping(true)
      }
    }
  }, [displayText, isTyping, placeholder, focused])

  const runSearch = (q: string) => {
    if (!q.trim()) return
    window.location.href = `/search?q=${encodeURIComponent(q.trim())}`
    setQuery('')
  }
  const handleSearch = () => {
    // The compact pill opens the large search pop-up instead of searching from a cramped field
    if (inline && !overlayOpen) return setOverlayOpen(true)
    runSearch(query)
  }

  const handleEnter = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') handleSearch()
  }

  const field = (
        <Box
          display="flex"
          alignItems="center"
          gap={1}
          sx={{
            backgroundColor: '#F4F8FB',
            border: '1px solid #E3EAF0',
            borderRadius: inline ? '999px' : '14px',
            width: inline ? '100%' : 'auto',
            p: 0.625,
            pl: 0.5,
            transition: 'border-color 0.2s ease, box-shadow 0.2s ease, background-color 0.2s ease',
            '&:focus-within': {
              backgroundColor: '#FFFFFF',
              borderColor: BRAND_BLUE,
              boxShadow: '0 0 0 4px rgba(1,176,240,0.12)',
            },
          }}
        >

          {/* Search Input */}
          <Box
            sx={{
              flex: 1,
              display: 'flex',
              alignItems: 'center',
              px: 1.5,
              py: 0.25,
              gap: 1.25,
            }}
          >
            <SearchIcon sx={{ color: BRAND_BLUE, fontSize: 22, flexShrink: 0 }} />

            <Box sx={{ flex: 1, position: 'relative', minWidth: 0, overflow: 'hidden', whiteSpace: 'nowrap' }}>
              <InputBase
                fullWidth
                value={query}
                onChange={e => setQuery(e.target.value)}
                onKeyDown={handleEnter}
                onFocus={e => {
                  if (inline) {
                    e.currentTarget.blur()
                    setOverlayOpen(true)
                    return
                  }
                  setFocused(true)
                }}
                onBlur={() => setFocused(false)}
                placeholder=""
                sx={{
                  fontFamily: PRIMARY_FONT,
                  fontSize: '0.95rem',
                  color: '#0F2236',
                  width: '100%',
                }}
              />
              {/* Animated placeholder */}
              {!query && !focused && (
                <Box
                  sx={{
                    position: 'absolute',
                    top: '50%',
                    left: 0,
                    transform: 'translateY(-50%)',
                    pointerEvents: 'none',
                    fontFamily: PRIMARY_FONT,
                    fontSize: '0.95rem',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '2px',
                  }}
                >
                  <Box component="span" sx={{ color: '#7A8A99', mr: '6px' }}>
                    Search for
                  </Box>
                  <Box component="span" sx={{ color: BRAND_BLUE, fontWeight: 600 }}>
                    {displayText}
                  </Box>
                  {/* Blinking cursor */}
                  <Box
                    component="span"
                    sx={{
                      display: 'inline-block',
                      width: '1.5px',
                      height: '14px',
                      backgroundColor: BRAND_BLUE,
                      ml: '1px',
                      animation: 'blink 1s step-end infinite',
                      '@keyframes blink': {
                        '0%, 100%': { opacity: 1 },
                        '50%': { opacity: 0 },
                      },
                    }}
                  />
                </Box>
              )}
            </Box>

            {query && (
              <IconButton size="small" onClick={() => setQuery('')} sx={{ color: '#bbb', p: 0.5 }}>
                <CloseIcon sx={{ fontSize: 16 }} />
              </IconButton>
            )}
          </Box>

          {/* Button */}
          <Box
            onClick={handleSearch}
            sx={{
              backgroundColor: BRAND_BLUE,
              color: '#fff',
              px: inline ? 1.1 : { xs: 2.25, md: 3.5 },
              py: inline ? 1.1 : 1.1,
              borderRadius: inline ? '999px' : '10px',
              fontSize: '0.88rem',
              fontWeight: 600,
              fontFamily: PRIMARY_FONT,
              cursor: 'pointer',
              flexShrink: 0,
              '&:hover': { backgroundColor: '#0089BD', boxShadow: '0 6px 16px rgba(1,176,240,0.3)' },
              transition: '0.2s',
              whiteSpace: 'nowrap',
            }}
          >
            {inline ? <SearchIcon sx={{ fontSize: 18, display: 'block' }} /> : 'Search'}
          </Box>

        </Box>
  )

  const overlay = (
    <Dialog
      open={overlayOpen}
      onClose={() => setOverlayOpen(false)}
      fullWidth
      maxWidth="md"
      disableScrollLock
      slotProps={{
        backdrop: { sx: { backgroundColor: 'rgba(15,34,54,0.35)', backdropFilter: 'blur(6px)' } },
        paper: { sx: { alignSelf: 'flex-start', mt: { xs: 2, md: '12vh' }, borderRadius: '24px', overflow: 'hidden', boxShadow: '0 30px 80px rgba(15,34,54,0.28)', textTransform: 'none', fontFamily: PRIMARY_FONT } },
      }}
    >
      <Box component="form" role="search" onSubmit={e => { e.preventDefault(); runSearch(query) }} sx={{ display: 'flex', alignItems: 'center', gap: 1.5, px: { xs: 2, md: 3 }, py: { xs: 1.5, md: 2 }, borderBottom: '1px solid #E5EAF0' }}>
        <SearchIcon sx={{ color: BRAND_BLUE, fontSize: 28, flexShrink: 0 }} />
        <InputBase
          autoFocus
          fullWidth
          value={query}
          onChange={e => setQuery(e.target.value)}
          placeholder="Search by product, series or part number…"
          inputProps={{ 'aria-label': 'Search products' }}
          sx={{ fontFamily: PRIMARY_FONT, fontSize: { xs: '1.1rem', md: '1.35rem' }, fontWeight: 500, color: '#0F2236', '& input::placeholder': { color: '#8A99A8', opacity: 1 } }}
        />
        {query && (
          <IconButton aria-label="Clear" onClick={() => setQuery('')} sx={{ color: '#8A99A8', '& svg': { fontSize: 20 } }}>
            <CloseIcon />
          </IconButton>
        )}
        <Box
          component="button"
          type="submit"
          sx={{ display: 'inline-flex', alignItems: 'center', gap: 1, border: 0, cursor: 'pointer', bgcolor: BRAND_BLUE, color: '#fff', px: 2.5, py: 1.25, borderRadius: '12px', font: 'inherit', fontWeight: 600, fontSize: '0.95rem', flexShrink: 0, '&:hover': { bgcolor: '#0089BD' } }}
        >
          Search <KeyboardReturnRoundedIcon sx={{ fontSize: 18, display: { xs: 'none', sm: 'block' } }} />
        </Box>
        <IconButton
          aria-label="Close search"
          onClick={() => setOverlayOpen(false)}
          sx={{ flexShrink: 0, width: 44, height: 44, borderRadius: '12px', border: '1px solid #E5EAF0', color: '#64748B', transition: 'all 0.2s', '&:hover': { bgcolor: '#F4F8FB', color: '#0F2236', borderColor: '#CBD5E1' } }}
        >
          <CloseIcon />
        </IconButton>
      </Box>
      <Box sx={{ px: { xs: 2, md: 3 }, py: 2.5, bgcolor: '#F7FAFC' }}>
        <Stack direction="row" spacing={1} alignItems="center" sx={{ mb: 1.5, color: '#64748B' }}>
          <TrendingUpRoundedIcon sx={{ fontSize: 18 }} />
          <Typography sx={{ fontSize: '0.8rem', fontWeight: 700, letterSpacing: '0.06em', textTransform: 'uppercase', fontFamily: PRIMARY_FONT }}>Popular searches</Typography>
        </Stack>
        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
          {SEARCH_TERMS.map(t => (
            <Box
              key={t}
              component="button"
              type="button"
              onClick={() => runSearch(t)}
              sx={{ border: '1px solid #E5EAF0', bgcolor: '#fff', color: '#33475B', px: 1.75, py: 0.9, borderRadius: '999px', font: 'inherit', fontSize: '0.88rem', cursor: 'pointer', transition: 'all 0.2s', '&:hover': { borderColor: BRAND_BLUE, color: '#0089BD', bgcolor: '#EEF8FD' } }}
            >
              {t}
            </Box>
          ))}
        </Box>
        <Typography sx={{ mt: 2, fontSize: '0.78rem', color: '#8A99A8', fontFamily: PRIMARY_FONT }}>Press Enter to search · Esc to close</Typography>
      </Box>
    </Dialog>
  )

  if (inline)
    return (
      <>
        <Box onClick={() => setOverlayOpen(true)} sx={{ cursor: 'text' }}>{field}</Box>
        {overlay}
      </>
    )

  return (
    <Box sx={{ backgroundColor: '#FFFFFF', pb: 1.5, pt: { xs: 0.5, md: 0 } }}>
      <Container maxWidth="xl">{field}</Container>
    </Box>
  )
}

export default SearchBar