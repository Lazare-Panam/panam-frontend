import React, { useEffect, useState } from "react"
import { Alert, Box, ButtonBase, CircularProgress, Container, Grid, InputAdornment, Stack, TextField, Typography } from "@mui/material"
import { useParams, Link as RouterLink } from "react-router-dom"
import FileDownloadOutlinedIcon from "@mui/icons-material/FileDownloadOutlined"
import SearchRoundedIcon from "@mui/icons-material/SearchRounded"
import CloseRoundedIcon from "@mui/icons-material/CloseRounded"
import { getTechnicalFiles, TechnicalFileType, type TechnicalFile } from "../../api/technicalFileApi"
import { DRAWING_FILES } from "./drawings"
import { CATEGORIES, drawingKindFor, getCategory, type DrawingKind } from "./categories"
import CadDrawing from "./CadDrawing"
import { CategoryPage } from "../Common/CategoryIndexKit"
import { Eyebrow } from "../Landing2/homeStyles"
import { C, GRADIENT, RADIUS, SHADOW, cardSx } from "../Landing2/homeTokens"

// Part-number search is shown only above this many files
const SEARCH_MIN = 8

// Wraps every case-insensitive occurrence of `query` in `text` with a subtle highlight.
const highlightMatch = (text: string, query: string): React.ReactNode => {
  if (!query) return text
  const lower = text.toLowerCase()
  const q = query.toLowerCase()
  const parts: React.ReactNode[] = []
  let cursor = 0
  let key = 0
  let idx = lower.indexOf(q)
  while (idx !== -1) {
    if (idx > cursor) parts.push(text.slice(cursor, idx))
    parts.push(
      <Box key={key++} component="span" sx={{ backgroundColor: "rgba(1,176,240,0.18)", color: C.brandDark, borderRadius: "3px", px: "1px" }}>
        {text.slice(idx, idx + q.length)}
      </Box>
    )
    cursor = idx + q.length
    idx = lower.indexOf(q, cursor)
  }
  if (cursor < text.length) parts.push(text.slice(cursor))
  return parts
}

const extOf = (fileName: string) => fileName.split(".").pop()?.toUpperCase() ?? ""

const MONO = '"SFMono-Regular", Menlo, Consolas, monospace'

