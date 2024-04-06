import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Header from "../components/Header";
import ChartComponent from "../components/ChartComponent";
import {
  useGetAllTransactionQuery,
  useGetCombinedDataQuery,
} from "../slices/transactionApiSlice";
import { setAllTransactions, setStatistics } from "../slices/transactionSlice";
import Statistics from "../components/Statistics";
import Table from "../components/Table";

const Dashboard = () => {
  const [month, setMonth] = useState(3);
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const dispatch = useDispatch();
  let limit = 10;
  const { data, isLoading } = useGetAllTransactionQuery({
    search,
    month,
    page,
    limit,
  });
  const { data: statisticsData } = useGetCombinedDataQuery(month);

  useEffect(() => {
    if (data) {
      dispatch(setAllTransactions(data));
    }
  }, [dispatch, data]);
  useEffect(() => {
    if (statisticsData) {
      dispatch(setStatistics(statisticsData));
    }
  }, [dispatch, statisticsData]);
  return (
    <div className="pb-4">
      <Header />
      <div className="w-[95%] mx-auto mt-4">
        <Table
          month={month}
          setMonth={setMonth}
          search={search}
          setSearch={setSearch}
          isLoading={isLoading}
          page={page}
          setPage={setPage}
        />
        <Statistics month={month} />
        <ChartComponent />
      </div>
    </div>
  );
};

export default Dashboard;
