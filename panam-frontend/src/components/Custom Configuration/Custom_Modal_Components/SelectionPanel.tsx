import React from "react";
import {
  Stack,
  FormControl,
  InputLabel,
  Typography,
} from "@mui/material";
import {
  SelectionContainer,
  CategoryHeader,
  CategoryTitle,
  StyledSelect,
  StyledMenuItem,
  SelectionDetailBox,
} from "../CustomModel.styles";
import { type ProductConfig } from "../types/CustomConfigurationtypes";

interface SelectionPanelProps {
  currentCategory: ProductConfig | undefined;
  currentSelection: any;
  selections: Record<string, any>;
  getPartValue: (partId: string) => string;
  onPartChange: (partId: string, value: string) => void;
  onOptionChange: (event: any) => void;
}

export const SelectionPanel: React.FC<SelectionPanelProps> = ({
  currentCategory,
  currentSelection,
  selections,
  getPartValue,
  onPartChange,
  onOptionChange,
}) => {
  return (
    <SelectionContainer>
      <CategoryHeader variant="caption">
        SELECT SPECIFICATION
      </CategoryHeader>

      <CategoryTitle variant="h5">
        {currentCategory?.label}
      </CategoryTitle>

      {currentCategory?.isSplit ? (
        /* CASE 1: SPLIT DROPDOWNS */
        <Stack spacing={2}>
          {(currentCategory.parts || []).map((part) => (
            <FormControl key={part.id} fullWidth>
              <InputLabel>{part.label}</InputLabel>
              <StyledSelect
                label={part.label}
                value={getPartValue(part.id)}
                onChange={(e) =>
                  onPartChange(part.id, e.target.value as string)
                }
              >
                {part.options.map((opt) => (
                  <StyledMenuItem key={opt.code} value={opt.code}>
                    <Typography sx={{ fontWeight: 700, color: "#0052cc" }}>
                      {opt.code}
                    </Typography>
                    <Typography sx={{ fontSize: "0.85rem", color: "#666" }}>
                      {opt.label}
                    </Typography>
                  </StyledMenuItem>
                ))}
              </StyledSelect>
            </FormControl>
          ))}
        </Stack>
      ) : (
        /* CASE 2: STANDARD DROPDOWN */
        <FormControl fullWidth sx={{ mb: 3 }}>
          <InputLabel>Choose Option...</InputLabel>
          <StyledSelect
            label="Choose Option..."
            value={
              selections[currentCategory?.label || ""]?.code || ""
            }
            onChange={onOptionChange}
          >
            {currentCategory?.options?.map((option: any) => (
              <StyledMenuItem key={option.code} value={option.code}>
                <Typography sx={{ fontWeight: 700, color: "#0052cc" }}>
                  {option.code}
                </Typography>
                <Typography sx={{ fontSize: "0.85rem", color: "#666" }}>
                  {option.label}
                </Typography>
              </StyledMenuItem>
            ))}
          </StyledSelect>
        </FormControl>
      )}

      {currentSelection && (
        <SelectionDetailBox>
          <Typography
            variant="caption"
            sx={{ fontWeight: 700, color: "#666" }}
          >
            CURRENT SELECTION:
          </Typography>
          <Typography variant="body1" sx={{ fontWeight: 600 }}>
            {currentSelection.label}
          </Typography>
        </SelectionDetailBox>
      )}
    </SelectionContainer>
  );
};
