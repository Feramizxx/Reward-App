import React from "react";
import PointsCalculator from "../Card";
import { useGetCustomerTransactionsQuery } from "../../store/CustomerApi";
import Error from "../Error";
import Loading from "../Loading";

function Home() {
  const {
    data: customerTransactions,
    error,
    isFetching,
  } = useGetCustomerTransactionsQuery();

  console.log(customerTransactions);
  if (isFetching) {
    return <Loading />;
  }
  if (error) {
    return <Error />;
  }
  return (
    <div
      data-testid="home-id"
      className="flex max-w-[1279px] md:space-x-4 mx-auto flex-wrap justify-center items-center gap-y-2  h-[100vh]"
    >
      {customerTransactions &&
        customerTransactions.map((customer) => (
          <div className="flex" key={customer.id}>
            <PointsCalculator
              customer={customer}
              transactions={customer.transactions}
            />
          </div>
        ))}
    </div>
  );
}

export default Home;
