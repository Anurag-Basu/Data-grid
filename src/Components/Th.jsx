import React from "react";

const Th = ({ title, onClick, sortConfig }) => {
  return (
    <th
      scope="col"
      onClick={() => onClick(title)}
      className={`text-sm  capitalize cursor-pointer font-medium text-gray-900 px-6 py-4 text-left `}
    >
      <span className="flex flex-row justify-center items-center ">
      {title} {sortConfig.asc ? (<i class="fa-solid fa-angles-up pl-2 text-blue-600 pt-1"></i> ) : (<i class="fa-solid fa-angles-down pl-2 text-blue-600 pt-1"></i>)}
      </span>
    </th>
  );
};

export default Th;
