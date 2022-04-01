import React from "react";
import { v4 as uuidv4 } from "uuid";
import Th from "./Th";
import Tr from "./Tr";

const Thead = ({ columns, sort }) => {
  return (
    <thead className="bg-gray-200 border-b-2 border-gray-500">
      <Tr>
        {columns.map((column) => (
          <Th onClick={sort} key={uuidv4()} title={column} />
        ))}
      </Tr>
    </thead>
  );
};

export default Thead;
