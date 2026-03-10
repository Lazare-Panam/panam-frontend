import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event" // Import userEvent
import { BrowserRouter } from "react-router-dom"
import FeatureGridSection, { type FeatureGridProps } from "../components/FeatureSection/FeatureGridSection"
import { beforeEach, describe, expect, it, vi } from "vitest"

const mockedUsedNavigate = vi.fn()
vi.mock("react-router-dom", async () => {
  const actual = await vi.importActual("react-router-dom")
  return {
    ...actual,
    useNavigate: () => mockedUsedNavigate,
  }
})

const defaultProps: FeatureGridProps = {
  sectionTitle: "Features",
  items: [
    { image: "test1.jpg", caption: "Caption 1",  },
    { image: "test2.jpg", caption: "Caption 2",  },
  ],
  buttonText: "See More",
  onButtonClick: vi.fn(),
}

const renderComponent = (props = defaultProps) => {
  // Set up user-event
  const user = userEvent.setup()

  const utils = render(
    <BrowserRouter>
      <FeatureGridSection {...props} />
    </BrowserRouter>
  )

  return { ...utils, user }
}

describe("FeatureGridSection", () => {
  beforeEach(() => {
    vi.clearAllMocks()
  })

  it("navigates when a grid item is clicked", async () => {
    const { user } = renderComponent()

    // Find the item by its role and the text inside it
    const gridItem = screen.getByRole("button", { name: /view caption 1/i })

    await user.click(gridItem)

    expect(mockedUsedNavigate).toHaveBeenCalledWith("/path1")
  })

  it("calls onButtonClick with full interaction simulation", async () => {
    const { user } = renderComponent()

    const actionButton = screen.getByRole("button", { name: /see more/i })

    // user.click handles focus and hover states automatically
    await user.click(actionButton)

    expect(defaultProps.onButtonClick).toHaveBeenCalledTimes(1)
  })

  it("renders complex captions correctly", () => {
    const complexItems = [
      {
        image: "img.jpg",
        caption: <span data-testid="custom-span">Complex Content</span>,
        link: "/test",
      },
    ]

    renderComponent({ ...defaultProps, items: complexItems })
    expect(screen.getByTestId("custom-span")).toBeInTheDocument()
  })
})
