import React, { useState, useEffect } from 'react'
import { Box, InputBase, IconButton, Container } from '@mui/material'
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

const SearchBar: React.FC = () => {
  const [query, setQuery] = useState('')
  const [placeholder, setPlaceholder] = useState('')
  const [displayText, setDisplayText] = useState('')
  const [isTyping, setIsTyping] = useState(true)
  const [focused, setFocused] = useState(false)

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

  const handleSearch = () => {
    if (!query.trim()) return
    window.location.href = `/search?q=${encodeURIComponent(query.trim())}`
    setQuery('')
  }

  const handleEnter = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') handleSearch()
  }

  return (
    <Box
      sx={{
        backgroundColor: '#f5f5f5',
        borderTop: '1px solid #e0e0e0',
        borderBottom: '1px solid #e0e0e0',
        py: 1,
      }}
    >
      <Container maxWidth="xl">
        <Box display="flex" alignItems="center" gap={1.5}>

          {/* Search Input */}
          <Box
            sx={{
              flex: 1,
              display: 'flex',
              alignItems: 'center',
              backgroundColor: '#fff',
              border: '1px solid #e0e0e0',
              borderRadius: 1,
              px: 2,
              py: 0.5,
              gap: 1,
              '&:focus-within': {
                borderColor: BRAND_BLUE,
                boxShadow: `0 0 0 2px rgba(1,176,240,0.15)`,
              },
              transition: '0.2s',
            }}
          >
            <SearchIcon sx={{ color: '#999', fontSize: 20, flexShrink: 0 }} />

            <Box sx={{ flex: 1, position: 'relative' }}>
              <InputBase
                fullWidth
                value={query}
                onChange={e => setQuery(e.target.value)}
                onKeyDown={handleEnter}
                onFocus={() => setFocused(true)}
                onBlur={() => setFocused(false)}
                placeholder=""
                sx={{
                  fontFamily: PRIMARY_FONT,
                  fontSize: '0.875rem',
                  color: '#1a1a1a',
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
                    fontSize: '0.875rem',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '2px',
                  }}
                >
                  <Box component="span" sx={{ color: '#aaa' }}>
                    Search for{' '}
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
              px: 2.5,
              py: 1,
              borderRadius: 1,
              fontSize: '0.8rem',
              fontWeight: 600,
              fontFamily: PRIMARY_FONT,
              cursor: 'pointer',
              flexShrink: 0,
              '&:hover': { backgroundColor: '#0099d4' },
              transition: '0.2s',
              whiteSpace: 'nowrap',
            }}
          >
            Search
          </Box>

        </Box>
      </Container>
    </Box>
  )
}

export default SearchBar