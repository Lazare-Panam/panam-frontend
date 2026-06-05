import { Accordion, AccordionSummary, AccordionDetails, FormGroup, Stack, Typography, Chip } from "@mui/material"
import ExpandMoreIcon from "@mui/icons-material/ExpandMore"

const BRAND_BLUE = "#01B0F0"
const PRIMARY_FONT = '"Inter", "Roboto", "Helvetica", Arial, sans-serif'

interface Props {
  title: string
  count?: number
  children: React.ReactNode
  defaultExpanded?: boolean
}

export function FilterGroup({ title, count, children, defaultExpanded = true }: Props) {
  return (
    <Accordion defaultExpanded={defaultExpanded} disableGutters elevation={0} sx={{ bgcolor: "transparent", "&:before": { display: "none" }, mb: 0.5 }}>
      <AccordionSummary expandIcon={<ExpandMoreIcon sx={{ fontSize: 16 }} />} sx={{ px: 0, minHeight: 36, "& .MuiAccordionSummary-content": { my: 0.5 } }}>
        <Stack direction="row" alignItems="center" spacing={1}>
          <Typography variant="caption" fontWeight={700} color="text.primary" fontFamily={PRIMARY_FONT}>{title}</Typography>
          {count ? <Chip label={count} size="small" sx={{ height: 16, fontSize: "0.65rem", bgcolor: BRAND_BLUE, color: "#fff" }} /> : null}
        </Stack>
      </AccordionSummary>
      <AccordionDetails sx={{ px: 0, pt: 0 }}>
        <FormGroup>{children}</FormGroup>
      </AccordionDetails>
    </Accordion>
  )
}