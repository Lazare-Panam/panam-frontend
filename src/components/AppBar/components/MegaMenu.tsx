import React from "react";
import { Box, Container, Typography, Fade, Stack } from "@mui/material";
import Grid from "@mui/material/Grid";
import ChevronRightRoundedIcon from "@mui/icons-material/ChevronRightRounded";
import ArrowForwardRoundedIcon from "@mui/icons-material/ArrowForwardRounded";
import { type NavCategory, PRIMARY_FONT } from "./config";

const BRAND_BLUE = "#01B0F0";
const BRAND_DARK = "#0089BD";
const INK = "#0F2236";
const BORDER = "#E5EAF0";
const TINT = "#EEF8FD";

interface MegaMenuProps {
  isOpen: boolean;
  menuData: NavCategory[];
  activeTab: NavCategory | null;
  setActiveTab: (tab: NavCategory) => void;
  handleNavigate: (link: string) => void;
}

// Floating rounded panel under the nav row: categories on the left, the active category's items on the right.
const MegaMenu: React.FC<MegaMenuProps> = ({ isOpen, menuData, activeTab, setActiveTab, handleNavigate }) => {
  if (!menuData || menuData.length === 0) return null;
  const single = menuData.length === 1;

  return (
    <Fade in={isOpen}>
      <Box sx={{ position: "absolute", top: { xs: 72, md: 78 }, left: 0, right: 0, zIndex: 5, fontFamily: PRIMARY_FONT, pt: 1, textTransform: "none" }}>
        <Container maxWidth="xl">
          <Box
            sx={{
              bgcolor: "#FFFFFF",
              borderRadius: "22px",
              border: `1px solid ${BORDER}`,
              boxShadow: "0 24px 60px rgba(15,34,54,0.14), 0 2px 6px rgba(15,34,54,0.04)",
              overflow: "hidden",
            }}>
            <Grid container sx={{ minHeight: 260 }}>
              {/* Categories */}
              {!single && (
                <Grid size={{ md: 3 }} sx={{ p: 1.5, bgcolor: "#F7FAFC", borderRight: `1px solid ${BORDER}` }}>
                  <Stack spacing={0.5}>
                    {menuData.map(cat => {
                      const on = activeTab?.id === cat.id;
                      return (
                        <Box
                          key={cat.id}
                          onMouseEnter={() => setActiveTab(cat)}
                          onClick={() => handleNavigate(cat.link)}
                          sx={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "space-between",
                            px: 2,
                            py: 1.35,
                            borderRadius: "12px",
                            cursor: "pointer",
                            fontSize: "0.92rem",
                            fontWeight: on ? 600 : 500,
                            color: on ? BRAND_DARK : "#33475B",
                            bgcolor: on ? "#FFFFFF" : "transparent",
                            boxShadow: on ? "0 4px 14px rgba(15,34,54,0.08)" : "none",
                            transition: "all 0.2s ease",
                            "&:hover": { color: BRAND_DARK, bgcolor: "#FFFFFF" },
                          }}>
                          {cat.label}
                          <ChevronRightRoundedIcon sx={{ fontSize: 18, opacity: on ? 1 : 0.35, color: on ? BRAND_BLUE : "inherit" }} />
                        </Box>
                      );
                    })}
                  </Stack>
                </Grid>
              )}

              {/* Items */}
              <Grid size={{ md: single ? 12 : 9 }} sx={{ p: { md: 4 } }}>
                <Stack direction="row" alignItems="center" justifyContent="space-between" sx={{ mb: 2.5 }}>
                  <Typography sx={{ color: INK, fontWeight: 700, fontSize: "1.15rem", letterSpacing: "-0.01em" }}>{activeTab?.label}</Typography>
                  {activeTab?.link && (
                    <Box
                      onClick={() => handleNavigate(activeTab.link)}
                      sx={{
                        display: "inline-flex",
                        alignItems: "center",
                        gap: 0.75,
                        px: 1.75,
                        py: 0.75,
                        borderRadius: "999px",
                        bgcolor: TINT,
                        color: BRAND_DARK,
                        fontSize: "0.82rem",
                        fontWeight: 600,
                        cursor: "pointer",
                        transition: "all 0.2s ease",
                        "&:hover": { bgcolor: BRAND_BLUE, color: "#FFFFFF" },
                      }}>
                      View all <ArrowForwardRoundedIcon sx={{ fontSize: 16 }} />
                    </Box>
                  )}
                </Stack>

                <Grid container spacing={1}>
                  {activeTab?.items?.map(item => (
                    <Grid size={{ xs: 12, sm: 6, md: 4 }} key={item.name}>
                      <Box
                        onClick={() => item.link && handleNavigate(item.link)}
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "space-between",
                          gap: 1,
                          px: 2,
                          py: 1.4,
                          borderRadius: "12px",
                          border: "1px solid transparent",
                          fontSize: "0.9rem",
                          color: "#3E5266",
                          cursor: item.link ? "pointer" : "default",
                          transition: "all 0.2s ease",
                          "& .mm-arrow": { opacity: 0, transform: "translateX(-4px)", transition: "all 0.2s ease" },
                          "&:hover": item.link
                            ? { color: BRAND_DARK, bgcolor: TINT, borderColor: "rgba(1,176,240,0.2)", "& .mm-arrow": { opacity: 1, transform: "none" } }
                            : {},
                        }}>
                        {item.name}
                        {item.link && <ArrowForwardRoundedIcon className="mm-arrow" sx={{ fontSize: 16, color: BRAND_BLUE, flex: "none" }} />}
                      </Box>
                    </Grid>
                  ))}
                </Grid>
              </Grid>
            </Grid>
          </Box>
        </Container>
      </Box>
    </Fade>
  );
};

export default MegaMenu;
