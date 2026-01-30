// partNumberGenerator.test.ts
import { describe, it, expect } from "vitest" // or jest
import { getEffectiveSelection, getSegmentsToInclude, buildPartNumber, type Segment } from "../hooks/partNumberGenerator"
import type { ProductConfig, ConfigOption } from "../types/CustomConfigurationtypes"

describe("getEffectiveSelection", () => {
  it("should return null if config has no label", () => {
    const config = { label: "" } as ProductConfig
    const selections = {}

    expect(getEffectiveSelection(config, selections)).toBeNull()
  })

  it("should return selected option if exists in selections", () => {
    const selectedOption: ConfigOption = { code: "A", label: "Option A" }
    const config: ProductConfig = {
      label: "Size",
      options: [selectedOption],
    } as ProductConfig
    const selections = { Size: selectedOption }

    expect(getEffectiveSelection(config, selections)).toBe(selectedOption)
  })

  it("should return single option if only one option exists", () => {
    const singleOption: ConfigOption = { code: "ONLY", label: "Only Option" }
    const config: ProductConfig = {
      label: "Color",
      options: [singleOption],
    } as ProductConfig
    const selections = {}

    expect(getEffectiveSelection(config, selections)).toBe(singleOption)
  })

  it("should return null if no selection and multiple options", () => {
    const config: ProductConfig = {
      label: "Size",
      options: [
        { code: "S", label: "Small" },
        { code: "M", label: "Medium" },
      ],
    } as ProductConfig
    const selections = {}

    expect(getEffectiveSelection(config, selections)).toBeNull()
  })
})

describe("getSegmentsToInclude", () => {
  it("should include segments with valid codes", () => {
    const configs: ProductConfig[] = [
      {
        label: "Size",
        required: true,
        options: [{ code: "A", label: "A" }],
      },
      {
        label: "Color",
        required: true,
        options: [{ code: "B", label: "B" }],
      },
    ] as ProductConfig[]

    const selections = {
      Size: { code: "A", label: "A" },
      Color: { code: "B", label: "B" },
    }

    const result = getSegmentsToInclude(configs, selections)

    expect(result).toEqual([
      { code: "A", skipSeparator: false, position: 0 },
      { code: "B", skipSeparator: false, position: 1 },
    ])
  })

  it("should show ?? for missing required fields", () => {
    const configs: ProductConfig[] = [
      {
        label: "Size",
        required: true,
        options: [
          { code: "A", label: "A" },
          { code: "B", label: "B" },
        ],
      },
    ] as ProductConfig[]

    const selections = {} // Nothing selected

    const result = getSegmentsToInclude(configs, selections)

    expect(result).toEqual([{ code: "??", skipSeparator: false, position: 0 }])
  })

  it("should skip optional fields with no selection", () => {
    const configs: ProductConfig[] = [
      {
        label: "Size",
        required: false,
        options: [
          { code: "A", label: "A" },
          { code: "B", label: "B" },
        ],
      },
      {
        label: "Color",
        required: true,
        options: [{ code: "B", label: "B" }],
      },
    ] as ProductConfig[]

    const selections = {
      Color: { code: "B", label: "B" },
    }

    const result = getSegmentsToInclude(configs, selections)

    expect(result).toEqual([{ code: "B", skipSeparator: false, position: 1 }])
  })

  it("should handle noSeperatorAfter flag", () => {
    const configs: ProductConfig[] = [
      {
        label: "Size",
        required: true,
        noSeperatorAfter: true,
        options: [{ code: "A", label: "A" }],
      },
    ] as ProductConfig[]

    const selections = {
      Size: { code: "A", label: "A" },
    }

    const result = getSegmentsToInclude(configs, selections)

    expect(result).toEqual([{ code: "A", skipSeparator: true, position: 0 }])
  })

  it("should ignore empty or dash codes for optional fields", () => {
    const configs: ProductConfig[] = [
      {
        label: "Size",
        required: false,
        options: [{ code: "", label: "None" }],
      },
      {
        label: "Color",
        required: false,
        options: [{ code: "-", label: "Dash" }],
      },
    ] as ProductConfig[]

    const selections = {
      Size: { code: "", label: "None" },
      Color: { code: "-", label: "Dash" },
    }

    const result = getSegmentsToInclude(configs, selections)

    expect(result).toEqual([])
  })
})

describe("buildPartNumber", () => {
  it("should join segments with dashes by default", () => {
    const segments: Segment[] = [
      { code: "A", skipSeparator: false, position: 0 },
      { code: "B", skipSeparator: false, position: 1 },
      { code: "C", skipSeparator: false, position: 2 },
    ]

    expect(buildPartNumber(segments)).toBe("A-B-C")
  })

  it("should skip separator when flag is true and segments are consecutive", () => {
    const segments: Segment[] = [
      { code: "A", skipSeparator: false, position: 0 },
      { code: "23", skipSeparator: true, position: 1 },
      { code: "B", skipSeparator: false, position: 2 },
    ]

    expect(buildPartNumber(segments)).toBe("A-23B")
  })

  it("should NOT skip separator when code is ??", () => {
    const segments: Segment[] = [
      { code: "A", skipSeparator: true, position: 0 },
      { code: "??", skipSeparator: false, position: 1 },
      { code: "B", skipSeparator: false, position: 2 },
    ]

    expect(buildPartNumber(segments)).toBe("A??-B")
  })

  it("should NOT skip separator when segments are not consecutive", () => {
    const segments: Segment[] = [
      { code: "A", skipSeparator: true, position: 0 },
      { code: "B", skipSeparator: false, position: 2 }, // Gap! position jumped from 0 to 2
    ]

    expect(buildPartNumber(segments)).toBe("A-B")
  })

  it("should handle single segment without separator", () => {
    const segments: Segment[] = [{ code: "ONLY", skipSeparator: false, position: 0 }]

    expect(buildPartNumber(segments)).toBe("ONLY")
  })

  it("should handle empty segments array", () => {
    const segments: Segment[] = []

    expect(buildPartNumber(segments)).toBe("")
  })

  it("should handle complex case with multiple skip flags", () => {
    const segments: Segment[] = [
      { code: "A", skipSeparator: false, position: 0 },
      { code: "23", skipSeparator: true, position: 1 },
      { code: "B", skipSeparator: true, position: 2 },
      { code: "C", skipSeparator: false, position: 3 },
    ]

    expect(buildPartNumber(segments)).toBe("A-23BC")
  })

  it("should reproduce the original bug case - empty required with skipSeparator", () => {
    // This is the bug you found!
    const segments: Segment[] = [
      { code: "A", skipSeparator: true, position: 0 },
      { code: "??", skipSeparator: false, position: 1 },
      { code: "B", skipSeparator: false, position: 2 },
    ]

    // Should be A??-B, not A??B
    expect(buildPartNumber(segments)).toBe("A??-B")
  })
})
