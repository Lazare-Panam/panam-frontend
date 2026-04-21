import React, { useEffect, useState } from "react";
import { Box, Typography, Container, Stack, InputAdornment, TextField } from "@mui/material";
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import SearchIcon from '@mui/icons-material/Search';
import { useSearchParams } from "react-router-dom";
import { certsByTab } from "./Cert";

const BRAND_BLUE = "#01B0F0";
const PRIMARY_FONT = '"Inter", "Roboto", "Helvetica", Arial, sans-serif';

const tabs = [
  { key: "qms", label: "QMS Certifications" },
  { key: "type-reports", label: "Type Test Reports" },
  { key: "registrations", label: "Registrations and Approvals" },
];

const HighlightedText: React.FC<{ text: string; query: string }> = ({ text, query }) => {
  if (!query.trim()) return <>{text}</>;
  const parts = text.split(new RegExp(`(${query.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")})`, "gi"));
  return (
    <>
      {parts.map((part, i) =>
        part.toLowerCase() === query.toLowerCase() ? (
          <mark key={i} style={{ backgroundColor: "#FEF08A", color: "#0A121A", borderRadius: 2, padding: "0 2px" }}>
            {part}
          </mark>
        ) : (
          part
        )
      )}
    </>
  );
};

const CertificationsPage: React.FC = () => {
  const [searchParams] = useSearchParams();
const [activeTab, setActiveTab] = useState(searchParams.get("tab") ?? "qms");

useEffect(() => {
  const tab = searchParams.get("tab");
  if (tab) setActiveTab(tab);
}, [searchParams]);

  const [search, setSearch] = useState("");

  const allCerts = Object.entries(certsByTab).flatMap(([tab, certs]) =>
    certs.map((cert) => ({ ...cert, tab }))
  );

  const isSearching = search.trim().length > 0;

  const filteredCerts = isSearching
    ? allCerts.filter((cert) =>
        cert.title.toLowerCase().includes(search.toLowerCase())
      )
    : (certsByTab[activeTab] ?? []).map((cert) => ({ ...cert, tab: activeTab }));

  return (
    <Box sx={{ backgroundColor: "#F2F4F7", minHeight: "100vh", fontFamily: PRIMARY_FONT }}>
      {/* Header */}
      <Box sx={{ backgroundColor: BRAND_BLUE, color: "white", py: { xs: 8, md: 10 } }}>
        <Container maxWidth="lg">
          <Stack direction="row" alignItems="center" spacing={2} sx={{ mb: 2 }}>
            <VerifiedUserIcon sx={{ color: "rgba(255,255,255,0.6)", fontSize: 24 }} />
            <Typography variant="overline" sx={{ letterSpacing: "0.3em", fontWeight: 700, opacity: 0.6 }}>
              Compliance & Quality
            </Typography>
          </Stack>
          <Typography
            variant="h2"
            sx={{
              fontWeight: 900,
              fontFamily: PRIMARY_FONT,
              fontSize: { xs: "2.5rem", md: "3.5rem" },
              textTransform: "uppercase",
              letterSpacing: "-0.02em",
              mb: 4,
            }}
          >
            Official Certifications
          </Typography>
          <TextField
            fullWidth
            placeholder="Search certifications..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon sx={{ color: "rgba(255,255,255,0.6)" }} />
                </InputAdornment>
              ),
            }}
            sx={{
              maxWidth: 520,
              "& .MuiOutlinedInput-root": {
                backgroundColor: "rgba(255,255,255,0.15)",
                borderRadius: 0,
                color: "white",
                "& fieldset": { borderColor: "rgba(255,255,255,0.4)" },
                "&:hover fieldset": { borderColor: "rgba(255,255,255,0.8)" },
                "&.Mui-focused fieldset": { borderColor: "white" },
              },
              "& input::placeholder": { color: "rgba(255,255,255,0.6)", opacity: 1 },
              "& input": { color: "white" },
            }}
          />
        </Container>
      </Box>

      {/* Tabs — hidden when searching */}
      {!isSearching && (
        <Box sx={{ backgroundColor: "#fff", borderBottom: "1px solid rgba(0,0,0,0.1)" }}>
          <Container maxWidth="lg">
            <Stack direction="row" spacing={0} sx={{ overflowX: "auto" }}>
              {tabs.map((tab) => (
                <Box
                  key={tab.key}
                  onClick={() => setActiveTab(tab.key)}
                  sx={{
                    py: 2,
                    px: 3,
                    cursor: "pointer",
                    fontSize: "0.875rem",
                    fontWeight: 600,
                    textTransform: "uppercase",
                    letterSpacing: "0.05em",
                    whiteSpace: "nowrap",
                    color: activeTab === tab.key ? BRAND_BLUE : "#64748B",
                    borderBottom: activeTab === tab.key ? `2px solid ${BRAND_BLUE}` : "2px solid transparent",
                    transition: "all 0.15s ease",
                    "&:hover": { color: BRAND_BLUE },
                  }}
                >
                  {tab.label}
                </Box>
              ))}
            </Stack>
          </Container>
        </Box>
      )}

      {/* Search results label */}
      {isSearching && (
        <Box sx={{ backgroundColor: "#fff", borderBottom: "1px solid rgba(0,0,0,0.1)", py: 1.5 }}>
          <Container maxWidth="lg">
            <Typography sx={{ fontSize: "0.8rem", color: "#64748B", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.05em" }}>
              {filteredCerts.length} result{filteredCerts.length !== 1 ? "s" : ""} across all categories
            </Typography>
          </Container>
        </Box>
      )}

      {/* Cert Grid */}
      <Container maxWidth="lg" sx={{ py: 8 }}>
        {filteredCerts.length === 0 ? (
          <Typography sx={{ color: "#64748B", fontSize: "1rem" }}>No certifications match your search.</Typography>
        ) : (
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr", md: "1fr 1fr 1fr" },
              gap: 3,
            }}
          >
            {filteredCerts.map((cert, index) => (
              <Box
                key={index}
                onClick={() => window.open(cert.image, "_blank", "noopener,noreferrer")}
                sx={{
                  backgroundColor: "#fff",
                  border: "1px solid rgba(0,0,0,0.1)",
                  cursor: "pointer",
                  transition: "all 0.2s ease-in-out",
                  "&:hover": {
                    borderColor: BRAND_BLUE,
                    transform: "scale(1.02)",
                    boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
                  },
                }}
              >
                <Box
                  sx={{
                    width: "100%",
                    height: "200px",
                    backgroundColor: "#f8f9fa",
                    borderBottom: "1px solid rgba(0,0,0,0.05)",
                    overflow: "hidden",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <img
                    src={cert.image}
                    alt={cert.title}
                    style={{ width: "100%", height: "100%", objectFit: "contain", opacity: 0.8 }}
                  />
                </Box>
                <Box sx={{ p: 3, display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
                  <Box>
                    <Typography sx={{ fontWeight: 900, fontSize: "1.1rem", color: "#0A121A", textTransform: "uppercase", mb: 0.5 }}>
                      <HighlightedText text={cert.title} query={search} />
                    </Typography>
                    {isSearching && (
                      <Typography sx={{ fontSize: "0.75rem", color: BRAND_BLUE, fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.05em" }}>
                        {tabs.find((t) => t.key === cert.tab)?.label}
                      </Typography>
                    )}
                  </Box>
                  <OpenInNewIcon sx={{ fontSize: 20, color: BRAND_BLUE, mt: 0.5 }} />
                </Box>
              </Box>
            ))}
          </Box>
        )}

        {/* Footer Notice */}
        <Box
          sx={{
            mt: 8,
            p: 4,
            border: "2px solid #0A121A",
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            alignItems: "center",
            justifyContent: "space-between",
            gap: 3,
          }}
        >
          <Typography sx={{ fontWeight: 700, color: "#0A121A", fontFamily: PRIMARY_FONT }}>
            REGULATORY NOTICE: ALL DOCUMENTS ARE VALID FOR THE CURRENT FISCAL YEAR.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default CertificationsPage;