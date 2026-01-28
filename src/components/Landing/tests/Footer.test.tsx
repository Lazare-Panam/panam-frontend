import { render, screen } from "@testing-library/react"
import { describe, expect, test } from "vitest"
import Footer from "../components/Footer/Footer"

describe("Footer Component", () => {
  test("renders company logo with correct accessibility text", () => {
    render(<Footer />)
    const logo = screen.getByAltText(/Panam Valves Logo/i)
    expect(logo).toBeInTheDocument()
  })

  test("displays the correct headquarters address", () => {
    render(<Footer />)
    expect(screen.getByText(/Franklin's House/i)).toBeInTheDocument()
    expect(screen.getByText(/Bicester, OX26 6JU/i)).toBeInTheDocument()
    expect(screen.getByText(/United Kingdom/i)).toBeInTheDocument()
  })

  test("contains valid contact links (Email and Phone)", () => {
    render(<Footer />)

    const emailLink = screen.getByRole("link", { name: /sales@panamvalves.co.uk/i })
    expect(emailLink).toHaveAttribute("href", "mailto:sales@panamvalves.co.uk")

    const phoneLink = screen.getByRole("link", { name: /\+44 \(0\) 7369243459/i })
    expect(phoneLink).toHaveAttribute("href", "tel:+441869226300")
  })

  test("renders all product category links", () => {
    render(<Footer />)
    const products = ["Ball Valves", "Needle Valves", "DBB Valves", "Manifolds", "Fittings", "Check Valves"]

    products.forEach(product => {
      expect(screen.getByText(product)).toBeInTheDocument()
    })
  })

  test("updates copyright year to current year", () => {
    render(<Footer />)
    const currentYear = new Date().getFullYear().toString()
    expect(screen.getByText(new RegExp(currentYear))).toBeInTheDocument()
  })

  test("renders social media icons", () => {
    const { container } = render(<Footer />)
    // Checking for the stack containing social buttons
    const iconButtons = container.querySelectorAll("button")
    // You have 4 icons defined in the array
    expect(iconButtons.length).toBeGreaterThanOrEqual(4)
  })

  test("renders the Google Map iframe", () => {
    render(<Footer />)
    const map = screen.getByTitle(/Panam UK Location/i)
    expect(map).toBeInTheDocument()
    expect(map).toHaveAttribute("src")
  })
})
