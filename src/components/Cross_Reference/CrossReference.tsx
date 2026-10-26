import React, { useState } from "react";
import { 
  Box, TextField, Typography, Button, Paper, Container, 
  InputAdornment, Breadcrumbs, Link, Divider 
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const BRAND_BLUE = "#01B0F0";
const TEXT_MAIN = "#1a1a1a";

const CrossReferencePage: React.FC = () => {
  const [search, setSearch] = useState("");

const data: Record<string, string> = {
    // --- Bulkhead Unions ---
    "B-100-61": "PBU-01-B",
    "B-200-61": "PBU-02-B",
    "B-300-61": "PBU-03-B",
    "B-400-61": "PBU-04-B",
    "B-600-61": "PBU-06-B",
    "B-6M0-61": "PBU-M06-B",
    "B-810-61": "PBU-08-B",
    "B-8M0-61": "PBU-M08-B",
    "B-12M0-61": "PBU-M12-B",
    "M-400-61": "PBU-04-MO-400",
    "M-810-61": "PBU-08-MO-400",
    "SS-100-61": "PBU-01-SS",
    "SS-200-61": "PBU-02-SS",
    "SS-300-61": "PBU-03-SS",
    "SS-400-61": "PBU-04-SS",
    "SS-500-61": "PBU-05-SS",
    "SS-600-61": "PBU-06-SS",
    "SS-1010-61": "PBU-10-SS",
    "SS-1210-61": "PBU-12-SS",
    "SS-1610-61": "PBU-16-SS",
    "SS-2400-61": "PBU-24-SS",
    "SS-3M0-61": "PBU-M03-SS",
    "SS-4M0-61": "PBU-M04-SS",
    "SS-6M0-61": "PBU-M06-SS",
    "SS-8M0-61": "PBU-M08-SS",
    "SS-10M0-61": "PBU-M10-SS",
    "SS-12M0-61": "PBU-M12-SS",
    "SS-16M0-61": "PBU-M16-SS",
    "SS-18M0-61": "PBU-M18-SS",
    "SS-20M0-61": "PBU-M20-SS",
    "SS-25M0-61": "PBU-M25-SS",

    // --- Bulkhead Male Connectors (NPT) ---
    "B-400-11-2": "PBMC-04-02-B",
    "B-810-11-8": "PBMC-08-08-B",
    "SS-200-11-2": "PBMC-02-02-SS",
    "SS-400-11-2": "PBMC-04-02-SS",
    "SS-400-11-4": "PBMC-04-04-SS",
    "SS-600-11-4": "PBMC-06-04-SS",
    "SS-600-11-6": "PBMC-06-06-SS",
    "SS-600-11-8": "PBMC-06-08-SS",
    "SS-810-11-6": "PBMC-08-06-SS",
    "SS-810-11-8": "PBMC-08-08-SS",
    "SS-1210-11-12": "PBMC-12-12-SS",
    "SS-1610-11-16": "PBMC-16-16-SS",
    "SS-6M0-11-4": "PBMC-M06-04-SS",
    "SS-12M0-11-8": "PBMC-M12-08-SS",

    // --- Bulkhead Female Connectors (NPT) ---
    "B-200-71-2": "PBFC-02-02-B",
    "B-400-71-2": "PBFC-04-02-B",
    "B-400-71-4": "PBFC-04-04-B",
    "B-600-71-4": "PBFC-06-04-B",
    "B-810-71-8": "PBFC-08-08-B",
    "SS-200-71-2": "PBFC-02-02-SS",
    "SS-400-71-2": "PBFC-04-02-SS",
    "SS-400-71-4": "PBFC-04-04-SS",
    "SS-600-71-4": "PBFC-06-04-SS",
    "SS-600-71-6": "PBFC-06-06-SS",
    "SS-600-71-8": "PBFC-06-08-SS",
    "SS-810-71-6": "PBFC-08-06-SS",
    "SS-810-71-8": "PBFC-08-08-SS",
    "SS-1210-71-12": "PBFC-12-12-SS",
    "SS-6M0-71-4": "PBFC-M06-04-SS",
    "SS-12M0-71-8": "PBFC-M12-08-SS",

    // --- Bulkhead Adapters (Tube to Tube Adapter) ---
    "B-400-R1-4": "PBA-04-04-B",
    "SS-200-R1-2": "PBA-02-02-SS",
    "SS-400-R1-4": "PBA-04-04-SS",
    "SS-600-R1-6": "PBA-06-06-SS",
    "SS-810-R1-8": "PBA-08-08-SS",
    "SS-1210-R1-12": "PBA-12-12-SS",

    // --- AN Flare Bulkhead Unions ---
    "SS-400-61-4AN": "PBU-04-AN-SS",
    "SS-600-61-6AN": "PBU-06-AN-SS",
    "SS-810-61-8AN": "PBU-08-AN-SS",
    "SS-1210-61-12AN": "PBU-12-AN-SS",
    "SS-1610-61-16AN": "PBU-16-AN-SS",
  };

  const cleanInput = search.trim().toUpperCase();
  const panamCode = data[cleanInput];
  const hasInput = cleanInput.length > 0;

  return (
    <Box sx={{ bgcolor: "#fff", minHeight: "100vh" }}>
      {/* --- HEADER SECTION --- */}
      <Box sx={{ bgcolor: "#f8f9fa", py: 6, borderBottom: "1px solid #eee" }}>
        <Container maxWidth="xl">
          <Breadcrumbs separator={<ArrowForwardIosIcon sx={{ fontSize: 10 }} />} sx={{ mb: 2 }}>
            <Link underline="hover" color="inherit" href="/" sx={{ fontSize: "0.85rem" }}>Home</Link>
            <Link underline="hover" color="inherit" href="/resources" sx={{ fontSize: "0.85rem" }}>Resources</Link>
            <Typography color="text.primary" sx={{ fontSize: "0.85rem" }}>Cross Reference</Typography>
          </Breadcrumbs>
          <Typography variant="h3" sx={{ fontWeight: 800, color: TEXT_MAIN, mb: 1 }}>
            Cross Reference
          </Typography>
          <Typography variant="h6" sx={{ color: "#666", fontWeight: 400 }}>
            Match part numbers from other manufacturers with equivalent <span style={{ color: BRAND_BLUE, fontWeight: 700 }}>PANAM</span> products
          </Typography>
        </Container>
      </Box>

      {/* --- SEARCH SECTION --- */}
      <Container maxWidth="lg" sx={{ mt: -5 }}>
        <Paper 
          elevation={10} 
          sx={{ 
            p: { xs: 4, md: 8 }, 
            borderRadius: 2, 
            textAlign: "center",
            background: "#fff",
          }}
        >
          <TextField
            fullWidth
            placeholder="Enter full or partial part number"
            variant="outlined"
            onChange={(e) => setSearch(e.target.value)}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <SearchIcon sx={{ color: "#ccc", fontSize: 30 }} />
                </InputAdornment>
              ),
            }}
            sx={{
              maxWidth: 700,
              "& .MuiOutlinedInput-root": {
                borderRadius: 10,
                px: 2,
                fontSize: "1.1rem",
              }
            }}
          />

          {/* --- RESULTS AREA --- */}
          {hasInput && (
            <Box sx={{ mt: 6, maxWidth: 700, mx: "auto" }}>
              <Divider sx={{ mb: 4 }} />
              {panamCode ? (
                <Box sx={{ p: 4, bgcolor: "#f0fbff", borderRadius: 2, border: `1px solid ${BRAND_BLUE}` }}>
                  <Typography variant="overline" sx={{ color: BRAND_BLUE, fontWeight: 700 }}>
                    Equivalent Panam Part Found
                  </Typography>
                  <Typography variant="h2" sx={{ fontWeight: 900, color: TEXT_MAIN, my: 1 }}>
                    {panamCode}
                  </Typography>
                  <Button 
                    variant="contained" 
                    sx={{ mt: 2, bgcolor: BRAND_BLUE, fontWeight: 700, px: 4 }}
                    href={`/products/${panamCode}`}
                  >
                    View Specifications
                  </Button>
                </Box>
              ) : (
                <Box sx={{ p: 4, bgcolor: "#fff5f5", borderRadius: 2, border: "1px solid #ffc1c1" }}>
                  <Typography variant="h6" sx={{ color: "#d32f2f", mb: 2, fontWeight: 700 }}>
                    No direct match found for "{cleanInput}"
                  </Typography>
                  <Typography sx={{ mb: 3, color: "#555" }}>
                    Our technical team can cross-reference specialty materials (PFA, Monel, Hastelloy) and custom configurations manually.
                  </Typography>
                  <Button 
                    variant="contained" 
                    startIcon={<SupportAgentIcon />}
                    href="https://panam.in/contact-us/" 
                    sx={{ bgcolor: "#d32f2f", "&:hover": { bgcolor: "#b71c1c" }, px: 4, py: 1.5 }}
                  >
                    Contact Our Technical Team
                  </Button>
                </Box>
              )}
            </Box>
          )}
        </Paper>

        {/* --- DISCLAIMER SECTION --- */}
        <Box sx={{ mt: 8, mb: 10 }}>
          <Typography variant="subtitle2" sx={{ fontWeight: 800, mb: 2 }}>
            Disclaimer & Terms of Use
          </Typography>
          <Typography variant="body2" sx={{ color: "#777", lineHeight: 1.8 }}>
            The Cross Reference tool is designed to assist professional technicians in product research. Products may vary between manufacturers as different production tolerances and specifications are often adopted. Due to these circumstances, PANAM may not be notified when other manufacturers adjust their internal production tolerances. Always consult technical data sheets to ensure functional interchangeability.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default CrossReferencePage;