// One downloadable drawing file: glyph, full part number, download button — the whole card is the link
const FileTile: React.FC<{ file: TechnicalFile; query: string; kind: DrawingKind }> = ({ file, query, kind }) => {
  const ext = extOf(file.fileName)
  return (
    <Box
      component="a"
      href={file.blobUrl}
      download={file.fileName}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Download ${file.partNumber}`}
      sx={{
        ...cardSx,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        textAlign: "center",
        height: "100%",
        p: 1.5,
        pb: 2,
        textDecoration: "none",
        "&:hover": { borderColor: "rgba(1,176,240,0.45)", boxShadow: SHADOW.hover, transform: "translateY(-4px)" },
        "& .drawing-svg": { transition: "transform 0.35s ease" },
        "&:hover .drawing-svg": { transform: "scale(1.06)" },
        "&:hover .file-dl": { background: GRADIENT.brand, color: C.white, borderColor: "transparent" },
      }}>
      <Box sx={{ position: "relative", width: "100%", aspectRatio: "16 / 10", borderRadius: "12px", border: "1px solid rgba(1,176,240,0.18)", bgcolor: "#F3FAFE", backgroundImage: "linear-gradient(rgba(1,176,240,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(1,176,240,0.06) 1px, transparent 1px)", backgroundSize: "12px 12px", overflow: "hidden", p: 1.25, boxSizing: "border-box" }}>
        <CadDrawing kind={kind} />
        {ext && (
          <Box component="span" sx={{ position: "absolute", top: 8, right: 8, px: 0.9, py: 0.25, borderRadius: "5px", background: GRADIENT.brand, color: C.white, fontSize: "0.62rem", fontWeight: 800, letterSpacing: "0.08em", boxShadow: SHADOW.brand }}>
            {ext}
          </Box>
        )}
      </Box>
      <Typography sx={{ mt: 1.75, px: 0.5, fontFamily: MONO, fontWeight: 700, fontSize: { xs: "0.8rem", sm: "0.92rem" }, color: C.ink, overflowWrap: "break-word", lineHeight: 1.35, flexGrow: 1 }}>{highlightMatch(file.partNumber, query)}</Typography>
      <Stack className="file-dl" direction="row" alignItems="center" justifyContent="center" spacing={0.75} sx={{ mt: 1.5, width: "100%", py: 0.9, borderRadius: RADIUS.button, border: `1px solid ${C.border}`, bgcolor: C.white, color: C.brandDark, fontSize: "0.85rem", fontWeight: 700, transition: "all 0.25s ease", "& svg": { fontSize: 18 } }}>
        <FileDownloadOutlinedIcon />
        <span>Download</span>
      </Stack>
    </Box>
  )
}

const CategoryStepFiles: React.FC = () => {
  const { category = "" } = useParams<{ category: string }>()
  const [files, setFiles] = useState<TechnicalFile[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState("")
  const [search, setSearch] = useState("")

  const meta = getCategory(category)

  useEffect(() => {
    let active = true
    // STEP models come from the API; PDF drawings aren't in the API, so they're listed in drawings.ts
    // and shown straight away without waiting for it.
    const drawings = DRAWING_FILES.filter(d => d.category.toLowerCase() === category.toLowerCase())
    const sortByPart = (list: TechnicalFile[]) => [...list].sort((a, b) => a.partNumber.localeCompare(b.partNumber))
    setFiles(sortByPart(drawings))
    setLoading(drawings.length === 0)
    setError("")
    getTechnicalFiles(category)
      .then(data => {
        if (active) setFiles(sortByPart([...data, ...drawings]))
      })
      .catch(() => {
        if (active && !drawings.length) setError("Could not load files. Please try again.")
      })
      .finally(() => {
        if (active) setLoading(false)
      })
    return () => {
      active = false
    }
  }, [category])

  const hasDrawings = files.some(f => f.fileType === TechnicalFileType.Drawing)
  const hasModels = files.some(f => f.fileType !== TechnicalFileType.Drawing)
  const listTitle = hasDrawings && hasModels ? "Drawings & STEP Models" : hasDrawings ? "Drawings" : "STEP Models"

  const query = search.trim().toLowerCase()
  const filtered = query ? files.filter(f => f.partNumber.toLowerCase().includes(query)) : files

  return (
    <CategoryPage>
      {/* Compact light hero: copy on the left, the product floating on a soft glow on the right */}
      <Box component="section" sx={{ position: "relative", overflow: "hidden", background: GRADIENT.heroBg, pt: { xs: 4, md: 5 }, pb: { xs: 4, md: 5 } }}>
        <Container maxWidth="lg">
          <Grid container spacing={{ xs: 3, md: 6 }} alignItems="center">
            <Grid size={{ xs: 12, md: meta ? 8 : 12 }}>
              <Stack spacing={2.25}>
                <Box>
                  <Eyebrow>CAD & STEP Files</Eyebrow>
                </Box>
                <Typography component="h1" sx={{ fontWeight: 800, color: C.ink, letterSpacing: "-0.035em", lineHeight: 1.06, fontSize: { xs: "2.3rem", sm: "2.8rem", md: "3.2rem" } }}>
                  {meta?.name ?? category}
                </Typography>
                <Typography sx={{ color: C.muted, fontSize: { xs: "1rem", md: "1.08rem" }, lineHeight: 1.75, maxWidth: 640 }}>{meta?.description ?? "Download the 3D STEP models below. Use the search to jump straight to a part number."}</Typography>
                <Stack direction="row" sx={{ flexWrap: "wrap", gap: 1 }}>
                  {CATEGORIES.map(cat => {
                    const active = cat.category.toLowerCase() === category.toLowerCase()
                    return (
                      <Box
                        key={cat.category}
                        component={RouterLink}
                        viewTransition
                        to={`/cad-step-files/${encodeURIComponent(cat.category)}`}
                        aria-current={active ? "page" : undefined}
                        sx={{ px: 1.75, py: 0.75, borderRadius: RADIUS.pill, fontSize: "0.86rem", fontWeight: active ? 600 : 500, textDecoration: "none", border: `1px solid ${active ? C.ink : C.border}`, bgcolor: active ? C.ink : "rgba(255,255,255,0.85)", color: active ? C.white : C.text, transition: "all 0.2s ease", "&:hover": { borderColor: C.ink, color: active ? C.white : C.ink } }}>
                        {cat.name}
                      </Box>
                    )
                  })}
                </Stack>
              </Stack>
            </Grid>
            {meta && (
              <Grid size={{ md: 4 }} sx={{ display: { xs: "none", md: "flex" }, justifyContent: "center" }}>
                <Box sx={{ position: "relative", width: 260, height: 260, display: "grid", placeItems: "center" }}>
                  <Box aria-hidden sx={{ position: "absolute", inset: 0, borderRadius: "50%", background: `radial-gradient(circle, ${C.white} 0%, rgba(255,255,255,0.9) 45%, rgba(1,176,240,0.10) 70%, transparent 72%)` }} />
                  {meta.image ? (
                    <Box component="img" src={meta.image} alt={meta.name} sx={{ position: "relative", width: "100%", height: "100%", objectFit: "contain", mixBlendMode: "multiply", transform: "scale(1.15)" }} />
                  ) : (
                    <Box sx={{ position: "relative", width: "78%" }}>
                      <CadDrawing kind={drawingKindFor(category)} />
                    </Box>
                  )}
                </Box>
              </Grid>
            )}
          </Grid>
        </Container>
      </Box>

      <Box component="section" sx={{ bgcolor: C.white, py: { xs: 4, md: 6 } }}>
        <Container maxWidth="lg">
          {loading && (
            <Box sx={{ display: "flex", justifyContent: "center", py: 8 }}>
              <CircularProgress sx={{ color: C.brand }} />
            </Box>
          )}

          {!loading && error && (
            <Alert severity="error" sx={{ borderRadius: RADIUS.card }}>
              {error}
            </Alert>
          )}

          {!loading && !error && files.length === 0 && (
            <Box sx={{ ...cardSx, py: 6, px: 3, textAlign: "center" }}>
              <Typography sx={{ color: C.muted }}>No files available for this category yet.</Typography>
            </Box>
          )}

          {!error && files.length > 0 && (
            <Box>
              <Stack direction={{ xs: "column", sm: "row" }} alignItems={{ xs: "stretch", sm: "center" }} justifyContent="space-between" spacing={2} sx={{ mb: { xs: 3, md: 4 }, pb: 2, borderBottom: `1px solid ${C.border}` }}>
                <Stack direction="row" alignItems="baseline" spacing={1.25}>
                  <Typography component="h2" sx={{ fontWeight: 800, color: C.ink, fontSize: { xs: "1.3rem", md: "1.5rem" }, letterSpacing: "-0.02em" }}>
                    {listTitle}
                  </Typography>
                  <Typography sx={{ fontSize: "0.85rem", color: C.muted }}>{query ? `${filtered.length} of ${files.length}` : files.length} files</Typography>
                </Stack>
                {files.length > SEARCH_MIN && (
                  <TextField
                    size="small"
                    placeholder="Search by part number..."
                    value={search}
                    onChange={e => setSearch(e.target.value)}
                    sx={{ width: { xs: "100%", sm: 320 } }}
                    slotProps={{
                      htmlInput: { "aria-label": "Search by part number" },
                      input: {
                        startAdornment: (
                          <InputAdornment position="start">
                            <SearchRoundedIcon sx={{ color: C.muted }} />
                          </InputAdornment>
                        ),
                        endAdornment: search ? (
                          <InputAdornment position="end">
                            <ButtonBase onClick={() => setSearch("")} aria-label="Clear search" sx={{ borderRadius: "50%", p: 0.25, color: C.muted }}>
                              <CloseRoundedIcon fontSize="small" />
                            </ButtonBase>
                          </InputAdornment>
                        ) : null,
                        sx: { borderRadius: RADIUS.button, bgcolor: C.white, "& fieldset": { borderColor: C.border }, "&:hover fieldset": { borderColor: "rgba(1,176,240,0.5)" }, "&.Mui-focused fieldset": { borderColor: C.brand } },
                      },
                    }}
                  />
                )}
              </Stack>

              {filtered.length === 0 ? (
                <Box sx={{ ...cardSx, py: 6, px: 3, textAlign: "center" }}>
                  <Typography sx={{ color: C.muted }}>No part numbers match "{search}".</Typography>
                </Box>
              ) : (
                <Grid container spacing={{ xs: 1.5, md: 2.5 }}>
                  {filtered.map(file => (
                    <Grid key={file.id} size={{ xs: 6, sm: 4, md: 3, lg: 2.4 }}>
                      <FileTile file={file} query={query} kind={drawingKindFor(category)} />
                    </Grid>
                  ))}
                </Grid>
              )}
            </Box>
          )}
        </Container>
      </Box>
    </CategoryPage>
  )
}

export default CategoryStepFiles
