import React from "react";

function PointsPerMonth({ pointsPerMonth }) {
  return (
    <ul data-testid="points">
      {Object.keys(pointsPerMonth).map((month) => (
        <li key={month}>
          {month}: {pointsPerMonth[month]}
        </li>
      ))}
    </ul>
  );
}

export default PointsPerMonth;
