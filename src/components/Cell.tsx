import React, { useState } from "react";
import { CellpropType } from "../types/CellType";
import CellModal from "./CellModal";

export default function Cell(props: CellpropType) {
  const [modal, setModal] = useState(false);
  function cellFunc() {
    if (!modal) setModal(true);
  }
  return (
    <div className={props.type} onClick={cellFunc}>
      <div className="cellDate">
        {props.data.date.toLocaleString(undefined, { minimumIntegerDigits: 2 })}
        .
        {(props.data.month + 1).toLocaleString(undefined, {
          minimumIntegerDigits: 2,
        })}
        .{props.data.year}
      </div>
      <div className="cellValue">{props.value}</div>
      <CellModal
        planIndex={props.planIndex}
        date={props.data}
        value={props.value}
        isOpen={modal}
        body={"Боди жоская"}
        title={"Ячейка жоская"}
        onClF={setModal}
      />
    </div>
  );
}
