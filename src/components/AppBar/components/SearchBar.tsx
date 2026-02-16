import { Box, Fade, InputBase } from "@mui/material"
const BRAND_BLUE = "#01B0F0"
const PRIMARY_FONT = '"Inter", "Roboto", "Helvetica", Arial, sans-serif'
import SearchIcon from "@mui/icons-material/Search"
interface SearchBarProps {
  isSearchOpen: boolean
}
const SearchBar: React.FC<SearchBarProps> = ({ isSearchOpen }) => {
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
          transition: "transform 0.5s ease-in-out",
          transform: isSearchOpen ? "translateX(0)" : "translateX(20px)",
        }}>
        <InputBase
          autoFocus
          placeholder="Search by model, part number or keyword"
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
        <SearchIcon sx={{ color: "white", fontSize: 35, ml: 2 }} />
      </Box>
    </Fade>
  )
}
export default SearchBar
