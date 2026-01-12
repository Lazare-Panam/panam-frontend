import React from "react"
import { FormControl, InputLabel, Typography } from "@mui/material"
import { SelectionContainer, CategoryHeader, CategoryTitle, StyledSelect, StyledMenuItem } from "../styles/CustomModel.styles"
import { type ConfigOption, type ProductConfig } from "../types/CustomConfigurationtypes"

interface SelectionPanelProps {
  currentCategory: ProductConfig | undefined
  currentSelection: any
  selections: Record<string, any>
  onOptionChange: (event: any) => void
  getEffectiveSelection: (config: ProductConfig | undefined) => ConfigOption | null
}

export const SelectionPanel: React.FC<SelectionPanelProps> = ({ currentCategory, onOptionChange, getEffectiveSelection }) => {
  const effectiveValue = getEffectiveSelection(currentCategory)
  const isLocked = currentCategory?.options?.length === 1
  return (
    <SelectionContainer>
      <CategoryHeader variant="caption">SELECT SPECIFICATION</CategoryHeader>
      <CategoryTitle variant="h5">{currentCategory?.label}</CategoryTitle>
      <FormControl fullWidth sx={{ mb: 3 }}>
        <InputLabel>Choose Option...</InputLabel>
        <StyledSelect
          label={isLocked ? "Standard Option" : "Choose Option..."}
          // The magic line: This shows the auto-selected value if state is empty
          value={effectiveValue?.code || ""}
          onChange={e => onOptionChange(e.target.value as string)}
          disabled={isLocked} // Prevent interaction if there's only one choice
        >
          {currentCategory?.options?.map((option: any) => (
            <StyledMenuItem key={option.code} value={option.code}>
              <Typography sx={{ fontWeight: 700, color: "#0052cc" }}>{option.code}</Typography>
              <Typography sx={{ fontSize: "0.85rem", color: "#666" }}>{option.label}</Typography>
            </StyledMenuItem>
          ))}
        </StyledSelect>
      </FormControl>
      {/* {currentSelection && (
        <SelectionDetailBox>
          <Typography variant="caption" sx={{ fontWeight: 700, color: "#666" }}>
            CURRENT SELECTION:
          </Typography>
          <Typography variant="body1" sx={{ fontWeight: 600 }}>
            {currentSelection.label}
          </Typography>
        </SelectionDetailBox>
      )} */}
    </SelectionContainer>
  )
}
