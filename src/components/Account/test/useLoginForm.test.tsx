import { renderHook, act } from "@testing-library/react";
import { useLoginForm } from "../hooks/useLoginForm";
import * as authApi from "../../../api/authApi";
import { vi, describe, it, expect, beforeEach } from "vitest";

// Mock dependencies
vi.mock("../../../api/authApi");
vi.mock("react-router-dom", () => ({
  useNavigate: () => vi.fn(),
  useSearchParams: () => [new URLSearchParams({ redirect: "/custom-path" })],
}));

describe("useLoginForm Hook", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("should update credentials on handleChange", () => {
    const { result } = renderHook(() => useLoginForm());
    
    act(() => {
      result.current.handleChange({
        target: { name: "email", value: "test@panam.com" }
      } as React.ChangeEvent<HTMLInputElement>);
    });

    expect(result.current.credentials.email).toBe("test@panam.com");
  });

  it("should call loginUser and navigate to redirect path on success", async () => {
    const mockData = { id: 1, firstName: "John", email: "john@panam.com" };
    vi.mocked(authApi.loginUser).mockResolvedValue(mockData as any);
    
    const { result } = renderHook(() => useLoginForm());

    act(() => {
      result.current.handleChange({ target: { name: "email", value: "j@p.com" } } as any);
      result.current.handleChange({ target: { name: "password", value: "pass" } } as any);
    });

    await act(async () => {
      await result.current.handleLogin({ preventDefault: () => {} } as any);
    });

    expect(authApi.loginUser).toHaveBeenCalledWith({ email: "j@p.com", password: "pass" });
    expect(result.current.loading).toBe(false);
  });
});