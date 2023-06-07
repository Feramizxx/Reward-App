import React from "react";
import { render, screen } from "@testing-library/react";
import PointsCalculator from "./index";
import "@testing-library/jest-dom";

describe("PointsCalculator", () => {
  const transactions = [
    { date: "2023-03-15", amount: 1081 },
    { date: "2023-04-01", amount: 90 },
    { date: "2023-04-15", amount: 110 },
    { date: "2023-05-01", amount: 45 },
    { date: "2023-05-15", amount: 200 },
    { date: "2023-06-01", amount: 50 },
  ];

  const customer = {
    id: 2,
    name: "Jane",
    transactions: [
      { date: "2023-03-15", amount: 1081 },
      { date: "2023-04-01", amount: 90 },
      { date: "2023-04-15", amount: 110 },
      { date: "2023-05-01", amount: 45 },
      { date: "2023-05-15", amount: 200 },
      { date: "2023-06-01", amount: 50 },
    ],
  };
  it("should PointsCalculatorCompanent be in document", () => {
    render(
      <PointsCalculator transactions={transactions} customer={customer} />
    );
    const PointsCalculatorCompanent = screen.getByTestId("point-calculator");
    expect(PointsCalculatorCompanent).toBeInTheDocument();
  });
});
