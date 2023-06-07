import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import * as queries from "../../store/CustomerApi";

import Home from "./index";
describe("Home component", () => {
  it("should be render Loading component is fetching status", () => {
    jest
      .spyOn(queries, "useGetCustomerTransactionsQuery")
      .mockImplementation(() => ({
        data: [],
        error: false,
        isFetching: true,
        refetch: jest.fn(),
      }));

    render(<Home />);

    const loadingComponent = screen.getByTestId("loading-test-id");

    expect(loadingComponent).toBeInTheDocument();
  });
  it("should be render Error component is fetching status", () => {
    jest
      .spyOn(queries, "useGetCustomerTransactionsQuery")
      .mockImplementation(() => ({
        data: [],
        error: true,
        isFetching: false,
        refetch: jest.fn(),
      }));

    render(<Home />);

    const errorComponent = screen.getByTestId("error-component");

    expect(errorComponent).toBeInTheDocument();
  });

  it("should fetch proper data", () => {
    jest
      .spyOn(queries, "useGetCustomerTransactionsQuery")
      .mockImplementation(() => ({
        data: [
          {
            id: 1,
            name: "John",
            transactions: [
              { date: "2023-01-01", amount: 1049 },
              { date: "2023-04-01", amount: 90 },
              { date: "2023-04-15", amount: 110 },
              { date: "2023-05-01", amount: 75 },
              { date: "2023-05-15", amount: 200 },
              { date: "2023-06-01", amount: 50 },
            ],
          },
        ],
        error: false,
        isFetching: false,
        refetch: jest.fn(),
      }));

    render(<Home />);
    const homeComponent = screen.getByTestId("home-id");
    expect(homeComponent).toBeInTheDocument();
  });
});
