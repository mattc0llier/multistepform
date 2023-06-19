import Home from "../pages/index";
import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";

describe("Home", () => {
  it("renders home", () => {
    render(<Home />);
    // check if all components are rendered
    expect(screen.getByTestId("home")).toBeInTheDocument();
  });
});
