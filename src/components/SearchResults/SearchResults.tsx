import React, { useState } from "react"
import { useSearchParams, useNavigate } from "react-router-dom"
import {
  Box, Typography, Card, CardMedia, CardContent,
  CircularProgress, Checkbox, FormControlLabel, Divider, Collapse
} from "@mui/material"
import Grid from "@mui/material/Grid"
import ExpandMoreIcon from "@mui/icons-material/ExpandMore"
import ExpandLessIcon from "@mui/icons-material/ExpandLess"
import { useQuery } from "@tanstack/react-query"
import { searchProducts, getFilters } from "../../api/searchApi"

const BRAND_BLUE = "#01B0F0"
const PRIMARY_FONT = '"Inter", "Roboto", "Helvetica", Arial, sans-serif'

const SearchResults: React.FC = () => {
  const [searchParams] = useSearchParams()
  const navigate = useNavigate()

  const q = searchParams.get("q") || ""
  const categoryId = searchParams.get("categoryId") ? Number(searchParams.get("categoryId")) : undefined
  const page = Number(searchParams.get("page") || 1)

  const [activeFilters, setActiveFilters] = useState<Record<string, string[]>>({})
  const [expandedSections, setExpandedSections] = useState<Record<string, boolean>>({})

  const { data: resultsData, isLoading: resultsLoading } = useQuery({
    queryKey: ["searchResults", q, categoryId, page, activeFilters],
    queryFn: () => searchProducts(q, categoryId, page, 20),
    enabled: true,
  })

  const { data: filtersData } = useQuery({
    queryKey: ["filters", categoryId],
    queryFn: () => getFilters(categoryId!),
    enabled: !!categoryId,
  })

  const toggleFilter = (filterName: string, value: string) => {
    setActiveFilters(prev => {
      const current = prev[filterName] || []
      const updated = current.includes(value)
        ? current.filter(v => v !== value)
        : [...current, value]
      return { ...prev, [filterName]: updated }
    })
  }

  const toggleSection = (section: string) => {
    setExpandedSections(prev => ({ ...prev, [section]: !prev[section] }))
  }

  return (
    <Box sx={{ display: "flex", fontFamily: PRIMARY_FONT, minHeight: "100vh" }}>

      {/* Sidebar */}
      <Box sx={{ width: 280, flexShrink: 0, borderRight: "1px solid #eee", p: 2 }}>
        <Typography variant="subtitle1" fontWeight={700} sx={{ mb: 2, color: "#1a1a1a" }}>
          Filters
        </Typography>

        {filtersData?.filters && Object.entries(filtersData.filters).map(([filterName, values]) => (
          <Box key={filterName} sx={{ mb: 1 }}>
            <Box
              onClick={() => toggleSection(filterName)}
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                cursor: "pointer",
                py: 1,
                "&:hover": { color: BRAND_BLUE }
              }}
            >
              <Typography variant="body2" fontWeight={600}>
                {filterName}
              </Typography>
              {expandedSections[filterName]
                ? <ExpandLessIcon fontSize="small" />
                : <ExpandMoreIcon fontSize="small" />
              }
            </Box>

            <Collapse in={expandedSections[filterName] ?? true}>
              {values.map(value => (
                <FormControlLabel
                  key={value}
                  control={
                    <Checkbox
                      size="small"
                      checked={(activeFilters[filterName] || []).includes(value)}
                      onChange={() => toggleFilter(filterName, value)}
                      sx={{ color: BRAND_BLUE, "&.Mui-checked": { color: BRAND_BLUE } }}
                    />
                  }
                  label={
                    <Typography variant="caption" sx={{ color: "#555" }}>
                      {value}
                    </Typography>
                  }
                  sx={{ display: "flex", ml: 0, mb: 0.5 }}
                />
              ))}
            </Collapse>
            <Divider />
          </Box>
        ))}
      </Box>

      {/* Results */}
      <Box sx={{ flex: 1, p: 3 }}>
        <Typography variant="h6" fontWeight={600} sx={{ mb: 2 }}>
          {resultsLoading
            ? "Searching..."
            : `${resultsData?.totalCount ?? 0} result${resultsData?.totalCount !== 1 ? "s" : ""} ${q ? `for "${q}"` : ""}`
          }
        </Typography>

        {resultsLoading ? (
          <Box sx={{ display: "flex", justifyContent: "center", mt: 8 }}>
            <CircularProgress sx={{ color: BRAND_BLUE }} />
          </Box>
        ) : (
          <Grid container spacing={2}>
            {resultsData?.items.map((product) => (
              <Grid size={{ xs: 12, sm: 6, md: 4 }} key={product.partNumber}>
                <Card
                  variant="outlined"
                  sx={{
                    borderRadius: 0,
                    cursor: "pointer",
                    height: "100%",
                    "&:hover": { boxShadow: 3 }
                  }}
                  onClick={() => navigate(`/products/${product.partNumber}`)}
                >
                  <Box sx={{ display: "flex", justifyContent: "center", p: 2 }}>
                    <CardMedia
                      component="img"
                      image={product.imageUrl || "/placeholder.png"}
                      alt={product.name}
                      sx={{ width: 160, height: 160, objectFit: "contain" }}
                    />
                  </Box>
                  <CardContent>
                    <Typography variant="caption" sx={{ color: BRAND_BLUE, fontWeight: 600 }}>
                      {product.categoryName}
                    </Typography>
                    <Typography variant="subtitle2" fontWeight={700} sx={{ mt: 0.5 }}>
                      {product.partNumber}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" sx={{ mt: 0.5 }}>
                      {product.name}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        )}
      </Box>
    </Box>
  )
}

export default SearchResults