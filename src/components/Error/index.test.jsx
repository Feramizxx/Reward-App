import React from "react";
import { render, screen } from "@testing-library/react";
import Error from "./index";
import "@testing-library/jest-dom";

describe("Error Component", () => {
  it("should ErrorCompanent be in document", () => {
    render(<Error />);
    const ErrorComponent = screen.getByTestId("error-component");
    const spanElement = screen.getByText(
      "404 not found!!, The request URL was not found!"
    );
    expect(spanElement).toHaveTextContent(
      "404 not found!!, The request URL was not found!"
    );
    expect(ErrorComponent).toBeInTheDocument();
  });
});
