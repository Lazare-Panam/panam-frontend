import { Button } from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

const BRAND_BLUE = "#01B0F0";
const PRIMARY_FONT = '"Inter", "Roboto", "Helvetica", Arial, sans-serif';

export const NavLink = ({ item, isOpen, onHover, onClick }: any) => (
  <Button
    onMouseEnter={onHover}
    onClick={onClick}
    endIcon={item.hasMenu && (
      <KeyboardArrowDownIcon sx={{ 
        transition: "0.2s", 
        transform: isOpen ? "rotate(180deg)" : "none",
        fontSize: 14
      }} />
    )}
    sx={{ 
      color: "#1A1A1A", textTransform: "none", fontFamily: PRIMARY_FONT, 
      fontWeight: 600, px: 2, "&:hover": { color: BRAND_BLUE } 
    }}
  >
    {item.label}
  </Button>
);