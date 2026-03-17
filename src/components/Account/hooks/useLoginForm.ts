import { useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { loginUser, type LoginDto } from "../../../api/authApi";
import { useNotificationStore } from "../../store/useNotficationStore";
import { useUserStore } from "../../store/useUserStore";

export const useLoginForm = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const showNotification = useNotificationStore((state) => state.showNotification);
  const setUser = useUserStore((state) => state.setUser);

  const [loading, setLoading] = useState(false);
  const [isForgot, setIsForgot] = useState(false);
  const [credentials, setCredentials] = useState<LoginDto>({ email: "", password: "" });

  const redirectTo = searchParams.get("redirect") || "/dashboard";

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setCredentials((prev) => ({ ...prev, [name]: value }));
  };

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!credentials.email || !credentials.password) {
      showNotification({ message: "Please enter your email and password.", severity: "warning" });
      return;
    }

    setLoading(true);
    try {
      const data = await loginUser(credentials);
      setUser({
        id: data.id,
        email: data.email,
        firstName: data.firstName,
        lastName: data.lastName,
        companyName: data.companyName,
        jobTitle: data.jobTitle,
        phoneNumber: data.phoneNumber,
      });

      showNotification({ message: `Welcome back, ${data.firstName}!`, severity: "success" });
      navigate(redirectTo);
    } catch (err: any) {
      const errorMsg = err.response?.data?.message || "Invalid credentials. Please try again.";
      showNotification({ message: errorMsg, severity: "error" });
    } finally {
      setLoading(false);
    }
  };

  return {
    credentials,
    loading,
    isForgot,
    setIsForgot,
    handleChange,
    handleLogin,
    navigate,
  };
};