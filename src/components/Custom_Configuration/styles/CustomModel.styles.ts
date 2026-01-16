import { styled } from "@mui/material/styles"
import { Box, Button, MenuItem, Select, Typography } from "@mui/material"

export const SidebarContainer = styled(Box)({
  width: 220,
  backgroundColor: "#f5f5f5",
  borderRight: "1px solid #ddd",
  display: "flex",
  flexDirection: "column",
  flexShrink: 0,
  overflowY: "auto",
})

export const SidebarTitle = styled(Typography)({
  padding: "16px",
  fontWeight: "bold",
  fontSize: "0.9rem",
  color: "#333",
})

export const NavButton = styled(Button)({
  justifyContent: "flex-start",
  borderRadius: 0,
  padding: "16px",
  textTransform: "none",
  textAlign: "left",
  fontSize: "0.85rem",
  transition: "background-color 0.2s",
})

/*Middle Category*/
export const SelectionContainer = styled(Box)({
  flex: 1,
  backgroundColor: "#ffffff",
  padding: "32px",
  overflowY: "auto",
})

export const CategoryHeader = styled(Typography)({
  fontSize: "0.75rem",
  fontWeight: 800,
  color: "#01B0F0",
  letterSpacing: 1.5,
  marginBottom: "8px",
  display: "block",
})

export const SelectionDetailBox = styled(Box)({
  padding: "16px",
  backgroundColor: "#f9f9f9",
  borderLeft: "4px solid #01B0F0",
  marginTop: "24px",
})

export const CategoryTitle = styled(Typography)({
  marginBottom: "32px",
  fontWeight: 900,
  color: "#333",
  textTransform: "uppercase",
  fontSize: "1.5rem",
})

export const StyledSelect = styled(Select)({
  borderRadius: 0,
  ".MuiOutlinedInput-notchedOutline": {
    borderWidth: "2px",
    borderColor: "#ddd",
  },
  "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
    borderColor: "#01B0F0",
  },
})

export const StyledMenuItem = styled(MenuItem)({
  paddingTop: "12px",
  paddingBottom: "12px",
  display: "flex",
  justifyContent: "space-between",
  borderBottom: "1px solid #f0f0f0",
})

/* Right Column (Summary Sidebar) */
export const SummaryContainer = styled(Box)({
  width: 280,
  backgroundColor: "#f0f7ff",
  borderLeft: "1px solid #ddd",
  padding: "16px 16px 0px 16px",
  display: "flex",
  flexDirection: "column",
  overflowY: "auto",
})

export const SummaryHeader = styled(Typography)({
  marginBottom: "16px",
  fontSize: "0.7rem",
  fontWeight: 800,
  color: "#01B0F0",
  letterSpacing: 1.5,
  textTransform: "uppercase",
})
export const ActionButton = styled(Button)({
  borderRadius: 0,
  paddingTop: "10.4px",
  paddingBottom: "10.4px",
  textTransform: "none",
  fontWeight: 600,
  boxShadow: "none",
  "&:hover": { boxShadow: "none" },
})
