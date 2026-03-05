import React from "react";
import { 
  Typography, 
  Button, 
  Dialog, 
  DialogTitle, 
  DialogContent, 
  DialogActions, 
  IconButton,
  Box
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import SecurityIcon from "@mui/icons-material/Security"; // Added for extra visual cue

const BRAND_BLUE = "#01B0F0";

interface TermsModalProps {
  open: boolean;
  onClose: () => void;
}

const TermsModal: React.FC<TermsModalProps> = ({ open, onClose }) => {
  return (
    <Dialog 
      open={open} 
      onClose={onClose} 
      maxWidth="sm" 
      fullWidth 
      slotProps={{
        paper: {
          sx: { borderRadius: 0 }
        }
      }}
    >
      <DialogTitle 
        sx={{ 
          fontWeight: 800, 
          pr: 6, 
          fontFamily: '"Inter", sans-serif',
          pt: 3,
          display: 'flex',
          alignItems: 'center',
          gap: 1.5
        }}
      >
        <SecurityIcon sx={{ color: BRAND_BLUE }} />
        Portal Access Terms
        <IconButton
          onClick={onClose}
          sx={{ position: 'absolute', right: 12, top: 12, color: 'grey.500' }}
        >
          <CloseIcon />
        </IconButton>
      </DialogTitle>
      
      <DialogContent dividers sx={{ py: 3 }}>
        {/* Section 1 */}
        <Box sx={{ mb: 3 }}>
          <Typography 
            variant="body1" 
            sx={{ fontWeight: 700, mb: 1, display: 'block' }}
          >
            1. Manual Verification
          </Typography>
          <Typography 
            variant="body2" 
            color="text.secondary" 
            sx={{ lineHeight: 1.6 }}
          >
            To prevent unauthorized access and minimize spam, all registration 
            requests are subject to manual approval by our administration team.
          </Typography>
        </Box>
        
        {/* Section 2 */}
        <Box sx={{ mb: 3 }}>
          <Typography 
            variant="body1" 
            sx={{ fontWeight: 700, mb: 1, display: 'block' }}
          >
            2. Professional Use Only
          </Typography>
          <Typography 
            variant="body2" 
            color="text.secondary" 
            sx={{ lineHeight: 1.6 }}
          >
            Account access is granted exclusively to corporate partners. Please 
            use a valid company email address to expedite the verification process.
          </Typography>
        </Box>

        {/* Section 3: Password Security */}
        <Box>
          <Typography 
            variant="body1" 
            sx={{ fontWeight: 700, mb: 1, display: 'block' }}
          >
            3. Data Privacy & Encryption
          </Typography>
          <Typography 
            variant="body2" 
            color="text.secondary" 
            sx={{ lineHeight: 1.6 }}
          >
            Your security is our priority. Passwords are encrypted using industry-standard 
            one-way hashing. This means your password is never stored in plain text, 
            and even our internal system administrators cannot view or access it.
          </Typography>
        </Box>
      </DialogContent>

      <DialogActions sx={{ p: 3 }}>
        <Button 
          onClick={onClose} 
          variant="contained" 
          fullWidth
          sx={{ 
            borderRadius: 0, 
            bgcolor: BRAND_BLUE,
            fontWeight: 700,
            py: 1.2,
            boxShadow: 'none',
            '&:hover': { bgcolor: '#0090c5', boxShadow: 'none' } 
          }}
        >
          I Understand
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default TermsModal;