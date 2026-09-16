import React, { useEffect, useState } from "react"
import { Box, Container, Typography, CircularProgress, Alert, Button, Card, TextField, InputAdornment } from "@mui/material"
import { useParams, Link as RouterLink } from "react-router-dom"
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft"
import DownloadIcon from "@mui/icons-material/Download"
import SearchIcon from "@mui/icons-material/Search"
import ViewInArIcon from "@mui/icons-material/ViewInAr"
import { getTechnicalFiles, type TechnicalFile } from "../../api/technicalFileApi"
import { getCategory } from "./categories"

const PRIMARY_FONT = '"Inter", "Roboto", "Helvetica", Arial, sans-serif'
const BRAND_BLUE = "#01B0F0"

const FileRow: React.FC<{ file: TechnicalFile }> = ({ file }) => (
  <Card
    variant="outlined"
    sx={{
      borderRadius: 0,
      border: "1px solid #e8e8e8",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      gap: 2,
      px: { xs: 2, sm: 3 },
      py: 1.75,
      transition: "box-shadow 0.2s, border-color 0.2s",
      "&:hover": { boxShadow: "0 4px 18px rgba(1,176,240,0.10)", borderColor: "#cfeefb" },
    }}>
    <Box sx={{ display: "flex", alignItems: "center", gap: 1.5, minWidth: 0 }}>
      <ViewInArIcon sx={{ color: BRAND_BLUE, fontSize: 22, flexShrink: 0 }} />
      <Typography sx={{ fontWeight: 700, fontFamily: PRIMARY_FONT, color: "#1a1a1a", fontSize: "0.95rem", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
        {file.partNumber}
      </Typography>
    </Box>
    <Button
      component="a"
      href={file.blobUrl}
      download={file.fileName}
      variant="contained"
      size="small"
      startIcon={<DownloadIcon />}
      sx={{ bgcolor: BRAND_BLUE, color: "#fff", borderRadius: 0, fontWeight: 700, fontSize: 12, letterSpacing: 1, px: 2.5, py: 0.9, flexShrink: 0, "&:hover": { bgcolor: "#0090c8" } }}>
      DOWNLOAD
    </Button>
  </Card>
)

const CategoryStepFiles: React.FC = () => {
  const { category = "" } = useParams<{ category: string }>()
  const [files, setFiles] = useState<TechnicalFile[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState("")
  const [search, setSearch] = useState("")

  const meta = getCategory(category)

  useEffect(() => {
    let active = true
    setLoading(true)
    setError("")
    getTechnicalFiles(category)
      .then(data => {
        if (!active) return
        setFiles([...data].sort((a, b) => a.partNumber.localeCompare(b.partNumber)))
      })
      .catch(() => {
        if (active) setError("Could not load files. Please try again.")
      })
      .finally(() => {
        if (active) setLoading(false)
      })
    return () => {
      active = false
    }
  }, [category])

  const query = search.trim().toLowerCase()
  const filtered = query ? files.filter(f => f.partNumber.toLowerCase().includes(query)) : files

  return (
    <Box sx={{ bgcolor: "#fff", minHeight: "100vh" }}>
      <Container maxWidth="lg" sx={{ py: { xs: 6, md: 10 } }}>
        <Button
          component={RouterLink}
          to="/cad-step-files"
          startIcon={<ChevronLeftIcon />}
          sx={{ fontFamily: PRIMARY_FONT, fontWeight: 600, color: BRAND_BLUE, mb: 3, textTransform: "none" }}>
          All categories
        </Button>

        <Typography variant="overline" sx={{ color: BRAND_BLUE, fontWeight: 700, letterSpacing: 3, fontSize: 11, fontFamily: PRIMARY_FONT, display: "block", mb: 1 }}>
          CAD & STEP Files
        </Typography>
        <Typography variant="h2" sx={{ fontSize: { xs: 28, md: 40 }, fontWeight: 900, mb: 2, fontFamily: PRIMARY_FONT, color: "#1a1a1a", letterSpacing: "-0.02em" }}>
          {meta?.name ?? category}
        </Typography>
        <Typography sx={{ color: "#666", fontFamily: PRIMARY_FONT, mb: 5, maxWidth: 620, lineHeight: 1.8 }}>
          {meta?.description ?? "Download the 3D STEP models below. Use the search to jump straight to a part number."}
        </Typography>

        {loading && (
          <Box sx={{ display: "flex", justifyContent: "center", py: 10 }}>
            <CircularProgress sx={{ color: BRAND_BLUE }} />
          </Box>
        )}

        {!loading && error && <Alert severity="error" sx={{ fontFamily: PRIMARY_FONT }}>{error}</Alert>}

        {!loading && !error && files.length === 0 && (
          <Typography sx={{ fontFamily: PRIMARY_FONT, color: "#666" }}>No files available for this category yet.</Typography>
        )}

        {!loading && !error && files.length > 0 && (
          <>
            <TextField
              fullWidth
              placeholder="Search by part number..."
              value={search}
              onChange={e => setSearch(e.target.value)}
              sx={{ mb: 4, maxWidth: 420, "& .MuiOutlinedInput-root": { borderRadius: 0 } }}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon sx={{ color: BRAND_BLUE }} />
                  </InputAdornment>
                ),
              }}
            />

            {filtered.length === 0 ? (
              <Typography sx={{ fontFamily: PRIMARY_FONT, color: "#666" }}>No part numbers match "{search}".</Typography>
            ) : (
              <Box sx={{ display: "flex", flexDirection: "column", gap: 1.25, maxWidth: 720 }}>
                {filtered.map(file => (
                  <FileRow key={file.id} file={file} />
                ))}
              </Box>
            )}
          </>
        )}
      </Container>
    </Box>
  )
}

export default CategoryStepFiles
