import React, { useState } from "react";
import { Box, Typography, TextField, Button, CircularProgress, Alert, Rating, FormHelperText } from "@mui/material";
import Grid from "@mui/material/Grid";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { useReviewForm } from "./useReviewForm";

const PRIMARY_FONT = '"Inter", "Roboto", "Helvetica", Arial, sans-serif';
const TEXT_MAIN = "#1a1a1a";
const TEXT_SECONDARY = "#555555";
const BRAND_BLUE = "#01B0F0";
const BRAND_BLUE_LIGHT = "#E6F7FE";
const BRAND_BLUE_DARK = "#0088BA";

const fieldSx = {
  "& .MuiOutlinedInput-root": {
    backgroundColor: BRAND_BLUE_LIGHT,
    borderRadius: 0,
    "& fieldset": { borderColor: "transparent" },
    "&.Mui-error fieldset": { borderColor: "#d32f2f" },
  },
  "& .MuiFormHelperText-root": { fontFamily: PRIMARY_FONT, fontWeight: 600, ml: 0 },
};

const sectionTitleSx = {
  fontFamily: PRIMARY_FONT,
  fontWeight: 700,
  mb: 2,
  color: TEXT_MAIN,
  letterSpacing: "0.05em",
};

interface ReviewFormProps {
  onSuccess?: () => void;
}

const ReviewForm: React.FC<ReviewFormProps> = ({ onSuccess }) => {
  const [submitted, setSubmitted] = useState(false);
  const { formData, loading, errors, error, handleChange, handleRatingChange, handleSubmit } =
    useReviewForm(() => {
      setSubmitted(true);
      onSuccess?.();
    });

  if (submitted) {
    return (
      <Box sx={{ flex: 1.5, backgroundColor: "#fff", p: { xs: 3, md: 8 }, textAlign: "center" }}>
        <Typography variant="h4" sx={{ fontFamily: PRIMARY_FONT, color: BRAND_BLUE, fontWeight: 800, mb: 2 }}>
          Thank You
        </Typography>
        <Typography sx={{ fontFamily: PRIMARY_FONT, color: TEXT_SECONDARY }}>
          Your review has been submitted. We really appreciate you taking the time to share your experience.
        </Typography>
      </Box>
    );
  }

  return (
    <Box sx={{ flex: 1.5, backgroundColor: "#fff", p: { xs: 3, md: 8 }, display: "flex", justifyContent: "center", position: "relative" }}>
      {loading && (
        <Box sx={{ position: "absolute", top: 0, left: 0, right: 0, bottom: 0, bgcolor: "rgba(255,255,255,0.8)", zIndex: 10, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 2 }}>
          <CircularProgress sx={{ color: BRAND_BLUE }} />
          <Typography sx={{ fontFamily: PRIMARY_FONT, fontWeight: 600, color: TEXT_MAIN }}>Submitting your review, don't refresh...</Typography>
        </Box>
      )}

      <Box sx={{ width: "100%", maxWidth: "720px" }}>
        <Typography variant="h3" sx={{ fontFamily: PRIMARY_FONT, color: BRAND_BLUE, fontWeight: 800, mb: 2, fontSize: { xs: "2.2rem", md: "3rem" }, textAlign: "center" }}>
          Leave a Review
        </Typography>
        <Typography variant="body1" sx={{ fontFamily: PRIMARY_FONT, color: TEXT_SECONDARY, fontSize: "1.1rem", mb: 6, textAlign: "center" }}>
          Tell us about your experience with Panam Valves. Your feedback helps us and other customers.
        </Typography>

        {error && <Alert severity="error" sx={{ mb: 4, fontFamily: PRIMARY_FONT }}>{error}</Alert>}

        <Box component="form" onSubmit={handleSubmit} noValidate>
          {/* Rating */}
          <Typography variant="subtitle2" sx={sectionTitleSx}>YOUR RATING</Typography>
          <Box sx={{ mb: 5 }}>
            <Rating
              name="rating"
              value={formData.rating}
              onChange={(_, value) => handleRatingChange(value)}
              size="large"
            />
            {errors.rating && (
              <FormHelperText error sx={{ fontFamily: PRIMARY_FONT, fontWeight: 600, ml: 0 }}>
                {errors.rating}
              </FormHelperText>
            )}
          </Box>

          {/* About you */}
          <Typography variant="subtitle2" sx={sectionTitleSx}>ABOUT YOU</Typography>
          <Grid container spacing={3} sx={{ mb: 5 }}>
            <Grid size={{ xs: 12, sm: 6 }}>
              <TextField fullWidth required name="customerName" label="Your Name" value={formData.customerName} onChange={handleChange} error={Boolean(errors.customerName)} helperText={errors.customerName} sx={fieldSx} />
            </Grid>
            <Grid size={{ xs: 12, sm: 6 }}>
              <TextField fullWidth required name="email" label="Email Address" type="email" value={formData.email} onChange={handleChange} error={Boolean(errors.email)} helperText={errors.email} sx={fieldSx} />
            </Grid>
            <Grid size={{ xs: 12, sm: 6 }}>
              <TextField fullWidth name="company" label="Company (optional)" value={formData.company} onChange={handleChange} sx={fieldSx} />
            </Grid>
            <Grid size={{ xs: 12, sm: 6 }}>
              <TextField fullWidth name="productPartNumber" label="Product / Part Number (optional)" placeholder="e.g. BV-12-316" value={formData.productPartNumber} onChange={handleChange} sx={fieldSx} />
            </Grid>
          </Grid>

          {/* The review */}
          <Typography variant="subtitle2" sx={sectionTitleSx}>YOUR REVIEW</Typography>
          <Grid container spacing={3} sx={{ mb: 5 }}>
            <Grid size={{ xs: 12 }}>
              <TextField fullWidth name="title" label="Title (optional)" placeholder="Sum it up in a few words" value={formData.title} onChange={handleChange} sx={fieldSx} />
            </Grid>
            <Grid size={{ xs: 12 }}>
              <TextField fullWidth required multiline minRows={5} name="comment" label="Your Review" placeholder="What did you think of the product and service?" value={formData.comment} onChange={handleChange} error={Boolean(errors.comment)} helperText={errors.comment} sx={fieldSx} />
            </Grid>
          </Grid>

          <Box sx={{ display: "flex", justifyContent: "center", mt: 6 }}>
            <Button type="submit" variant="contained" disabled={loading} endIcon={!loading && <ChevronRightIcon />} sx={{ backgroundColor: BRAND_BLUE, color: "#fff", borderRadius: 0, px: 8, py: 2, fontWeight: 700, boxShadow: "none", "&:hover": { backgroundColor: BRAND_BLUE_DARK } }}>
              {loading ? "SUBMITTING..." : "SUBMIT REVIEW"}
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default ReviewForm;
