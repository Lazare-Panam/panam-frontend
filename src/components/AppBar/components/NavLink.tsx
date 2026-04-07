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
            fontSize: 14,
          }}
        />
      )
    }
    sx={{
      color: "#1A1A1A",
      textTransform: "none",
      fontFamily: PRIMARY_FONT,
      fontSize: "0.775rem",
      fontWeight: 600,
      px: 2,
      "&:hover": { color: BRAND_BLUE },
    }}
  >
    {item.label}
  </Button>
);