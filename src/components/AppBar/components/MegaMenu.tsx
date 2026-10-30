import React, { useState } from "react";
import { Box, Container, Typography, Fade, Stack } from "@mui/material";
import Grid from "@mui/material/Grid";
import ChevronRightRoundedIcon from "@mui/icons-material/ChevronRightRounded";
import ArrowForwardRoundedIcon from "@mui/icons-material/ArrowForwardRounded";
import { type NavCategory, type NavSubItem, PRIMARY_FONT } from "./config";

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

// Floating rounded panel under the nav row.
// Up to three columns: categories (tier 2) -> items (tier 3) -> series (tier 4, on hover).
const MegaMenu: React.FC<MegaMenuProps> = ({ isOpen, menuData, activeTab, setActiveTab, handleNavigate }) => {
  const [hoveredName, setHoveredName] = useState<string | null>(null);

  if (!menuData || menuData.length === 0) return null;
  const single = menuData.length === 1;

  const items = activeTab?.items ?? [];
  // A third "series" column only appears when the active category has items with children.
  const showSeries = !single && items.some(i => i.children && i.children.length > 0);
  // Track the hovered child-bearing item; default to the first one so the pane is never empty.
  const hoveredItem: NavSubItem | null =
    items.find(i => i.name === hoveredName && i.children && i.children.length > 0) ??
    items.find(i => i.children && i.children.length > 0) ??
    null;

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
              {/* Tier 2 — Categories */}
              {!single && (
                <Grid size={{ md: 3 }} sx={{ p: 1.5, bgcolor: "#F7FAFC", borderRight: `1px solid ${BORDER}` }}>
                  <Stack spacing={0.5}>
                    {menuData.map(cat => {
                      const on = activeTab?.id === cat.id;
                      return (
                        <Box
                          key={cat.id}
                          onMouseEnter={() => {
                            setActiveTab(cat);
                            setHoveredName(null);
                          }}
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

              {/* Tier 3 — Items */}
              <Grid size={{ md: single ? 12 : showSeries ? 4 : 9 }} sx={{ p: { md: 4 }, borderRight: showSeries ? `1px solid ${BORDER}` : "none" }}>
                <Stack direction="row" alignItems="flex-start" justifyContent="space-between" sx={{ mb: 2.5 }}>
                  <Box>
                    {showSeries && (
                      <Typography sx={{ color: "#9AA8B6", fontWeight: 700, fontSize: "0.66rem", letterSpacing: "0.14em", mb: 0.4 }}>CATEGORY</Typography>
                    )}
                    <Typography sx={{ color: INK, fontWeight: 700, fontSize: "1.15rem", letterSpacing: "-0.01em" }}>{activeTab?.label}</Typography>
                  </Box>
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

                {showSeries ? (
                  // Single-column list so each row is a stable hover target for the series pane.
                  <Stack spacing={0.5}>
                    {items.map(item => {
                      const hasChildren = Boolean(item.children && item.children.length > 0);
                      const active = hasChildren && hoveredItem?.name === item.name;
                      return (
                        <Box
                          key={item.name}
                          onMouseEnter={() => hasChildren && setHoveredName(item.name)}
                          onClick={() => item.link && handleNavigate(item.link)}
                          sx={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "space-between",
                            gap: 1,
                            px: 2,
                            py: 1.35,
                            borderRadius: "12px",
                            fontSize: "0.9rem",
                            fontWeight: active ? 600 : 500,
                            color: active ? BRAND_DARK : "#3E5266",
                            bgcolor: active ? TINT : "transparent",
                            boxShadow: active ? `inset 3px 0 0 ${BRAND_BLUE}` : "none",
                            cursor: item.link ? "pointer" : "default",
                            transition: "all 0.2s ease",
                            "&:hover": item.link ? { color: BRAND_DARK, bgcolor: TINT } : {},
                          }}>
                          {item.name}
                          {hasChildren && <ChevronRightRoundedIcon sx={{ fontSize: 18, color: active ? BRAND_BLUE : "#8A99A8", flex: "none" }} />}
                        </Box>
                      );
                    })}
                  </Stack>
                ) : (
                  // No series under this category — keep the original multi-column card grid.
                  <Grid container spacing={1}>
                    {items.map(item => (
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
                )}
              </Grid>

              {/* Tier 4 — Series (children of the hovered item) */}
              {showSeries && (
                <Grid size={{ md: 5 }} sx={{ p: { md: 4 }, bgcolor: "#FBFDFE" }}>
                  {hoveredItem && (
                    <>
                      <Stack direction="row" alignItems="flex-start" justifyContent="space-between" sx={{ mb: 2.5 }}>
                        <Box>
                          <Typography sx={{ color: BRAND_BLUE, fontWeight: 700, fontSize: "0.66rem", letterSpacing: "0.14em", mb: 0.4 }}>SERIES</Typography>
                          <Typography sx={{ color: INK, fontWeight: 700, fontSize: "1rem", letterSpacing: "-0.01em" }}>{hoveredItem.name}</Typography>
                        </Box>
                        {hoveredItem.link && (
                          <Box
                            onClick={() => hoveredItem.link && handleNavigate(hoveredItem.link)}
                            sx={{
                              display: "inline-flex",
                              alignItems: "center",
                              gap: 0.75,
                              px: 1.5,
                              py: 0.6,
                              borderRadius: "999px",
                              bgcolor: TINT,
                              color: BRAND_DARK,
                              fontSize: "0.78rem",
                              fontWeight: 600,
                              cursor: "pointer",
                              transition: "all 0.2s ease",
                              "&:hover": { bgcolor: BRAND_BLUE, color: "#FFFFFF" },
                            }}>
                            View all <ArrowForwardRoundedIcon sx={{ fontSize: 15 }} />
                          </Box>
                        )}
                      </Stack>
                      <Grid container spacing={1}>
                        {hoveredItem.children?.map(series => (
                          <Grid size={{ xs: 12, sm: 6 }} key={series.name}>
                            <Box
                              onClick={() => series.link && handleNavigate(series.link)}
                              sx={{
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "space-between",
                                gap: 1,
                                px: 2,
                                py: 1.5,
                                borderRadius: "12px",
                                border: `1px solid ${BORDER}`,
                                bgcolor: "#FFFFFF",
                                fontSize: "0.88rem",
                                fontWeight: 500,
                                color: "#3E5266",
                                cursor: series.link ? "pointer" : "default",
                                transition: "all 0.2s ease",
                                "& .mm-arrow": { opacity: 0.35, color: "#8A99A8", transition: "all 0.2s ease" },
                                "&:hover": series.link
                                  ? { color: BRAND_DARK, bgcolor: TINT, borderColor: "rgba(1,176,240,0.45)", boxShadow: "0 8px 20px rgba(15,34,54,0.10)", transform: "translateY(-2px)", "& .mm-arrow": { opacity: 1, color: BRAND_BLUE } }
                                  : {},
                              }}>
                              {series.name}
                              {series.link && <ArrowForwardRoundedIcon className="mm-arrow" sx={{ fontSize: 15, color: BRAND_BLUE, flex: "none" }} />}
                            </Box>
                          </Grid>
                        ))}
                      </Grid>
                    </>
                  )}
                </Grid>
              )}
            </Grid>
          </Box>
        </Container>
      </Box>
    </Fade>
  );
};

export default MegaMenu;
