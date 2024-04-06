import React from "react";
import { months, tableHeaders } from "../utils/utils";
import { useSelector } from "react-redux";
import ButtonContainer from "./ButtonContainer";
const Table = ({ month, setMonth, search, setSearch, page, setPage }) => {
  const {
    allTransactions: { transactions, totalPage, curPage },
  } = useSelector((state) => state.transaction);

  return (
    <>
      <div className="w-full bg-gray-50 p-8  rounded-md shadow-md mt-16 max-h-[70svh] overflow-y-scroll">
        <div className="flex w-full items-center justify-between">
          <div className="w-[50%]">
            <input
              type="text"
              placeholder="Search transaction"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full h-10 rounded-md p-2 text-lg text-gray-50 placeholder:text-gray-50 bg-sky-950"
            />
          </div>
          <select
            value={month}
            onChange={(e) => {
              setMonth(e.target.value);
              setPage(1);
            }}
            className="w-auto p-2 rounded-md bg-sky-950 text-gray-50"
          >
            {Object.keys(months).map((el) => {
              return (
                <option key={el} value={el}>
                  {months[el]}
                </option>
              );
            })}
          </select>
        </div>
        <div className="w-full rounded-md overflow-hidden mt-8">
          <table className="w-full">
            <thead>
              <tr>
                {tableHeaders.map((head, index) => (
                  <th
                    key={head}
                    className={`bg-sky-900 ${index === 0 && "w-[15%]"} ${
                      index === 1 && "w-[25%]"
                    }
                  ${index === 2 && "w-[35%]"}
               
                  text-sky-100 h-16 text-lg font-bold`}
                  >
                    {head}
                  </th>
                ))}
              </tr>
            </thead>
            {transactions && transactions.length > 0 ? (
              <tbody className="text-[1rem] text-sky-900">
                {!transactions ? (
                  <tr>
                    <td>loading</td>
                  </tr>
                ) : (
                  <>
                    {transactions.map((transaction) => {
                      return (
                        <tr
                          className="border border-gray-900 bg-white"
                          key={transaction._id}
                        >
                          <td className=" border border-gray-900 p-2 font-bold">
                            {transaction._id}
                          </td>
                          <td className="border border-gray-900 p-2 font-bold">
                            {transaction.title}
                          </td>
                          <td className=" border border-gray-900 p-2 font-bold">
                            {transaction.description}
                          </td>
                          <td className=" border border-gray-900 p-2 font-bold">
                            ${transaction.price.toFixed(2)}
                          </td>
                          <td className="border border-gray-900 p-2  font-bold">
                            {transaction.category}
                          </td>
                          <td className="border border-gray-900 p-2 font-bold">
                            {transaction.sold ? "Sold" : "Unsold"}
                          </td>
                          <td className="h-16 w-16 border border-gray-900 p-2 font-bold">
                            <img src={transaction.image} />
                          </td>
                        </tr>
                      );
                    })}
                  </>
                )}
              </tbody>
            ) : (
              <tbody>
                <tr>
                  <td className="text-bold text-lg uppercase">
                    No data to show
                  </td>
                </tr>
              </tbody>
            )}
          </table>
        </div>
      </div>
      {totalPage > 1 && (
        <ButtonContainer
          totalPage={totalPage}
          setPage={setPage}
          curPage={curPage}
        />
      )}
    </>
  );
};

export default Table;
