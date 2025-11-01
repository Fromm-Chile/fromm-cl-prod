import { render, screen } from "@testing-library/react";
import { Loader } from "../Loader";

describe("Loader Component", () => {
  it("renders loading text for screen readers", () => {
    render(<Loader />);
    const loadingText = screen.getByText("Loading...");
    expect(loadingText).toBeInTheDocument();
  });

  it("renders the logo image", () => {
    render(<Loader />);
    const logoImage = screen.getByRole("img");
    expect(logoImage).toHaveAttribute("src", "/img/Navbar/FrommLogo.webp");
  });
});
