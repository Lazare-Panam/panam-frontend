import { renderHook, act } from "@testing-library/react"
import { describe, it, expect } from "vitest"
import { useProductConfigurator } from "../hooks/useProductConfigurator"
import { type Product } from "../types/CustomConfigurationtypes"

const mockProduct: Product = {
  id: "prod-123",
  title: "Industrial Valve X1",
  description: "A high-pressure stainless steel valve.",
  price: "450.00",
  imageUrl: "https://example.com/valve.jpg",
  configurations: [
    {
      label: "Body",
      options: [{ label: "Steel", code: "ST" }],
    },
    {
      label: "Size",
      options: [
        { label: "1 inch", code: "01" },
        { label: "2 inch", code: "02" },
      ],
    },
  ],
}

describe("useProductConfigurator general use", () => {
  it("should initialize the fixed components", () => {
    const { result } = renderHook(() => useProductConfigurator(mockProduct))
    expect(result.current.generatedPartNumber).toBe("ST-??")
  })
  it("should update selections and part number when handleOptionChange is called", () => {
    const { result } = renderHook(() => useProductConfigurator(mockProduct))
    act(() => {
      result.current.handleOptionChange("Size", "02")
    })
    expect(result.current.generatedPartNumber).toBe("ST-02")
    expect(result.current.selections["Size"].code).toBe("02")
    expect(result.current.selections["Size"].label).toBe("2 inch")
  })
  it("should return 'LOADING...' if the product is null", () => {
    const { result } = renderHook(() => useProductConfigurator(null))
    expect(result.current.generatedPartNumber).toBe("LOADING...")
  })
})
