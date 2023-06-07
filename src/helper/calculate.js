export const calculatePoints = (amount) => {
  let points = 0;

  if (amount > 100) {
    points += (amount - 100) * 2;
  }
  if (amount > 100) {
    points += 50;
  } else if (amount > 50) {
    points += amount - 50;
  }

  return points;
};

export const calculateTotalPoints = (transactions) => {
  let totalPoints = 0;

  transactions.forEach((transaction) => {
    totalPoints += calculatePoints(transaction.amount);
  });

  return totalPoints;
};

export const calculatePointsPerMonth = (transactions) => {
  const pointsPerMonth = {};

  transactions.forEach((transaction) => {
    const date = new Date(transaction.date);
    const month = `${date.getFullYear()}-${date.getMonth() + 1}`;

    if (!pointsPerMonth[month]) {
      pointsPerMonth[month] = 0;
    }

    pointsPerMonth[month] += calculatePoints(transaction.amount);
  });

  return pointsPerMonth;
};
