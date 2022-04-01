import React from "react";

const Th = ({ title, className, onClick }) => {
  return (
    <th
      scope="col"
      onClick={() => onClick(title)}
      className={`text-sm capitalize cursor-pointer font-medium text-gray-900 px-6 py-4 text-left ${className}`}
    >
      {title}
    </th>
  );
};

export default Th;
