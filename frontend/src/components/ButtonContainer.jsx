import React from "react";

const ButtonContainer = ({ totalPage, setPage, curPage }) => {
  const pages = Array.from(Array(totalPage).keys()).map((num) => num + 1);
  return (
    <div className="flex items-center justify-evenly mt-8 ">
      <p className="text-bold text-lg capitalize">Per page 5 products</p>
      <div className="flex items-center  gap-2">
        {pages.map((el) => {
          return (
            <button
              key={el}
              id={el}
              className={`w-12 h-12 rounded-md  border-gray-400 border-2 ${
                curPage === el && "bg-sky-900 text-sky-50"
              }`}
              onClick={(e) => {
                if (curPage == e.target.id) return;
                console.log("hello");
                setPage(e.target.id);
              }}
            >
              {el}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default ButtonContainer;
