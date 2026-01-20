import { renderHook, act, render, screen } from "@testing-library/react"
import { describe, it, expect } from "vitest"
import { useProductConfigurator } from "../hooks/useProductConfigurator"
import { type Product } from "../types/CustomConfigurationtypes"
import SummaryPanel from "../components/SummaryPanel"
import ShimmerUI from "../components/ShimmerUI"
const mockProduct: Product = {
  id: "prod-123",
  title: "Industrial Valve X1",
  description: "A high-pressure stainless steel valve.",
  price: "450.00",
  imageUrl: "https://example.com/valve.jpg",
  configurations: [
    {
      label: "Body",
      required: true,
      options: [{ label: "Steel", code: "ST" }],
    },
    {
      label: "Size",
      required: true,
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
describe("Tests for Summary Panel Component", () => {
  it("should show a part number when number is provided", () => {
    render(<SummaryPanel generatedPartNumber="RS-VN-T" />)
    expect(screen.getByText("RS-VN-T")).toBeDefined()
  })
  it("should show a part number when number is provided", () => {
    render(<SummaryPanel generatedPartNumber="" />)
    expect(screen.getByText("---")).toBeDefined()
  })
})

describe("Tests for Shimmer UI Component", () => {
  it("should show the Shimmer UI being rendered", () => {
    render(<ShimmerUI />)
    expect(screen.getAllByLabelText("loading-skeleton")).toHaveLength(3)
  })

  it("should render the rectangular skeletons", () => {
    render(<ShimmerUI />)
    expect(screen.getAllByLabelText("rectangular-skeleton")).toHaveLength(3)
  })
})
