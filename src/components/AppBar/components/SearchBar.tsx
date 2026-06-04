import React, { useState } from 'react'

import { Box, InputBase, IconButton, Fade, } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search'
import CloseIcon from '@mui/icons-material/Close'

const BRAND_BLUE = '#01B0F0'
const PRIMARY_FONT = '"Inter", "Roboto", "Helvetica", Arial, sans-serif'

interface SearchBarProps {
  isSearchOpen: boolean
  onClose: () => void
}

const SearchBar: React.FC<SearchBarProps> = ({ isSearchOpen, onClose }) => {
  const [query, setQuery] = useState('')


const handleSearch = () => {
  if (!query.trim()) return
  window.location.href = `/search?q=${encodeURIComponent(query.trim())}`
  setQuery('')
  onClose()
}

  const handleEnter = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') handleSearch()
  }

  return (
    <Fade in={isSearchOpen} timeout={300}>
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          bottom: 0,
          left: 0,
          right: 0,
          backgroundColor: BRAND_BLUE,
          display: isSearchOpen ? 'flex' : 'none',
          alignItems: 'center',
          px: 3,
          zIndex: 1300,
        }}
      >
        <InputBase
          autoFocus
          value={query}
          onChange={e => setQuery(e.target.value)}
          onKeyDown={handleEnter}
          placeholder="Search by part number or description..."
          sx={{
            flex: 1,
            color: 'white',
            fontFamily: PRIMARY_FONT,
            fontSize: '1rem',
            borderBottom: '1px solid rgba(255,255,255,0.5)',
            '& input::placeholder': { color: 'rgba(255,255,255,0.7)', opacity: 1 },
          }}
        />
        <IconButton onClick={handleSearch} sx={{ color: 'white', p: 1.5 }}>
          <SearchIcon sx={{ fontSize: 22 }} />
        </IconButton>
        <IconButton onClick={onClose} sx={{ color: 'white', p: 1.5 }}>
          <CloseIcon sx={{ fontSize: 22 }} />
        </IconButton>
      </Box>
    </Fade>
  )
}

export default SearchBar