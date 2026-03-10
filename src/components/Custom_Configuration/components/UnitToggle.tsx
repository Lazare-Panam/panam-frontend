import React from "react";
import { Box, ToggleButtonGroup, ToggleButton } from "@mui/material";

interface UnitToggleProps {
  unitSystem: string;
  handleUnitChange: (val: string | null) => void;
}

const UnitToggle: React.FC<UnitToggleProps> = ({ unitSystem, handleUnitChange }) => {
  return (
    <Box sx={{ display: "flex", justifyContent: "flex-end", mb: 2 }}>
      <ToggleButtonGroup
        value={unitSystem}
        exclusive
        onChange={(_, val) => handleUnitChange(val)}
        size="small"
        sx={{ height: "32px" }}
      >
        <ToggleButton
          value="imperial"
          sx={{
            px: 2,
            textTransform: "none",
            "&.Mui-selected": {
              backgroundColor: "#01B0F0",
              color: "#fff",
              "&:hover": { backgroundColor: "#01B0F0" },
            },
          }}
        >
          Imperial (in)
        </ToggleButton>
        <ToggleButton
          value="metric"
          sx={{
            px: 2,
            textTransform: "none",
            "&.Mui-selected": {
              backgroundColor: "#01B0F0",
              color: "#fff",
              "&:hover": { backgroundColor: "#01B0F0" },
            },
          }}
        >
          Metric (mm)
        </ToggleButton>
      </ToggleButtonGroup>
    </Box>
  );
};

export default UnitToggle;