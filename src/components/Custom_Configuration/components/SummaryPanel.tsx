import React from "react"
import { Box, Stack, Typography } from "@mui/material"
import { SummaryContainer, SummaryHeader } from "../styles/CustomModel.styles"
import type { ProductConfig, ConfigOption } from "../types/CustomConfigurationtypes"

interface SummaryPanelProps {
  configurations: ProductConfig[] | undefined
  selections: Record<string, ConfigOption>
  generatedPartNumber: string
}

export const SummaryPanel: React.FC<SummaryPanelProps> = ({ configurations, selections, generatedPartNumber }) => {
  return (
    <SummaryContainer>
      <SummaryHeader>ORDERING SUMMARY</SummaryHeader>
      <Stack spacing={2} sx={{ flexGrow: 1 }}>
        {configurations?.map(config => {
          const selection = selections[config.label]
          return (
            <Box key={config.label} sx={{ borderBottom: "1px solid #d0e0f5", pb: 1 }}>
              <Typography variant="caption" sx={{ color: "#666", fontWeight: 600 }}>
                {config.label}
              </Typography>

              <Typography
                variant="body2"
                sx={{
                  fontWeight: 700,
                  display: "flex",
                  justifyContent: "space-between",
                }}>
                <span>{selection?.label || "—"}</span>

                {selection && (
                  <Box component="span" sx={{ color: "#0052cc" }}>
                    {selection.code}
                  </Box>
                )}
              </Typography>
            </Box>
          )
        })}
      </Stack>

      {/* PART NUMBER */}
      <Box sx={{ p: 2, mx: -2, bgcolor: "#0052cc", color: "#fff", mt: "auto", width: "100%" }}>
        <Box sx={{ px: 2 }}>
          <Typography variant="caption" sx={{ opacity: 0.8, fontWeight: 700 }}>
            GENERATED PART NUMBER:
          </Typography>

          <Typography
            sx={{
              fontWeight: 700,
              fontSize: "1rem",
              mt: 0.5,
              lineHeight: 1.2,
              wordBreak: "break-all",
            }}>
            {generatedPartNumber}
          </Typography>
        </Box>
      </Box>
    </SummaryContainer>
  )
}
