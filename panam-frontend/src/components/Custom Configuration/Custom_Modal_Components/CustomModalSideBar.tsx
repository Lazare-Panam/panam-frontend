import React from "react";
import { Stack } from "@mui/material";
import {
  NavButton,
  SidebarContainer,
  SidebarTitle,
} from "./CustomModel.styles";
import { type ProductConfig } from "../types/CustomConfigurationtypes";

interface CategorySidebarProps {
  categories: ProductConfig[];
  activeIndex: number;
  onSelect: (index: number) => void;
}
export const CategorySidebar: React.FC<CategorySidebarProps> = ({
  categories,
  activeIndex,
  onSelect,
}) => {
  return (
    <SidebarContainer>
      <SidebarTitle>Categories</SidebarTitle>
      <Stack spacing={0}>
        {categories.map((config, index) => (
          <NavButton
            key={config.label}
            onClick={() => onSelect(index)}
            fullWidth
            sx={{
              fontWeight: activeIndex === index ? 700 : 500,
              color: activeIndex === index ? "#0052cc" : "#333",
              bgcolor: activeIndex === index ? "#ffffff" : "transparent",
              borderLeft:
                activeIndex === index
                  ? "4px solid #0052cc"
                  : "4px solid transparent",
              "&:hover": {
                bgcolor: activeIndex === index ? "#ffffff" : "#eee",
              },
            }}
          >
            {config.label}
          </NavButton>
        ))}
      </Stack>
    </SidebarContainer>
  );
};
