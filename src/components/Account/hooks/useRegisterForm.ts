import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { type RegisterUserDto, registerUser } from "../../../api/authApi";
import { useNotificationStore } from "../../store/useNotficationStore";

export const countries = [
  { code: "GB", label: "United Kingdom", phone: "44" },
  { code: "US", label: "United States", phone: "1" },
  { code: "IN", label: "India", phone: "91" },
  { code: "AE", label: "UAE", phone: "971" },
  { code: "SA", label: "Saudi Arabia", phone: "966" },
  { code: "SG", label: "Singapore", phone: "65" },
  { code: "DE", label: "Germany", phone: "49" },
  { code: "FR", label: "France", phone: "33" },
  { code: "CA", label: "Canada", phone: "1" },
  { code: "AU", label: "Australia", phone: "61" },
];

export const useRegisterForm = () => {
  const navigate = useNavigate();
  const showNotification = useNotificationStore((state) => state.showNotification);

  const [selectedCountry, setSelectedCountry] = useState(countries[0]);
  const [loading, setLoading] = useState(false);
  const [emailError, setEmailError] = useState<string | null>(null);
  const [passwordError, setPasswordError] = useState<string | null>(null);

  const [formData, setFormData] = useState<RegisterUserDto>({
    email: "",
    firstName: "",
    lastName: "",
    companyName: "",
    jobTitle: "",
    phoneNumber: "",
    country: countries[0].label,
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    if (name === "email") setEmailError(null);
    if (name === "password" || name === "confirmPassword") setPasswordError(null);
    
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleRegister = async (e: React.FormEvent) => {
     e.preventDefault();
    const requiredFields = ["email", "firstName", "lastName", "companyName", "jobTitle", "phoneNumber", "password", "confirmPassword"] as const

    for (const field of requiredFields) {
      if (!formData[field]?.trim()) {
        showNotification({ message: "Please fill in all required fields.", severity: "warning" })
        return
      }
    }
   
    setEmailError(null);

    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    if (!passwordRegex.test(formData.password)) {
      setPasswordError("Password must be at least 8 characters, include an uppercase letter, a number, and a symbol.");
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      showNotification({ message: "Passwords do not match.", severity: "warning" });
      return;
    }

    setLoading(true);
    try {
      const finalPayload: RegisterUserDto = {
        ...formData,
        phoneNumber: `+${selectedCountry.phone}${formData.phoneNumber}`,
        country: selectedCountry.label,
      };

      await registerUser(finalPayload);
      showNotification({ message: "Account created successfully! Redirecting...", severity: "success" });
      navigate("/login");
    } catch (err: any) {
      const msg = err.response?.data?.message || "Registration failed. Please try again.";
      showNotification({ message: msg, severity: "error" });
    } finally {
      setLoading(false);
    }
  };

  return {
    formData,
    loading,
    emailError,
    passwordError,
    selectedCountry,
    setSelectedCountry,
    handleChange,
    handleRegister,
  };
};