import { 
  Dialog, 
  DialogTitle, 
  DialogContent, 
  DialogActions, 
  Button, 
  Typography,
  Box,
  Stack,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  IconButton
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close'; // You may need to install @mui/icons-material
import { type Product } from './Mock_Products';

interface ConfigModalProps {
  open: boolean;
  onClose: () => void;
  product: Product | null; 
}

const ConfigModal: React.FC<ConfigModalProps> = ({ open, onClose, product }) => {
  return (
    <Dialog 
      open={open} 
      onClose={onClose}
      fullWidth 
      maxWidth="xs"
      slotProps={{
        paper: {
          sx: {
            borderRadius: 0,
            border: '1px solid',
            borderColor: 'grey.300',
            boxShadow: 'none',
          }
        }
      }}
    >
      <DialogTitle sx={{ fontWeight: 700, pr: 6 }}>
        Configure {product?.name || 'Product'}
        {/* The Cross Button */}
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: 'grey.500',
            borderRadius: 0, // Keeping it square
          }}
        >
          <CloseIcon />
        </IconButton>
      </DialogTitle>
      
      <DialogContent dividers>
        <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
          Please select the technical specifications for your application:
        </Typography>

        <Stack spacing={3} sx={{ mt: 1, mb: 2 }}>
          {product?.configurations && product.configurations.length > 0 ? (
            product.configurations.map((config, index) => (
              <Box key={index}>
                <Typography 
                  variant="caption" 
                  fontWeight={700} 
                  sx={{ textTransform: 'uppercase', mb: 1, display: 'block', color: 'text.primary' }}
                >
                  Please select {config.label.toLowerCase()}
                </Typography>
                <FormControl fullWidth size="small">
                  <InputLabel id={`label-${index}`}>{config.label}</InputLabel>
                  <Select
                    labelId={`label-${index}`}
                    label={config.label}
                    defaultValue=""
                    sx={{ borderRadius: 0 }}
                  >
                    {config.options.map((option) => (
                      <MenuItem key={option} value={option}>
                        {option}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Box>
            ))
          ) : (
            <Typography variant="body2" sx={{ fontStyle: 'italic', color: 'orange' }}>
              No custom configurations available for this model.
            </Typography>
          )}
        </Stack>
      </DialogContent>

     <DialogActions sx={{ p: 2, gap: 1 }}>
  <Button 
    onClick={onClose} 
    variant="outlined" 
    sx={{ 
      flex: 1,               // Identical size to Save
      textTransform: 'uppercase', 
      borderRadius: 0,
      fontWeight: 700,
      bgcolor: '#ffffff',
      color: '#0052cc',
      py: 1.5,
      fontSize: '0.7rem',     // Consistent font size
      letterSpacing: '1px',
      borderColor: '#0052cc', 
      '&:hover': {
        bgcolor: '#f0f7ff',
        borderColor: '#0041a3',
      }
    }}
  >
    Add to Workspace
  </Button>

  <Button 
    onClick={onClose} 
    variant="contained" 
    sx={{ 
      flex: 1,               // Identical size to Add to Workspace
      textTransform: 'uppercase', 
      borderRadius: 0,     
      fontWeight: 700,
      bgcolor: '#0052cc',  
      color: '#ffffff',   
      py: 1.5,              
      fontSize: '0.7rem',  
      letterSpacing: '1px', 
      '&:hover': {
        bgcolor: '#0041a3',
      }
    }}
  >
    Save
  </Button>
</DialogActions>
    </Dialog>
  );
};

export default ConfigModal;