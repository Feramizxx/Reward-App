import React from "react";
import { render, screen } from "@testing-library/react";
import Transactions from ".";
import "@testing-library/jest-dom";

describe("Transactions Component", () => {
  const transaction = [
    { date: "2023-01-01", amount: 1049 },
    { date: "2023-04-01", amount: 90 },
    { date: "2023-04-15", amount: 110 },
    { date: "2023-05-01", amount: 75 },
    { date: "2023-05-15", amount: 200 },
    { date: "2023-06-01", amount: 50 },
  ];
  it("should render Transactions component", () => {
    render(<Transactions transactions={transaction} />);
    const TransactionComponent = screen.getByTestId("transactions");
    expect(TransactionComponent).toBeInTheDocument();
  });

  it("should TransactionItem component render in Transaction component", () => {
    render(<Transactions transactions={transaction} />);
    const TransactionItem = screen.getAllByTestId("transaction-item");

    expect(TransactionItem).toHaveLength(6);
  });
});
