import React from "react";
import { useState } from "react";

const Pagination = ({ postPerPage, totalPost, paginate }) => {
  const pageNumbers = [];
  for (let i = 0; i < Math.ceil(totalPost / postPerPage); i++) {
    pageNumbers.push(i);
  }
  const [currentPage, setCurrentPage] = useState(1);


  return (
    <div className="bg-white px-4 py-3 flex items-center justify-between border-t border-gray-200 sm:px-6">
      <div className=" sm:flex-1 sm:flex sm:items-center sm:justify-between">
        <div>
          <p className="text-sm text-gray-700">
            Showing <span className="font-medium"> {currentPage} </span> of
            <span className="font-medium ml-1">
              {totalPost ? Math.ceil(totalPost / postPerPage) : 1}
            </span>{" "}
            Pages
          </p>
        </div>
        <div>
          <nav
            className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px"
            aria-label="Pagination"
          >
            {pageNumbers.map((num) => {
              return (
                <span
                  key={num}
                  className={`cursor-pointer z-10 bg-indigo-50 border-indigo-500 text-indigo-600 relative inline-flex items-center px-3 py-2 border text-sm font-medium ${currentPage === num + 1 && "border-4 font-bold"}`}
                  onClick={() => {
                    paginate(num);
                    setCurrentPage(num + 1);
                  }}
                >
                  {num + 1}
                </span>
              );
            })}
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Pagination;
