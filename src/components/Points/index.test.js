import React from "react";
import { render, screen } from "@testing-library/react";
import PointsPerMonth from ".";
import "@testing-library/jest-dom";

describe("PointsPerMonth Component", () => {
  const points = { "2023-3": 1814, "2023-4": 70, " 2023-5": 250, "2023-6": 0 };
  it("should render Points Component", () => {
    render(<PointsPerMonth pointsPerMonth={points} />);
    const PointsPerMonthComponent = screen.getByTestId("points");
    expect(PointsPerMonthComponent).toBeInTheDocument();
  });
});
