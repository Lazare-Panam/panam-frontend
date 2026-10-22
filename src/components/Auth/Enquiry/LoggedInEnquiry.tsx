import { useState, useRef } from "react";
import { Box, Typography, Stack } from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import PersonOutlineRoundedIcon from "@mui/icons-material/PersonOutlineRounded";
import MailOutlineRoundedIcon from "@mui/icons-material/MailOutlineRounded";
import BusinessOutlinedIcon from "@mui/icons-material/BusinessOutlined";
import PhoneOutlinedIcon from "@mui/icons-material/PhoneOutlined";
import NotesRoundedIcon from "@mui/icons-material/NotesRounded";
import { useUserStore } from "../../store/useUserStore";
import { useNotificationStore } from "../../store/useNotficationStore";
import { submitAuthenticatedEnquiry } from "../../../api/authApi";
import { useFormStartTracking } from "../../Common/useFormStartTracking";
import { EnquiryShell, Field, FormSection, SubmitButton, UploadZone } from "./enquiryUi";
import { C } from "../../Landing2/homeTokens";

export const LoggedInEnquiry = () => {
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const trackFormStart = useFormStartTracking("enquiry-logged-in");

  // User details from Zustand store
  const { firstName, lastName, companyName, email, phoneNumber } = useUserStore();
  const showNotification = useNotificationStore(state => state.showNotification);

  // Shared by the file picker and drag-and-drop
  const handleFile = (file: File) => {
    // 10MB Validation
    if (file.size > 10 * 1024 * 1024) {
      showNotification({ message: "File size exceeds the 10MB limit.", severity: "error" });
      return;
    }
    setSelectedFile(file);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) handleFile(e.target.files[0]);
  };

  const clearFile = () => {
    setSelectedFile(null);
    if (fileInputRef.current) fileInputRef.current.value = "";
  };

  const handleSubmit = async () => {
    if (!message.trim()) {
      showNotification({ message: "Please enter your enquiry details.", severity: "warning" });
      return;
    }

    setLoading(true);
    try {
      // API call now accepts (string, File | undefined)
      await submitAuthenticatedEnquiry(message, selectedFile || undefined);

      showNotification({
        message: "Technical enquiry submitted! Our engineering team has been notified.",
        severity: "success",
      });

      // Reset form on success
      setMessage("");
      setSelectedFile(null);
      if (fileInputRef.current) fileInputRef.current.value = "";
      
    } catch (error: any) {
      const errorMsg = error.response?.data?.message || "Submission failed. Please check your connection.";
      showNotification({ message: errorMsg, severity: "error" });
    } finally {
      setLoading(false);
    }
  };

  // Account details come from the signed-in profile and can't be edited here
  const readOnly = {
    InputProps: { readOnly: true, endAdornment: <LockOutlinedIcon sx={{ fontSize: 16, color: "#94A3B8" }} /> },
    sx: { "& .MuiOutlinedInput-root": { bgcolor: `${C.white} !important`, color: C.muted, boxShadow: "none !important" }, "& .MuiOutlinedInput-root fieldset": { borderColor: `${C.border} !important`, borderStyle: "dashed" } },
  };

  return (
    <EnquiryShell
      header={{
        overline: "Engineering Support",
        titleMain: "Submit a",
        titleAccent: "technical enquiry",
        description: "Share your requirements and drawings with our flow-control specialists. Your account details are attached automatically.",
      }}
      eyebrow="Verified Partner"
      title={
        <>
          Engineering <Box component="span" sx={{ color: "#BFEFFF" }}>Support.</Box>
        </>
      }
      text={
        <>
          Submitting this form creates a high-priority ticket for our flow-control specialists.
          <br />
          <br />
          Our engineers will analyze your specifications and provide technical drawings or documentation within 24 business hours.
        </>
      }
      response="Within 24 business hours"
      steps={["Describe your requirements", "High-priority ticket for our specialists", "Drawings or documentation within 24 business hours"]}
      image="https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&w=1000&q=80">
      <Stack spacing={4} onFocusCapture={trackFormStart}>
        <Box>
          <Typography component="h2" sx={{ fontWeight: 800, color: C.ink, fontSize: { xs: "1.5rem", md: "1.75rem" }, letterSpacing: "-0.02em", lineHeight: 1.2 }}>
            Technical Enquiry Form
          </Typography>
          <Box sx={{ mt: 1.25, display: "inline-flex", alignItems: "center", gap: 0.75, px: 1.5, py: 0.6, borderRadius: "999px", bgcolor: C.tintBg, fontSize: "0.82rem", color: C.muted }}>
            Verified Partner: <Box component="span" sx={{ color: C.brandDark, fontWeight: 700 }}>{companyName}</Box>
          </Box>
        </Box>

        <FormSection step="01" title="Your details">
          <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
            <Field icon={<PersonOutlineRoundedIcon />} label="First Name" value={firstName} {...readOnly} />
            <Field icon={<PersonOutlineRoundedIcon />} label="Last Name" value={lastName} {...readOnly} />
          </Stack>
          <Field icon={<MailOutlineRoundedIcon />} label="Corporate Email" value={email} {...readOnly} />
          <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
            <Field icon={<BusinessOutlinedIcon />} label="Company" value={companyName} {...readOnly} />
            <Field icon={<PhoneOutlinedIcon />} label="Phone" value={phoneNumber || "Not Provided"} {...readOnly} />
          </Stack>
        </FormSection>

        <FormSection step="02" title="Your enquiry">
          <Field
            icon={<NotesRoundedIcon />}
            label="Enquiry / Project Specifications"
            multiline
            minRows={5}
            value={message}
            onChange={e => setMessage(e.target.value)}
            placeholder="Describe your valve requirements, material specs, or CAD data needs..."
          />
          <UploadZone
            file={selectedFile}
            inputRef={fileInputRef}
            onChange={handleFileChange}
            onFile={handleFile}
            onClear={clearFile}
            title="Attach Technical Drawing / Specs"
            hint="Max 10MB · PDF, DWG, JPG, PNG, ZIP, DOCX"
          />
        </FormSection>

        <Stack direction="row" justifyContent="flex-end" sx={{ pt: 3, borderTop: `1px solid ${C.border}` }}>
          <SubmitButton loading={loading} onClick={handleSubmit}>
            Submit Technical Request
          </SubmitButton>
        </Stack>
      </Stack>
    </EnquiryShell>
  );
};
