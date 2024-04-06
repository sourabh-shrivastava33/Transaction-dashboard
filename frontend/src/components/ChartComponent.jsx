import React from "react";
import Barchart from "./Barchart";
import PieChart from "./PieChart";

const ChartComponent = () => {
  return (
    <div className=" mt-16 w-full h-[30rem] flex items-center  gap-4 mb-24">
      <div className="w-[60%] h-full">
        <Barchart />
        <h1 className="font-bold text-center mt-4 uppercase tracking-wide">
          Price range wise items count
        </h1>
      </div>
      <div className="w-[40%] h-full flex items-center justify-center flex-col gap-2">
        <PieChart />
        <h1 className="font-bold mt-4 uppercase tracking-wide">
          Category wise item count
        </h1>
      </div>
    </div>
  );
};

export default ChartComponent;
