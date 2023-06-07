import React from "react";
import { render, screen } from "@testing-library/react";
import TransactionItem from ".";
import "@testing-library/jest-dom";

describe("TransactionItem Component", () => {
  const transaction = { amount: 200, date: "2023-05-15" };

  it("should TransactionItem component render", () => {
    render(<TransactionItem transaction={transaction} />);
    const transactionItem = screen.getByTestId("transaction-item");
    expect(transactionItem).toBeInTheDocument();
  });
});
