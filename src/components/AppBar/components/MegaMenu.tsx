import React from "react"
import { Box, Fade, Container, Stack, Typography } from "@mui/material"
// Import Grid2 specifically
import Grid from "@mui/material/Grid"

const BRAND_BLUE = "#01B0F0"
const PRIMARY_FONT = '"Inter", "Roboto", "Helvetica", Arial, sans-serif'

interface MegaMenuProps {
  isOpen: boolean
  menuData: any[]
  activeTab: any
  setActiveTab: (tab: any) => void
  handleNavigate: (link: string) => void
}

const MegaMenu: React.FC<MegaMenuProps> = ({ isOpen, menuData, activeTab, setActiveTab, handleNavigate }) => {
  return (
    <Fade in={isOpen}>
      <Box
        sx={{
          position: "absolute",
          top: { xs: 70, md: 90 },
          left: 0,
          right: 0,
          backgroundColor: "white",
          borderBottom: "1px solid #E0E0E0",
          boxShadow: "0px 15px 30px rgba(0,0,0,0.1)",
          zIndex: 4,
        }}>
        <Container maxWidth="xl" sx={{ p: 0 }}>
          {/* Main Grid Container using Grid2 */}
          <Grid container>
            
            {/* LEFT SIDEBAR: Categories */}
            <Grid 
              size={{ md: 3 }} 
              sx={{ 
                backgroundColor: "white", 
                py: 4, 
                borderRight: "1px solid #F0F0F0",
                minHeight: '450px' 
              }}
            >
              <Stack spacing={0.5}>
                {menuData.map((cat: any) => (
                  <Box
                    key={cat.id}
                    onMouseEnter={() => setActiveTab(cat)}
                    // Main category redirect if link exists
                    onClick={() => cat.link && handleNavigate(cat.link)}
                    sx={{
                      px: 4,
                      py: 2,
                      cursor: "pointer",
                      fontFamily: PRIMARY_FONT,
                      fontWeight: activeTab?.id === cat.id ? 700 : 500,
                      color: activeTab?.id === cat.id ? BRAND_BLUE : "#4A4A4A",
                      backgroundColor: activeTab?.id === cat.id ? "#F4FBFF" : "transparent",
                      transition: "all 0.2s ease",
                      borderLeft: activeTab?.id === cat.id ? `4px solid ${BRAND_BLUE}` : "4px solid transparent",
                      "&:hover": {
                        backgroundColor: "#F4FBFF",
                        color: BRAND_BLUE,
                      }
                    }}>
                    {cat.label}
                  </Box>
                ))}
              </Stack>
            </Grid>

            {/* RIGHT SIDE: Sub-Items Content */}
            <Grid 
              size={{ md: 9 }} 
              sx={{ backgroundColor: "#F9FAFB", py: 5, px: 6 }}
            >
              <Typography 
                variant="overline" 
                sx={{ 
                  color: BRAND_BLUE, 
                  fontWeight: 800, 
                  letterSpacing: 1.5, 
                  mb: 3, 
                  display: 'block',
                  opacity: 0.8 
                }}
              >
                {activeTab?.label || "Select a Category"}
              </Typography>

              {/* Nested Grid2 for sub-items */}
              <Grid container spacing={1}>
                {activeTab?.items?.map((item: any) => {
                  const isClickable = !!item.link;

                  return (
                    <Grid size={{ xs: 12, sm: 6, md: 4 }} key={item.name}>
                      <Box
                        onClick={() => isClickable && handleNavigate(item.link)}
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "space-between",
                          py: 1.5,
                          px: 2,
                          borderRadius: "6px",
                          cursor: isClickable ? "pointer" : "default",
                          color: "#333",
                          fontFamily: PRIMARY_FONT,
                          fontSize: "0.875rem",
                          fontWeight: 500,
                          transition: "all 0.2s ease",
                          border: "1px solid transparent",
                          // Hover logic only triggers if link exists
                          "&:hover": isClickable ? {
                            backgroundColor: "white",
                            color: BRAND_BLUE,
                            boxShadow: "0px 4px 12px rgba(0,0,0,0.06)",
                            transform: "translateX(4px)",
                            borderColor: "#E0E0E0"
                          } : {},
                        }}
                      >
                        <Typography sx={{ fontSize: 'inherit', fontWeight: 'inherit' }}>
                          {item.name}
                        </Typography>
                        
                        {isClickable && (
                          <Box 
                            component="span" 
                            className="arrow-icon"
                            sx={{ 
                              fontSize: '1rem', 
                              opacity: 0.3, 
                              transition: '0.2s',
                              // Shows blue arrow and full opacity on parent hover
                              '.MuiBox-root:hover &': { opacity: 1, color: BRAND_BLUE } 
                            }}
                          >
                            →
                          </Box>
                        )}
                      </Box>
                    </Grid>
                  );
                })}
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Fade>
  )
}

export default MegaMenu