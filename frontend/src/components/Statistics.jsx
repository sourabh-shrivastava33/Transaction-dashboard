import React from "react";
import { useSelector } from "react-redux";
import { cardBgColors, cardFontColors, cardText, months } from "../utils/utils";

const Statistics = ({ month }) => {
  const { statistics } = useSelector((state) => state.transaction);
  return (
    <>
      <h1 className="mt-16 mb-12 text-4xl font-extrabold flex items-center gap-4 justify-center">
        <span>Statistics:-</span>
        <span>{months[month]}</span>
      </h1>
      <div className="flex justify-between items-center w-full h-auto">
        {Object.keys(statistics).map((data, index) => {
          return (
            <div
              key={index}
              className={`w-[28%]  shadow-sm md:h-48 h-24 ${cardBgColors[index]} rounded-xl p-8 flex justify-center items-center flex-col gap-5`}
            >
              <p
                className={`text-2xl md:text-4xl uppercase font-extrabold ${cardFontColors[index]}`}
              >
                {cardText[index]}
              </p>
              <span className={`text-4xl font-bold  ${cardFontColors[index]}`}>
                {index === 0
                  ? `$${statistics[data].toFixed(2)}`
                  : statistics[data]}
              </span>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Statistics;
