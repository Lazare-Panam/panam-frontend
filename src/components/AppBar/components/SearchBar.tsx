import React, { useState } from 'react'
import { Box, InputBase, IconButton, Container } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search'
import CloseIcon from '@mui/icons-material/Close'

const BRAND_BLUE = '#01B0F0'
const PRIMARY_FONT = '"Inter", "Roboto", "Helvetica", Arial, sans-serif'

const SearchBar: React.FC = () => {
  const [query, setQuery] = useState('')

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
            <InputBase
              fullWidth
              value={query}
              onChange={e => setQuery(e.target.value)}
              onKeyDown={handleEnter}
              placeholder="Search by part number, product type, size, pressure rating..."
              sx={{
                flex: 1,
                fontFamily: PRIMARY_FONT,
                fontSize: '0.875rem',
                color: '#1a1a1a',
                '& input::placeholder': { color: '#aaa', opacity: 1 },
              }}
            />
            {query && (
              <IconButton size="small" onClick={() => setQuery('')} sx={{ color: '#bbb', p: 0.5 }}>
                <CloseIcon sx={{ fontSize: 16 }} />
              </IconButton>
            )}
          </Box>

          {/* Button outside input, inside flex row */}
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