import React from "react";
import {
  calculateTotalPoints,
  calculatePointsPerMonth,
} from "../../helper/calculate.js";
import PointsPerMonth from "../Points/index.jsx";
import Transactions from "../Transactions/index.jsx";

const PointsCalculator = ({ transactions, customer }) => {
  const totalPoints = calculateTotalPoints(transactions);
  const pointsPerMonth = calculatePointsPerMonth(transactions);

  return (
    <div
      data-testid="point-calculator"
      className="flex flex-col min-w-[50px]  space-y-4 items-center border-2 border-black rounded-xl  p-8 "
    >
      <h2 className="text-2xl font-bold">Total Points: {totalPoints}</h2>

      <div className="flex flex-col sm:flex-row sm:space-x-8">
        <div>
          <div>
            Customer: {customer.id}, Name: {customer.name}
          </div>
          <div>
            <h2 className="text-xl underline font-bold">Points Per Month:</h2>
            <PointsPerMonth pointsPerMonth={pointsPerMonth} />
          </div>
        </div>
        <Transactions transactions={transactions} />
      </div>
    </div>
  );
};

export default PointsCalculator;
