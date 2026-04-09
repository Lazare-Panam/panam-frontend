import { useQuery } from "@tanstack/react-query";
import { 
  Box, Typography, CircularProgress, Table, TableBody, TableCell, 
  TableContainer, TableHead, TableRow, Paper, Chip, Stack 
} from "@mui/material";
import {  VerifiedUser as VerifiedIcon } from "@mui/icons-material";
import { getAllAdminUsers } from "../../../api/adminClient";

const BRAND_BLUE = "#01B0F0";
const SOFT_BG = "#F8FAFC";
const BORDER_COLOR = "#E2E8F0";

const AdminUsersList = () => {
  const { data: users = [], isLoading, isError } = useQuery({
    queryKey: ["admin", "users"],
    queryFn: getAllAdminUsers,
  });

  if (isLoading) return (
    <Box sx={{ display: "flex", justifyContent: "center", py: 10 }}>
      <CircularProgress sx={{ color: BRAND_BLUE }} />
    </Box>
  );

  if (isError) return <Typography color="error">Failed to load users.</Typography>;

  return (
    <Box sx={{ p: { xs: 2, md: 4 } }}>
      <Box sx={{ mb: 4, borderLeft: `6px solid ${BRAND_BLUE}`, pl: 3 }}>
        <Typography variant="h4" sx={{ fontWeight: 900, color: "#1E293B", letterSpacing: -1 }}>
          Registered Customers
        </Typography>
        <Typography variant="caption" sx={{ color: BRAND_BLUE, fontWeight: 700, textTransform: "uppercase" }}>
          User Management & Verification
        </Typography>
      </Box>

      <TableContainer component={Paper} sx={{ borderRadius: 0, border: `1px solid ${BORDER_COLOR}`, boxShadow: "none" }}>
        <Table>
          <TableHead sx={{ bgcolor: SOFT_BG }}>
            <TableRow>
              <TableCell sx={{ fontWeight: 900 }}>FULL NAME</TableCell>
              <TableCell sx={{ fontWeight: 900 }}>COMPANY / ROLE</TableCell>
              <TableCell sx={{ fontWeight: 900 }}>LOCATION</TableCell>
              <TableCell sx={{ fontWeight: 900 }}>STATUS</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {users.map((user) => (
              <TableRow key={user.id} sx={{ "&:hover": { bgcolor: "#f1f5f9" } }}>
                <TableCell>
                  <Typography variant="body2" sx={{ fontWeight: 700 }}>{user.firstName} {user.lastName}</Typography>
                  <Typography variant="caption" sx={{ color: "text.secondary" }}>{user.email}</Typography>
                </TableCell>
                <TableCell>
                  <Typography variant="body2" sx={{ fontWeight: 600 }}>{user.companyName}</Typography>
                  <Typography variant="caption" sx={{ color: BRAND_BLUE }}>{user.jobTitle}</Typography>
                </TableCell>
                <TableCell>
                  <Typography variant="body2">{user.country}</Typography>
                </TableCell>
                <TableCell>
                  <Stack direction="row" spacing={1}>
                    <Chip 
                      label={user.isApproved ? "Approved" : "Pending"} 
                      size="small"
                      sx={{ 
                        bgcolor: user.isApproved ? "#DCFCE7" : "#FEF3C7", 
                        color: user.isApproved ? "#166534" : "#92400E",
                        fontWeight: 700, borderRadius: 1
                      }} 
                    />
                    {user.emailConfirmed && <VerifiedIcon sx={{ color: BRAND_BLUE, fontSize: 20 }} />}
                  </Stack>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default AdminUsersList;