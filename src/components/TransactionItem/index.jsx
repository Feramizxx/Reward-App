import React from "react";

const TransactionItem = ({ transaction }) => {
  const { date, amount } = transaction;
  return (
    <div data-testid="transaction-item">
      <p>Date: {date}</p>
      <p>Amount: ${amount}</p>
    </div>
  );
};

export default TransactionItem;
