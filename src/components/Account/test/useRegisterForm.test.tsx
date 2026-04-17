import { renderHook, act } from "@testing-library/react";
import { useRegisterForm } from "../hooks/useRegisterForm";
import * as authApi from "../../../api/authApi";
import { vi, describe, it, expect, beforeEach } from "vitest";

vi.mock("../../../api/authApi");
vi.mock("react-router-dom", () => ({
  useNavigate: () => vi.fn(),
}));

describe("useRegisterForm Hook", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("should block registration if password fails complexity regex", async () => {
    const { result } = renderHook(() => useRegisterForm());

    act(() => {
      result.current.handleChange({ 
        target: { name: "password", value: "simple123" } 
      } as any);
    });

    await act(async () => {
      await result.current.handleRegister({ preventDefault: () => {} } as any);
    });

    // Should set error and NOT call API
    expect(result.current.passwordError).not.toBeNull();
    expect(authApi.registerUser).not.toHaveBeenCalled();
  });

  it("should format the phone number correctly before sending to API", async () => {
    const { result } = renderHook(() => useRegisterForm());
    vi.mocked(authApi.registerUser).mockResolvedValue({} as any);

    // Default country in hook is GB (+44)
    act(() => {
      result.current.handleChange({ target: { name: "email", value: "work@biz.com" } } as any);
      result.current.handleChange({ target: { name: "password", value: "SecurePass123!" } } as any);
      result.current.handleChange({ target: { name: "confirmPassword", value: "SecurePass123!" } } as any);
      result.current.handleChange({ target: { name: "phoneNumber", value: "777888999" } } as any);
    });

    await act(async () => {
      await result.current.handleRegister({ preventDefault: () => {} } as any);
    });

    // Check if it concatenated the country code
    expect(authApi.registerUser).toHaveBeenCalledWith(
      expect.objectContaining({
        phoneNumber: "+44777888999"
      })
    );
  });

  it("should clear error states when user types", () => {
    const { result } = renderHook(() => useRegisterForm());

    // Manually trigger error
    act(() => {
      result.current.handleChange({ target: { name: "email", value: "invalid" } } as any);
    });

    expect(result.current.emailError).toBeNull(); // Should be null because handleChange resets it
  });
});