import { useState } from "react"
import {
  Box, Container, Typography, Table, TableBody, TableCell, TableContainer,
  TableHead, TableRow, TableSortLabel, Collapse, Chip, Stack, IconButton, Button,
} from "@mui/material"
import { alpha } from "@mui/material/styles"
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown"
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp"
import {
  SWIVEL_GAUGE_ADAPTORS_DATA,
  SWIVEL_GAUGE_DESCRIPTION,
  type SwivelGaugeAdaptorDTO,
} from "./hooks/swivelGaugeAdaptorsData"
import { useCartStore } from "../store/useCartStore"

const BRAND_BLUE = "#01B0F0"
const PRIMARY_FONT = '"Inter", "Roboto", "Helvetica", Arial, sans-serif'

function Spec({ label, value }: { label: string; value?: string }) {
  if (!value) return null
  return (
    <Box>
      <Typography variant="caption" color="text.secondary" fontWeight={700}
        sx={{ display: "block", textTransform: "uppercase", mb: 0.25, fontFamily: PRIMARY_FONT }}>
        {label}
      </Typography>
      <Typography variant="body2" fontWeight={600} sx={{ fontFamily: PRIMARY_FONT }}>
        {value}
      </Typography>
    </Box>
  )
}

function SwivelGaugeRow({ row }: { row: SwivelGaugeAdaptorDTO }) {
  const [open, setOpen] = useState(false)
  const addItem = useCartStore(s => s.addItem)

  const specs = {
    "Part Number": row.partNumber,
    "Type": row.type,
    "P1 Inlet": row.inlet,
    "P2 Outlet": row.outlet,
    "Length (L)": `${row.length} mm`,
    "Width (W)": row.width,
    "Nut A/F (N)": row.nutAcrossFlats,
    "Cap A/F (C)": row.capAcrossFlats,
    "Material": row.material,
  }

  const handleAddToCart = () => {
    addItem({
      cartItemId: row.partNumber,
      id: row.id,
      name: `Panam Swivel Gauge Adaptor — ${row.partNumber}`,
      image: row.imageUrl,
      quantity: 1,
      partNumber: row.partNumber,
      specs,
    })
  }

  const isTypeS = row.type.startsWith("Type S")

  return (
    <>
      <TableRow hover onClick={() => setOpen(o => !o)} sx={{
        cursor: "pointer",
        bgcolor: open ? alpha(BRAND_BLUE, 0.04) : "inherit",
        "&:hover": { bgcolor: `${alpha(BRAND_BLUE, 0.03)} !important` },
      }}>
        <TableCell sx={{ width: 40, py: 1 }}>
          <IconButton size="small" onClick={e => { e.stopPropagation(); setOpen(o => !o) }}>
            {open ? <KeyboardArrowUpIcon fontSize="small" /> : <KeyboardArrowDownIcon fontSize="small" />}
          </IconButton>
        </TableCell>
        <TableCell sx={{ fontFamily: "monospace", fontWeight: 700, color: BRAND_BLUE, fontSize: "0.8rem", py: 1 }}>
          {row.partNumber}
        </TableCell>
        <TableCell sx={{ py: 1 }}>
          <Chip label={isTypeS ? "Type S" : "Type M"} size="small" variant="outlined"
            sx={{
              fontSize: "0.65rem", fontWeight: 700,
              borderColor: isTypeS ? "#FF6B35" : BRAND_BLUE,
              color: isTypeS ? "#FF6B35" : "#0277BD",
            }}
          />
        </TableCell>
        <TableCell sx={{ py: 1, fontSize: "0.82rem", fontFamily: PRIMARY_FONT }}>{row.inlet}</TableCell>
        <TableCell sx={{ py: 1, fontSize: "0.82rem", fontFamily: PRIMARY_FONT }}>{row.outlet}</TableCell>
        <TableCell sx={{ py: 1, fontSize: "0.82rem", fontFamily: PRIMARY_FONT }}>{row.length}</TableCell>
        <TableCell sx={{ py: 1, fontSize: "0.82rem", fontFamily: PRIMARY_FONT }}>{row.width}</TableCell>
        <TableCell sx={{ py: 1, fontSize: "0.82rem", fontFamily: PRIMARY_FONT }}>{row.nutAcrossFlats}</TableCell>
        <TableCell sx={{ py: 1, fontSize: "0.82rem", fontFamily: PRIMARY_FONT }}>{row.capAcrossFlats}</TableCell>
        <TableCell sx={{ py: 1 }}>
          <Button
            size="small"
            variant="contained"
            onClick={e => { e.stopPropagation(); handleAddToCart() }}
            sx={{
              fontSize: "0.7rem", fontWeight: 700, py: 0.5, px: 1.5,
              borderRadius: "4px", textTransform: "none", whiteSpace: "nowrap",
              bgcolor: BRAND_BLUE, boxShadow: "none",
              "&:hover": { bgcolor: "#0199d4", boxShadow: "none" },
            }}>
            Add to Quote
          </Button>
        </TableCell>
      </TableRow>
      {open && (
        <TableRow>
          <TableCell colSpan={10} sx={{ p: 0, borderBottom: "none" }}>
            <Collapse in unmountOnExit>
              <Box sx={{
                p: 3, bgcolor: alpha(BRAND_BLUE, 0.02),
                borderLeft: `4px solid ${BRAND_BLUE}`,
                borderBottom: "1px solid rgba(0,0,0,0.08)",
              }}>
                <Stack direction={{ xs: "column", md: "row" }} spacing={4} alignItems="flex-start">
                  {row.imageUrl && (
                    <Box sx={{
                      width: 160, height: 160, flexShrink: 0,
                      border: "1px solid rgba(0,0,0,0.08)", borderRadius: "8px",
                      overflow: "hidden", bgcolor: "#fff",
                      display: "flex", alignItems: "center", justifyContent: "center",
                    }}>
                      <img src={row.imageUrl} alt={row.partNumber}
                        style={{ maxWidth: "100%", maxHeight: "100%", objectFit: "contain" }} />
                    </Box>
                  )}
                  <Box sx={{ flex: 1 }}>
                    <Typography variant="caption" fontWeight={900}
                      sx={{ letterSpacing: 1, display: "block", mb: 1, color: BRAND_BLUE, fontFamily: PRIMARY_FONT }}>
                      DESCRIPTION
                    </Typography>
                    <Typography variant="body2" color="text.secondary"
                      sx={{ mb: 3, lineHeight: 1.6, fontFamily: PRIMARY_FONT }}>
                      {row.description}
                    </Typography>

                    <Typography variant="caption" fontWeight={900}
                      sx={{ letterSpacing: 1, display: "block", mb: 2, color: BRAND_BLUE, fontFamily: PRIMARY_FONT }}>
                      DIMENSIONS & SPECIFICATIONS
                    </Typography>
                    <Stack direction="row" flexWrap="wrap" gap={3} mb={3}>
                      <Spec label="Part Number" value={row.partNumber} />
                      <Spec label="Type" value={row.type} />
                      <Spec label="P1 Inlet" value={row.inlet} />
                      <Spec label="P2 Outlet" value={row.outlet} />
                      <Spec label="Length (L)" value={`${row.length} mm`} />
                      <Spec label="Width (W)" value={row.width} />
                      <Spec label="Nut A/F" value={row.nutAcrossFlats} />
                      <Spec label="Cap A/F" value={row.capAcrossFlats} />
                      <Spec label="Material" value={row.material} />
                    </Stack>
                    <Button
                      variant="contained"
                      onClick={handleAddToCart}
                      sx={{
                        textTransform: "none", fontWeight: 700, borderRadius: "6px",
                        bgcolor: BRAND_BLUE, "&:hover": { bgcolor: "#0199d4" },
                        fontFamily: PRIMARY_FONT,
                      }}>
                      Add to Quote
                    </Button>
                  </Box>
                </Stack>
              </Box>
            </Collapse>
          </TableCell>
        </TableRow>
      )}
    </>
  )
}

