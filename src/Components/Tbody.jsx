import React from "react";
import { v4 as uuidv4 } from "uuid";
import Tr from "./Tr";
import Td from "./Td";


function Tbody({ columns, data }) {

  return (
    <tbody>
      {data.map((d) => {
        return (
          <Tr key={uuidv4()}>
            {columns.map((column) => {
              return <Td key={uuidv4()} >{d[column]}</Td>;
            })}
          </Tr>
        );
      })}
    </tbody>
  );
}

export default Tbody;
