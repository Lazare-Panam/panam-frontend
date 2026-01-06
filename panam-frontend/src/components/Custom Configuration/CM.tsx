import React, { useState, useEffect } from "react";
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
  IconButton,
  Skeleton,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { type Product } from "./types/CustomConfigurationtypes";
import "./styles/ConfigModal.css";
import ShimmerUI from "./ShimmerUI";
interface ConfigModalProps {
  open: boolean;
  onClose: () => void;
  product: Product | null;
}

const ConfigModal: React.FC<ConfigModalProps> = ({
  open,
  onClose,
  product,
}) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (open) {
      setLoading(true);
      const timer = setTimeout(() => {
        setLoading(false);
      }, 800);
      return () => clearTimeout(timer);
    }
  }, [open, product]);

  return (
    <Dialog
      open={open}
      onClose={onClose}
      fullWidth
      maxWidth="xs"
      slotProps={{ paper: { className: "industrial-dialog" } }}
    >
      <DialogTitle className="industrial-title">
        {loading ? (
          <Skeleton width="60%" />
        ) : (
          `Configure ${product?.name || "Product"}`
        )}
        <IconButton onClick={onClose} className="close-button">
          <CloseIcon />
        </IconButton>
      </DialogTitle>

      <DialogContent dividers>
        <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
          Please select the technical specifications for your application:
        </Typography>

        <Stack spacing={3} sx={{ mt: 1, mb: 2 }}>
          {loading ? (
            <ShimmerUI />
          ) : (
            product?.configurations?.map((config, index) => (
              <Box key={index}>
                <span className="config-label">
                  Please select {config.label.toLowerCase()}
                </span>
                <FormControl fullWidth size="small">
                  <InputLabel id={`label-${index}`}>{config.label}</InputLabel>
                  <Select
                    labelId={`label-${index}`}
                    label={config.label}
                    defaultValue=""
                    className="industrial-select"
                  >
                    {config.options.map((opt:any) => (
                      <MenuItem key={opt} value={opt}>
                        {opt}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Box>
            ))
          )}
        </Stack>
      </DialogContent>

      <DialogActions sx={{ p: 2, gap: 1 }}>
        <Button
          onClick={onClose}
          variant="outlined"
          className="modal-action-btn btn-outlined"
          disabled={loading}
        >
          Add to Workspace
        </Button>
        <Button
          onClick={onClose}
          variant="contained"
          className="modal-action-btn btn-contained"
          disabled={loading}
        >
          Save
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default ConfigModal;
