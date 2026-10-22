import React from "react";
import { Button } from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

const BRAND_BLUE = "#01B0F0";
const PRIMARY_FONT = '"Inter", "Roboto", "Helvetica", Arial, sans-serif';

// 1. Define the shape of a single Navigation Item
interface NavItem {
  id: string | number;
  label: string;
  path: string;
  hasMenu?: boolean;
}

// 2. Define the Props for the NavLink component
interface NavLinkProps {
  item: NavItem;
  isOpen: boolean;
  onHover: () => void;
  onClick: () => void;
}

export const NavLink: React.FC<NavLinkProps> = ({ item, isOpen, onHover, onClick }) => (
  <Button
    onMouseEnter={onHover}
    onClick={onClick}
    endIcon={
      item.hasMenu && (
        <KeyboardArrowDownIcon
          sx={{
            transition: "0.2s",
            transform: isOpen ? "rotate(180deg)" : "none",
            fontSize: 16,
          }}
        />
      )
    }
    sx={{
      color: isOpen ? BRAND_BLUE : "#22364A",
      bgcolor: isOpen ? "rgba(1,176,240,0.08)" : "transparent",
      textTransform: "none",
      fontFamily: PRIMARY_FONT,
      fontSize: { md: "0.86rem", lg: "0.9rem" },
      fontWeight: 500,
      letterSpacing: "-0.005em",
      whiteSpace: "nowrap",
      flexShrink: 0,
      px: { md: 0.9, lg: 1.25 },
      py: 1,
      borderRadius: "10px",
      transition: "color 0.2s ease, background-color 0.2s ease",
      "& .MuiButton-endIcon": { ml: 0.5 },
      "&:hover": { color: BRAND_BLUE, bgcolor: "rgba(1,176,240,0.08)" },
    }}
  >
    {item.label}
  </Button>
);