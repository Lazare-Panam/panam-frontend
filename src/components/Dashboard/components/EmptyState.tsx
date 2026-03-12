import { Paper, Typography, Button, type SvgIconProps } from "@mui/material";
import { useNavigate } from "react-router-dom";

const BRAND_BLUE = "#01B0F0";
const SOFT_BG = "#F8FAFC";
const BORDER_COLOR = "#E2E8F0";

interface EmptyStateProps {
  icon: React.ElementType<SvgIconProps>;
  title: string;
  description?: string;
  buttonText: string;
  onActionClick: string; // The route to navigate to
}

const EmptyState = ({ icon: Icon, title, description, buttonText, onActionClick }: EmptyStateProps) => {
  const navigate = useNavigate();

  return (
    <Paper 
      elevation={0} 
      sx={{ 
        p: 8, 
        textAlign: 'center', 
        border: `1px dashed ${BORDER_COLOR}`, 
        bgcolor: SOFT_BG, 
        borderRadius: 0 
      }}
    >
      <Icon sx={{ fontSize: 60, color: BORDER_COLOR, mb: 2 }} />
      <Typography variant="h6" sx={{ fontWeight: 700, color: "text.secondary" }}>
        {title}
      </Typography>
      {description && (
        <Typography variant="body2" sx={{ color: "text.secondary", mt: 1, mb: 1 }}>
          {description}
        </Typography>
      )}
      <Button 
        onClick={() => navigate(onActionClick)} 
        sx={{ mt: 2, color: BRAND_BLUE, fontWeight: 800 }}
      >
        {buttonText}
      </Button>
    </Paper>
  );
};

export default EmptyState;