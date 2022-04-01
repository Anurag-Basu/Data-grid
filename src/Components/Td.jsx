import React from "react";

const Td = ({ children, className }) => {
    return (
        <td
          
          className={`text-sm  text-gray-900 px-6 py-4 text-left ${className}`}
        >
          {children}
        </td>
      );
};

export default Td;
