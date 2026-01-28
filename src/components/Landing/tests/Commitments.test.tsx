import { render, screen } from "@testing-library/react"
import { describe, expect, test } from "vitest"
import Commitments from "../components/Commitments/Commitments"

describe("Commitments Component", () => {
  test("renders the section title and description", () => {
    render(<Commitments />)
    expect(screen.getByText(/Our Company’s Commitments/i)).toBeInTheDocument()
    expect(screen.getByText(/Panam associates who make our positive impact/i)).toBeInTheDocument()
  })

  test("renders the call-to-action button", () => {
    render(<Commitments />)
    const button = screen.getByRole("button", { name: /find information about panam/i })
    expect(button).toBeInTheDocument()
  })

  test("renders the headquarters image with correct alt text", () => {
    render(<Commitments />)
    const image = screen.getByAltText(/Panam Headquarters/i)
    expect(image).toBeInTheDocument()
    expect(image).toHaveAttribute("src", expect.stringContaining("unsplash.com"))
  })
})
