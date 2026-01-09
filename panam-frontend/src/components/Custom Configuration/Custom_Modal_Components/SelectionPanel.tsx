import React from "react"
import {FormControl, InputLabel, Typography } from "@mui/material"
import { SelectionContainer, CategoryHeader, CategoryTitle, StyledSelect, StyledMenuItem, SelectionDetailBox } from "./CustomModel.styles"
import { type ProductConfig } from "../types/CustomConfigurationtypes"

interface SelectionPanelProps {
  currentCategory: ProductConfig | undefined
  currentSelection: any
  selections: Record<string, any>
  onOptionChange: (event: any) => void
}

export const SelectionPanel: React.FC<SelectionPanelProps> = ({
  currentCategory,
  currentSelection,
  selections,
  onOptionChange,
}) => {
  return (
    <SelectionContainer>
      <CategoryHeader variant="caption">SELECT SPECIFICATION</CategoryHeader>
      <CategoryTitle variant="h5">{currentCategory?.label}</CategoryTitle>
      <FormControl fullWidth sx={{ mb: 3 }}>
        <InputLabel>Choose Option...</InputLabel>
        <StyledSelect
          label="Choose Option..."
          value={selections[currentCategory?.label || ""]?.code || ""}
          onChange={e => onOptionChange(e.target.value as string)}>
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
