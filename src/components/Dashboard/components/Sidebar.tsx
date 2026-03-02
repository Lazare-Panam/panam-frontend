
import { Box, List, ListItem, ListItemText, Typography } from "@mui/material";

const BRAND_BLUE = "#01B0F0";
const TEXT_MAIN = "#1a1a1a";
const TEXT_SECONDARY = "#666666";
const PRIMARY_FONT = '"Inter", "Roboto", "Helvetica", Arial, sans-serif';

const Sidebar = () => {
  const sections = [
    {
      title: "User Profile",
      items: [
        { category: "MyPreferences", links: ["Personal Information", "Address Book", "Communication Preferences"] },
      ],
    },
    {
      title: "Workspace",
      items: [
        { category: "MyTransactions", links: ["Carts", "Quotes", "Orders"] },
      ],
    },
  ];

  return (
    <Box
      sx={{
        width: 280,
        backgroundColor: "#ffffff",
        borderRight: "1px solid #eef0f2",
        height: "100%",
        py: 4,
      }}
    >
      {sections.map((section, sIdx) => (
        <Box key={sIdx} sx={{ mb: 4 }}>
          {/* Subtle label instead of solid blue bar */}
          <Typography
            sx={{
              px: 3,
              mb: 2,
              color: BRAND_BLUE,
              fontSize: "0.65rem",
              fontWeight: 900,
              letterSpacing: 1.5,
              textTransform: "uppercase",
            }}
          >
            {section.title}
          </Typography>

          <List sx={{ px: 0 }}>
            {section.items.map((group, gIdx) => (
              <Box key={gIdx} sx={{ mb: 3 }}>
                <Typography
                  sx={{
                    px: 3,
                    fontSize: "0.8rem",
                    fontWeight: 700,
                    color: TEXT_MAIN,
                    fontFamily: PRIMARY_FONT,
                    mb: 1,
                  }}
                >
                  {group.category}
                </Typography>
                
                {group.links.map((link) => (
                  <ListItem
                    key={link}
                    disablePadding
                    sx={{
                      cursor: "pointer",
                      borderLeft: "3px solid transparent",
                      "&:hover": {
                        backgroundColor: "rgba(1, 176, 240, 0.04)",
                        borderLeftColor: BRAND_BLUE,
                        "& .MuiListItemText-primary": { color: BRAND_BLUE }
                      },
                    }}
                  >
                    <ListItemText
                      primary={link}
                      sx={{
                        px: 2.5,
                        '& .MuiListItemText-primary': {
                          fontSize: "0.75rem",
                          color: TEXT_SECONDARY,
                          fontFamily: PRIMARY_FONT,
                          fontWeight: 500,
                          transition: "all 0.2s ease",
                        }
                      }}
                    />
                  </ListItem>
                ))}
              </Box>
            ))}
          </List>
        </Box>
      ))}
    </Box>
  );
};

export default Sidebar;