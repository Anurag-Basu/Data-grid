import React from "react";

const Th = ({ title, onClick, sortConfig }) => {
  return (
    <th
      scope="col"
      onClick={() => onClick(title)}
      className={`text-sm  capitalize cursor-pointer font-medium text-gray-900 px-6 py-4 text-left `}
    >
      <span className="flex flex-row justify-start items-center ">
      {title} {title === sortConfig.column && (sortConfig.asc ? (<i className="fa-solid fa-angles-up pl-2 text-blue-600 pt-1"></i> ) : (<i className="fa-solid fa-angles-down pl-2 text-blue-600 pt-1"></i>)) }
      </span>
    </th>
  );
};

export default Th;

