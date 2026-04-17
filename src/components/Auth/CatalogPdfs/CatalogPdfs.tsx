import { useState } from "react"
import { useQuery } from "@tanstack/react-query"
import { Link } from "react-router-dom"
import { Box, Typography, Card, CardMedia, CardContent, Button, CircularProgress, Stack, TextField, InputAdornment, ButtonBase } from "@mui/material"

import Grid from "@mui/material/Grid"
import { PictureAsPdf as PdfIcon, OpenInNew as OpenIcon, Search as SearchIcon, LockOutlined as LockIcon } from "@mui/icons-material"
import { getallCatalogPdfs } from "../../../api/productApi"
import { useUserStore } from "../../store/useUserStore"

const BRAND_BLUE = "#01B0F0"
const TEXT_MAIN = "#1a1a1a"
const BORDER_COLOR = "#E2E8F0"
const PRIMARY_FONT = '"Inter", "Roboto", "Helvetica", Arial, sans-serif'

const CatalogPdfs = () => {
  const [searchTerm, setSearchTerm] = useState("")
  const { isAuthenticated } = useUserStore()

  const {
    data: catalogs,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["catalogs"],
    queryFn: getallCatalogPdfs,
    staleTime: 1000 * 60 * 10,
  })

  const filteredCatalogs = catalogs?.filter((catalog: any) => catalog.title.toLowerCase().includes(searchTerm.toLowerCase()))

  if (isLoading) {
    return (
      <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", height: "60vh" }}>
        <CircularProgress sx={{ color: BRAND_BLUE }} />
      </Box>
    )
  }

  if (isError) {
    return (
      <Box sx={{ p: 4, textAlign: "center" }}>
        <Typography color="error">Failed to load technical catalogs. Please contact support.</Typography>
      </Box>
    )
  }

  return (
    <>
    <title>Product Catalogs | Panam Valve</title>
      <meta name="description" content="Access Panam Valve's full range of technical product catalogs and engineering documentation. Registered partners get full access to high-resolution PDFs." />
      <link rel="canonical" href="https://www.panamvalve.com/catalogPdfs" />
      <meta property="og:title" content="Product Catalogs | Panam Valve" />
      <meta property="og:description" content="Technical catalogs and engineering specs for Panam Valve's full product range." />
      <meta property="og:url" content="https://www.panamvalve.com/catalogPdfs" />
      <meta property="og:type" content="website" />
      <meta name="robots" content="noindex, nofollow" />
    <Box sx={{ bgcolor: "#fff", minHeight: "100vh", pb: 10, position: "relative" }}>
      <Box sx={{ p: { xs: 3, md: 8 }, maxWidth: "1200px", margin: "0 auto" }}>
        {/* Header Section */}
        <Box
          sx={{
            mb: 6,
            display: "flex",
            flexDirection: "column",
            borderLeft: `6px solid ${BRAND_BLUE}`,
            pl: 3,
          }}>
          <Typography variant="h3" sx={{ fontWeight: 900, color: BRAND_BLUE, fontSize: "2.25rem", letterSpacing: -1, fontFamily: PRIMARY_FONT }}>
            PRODUCT CATALOGS
          </Typography>
          <Typography variant="body2" sx={{ color: "text.secondary", fontWeight: 600, textTransform: "uppercase", letterSpacing: 1, fontFamily: PRIMARY_FONT }}>
            CENTRALIZED TECHNICAL DOCUMENTATION
          </Typography>
        </Box>

        {/* Search Input */}
        <Box sx={{ mb: 6 }}>
          <TextField
            fullWidth
            placeholder="FILTER BY CATALOG TITLE..."
            variant="outlined"
            value={searchTerm}
            onChange={e => setSearchTerm(e.target.value)}
            slotProps={{
              input: {
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon sx={{ color: BRAND_BLUE }} />
                  </InputAdornment>
                ),
                sx: {
                  borderRadius: 0,
                  fontFamily: PRIMARY_FONT,
                  fontWeight: 700,
                  "& fieldset": { borderColor: BORDER_COLOR, borderWidth: "2px" },
                  "&:hover fieldset": { borderColor: BRAND_BLUE },
                  "&.Mui-focused fieldset": { borderColor: BRAND_BLUE },
                },
              },
            }}
          />
        </Box>

        {/* Main Content Area */}
        <Box sx={{ position: "relative" }}>
          {/* Blurred Catalog Grid */}
          <Grid
            container
            spacing={4}
            sx={{
              filter: !isAuthenticated ? "blur(3px)" : "none",
              pointerEvents: !isAuthenticated ? "none" : "auto", // Disable clicks if locked
              transition: "filter 0.4s ease",
            }}>
            {filteredCatalogs?.length > 0 ? (
              filteredCatalogs.map((catalog: any) => (
                <Grid size={{ xs: 12, sm: 6, md: 4 }} key={catalog.id}>
                  <Card
                    sx={{
                      borderRadius: 0,
                      border: `1px solid ${BORDER_COLOR}`,
                      boxShadow: "none",
                      height: "100%",
                      display: "flex",
                      flexDirection: "column",
                      transition: "0.2s ease-in-out",
                      "&:hover": {
                        transform: isAuthenticated ? "translateY(-4px)" : "none",
                        boxShadow: isAuthenticated ? `8px 8px 0px ${BORDER_COLOR}` : "none",
                      },
                    }}>
                    <ButtonBase component="a" href={isAuthenticated ? catalog.blobUrl : "#"} target="_blank" sx={{ width: "100%", display: "block", position: "relative" }}>
                      <CardMedia component="img" image={catalog.thumbnailUrl} alt={catalog.title} sx={{ height: 350, width: "100%" }} />
                      <Box sx={{ position: "absolute", top: 12, right: 12, bgcolor: BRAND_BLUE, color: "#fff", width: 32, height: 32, display: "flex", alignItems: "center", justifyContent: "center" }}>
                        <PdfIcon fontSize="small" />
                      </Box>
                    </ButtonBase>

                    <CardContent sx={{ p: 3, flexGrow: 1, borderTop: `1px solid ${BORDER_COLOR}` }}>
                      <Typography variant="subtitle1" sx={{ fontWeight: 800, color: TEXT_MAIN, mb: 2, textTransform: "uppercase" }}>
                        {catalog.title}
                      </Typography>
                      <Button fullWidth variant="contained" startIcon={<OpenIcon />} href={isAuthenticated ? catalog.blobUrl : "#"} target="_blank" sx={{ bgcolor: BRAND_BLUE, borderRadius: 0, fontWeight: 800, boxShadow: "none" }}>
                        OPEN PDF
                      </Button>
                    </CardContent>
                  </Card>
                </Grid>
              ))
            ) : (
              <Box sx={{ width: "100%", py: 10, textAlign: "center" }}>
                <Typography sx={{ fontWeight: 700, color: "text.disabled" }}>NO CATALOGS FOUND</Typography>
              </Box>
            )}
          </Grid>

          {/* Persistent Overlay for Non-Auth Users */}
          {!isAuthenticated && (
            <Box
              sx={{
                position: "absolute",
                top: "5%",
                left: "50%",
                transform: "translateX(-50%)",
                zIndex: 100,
                width: { xs: "90%", sm: "500px" },
              }}>
              <Card
                sx={{
                  p: 6,
                  borderRadius: 0,
                  textAlign: "center",
                  border: `4px solid ${BRAND_BLUE}`,
                  boxShadow: "20px 20px 0px rgba(0,0,0,0.1)",
                  bgcolor: "#fff",
                }}>
                <LockIcon sx={{ fontSize: 64, color: BRAND_BLUE, mb: 2 }} />
                <Typography variant="h5" sx={{ fontWeight: 900, mb: 2, fontFamily: PRIMARY_FONT }}>
                  TECHNICAL PORTAL LOCKED
                </Typography>
                <Typography variant="body1" sx={{ color: "text.secondary", mb: 4, fontWeight: 500, lineHeight: 1.6 }}>
                  Detailed engineering specs and high-resolution catalogs are reserved for registered Panam partners.
                </Typography>

                <Stack direction="column" spacing={2}>
                  <Button
                    component={Link}
                    to="/login"
                    variant="contained"
                    fullWidth
                    sx={{
                      bgcolor: BRAND_BLUE,
                      borderRadius: 0,
                      py: 1.5,
                      fontWeight: 900,
                      "&:hover": { bgcolor: "#0088BA" },
                    }}>
                    SIGN IN TO ACCESS
                  </Button>
                  <Typography variant="caption" sx={{ fontWeight: 700, color: "text.disabled" }}>
                    OR
                  </Typography>
                  <Button
                    component={Link}
                    to="/register"
                    variant="outlined"
                    fullWidth
                    sx={{
                      color: BRAND_BLUE,
                      borderColor: BRAND_BLUE,
                      borderRadius: 0,
                      py: 1.5,
                      fontWeight: 900,
                      borderWidth: "2px",
                      "&:hover": { borderWidth: "2px" },
                    }}>
                    CREATE AN ACCOUNT
                  </Button>
                </Stack>
              </Card>
            </Box>
          )}
        </Box>

        {/* Brand Footer Info */}
        <Stack direction="row" spacing={1.5} alignItems="center" sx={{ mt: 10, opacity: 0.7 }}>
          <Box sx={{ width: 8, height: 8, bgcolor: BRAND_BLUE, borderRadius: "50%" }} />
          <Typography variant="caption" sx={{ color: BRAND_BLUE, fontWeight: 900, letterSpacing: 1.5, textTransform: "uppercase" }}>
            Panam Cloud System / Secure Technical Distribution / 2026.03
          </Typography>
        </Stack>
      </Box>
    </Box>
    </>
    
  )
}

export default CatalogPdfs
