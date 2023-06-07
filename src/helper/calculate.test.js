import {
  calculatePoints,
  calculateTotalPoints,
  calculatePointsPerMonth,
} from "./calculate.js";

describe("calculatePoints", () => {
  it("should calculate points correctly for amount greater than 100", () => {
    const points = calculatePoints(150);
    expect(points).toBe(150);
  });

  it("should calculate points correctly for amount between 50 and 100 (inclusive)", () => {
    const points = calculatePoints(75);
    expect(points).toBe(25);
  });

  it("should return 0 points for amount less than or equal to 50", () => {
    const points = calculatePoints(30);
    expect(points).toBe(0);
  });
});

describe("calculateTotalPoints", () => {
  it("should calculate total points correctly for multiple transactions", () => {
    const transactions = [{ amount: 120 }, { amount: 80 }, { amount: 60 }];
    const totalPoints = calculateTotalPoints(transactions);
    expect(totalPoints).toBe(130);
  });

  it("should return 0 points for empty transactions array", () => {
    const transactions = [];
    const totalPoints = calculateTotalPoints(transactions);
    expect(totalPoints).toBe(0);
  });
});

describe("calculatePointsPerMonth", () => {
  it("should calculate points per month correctly for multiple transactions", () => {
    const transactions = [
      { date: "2023-03-15", amount: 1081 },
      { date: "2023-04-01", amount: 90 },
      { date: "2023-04-15", amount: 110 },
      { date: "2023-05-01", amount: 45 },
      { date: "2023-05-15", amount: 200 },
      { date: "2023-06-01", amount: 50 },
    ];
    const pointsPerMonth = calculatePointsPerMonth(transactions);
    expect(pointsPerMonth).toEqual({
      "2023-3": 2012,
      "2023-4": 110,
      "2023-5": 250,
      "2023-6": 0,
    });
  });

  it("should return an empty object for empty transactions array", () => {
    const transactions = [];
    const pointsPerMonth = calculatePointsPerMonth(transactions);
    expect(pointsPerMonth).toEqual({});
  });
});
