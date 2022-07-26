import React from "react";
import { useAppDispatch } from "../app/hooks";
import { changeCellType } from "../slices/ListOfMoneyPropsSlice";
import { CellType } from "../types/CellType";
import styles from "./../styles/CellModal.module.css";

export interface CellModalPropType {
  title: any;
  date: { date: number; month: number; year: number };
  value?: number;
  planIndex: number;
  body: any;
  isOpen: boolean;
  onClF: Function;
}

export default function CellModal(props: CellModalPropType) {
  const disp = useAppDispatch();
  return (
    <>
      {props.isOpen ? (
        <div className={styles.modal_overlay_active}>
          <div className={styles.modal_window}>
            <div className={styles.modal_header}>
              {props.title}{" "}
              {props.date.date.toLocaleString(undefined, {
                minimumIntegerDigits: 2,
              })}
              .
              {(props.date.month + 1).toLocaleString(undefined, {
                minimumIntegerDigits: 2,
              })}
              .{props.date.year}
              <button
                className={styles.modal_header__buton}
                onClick={() => props.onClF(false)}
              >
                &times;
              </button>
            </div>
            <div className={styles.modal_body}>
              {props.value
                ? "В этот день надо бы отложить " + props.value
                : "Копить в этот день не планировали..."}
            </div>
            <div className={styles.modal_footer}>
              <button
                onClick={() =>
                  disp(
                    changeCellType({
                      date: props.date,
                      planIndex: props.planIndex,
                      newType: CellType.done,
                    })
                  )
                }
              >
                OK
              </button>
            </div>
          </div>
        </div>
      ) : (
        <></>
      )}
    </>
  );
}
