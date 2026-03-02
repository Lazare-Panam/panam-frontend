import React from "react";
import { Typography, Box, FormControl, Select, MenuItem, IconButton } from "@mui/material";
import Grid from "@mui/material/Grid";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";

interface CertificateRowProps {
  value: boolean;
  onChange: (val: boolean) => void;
}

const CertificateRow: React.FC<CertificateRowProps> = ({ value, onChange }) => {
  return (
    <Grid container alignItems="center" sx={{ py: 1.5, borderBottom: "1px solid #f5f5f5" }}>
      <Grid size={{ xs: 5 }}>
        <Typography sx={{ fontWeight: 600, fontSize: "0.9rem", color: "#01B0F0" }}>
          Certificates
        </Typography>
      </Grid>
      <Grid size={{ xs: 7 }}>
        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
          <FormControl fullWidth size="small">
            <Select
              value={value ? "YES" : "NO"}
              onChange={(e) => onChange(e.target.value === "YES")}
              sx={{ borderRadius: "4px", bgcolor: "#fff" }}
            >
              <MenuItem value="NO">
                <Box sx={{ display: "flex", justifyContent: "space-between", width: "100%" }}>
                  <Typography variant="body2">No Certificates Required</Typography>
                  <Typography variant="caption" sx={{ fontWeight: 700, color: "text.disabled", ml: 2 }}>NONE</Typography>
                </Box>
              </MenuItem>
              <MenuItem value="YES">
                <Box sx={{ display: "flex", justifyContent: "space-between", width: "100%" }}>
                  <Typography variant="body2">Include 3.1 Material Certificates</Typography>
                  <Typography variant="caption" sx={{ fontWeight: 700, color: "text.disabled", ml: 2 }}>3.1-CERT</Typography>
                </Box>
              </MenuItem>
            </Select>
          </FormControl>
          {/* Spacer to keep alignment with rows that have a delete button */}
          <IconButton size="small" sx={{ visibility: "hidden" }}>
            <DeleteOutlineIcon fontSize="small" />
          </IconButton>
        </Box>
      </Grid>
    </Grid>
  );
};

export default React.memo(CertificateRow);