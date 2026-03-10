import { Box, Typography, Paper, Avatar, Divider } from "@mui/material";
// Correct Import for Grid v2
import Grid from "@mui/material/Grid"; 
import { useUserStore } from "../../store/useUserStore";

const BRAND_BLUE = "#01B0F0";
const DEEP_NAVY = "#1A2B3C"; // Professional Slate instead of Black
const SOFT_BG = "#F8FAFC";
const BORDER_COLOR = "#E2E8F0";

const PersonalInformation = () => {
  const user = useUserStore();

  const InfoField = ({ label, value }: { label: string; value: string }) => (
    <Box>
      <Typography 
        variant="caption" 
        sx={{ 
          color: "text.secondary", 
          fontWeight: 700, 
          textTransform: "uppercase", 
          letterSpacing: 1.5,
          fontSize: '0.7rem'
        }}
      >
        {label}
      </Typography>
      <Typography 
        variant="body1" 
        sx={{ 
          color: DEEP_NAVY, 
          fontWeight: 600, 
          mt: 0.5,
          fontSize: '1rem'
        }}
      >
        {value || "—"}
      </Typography>
    </Box>
  );

  return (
    <Box sx={{ p: { xs: 3, md: 8 }, maxWidth: "1200px" }}>
      {/* Header Section */}
      <Box sx={{ mb: 6, borderLeft: `6px solid ${BRAND_BLUE}`, pl: 3 }}>
        <Typography variant="h3" sx={{ fontWeight: 800, color: DEEP_NAVY, fontSize: '2rem', letterSpacing: -0.5 }}>
          Personal Information
        </Typography>
        <Typography variant="body2" sx={{ color: "text.secondary", mt: 0.5, fontWeight: 500 }}>
          Manage your identity and professional presence
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
          
          {/* Left Column: Profile Summary */}
          <Grid 
            size={{ xs: 12, md: 4 }}
            sx={{ 
              backgroundColor: SOFT_BG, 
              borderRight: { md: `1px solid ${BORDER_COLOR}` },
              p: 6,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              textAlign: 'center'
            }}
          >
            <Avatar 
              variant="square" 
              sx={{ 
                width: 130, 
                height: 130, 
                bgcolor: BRAND_BLUE, 
                fontSize: "2.5rem", 
                mb: 3,
                borderRadius: 0,
                border: `3px solid ${BRAND_BLUE}`,
                boxShadow: `10px 10px 0px ${BORDER_COLOR}` // Brutalist offset shadow
              }}
            >
              {user.firstName?.[0]}{user.lastName?.[0]}
            </Avatar>
            
            <Typography variant="h5" sx={{ fontWeight: 800, color: DEEP_NAVY, mt: 2 }}>
              {user.firstName} {user.lastName}
            </Typography>
            
            <Typography variant="subtitle2" sx={{ color: BRAND_BLUE, fontWeight: 700, letterSpacing: 1, textTransform: 'uppercase' }}>
              {user.jobTitle}
            </Typography>

            <Divider sx={{ width: '100%', my: 4, borderColor: BORDER_COLOR }} />
            
            <Box sx={{ textAlign: 'left', width: '100%' }}>
               <Typography variant="caption" sx={{ color: 'text.secondary', fontWeight: 700 }}>ORGANIZATION</Typography>
               <Typography variant="body2" sx={{ color: DEEP_NAVY, fontWeight: 600 }}>{user.companyName}</Typography>
            </Box>
          </Grid>

          {/* Right Column: Detailed Grid */}
          <Grid size={{ xs: 12, md: 8 }} sx={{ p: { xs: 4, md: 8 } }}>
            <Typography variant="h6" sx={{ fontWeight: 700, mb: 5, color: DEEP_NAVY, borderBottom: `2px solid ${SOFT_BG}`, pb: 1 }}>
              Account Credentials
            </Typography>
            
            <Grid container spacing={5}>
              <Grid size={{ xs: 12, sm: 6 }}>
                <InfoField label="Given Name" value={user.firstName} />
              </Grid>
              <Grid size={{ xs: 12, sm: 6 }}>
                <InfoField label="Family Name" value={user.lastName} />
              </Grid>
              <Grid size={{ xs: 12, sm: 6 }}>
                <InfoField label="Email Address" value={user.email} />
              </Grid>
              <Grid size={{ xs: 12, sm: 6 }}>
                <InfoField label="Phone Number" value={user.phoneNumber} />
              </Grid>
              
              <Grid size={12}>
                <Divider sx={{ my: 1, borderStyle: 'solid', borderColor: SOFT_BG }} />
              </Grid>

              <Grid size={{ xs: 12, sm: 6 }}>
                <InfoField label="Company Name" value={user.companyName} />
              </Grid>
              <Grid size={{ xs: 12, sm: 6 }}>
                <InfoField label="Professional Role" value={user.jobTitle} />
              </Grid>
            </Grid>
          </Grid>

        </Grid>
      </Paper>
      
      <Box sx={{ mt: 3, display: 'flex', justifyContent: 'flex-end', alignItems: 'center', gap: 1 }}>
        <Box sx={{ width: 8, height: 8, bgcolor: BRAND_BLUE }} />
        <Typography variant="caption" sx={{ color: 'text.secondary', fontWeight: 700, letterSpacing: 1 }}>
          DATA SECURED / {new Date().getFullYear()}
        </Typography>
      </Box>
    </Box>
  );
};

export default PersonalInformation;