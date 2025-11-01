import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { Button } from "../Button";

const renderWithRouter = (component: React.ReactElement) => {
  return render(<MemoryRouter>{component}</MemoryRouter>);
};

describe("Button Component", () => {
  it("renders children correctly", () => {
    renderWithRouter(<Button link="/test">Click me</Button>);

    expect(screen.getByText("Click me")).toBeInTheDocument();
  });

  it("renders with correct link", () => {
    renderWithRouter(<Button link="/test-link">Test Button</Button>);

    const link = screen.getByRole("link");
    expect(link).toHaveAttribute("href", "/test-link");
  });

  it("renders with white button styles when whiteButton is true", () => {
    renderWithRouter(
      <Button link="/test" whiteButton={true}>
        White Button
      </Button>
    );

    const buttonDiv = screen.getByText("White Button");
    expect(buttonDiv).toHaveClass("bg-white", "text-textGray");
  });

  it("renders with default red button styles when whiteButton is false", () => {
    renderWithRouter(
      <Button link="/test" whiteButton={false}>
        Red Button
      </Button>
    );

    const buttonDiv = screen.getByText("Red Button");
    expect(buttonDiv).toHaveClass("bg-red", "text-white");
  });
});
