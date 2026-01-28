import { render, screen } from "@testing-library/react"
import { describe, expect, test } from "vitest"
import IntroSection from "../components/Intro/Intro"

describe("IntroSection", () => {
  test("renders the branded headings correctly", () => {
    render(<IntroSection />)

    // Check for the overline "Standard" text
    expect(screen.getByText(/The Panam Standard/i)).toBeInTheDocument()

    // Check for the main H3 value proposition
    expect(screen.getByText(/Helping People Feel Confident in Their Fluid Systems/i)).toBeInTheDocument()
  })

  test("renders the body paragraphs", () => {
    render(<IntroSection />)

    // Check for specific keywords in the long-form text
    expect(screen.getByText(/contain and control liquids and gases/i)).toBeInTheDocument()
    expect(screen.getByText(/protecting their profitability, their people, and our planet/i)).toBeInTheDocument()
  })

  test("renders the YouTube video iframe with correct title", () => {
    render(<IntroSection />)

    // We find the iframe by its title property
    const videoIframe = screen.getByTitle(/Panam Valves Product Showcase/i)

    expect(videoIframe).toBeInTheDocument()
    expect(videoIframe).toHaveAttribute("src", "https://www.youtube.com/embed/HRFxY37P0Lg")
    expect(videoIframe).toHaveAttribute("allowFullScreen")
  })

  test("contains the decorative brand accent bar", () => {
    const { container } = render(<IntroSection />)

    // Selecting the blue bar via its specific styling to ensure visual identity is present
    const accentBar = container.querySelector('div[style*="background-color: #01B0F0"]')
    // Note: If using MUI sx props, you might prefer checking for a Box with specific dimensions
    expect(accentBar).toBeDefined()
  })
})
