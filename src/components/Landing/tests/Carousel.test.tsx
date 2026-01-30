import { render, screen } from "@testing-library/react"
import Carousel from "../components/Carousel/Carousel"
import { expect, test } from "vitest"

test("feature: displays branded industrial content", () => {
  render(<Carousel />)
  expect(screen.getByText(/Precision Engineered Valves/i)).toBeInTheDocument()
  expect(screen.getByText(/High-performance solutions/i)).toBeInTheDocument()

  const exploreBtns = screen.getAllByRole("button", { name: /explore products/i })
  const contactBtns = screen.getAllByRole("button", { name: /contact sales/i })

  expect(exploreBtns).toHaveLength(3)
  expect(contactBtns).toHaveLength(3)

  expect(exploreBtns[0]).toBeInTheDocument()
  expect(contactBtns[0]).toBeInTheDocument()
})
