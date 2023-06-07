import React from "react";
import { render, screen } from "@testing-library/react";
import Loading from ".";
import "@testing-library/jest-dom";

describe("Loading Component", () => {
  it("should spinner be in Loading compnent", () => {
    render(<Loading />);
    const spinner = screen.getByTestId("loading-test-id");

    expect(spinner).toBeInTheDocument();
  });
});
