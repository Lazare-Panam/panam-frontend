import React, { useState } from "react";
import { Drawer, Box, IconButton, Collapse, Stack, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import ExpandMoreRoundedIcon from "@mui/icons-material/ExpandMoreRounded";
import ArrowForwardRoundedIcon from "@mui/icons-material/ArrowForwardRounded";
import CreditCardOutlinedIcon from "@mui/icons-material/CreditCardOutlined";
import { NAV_LINKS, PRIMARY_FONT, navConfig } from "./config";

const BRAND_BLUE = "#01B0F0";
const BRAND_DARK = "#0089BD";
const INK = "#0F2236";
const BORDER = "#E5EAF0";

interface MobileDrawerProps {
  open: boolean;
  onClose: () => void;
}

const MobileDrawer: React.FC<MobileDrawerProps> = ({ open, onClose }) => {
  const navigate = useNavigate();
  const [expanded, setExpanded] = useState<string | null>(null);

  const go = (path: string) => {
    navigate(path);
    onClose();
  };

  return (
    <Drawer
      anchor="right"
      open={open}
      onClose={onClose}
      // Above the sticky AppBar (zIndex 1201) so the header never covers the menu
      sx={{ zIndex: 1300 }}
      slotProps={{
        paper: { sx: { width: "100%", maxWidth: 380, borderRadius: { xs: 0, sm: "24px 0 0 24px" }, fontFamily: PRIMARY_FONT, textTransform: "none" } },
        backdrop: { sx: { backgroundColor: "rgba(15,34,54,0.35)", backdropFilter: "blur(4px)" } },
      }}>
      {/* Header */}
      <Stack direction="row" alignItems="center" justifyContent="space-between" sx={{ px: 2.5, py: 2, borderBottom: `1px solid ${BORDER}` }}>
        <Box component="img" src="/brands/panam-logo-nav.png" alt="Panam logo" onClick={() => go("/")} sx={{ height: 34, cursor: "pointer" }} />
        <IconButton aria-label="Close menu" onClick={onClose} sx={{ width: 42, height: 42, border: `1px solid ${BORDER}`, borderRadius: "12px", color: INK }}>
          <CloseRoundedIcon />
        </IconButton>
      </Stack>

      {/* Links */}
      <Box sx={{ flex: 1, overflowY: "auto", px: 1.5, py: 1.5 }}>
        {NAV_LINKS.map(item => {
          const groups = item.hasMenu ? navConfig[item.id] ?? [] : [];
          const isOpen = expanded === item.id;
          return (
            <Box key={item.id} sx={{ mb: 0.5 }}>
              <Box
                component="button"
                type="button"
                onClick={() => (groups.length ? setExpanded(isOpen ? null : item.id) : go(item.path))}
                aria-expanded={groups.length ? isOpen : undefined}
                sx={{
                  width: "100%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  px: 2,
                  py: 1.75,
                  border: 0,
                  borderRadius: "14px",
                  bgcolor: isOpen ? "#EEF8FD" : "transparent",
                  color: isOpen ? BRAND_DARK : INK,
                  font: "inherit",
                  fontWeight: 600,
                  fontSize: "1.02rem",
                  cursor: "pointer",
                  textAlign: "left",
                  "&:hover": { bgcolor: "#F4F8FB" },
                }}>
                {item.label}
                {groups.length ? (
                  <ExpandMoreRoundedIcon sx={{ transition: "transform 0.25s", transform: isOpen ? "rotate(180deg)" : "none", color: isOpen ? BRAND_BLUE : "#8A99A8" }} />
                ) : (
                  <ArrowForwardRoundedIcon sx={{ fontSize: 18, color: "#8A99A8" }} />
                )}
              </Box>

              {groups.length > 0 && (
                <Collapse in={isOpen} unmountOnExit>
                  <Stack sx={{ pl: 2, pr: 1, py: 0.75, ml: 2, borderLeft: `2px solid ${BORDER}` }}>
                    {groups.map(g => (
                      <Box
                        key={g.id}
                        component="button"
                        type="button"
                        onClick={() => go(g.link)}
                        sx={{ display: "flex", alignItems: "center", justifyContent: "space-between", px: 1.5, py: 1.15, border: 0, borderRadius: "10px", bgcolor: "transparent", color: "#3E5266", font: "inherit", fontSize: "0.95rem", textAlign: "left", cursor: "pointer", "&:hover": { color: BRAND_DARK, bgcolor: "#EEF8FD" } }}>
                        {g.label}
                        <ArrowForwardRoundedIcon sx={{ fontSize: 15, opacity: 0.5 }} />
                      </Box>
                    ))}
                    <Box
                      component="button"
                      type="button"
                      onClick={() => go(item.path)}
                      sx={{ mt: 0.5, alignSelf: "flex-start", px: 1.5, py: 0.75, border: 0, borderRadius: "999px", bgcolor: "#EEF8FD", color: BRAND_DARK, font: "inherit", fontSize: "0.85rem", fontWeight: 600, cursor: "pointer" }}>
                      View all {item.label}
                    </Box>
                  </Stack>
                </Collapse>
              )}
            </Box>
          );
        })}
      </Box>

      {/* Footer CTA */}
      <Box sx={{ p: 2.5, borderTop: `1px solid ${BORDER}` }}>
        <Button
          fullWidth
          onClick={() => go("/credit-application")}
          startIcon={<CreditCardOutlinedIcon />}
          sx={{ py: 1.5, borderRadius: "12px", bgcolor: BRAND_BLUE, color: "#fff", fontWeight: 600, textTransform: "none", fontSize: "1rem", "&:hover": { bgcolor: BRAND_DARK } }}>
          Apply for Credit
        </Button>
      </Box>
    </Drawer>
  );
};

export default MobileDrawer;
