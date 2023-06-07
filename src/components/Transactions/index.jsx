import React from "react";
import TransactionItem from "../TransactionItem";

function Transactions({ transactions }) {
  return (
    <div className="flex flex-col space-y-2">
      <h2 className="text-xl italic">Transactions:</h2>
      <div data-testid="transactions" className="h-[25vh] overflow-y-auto">
        {transactions &&
          transactions.map((transaction, index) => (
            <TransactionItem key={index} transaction={transaction} />
          ))}
      </div>
    </div>
  );
}

export default Transactions;
