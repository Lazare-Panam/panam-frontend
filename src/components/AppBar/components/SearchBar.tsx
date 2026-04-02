import React, { useState, useRef } from "react"
import { useNavigate } from "react-router-dom"
import { Box, InputBase, IconButton, Fade, CircularProgress, Typography, Divider, Tooltip } from "@mui/material"
import SearchIcon from "@mui/icons-material/Search"
import { useQuery } from "@tanstack/react-query"
import { getAutocomplete, type AutocompleteResultDTO } from "../../../api/searchApi"

const BRAND_BLUE = "#01B0F0"
const PRIMARY_FONT = '"Inter", "Roboto", "Helvetica", Arial, sans-serif'

interface SearchBarProps {
  isSearchOpen: boolean
  onClose: () => void
}
const CATEGORY_ROUTES: Record<number, string> = {
  1: "/products/valve-manifolds", // ← replace with your actual manifolds config URL
}
const highlightMatch = (text: string | null, term: string) => {
  if (!text || !term) return <span>{text}</span>
  const regex = new RegExp(`(${term.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")})`, "gi")
  const parts = text.split(regex)
  return (
    <>
      {parts.map((part, i) =>
        regex.test(part) ? (
          <Box component="span" key={i} sx={{ fontWeight: 700, color: BRAND_BLUE }}>
            {part}
          </Box>
        ) : (
          <span key={i}>{part}</span>
        )
      )}
    </>
  )
}

const SearchBar: React.FC<SearchBarProps> = ({ isSearchOpen, onClose }) => {
  const [query, setQuery] = useState("")
  const [debouncedQuery, setDebouncedQuery] = useState("")
  const debounceRef = useRef<ReturnType<typeof setTimeout> | null>(null)
  const navigate = useNavigate()

  const { data: results = [], isFetching } = useQuery<AutocompleteResultDTO[]>({
    queryKey: ["autocomplete", debouncedQuery],
    queryFn: () => getAutocomplete(debouncedQuery),
    enabled: debouncedQuery.length >= 2,
    staleTime: 1000 * 30,
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value
    setQuery(val)
    if (debounceRef.current) clearTimeout(debounceRef.current)
    debounceRef.current = setTimeout(() => setDebouncedQuery(val), 300)
  }



  const handlePartNumberClick = (partNumber: string) => {
    setQuery("")
    setDebouncedQuery("")
    navigate(`/partNumber/${partNumber}`)
    onClose()
  }
const handleViewAll = (categoryId: number) => {
  setQuery("")
  setDebouncedQuery("")
  navigate(`/search/results?q=${encodeURIComponent(query)}&categoryId=${categoryId}`)
  onClose()
}

const handleEnter = (e: React.KeyboardEvent) => {
  if (e.key === "Enter" && query.trim()) {
    navigate(`/search/results?q=${encodeURIComponent(query.trim())}`)
    setQuery("")
    setDebouncedQuery("")
    onClose()
  }
}

  const grouped = results.reduce<Record<string, AutocompleteResultDTO[]>>((acc, item) => {
    if (!acc[item.categoryName]) acc[item.categoryName] = []
    acc[item.categoryName].push(item)
    return acc
  }, {})

  const showDropdown = debouncedQuery.length >= 2 && results.length > 0

  return (
    <Fade in={isSearchOpen} timeout={600}>
      <Box
        sx={{
          position: "absolute",
          top: 0,
          bottom: 0,
          left: 0,
          right: 0,
          backgroundColor: BRAND_BLUE,
          display: isSearchOpen ? "flex" : "none",
          alignItems: "center",
          px: 4,
          zIndex: 5,
        }}>
        <InputBase
          autoFocus
          value={query}
          onChange={handleChange}
          onKeyDown={handleEnter}
          placeholder="Search by part number or description..."
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
        <IconButton onClick={() => query.trim() && navigate(`/search/results?q=${encodeURIComponent(query.trim())}`)} sx={{ p: 4 }}>
          {isFetching ? <CircularProgress size={24} sx={{ color: "white" }} /> : <SearchIcon sx={{ color: "white", fontSize: 35 }} />}
        </IconButton>

        {showDropdown && (
          <Box
            sx={{
              position: "absolute",
              top: "100%",
              left: 0,
              right: 0,
              backgroundColor: "white",
              boxShadow: "0 8px 24px rgba(0,0,0,0.15)",
              zIndex: 10,
              maxHeight: 480,
              overflowY: "auto",
            }}>
            {Object.entries(grouped).map(([categoryName, items], idx) => (
              <Box key={categoryName}>
                {idx > 0 && <Divider />}

                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    px: 2,
                    py: 1,
                    backgroundColor: "#f5f5f5",
                  }}>
                  <Typography variant="caption" fontWeight={700} sx={{ color: BRAND_BLUE, textTransform: "uppercase", letterSpacing: 1 }}>
                    {categoryName}
                  </Typography>

                  <Tooltip title="Our Configurator allows you to configure the product" placement="top" arrow>
                    <Typography
                      variant="caption"
                      onClick={() => handleViewAll(items[0].categoryId)}
                      sx={{
                        color: BRAND_BLUE,
                        cursor: "pointer",
                        fontWeight: 600,
                        "&:hover": { textDecoration: "underline" },
                      }}>
                      Show all →
                    </Typography>
                  </Tooltip>
                </Box>

                {items.map(item => (
                  <Box
                    key={item.partNumber}
                    onClick={() => handlePartNumberClick(item.partNumber)}
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      gap: 2,
                      px: 2,
                      py: 1,
                      cursor: "pointer",
                      "&:hover": { backgroundColor: "#f0f9ff" },
                    }}>
                    {item.imageUrl && <Box component="img" src={item.imageUrl} alt={item.name} sx={{ width: 40, height: 40, objectFit: "contain", flexShrink: 0 }} />}
                    <Box>
                      <Typography variant="body2" fontWeight={600} sx={{ color: "#1a1a1a" }}>
                        {highlightMatch(item.partNumber, query)}
                      </Typography>
                      <Typography variant="caption" sx={{ color: "#666", display: "block" }}>
                        {item.name}
                      </Typography>
                      {item.snippet && (
                        <Typography variant="caption" sx={{ color: "#999", display: "block", mt: 0.3 }}>
                          {highlightMatch(item.snippet, query)}
                        </Typography>
                      )}
                    </Box>
                  </Box>
                ))}
              </Box>
            ))}
          </Box>
        )}
      </Box>
    </Fade>
  )
}

export default SearchBar
