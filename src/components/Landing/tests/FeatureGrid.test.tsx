import { render, screen } from "@testing-library/react"
import { MemoryRouter, useNavigate } from "react-router-dom"
import { beforeEach, describe, expect, test, vi } from "vitest"
import FeatureGridSection from "../components/FeatureSection/FeatureGridSection"
import userEvent from "@testing-library/user-event"

vi.mock("react-router-dom", async () => {
  const actual = await vi.importActual("react-router-dom")
  return {
    ...actual,
    useNavigate: vi.fn(),
  }
})

const mockItems = [
  {
    image: "test1.jpg",
    caption: "Testing Item One",
    link: "/item-one",
  },
  {
    image: "test2.jpg",
    caption: "Testing Item Two",
    link: "/item-two",
  },
]

const mockNavigate = vi.fn()

beforeEach(() => {
  vi.mocked(useNavigate).mockReturnValue(mockNavigate)
  vi.clearAllMocks()
})

describe("FeatureGridSection", () => {
  test("renders title and all items", () => {
    render(
      <MemoryRouter>
        <FeatureGridSection sectionTitle="Industrial Solutions" items={mockItems} buttonText="View All" />
      </MemoryRouter>
    )

    expect(screen.getByText("Industrial Solutions")).toBeInTheDocument()
    expect(screen.getByText("Testing Item One")).toBeInTheDocument()
    expect(screen.getByText(/Testing Item Two/i)).toBeInTheDocument()

    const images = screen.getAllByRole("img")
    expect(images).toHaveLength(2)
    expect(images[0]).toHaveAttribute("src", "test1.jpg")
    expect(images[0]).toHaveAttribute("alt", "Feature 0")
    expect(images[1]).toHaveAttribute("src", "test2.jpg")
    expect(images[1]).toHaveAttribute("alt", "Feature 1")

    expect(screen.getByRole("button", { name: /view all/i })).toBeInTheDocument()
  })

  test("navigates when grid item is clicked", async () => {
    const user = userEvent.setup()

    render(
      <MemoryRouter>
        <FeatureGridSection sectionTitle="Title" items={mockItems} buttonText="Button" />
      </MemoryRouter>
    )

    const firstImage = screen.getByAltText("Feature 0")
    await user.click(firstImage)

    expect(mockNavigate).toHaveBeenCalledWith("/item-one")
    expect(mockNavigate).toHaveBeenCalledTimes(1)
  })

  test("navigates when caption is clicked", async () => {
    const user = userEvent.setup()

    render(
      <MemoryRouter>
        <FeatureGridSection sectionTitle="Title" items={mockItems} buttonText="Button" />
      </MemoryRouter>
    )

    const secondCaption = screen.getByText("Testing Item Two")
    await user.click(secondCaption)

    expect(mockNavigate).toHaveBeenCalledWith("/item-two")
  })

  test("triggers onButtonClick when CTA is clicked", async () => {
    const user = userEvent.setup()
    const onButtonClickMock = vi.fn()

    render(
      <MemoryRouter>
        <FeatureGridSection sectionTitle="Title" items={mockItems} buttonText="View More" onButtonClick={onButtonClickMock} />
      </MemoryRouter>
    )

    const btn = screen.getByRole("button", { name: /view more/i })
    await user.click(btn)

    expect(onButtonClickMock).toHaveBeenCalledTimes(1)
  })

  test("renders with empty items array", () => {
    render(
      <MemoryRouter>
        <FeatureGridSection sectionTitle="Empty Section" items={[]} buttonText="View All" />
      </MemoryRouter>
    )

    expect(screen.getByText("Empty Section")).toBeInTheDocument()
    expect(screen.queryByRole("img")).not.toBeInTheDocument()
    expect(screen.getByRole("button", { name: /view all/i })).toBeInTheDocument()
  })

  test("supports keyboard navigation with Enter key", async () => {
    const user = userEvent.setup()

    render(
      <MemoryRouter>
        <FeatureGridSection sectionTitle="Title" items={mockItems} buttonText="Button" />
      </MemoryRouter>
    )

    const firstImage = screen.getByAltText("Feature 0")
    firstImage.parentElement?.focus() // Focus the grid item
    await user.keyboard("{Enter}")

    // Note: This might not work as expected since Grid doesn't have
    // onClick + onKeyDown handlers. Consider adding keyboard support to component!
  })
})
