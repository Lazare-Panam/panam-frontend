import React, { useState } from "react"
import { Box, Fade, InputBase, IconButton } from "@mui/material"
import SearchIcon from "@mui/icons-material/Search"

const BRAND_BLUE = "#01B0F0"
const PRIMARY_FONT = '"Inter", "Roboto", "Helvetica", Arial, sans-serif'

interface SearchBarProps {
  isSearchOpen: boolean
  onSearch: (query: string) => void
}

const SearchBar: React.FC<SearchBarProps> = ({ isSearchOpen, onSearch }) => {
  const [query, setQuery] = useState("")

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && query.trim()) {
      onSearch(query)
    }
  }

  return (
    <Fade in={isSearchOpen} timeout={600}>
      <Box
        sx={{
          position: "absolute",
          top: 0, bottom: 0, left: 0, right: 0,
          width: isSearchOpen ? "100%" : "auto",
          backgroundColor: BRAND_BLUE,
          display: isSearchOpen ? "flex" : "none",
          alignItems: "center",
          px: 4,
          zIndex: 5,
          transition: "transform 0.5s ease-in-out",
          transform: isSearchOpen ? "translateX(0)" : "translateX(20px)",
        }}>
        <InputBase
          autoFocus
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Search by Swagelok model or Part Number"
          sx={{
            flex: 1,
            color: "white",
            fontFamily: PRIMARY_FONT,
            fontSize: "1.2rem",
            fontStyle: "italic",
            borderBottom: "1px solid white",
            "& input::placeholder": { color: "rgba(255,255,255,0.8)", opacity: 1 },
          }}
        />
        <IconButton onClick={() => query.trim() && onSearch(query)} sx={{ p: 4 }}>
          <SearchIcon sx={{ color: "white", fontSize: 35 }} />
        </IconButton>
      </Box>
    </Fade>
  )
}

export default SearchBar