type SortKey = "partNumber" | "type" | "inlet" | "outlet" | "length"

export default function SwivelGaugeAdaptorsPage() {
  const [sortKey, setSortKey] = useState<SortKey>("partNumber")
  const [sortDir, setSortDir] = useState<"asc" | "desc">("asc")

  const handleSort = (key: SortKey) => {
    if (sortKey === key) setSortDir(d => d === "asc" ? "desc" : "asc")
    else { setSortKey(key); setSortDir("asc") }
  }

  const sorted = [...SWIVEL_GAUGE_ADAPTORS_DATA].sort((a, b) => {
    const av = a[sortKey] ?? "", bv = b[sortKey] ?? ""
    if (av < bv) return sortDir === "asc" ? -1 : 1
    if (av > bv) return sortDir === "asc" ? 1 : -1
    return 0
  })

  const headerSx = {
    bgcolor: alpha(BRAND_BLUE, 0.04),
    borderBottom: `2px solid ${BRAND_BLUE}`,
    fontWeight: 700, fontSize: "0.72rem",
    textTransform: "uppercase" as const,
    letterSpacing: "0.05em",
    fontFamily: PRIMARY_FONT,
  }

  return (
    <Box sx={{ minHeight: "100vh", bgcolor: "#f8f9fa" }}>
      {/* HEADER */}
      <Box sx={{ p: 4, borderBottom: "1px solid rgba(0,0,0,0.08)", bgcolor: "background.paper" }}>
        <Container maxWidth="lg" sx={{ px: 0 }}>
          <Typography variant="h4" fontWeight={800} mb={1} sx={{ color: BRAND_BLUE, fontFamily: PRIMARY_FONT }}>
            {SWIVEL_GAUGE_DESCRIPTION.title}
          </Typography>
          <Typography variant="body1" color="text.secondary" mb={2} sx={{ maxWidth: 800, fontFamily: PRIMARY_FONT }}>
            {SWIVEL_GAUGE_DESCRIPTION.description}
          </Typography>
          <Box sx={{ display: "flex", gap: 1, flexWrap: "wrap" }}>
            {SWIVEL_GAUGE_DESCRIPTION.specs.map(s => (
              <Box key={s} sx={{
                px: 1.5, py: 0.5, borderRadius: "20px", fontSize: "0.75rem", fontWeight: 600,
                bgcolor: alpha(BRAND_BLUE, 0.08), color: "#0277BD",
                border: `1px solid ${alpha(BRAND_BLUE, 0.2)}`,
                fontFamily: PRIMARY_FONT,
              }}>
                {s}
              </Box>
            ))}
          </Box>
        </Container>
      </Box>

      {/* TABLE */}
      <Container maxWidth="lg" sx={{ py: 4 }}>
        <Typography variant="caption" fontWeight={700} color="text.disabled"
          sx={{ display: "block", mb: 1, fontFamily: PRIMARY_FONT }}>
          {`${sorted.length} CONFIGURATIONS`}
        </Typography>

        <Box sx={{
          border: `1px solid ${alpha(BRAND_BLUE, 0.2)}`,
          borderRadius: "8px", overflow: "hidden", bgcolor: "background.paper",
        }}>
          <TableContainer>
            <Table size="small" stickyHeader>
              <TableHead>
                <TableRow>
                  <TableCell sx={{ ...headerSx, width: 40 }} />
                  {([
                    { key: "partNumber" as SortKey, label: "Part Number" },
                    { key: "type" as SortKey, label: "Type" },
                    { key: "inlet" as SortKey, label: "P1 Inlet" },
                    { key: "outlet" as SortKey, label: "P2 Outlet" },
                    { key: "length" as SortKey, label: "L (mm)" },
                    { key: null, label: "W" },
                    { key: null, label: "N – A/F" },
                    { key: null, label: "C – A/F" },
                    { key: null, label: "Quote" },
                  ]).map((h, i) => (
                    <TableCell key={i} sx={headerSx}>
                      {h.key ? (
                        <TableSortLabel
                          active={sortKey === h.key}
                          direction={sortKey === h.key ? sortDir : "asc"}
                          onClick={() => handleSort(h.key!)}>
                          {h.label}
                        </TableSortLabel>
                      ) : h.label}
                    </TableCell>
                  ))}
                </TableRow>
              </TableHead>
              <TableBody>
                {sorted.map(row => <SwivelGaugeRow key={row.id} row={row} />)}
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
      </Container>
    </Box>
  )
}