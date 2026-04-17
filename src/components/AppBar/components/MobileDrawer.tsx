import React from "react";
import { Drawer, Box, Typography, IconButton, List, ListItem, ListItemButton, ListItemText } from "@mui/material";
import { useNavigate } from "react-router-dom";
import CloseIcon from "@mui/icons-material/Close";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { NAV_LINKS,  PRIMARY_FONT } from "./config";
const BRAND_BLUE = "#01B0F0"
interface MobileDrawerProps {
  open: boolean;
  onClose: () => void;
}

const MobileDrawer: React.FC<MobileDrawerProps> = ({ open, onClose }) => {
  const navigate = useNavigate();

  return (
    <Drawer
      anchor="right"
      open={open}
      onClose={onClose}
      slotProps={{ paper: { sx: { width: "100%", maxWidth: 350 } } }}
    >
      <Box sx={{ p: 2, display: "flex", justifyContent: "space-between", alignItems: "center", borderBottom: "1px solid #eee" }}>
        <Typography sx={{ fontWeight: 800, color: BRAND_BLUE, fontFamily: PRIMARY_FONT }}>MENU</Typography>
        <IconButton onClick={onClose}>
          <CloseIcon />
        </IconButton>
      </Box>
      <List sx={{ px: 2 }}>
        {NAV_LINKS.map((item) => (
          <ListItem key={item.id} disablePadding sx={{ borderBottom: "1px solid #f5f5f5" }}>
            <ListItemButton
              onClick={() => {
                navigate(item.path);
                onClose();
              }}
              sx={{ py: 2 }}
            >
              <ListItemText
                primary={item.label}
                slotProps={{ primary: { sx: { fontFamily: PRIMARY_FONT, fontWeight: 600, fontSize: "1rem" } } }}
              />
              <ArrowForwardIcon sx={{ fontSize: 16, color: "#ccc" }} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
};

export default MobileDrawer;