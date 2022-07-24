import React from "react";
import { CellsPlan } from "../types/CellType";
import Cell from "./Cell";

export default function ListofMoney(props: CellsPlan) {
  let totalSum = 0;
  return (
    <>
      {props.cells ? (
        <>
          {props.planName}
          <div className="cells">
            {[...Array(props.cells.length)].map((_, i) => {
              totalSum += props.cells[i].value;
              return <Cell {...props.cells[i]} key={i} />;
            })}
          </div>
          Итого вы накопите: {totalSum}
        </>
      ) : (
        <></>
      )}
    </>
  );
}
