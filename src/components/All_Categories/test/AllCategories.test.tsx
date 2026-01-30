import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { MemoryRouter } from "react-router-dom"
import { describe, it, expect, vi } from "vitest"
import { CategoryButton } from "../components/CategoryButton"

// Mock useNavigate
const mockNavigate = vi.fn()
vi.mock("react-router-dom", async () => {
  const actual = await vi.importActual("react-router-dom")
  return {
    ...actual,
    useNavigate: () => mockNavigate,
  }
})

describe("CategoryButton Isolation Test", () => {
  const mockOnProductClick = vi.fn()

  const defaultProps = {
    title: "Test Category",
    id: "test-cat",
    image: "test.jpg",
    onProductClick: mockOnProductClick,
    products: [
      { name: "Modal Product", id: "modal-123", isProduct: true },
      { name: "Redirect Link", link: "/target-page" },
    ],
  }

  it("calls onProductClick when a product item is clicked", async () => {
    const user = userEvent.setup()
    render(
      <MemoryRouter>
        <CategoryButton {...defaultProps} />
      </MemoryRouter>
    )

    const productItem = screen.getByText("Modal Product")
    await user.click(productItem)

    // Verify the callback was called with the specific ID
    expect(mockOnProductClick).toHaveBeenCalledWith("modal-123")
  })

  it("navigates to the link when a non-product item is clicked", async () => {
    const user = userEvent.setup()
    render(
      <MemoryRouter>
        <CategoryButton {...defaultProps} />
      </MemoryRouter>
    )

    const linkItem = screen.getByText("Redirect Link")
    await user.click(linkItem)
    expect(mockNavigate).toHaveBeenCalledWith("/target-page")
  })
})
