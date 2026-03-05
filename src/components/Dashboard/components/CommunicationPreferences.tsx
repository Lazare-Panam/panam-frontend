import { Box, Typography, Paper, Divider, Button } from "@mui/material";
// Correct Import for Grid v2
import Grid from "@mui/material/Grid"; 
import EmailIcon from "@mui/icons-material/Email";
import PhoneEnabledIcon from "@mui/icons-material/PhoneEnabled";
import EventAvailableIcon from "@mui/icons-material/EventAvailable";

const BRAND_BLUE = "#01B0F0";
const SOFT_BG = "#F8FAFC";
const BORDER_COLOR = "#E2E8F0";

const CommunicationPreferences = () => {
  return (
    <Box sx={{ p: { xs: 3, md: 8 }, maxWidth: "1200px" }}>
      {/* Header Section */}
      <Box sx={{ mb: 6, borderLeft: `6px solid ${BRAND_BLUE}`, pl: 3 }}>
        <Typography variant="h3" sx={{ fontWeight: 900, color: BRAND_BLUE, fontSize: '2.25rem', letterSpacing: -1 }}>
          Communication Preferences
        </Typography>
        <Typography variant="body2" sx={{ color: "text.secondary", mt: 0.5, fontWeight: 600, textTransform: 'uppercase', letterSpacing: 1 }}>
          Identity / Notification Management
        </Typography>
      </Box>

      <Paper 
        elevation={0} 
        sx={{ 
          borderRadius: 0, 
          border: `1px solid ${BORDER_COLOR}`,
          backgroundColor: "#fff",
          overflow: 'hidden'
        }}
      >
        <Grid container>
          {/* Left Column: Current Status */}
          <Grid 
            size={{ xs: 12, md: 4 }}
            sx={{ 
              backgroundColor: SOFT_BG, 
              borderRight: { md: `1px solid ${BORDER_COLOR}` },
              p: 6
            }}
          >
            <Typography variant="h6" sx={{ fontWeight: 900, color: BRAND_BLUE, mb: 2 }}>
              Active Channels
            </Typography>
            <Typography variant="body2" sx={{ color: "text.secondary", mb: 4, lineHeight: 1.6, fontWeight: 500 }}>
              By default, all official project updates, technical specifications, and logistics data are transmitted via your registered email and phone.
            </Typography>

            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 2 }}>
                <EmailIcon sx={{ color: BRAND_BLUE }} />
                <Typography variant="body2" sx={{ fontWeight: 700, color: "#1a1a1a" }}>Email Notifications</Typography>
                <Typography variant="caption" sx={{ ml: 'auto', color: BRAND_BLUE, fontWeight: 900 }}>ACTIVE</Typography>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                <PhoneEnabledIcon sx={{ color: BRAND_BLUE }} />
                <Typography variant="body2" sx={{ fontWeight: 700, color: "#1a1a1a" }}>SMS / Voice Alerts</Typography>
                <Typography variant="caption" sx={{ ml: 'auto', color: BRAND_BLUE, fontWeight: 900 }}>ACTIVE</Typography>
            </Box>
          </Grid>

          {/* Right Column: Meeting & Sales Info */}
          <Grid size={{ xs: 12, md: 8 }} sx={{ p: { xs: 4, md: 8 } }}>
            <Box sx={{ mb: 6 }}>
                <Typography variant="h5" sx={{ fontWeight: 900, color: BRAND_BLUE, mb: 2 }}>
                    Technical Consultation
                </Typography>
                <Typography variant="body1" sx={{ color: "text.secondary", mb: 4, fontWeight: 500 }}>
                    Need to discuss custom valve configurations or bulk procurement? Our technical sales team is available for scheduled virtual meetings.
                </Typography>

                <Paper 
                    elevation={0} 
                    sx={{ 
                        p: 4, 
                        bgcolor: SOFT_BG, 
                        borderLeft: `4px solid ${BRAND_BLUE}`,
                        borderRadius: 0,
                        border: `1px solid ${BORDER_COLOR}`
                    }}
                >
                    <Grid container alignItems="center" spacing={2}>
                        <Grid size={{ xs: 12, sm: 8 }}>
                            <Typography variant="subtitle1" sx={{ fontWeight: 800, color: BRAND_BLUE, textTransform: 'uppercase', fontSize: '0.85rem' }}>
                                Technical Sales Desk
                            </Typography>
                            <Typography variant="body2" sx={{ color: "text.secondary", mt: 0.5 }}>
                                Request a formal meeting or update contact methods via:
                            </Typography>
                            <Typography 
                                variant="h6" 
                                sx={{ 
                                  color: BRAND_BLUE, 
                                  fontWeight: 800, 
                                  mt: 1, 
                                  cursor: 'pointer', 
                                  textDecoration: 'underline',
                                  '&:hover': { opacity: 0.8 }
                                }}
                                onClick={() => window.location.href = 'mailto:sales@panamvalves.co.uk'}
                            >
                                sales@panamvalves.co.uk
                            </Typography>
                        </Grid>
                        <Grid size={{ xs: 12, sm: 4 }} sx={{ textAlign: { sm: 'right' } }}>
                            <Button 
                                variant="contained" 
                                startIcon={<EventAvailableIcon />}
                                sx={{ 
                                    bgcolor: BRAND_BLUE, 
                                    color: '#fff',
                                    borderRadius: 0, 
                                    fontWeight: 800,
                                    px: 3, 
                                    py: 1.5,
                                    boxShadow: `4px 4px 0px ${BORDER_COLOR}`,
                                    '&:hover': {
                                        bgcolor: BRAND_BLUE,
                                        opacity: 0.9,
                                        boxShadow: `2px 2px 0px ${BORDER_COLOR}`,
                                    }
                                }}
                                onClick={() => window.location.href = 'mailto:sales@panamvalves.co.uk'}
                            >
                                BOOK MEETING
                            </Button>
                        </Grid>
                    </Grid>
                </Paper>
            </Box>

            <Divider sx={{ my: 4, borderColor: BORDER_COLOR }} />

            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              <Box sx={{ width: 8, height: 8, bgcolor: BRAND_BLUE }} />
              <Typography variant="caption" sx={{ color: 'text.disabled', fontWeight: 700, textTransform: 'uppercase', letterSpacing: 1 }}>
                  GLOBAL ERP PROPAGATION DELAY: 24-48H
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Paper>
    </Box>
  );
};

export default CommunicationPreferences;