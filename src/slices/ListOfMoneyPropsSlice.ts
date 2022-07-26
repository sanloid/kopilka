import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import {
  CellpropType,
  CellsPlan,
  CellsState,
  CellType,
} from "../types/CellType";
import { Action } from "history";

export interface changeCellTypeInterface {
  planIndex: number;
  newType: CellType;
  date: { date: number; month: number; year: number };
}

const initialState: CellsState = {
  plans: [
    {
      planName: "Очистить поле",
      cells: [],
    },
  ],
};

export const cellsSlice = createSlice({
  name: "CellsState",
  initialState,
  reducers: {
    addState: (state, action: PayloadAction<CellsPlan>) => {
      state.plans.push(action.payload);
    },
    changeCellType: (state, action: PayloadAction<changeCellTypeInterface>) => {
      let arr = state.plans[action.payload.planIndex].cells;
      for (let i = 0; i < arr.length; i++) {
        if (
          arr[i].data.date === action.payload.date.date &&
          arr[i].data.month === action.payload.date.month &&
          arr[i].data.year === action.payload.date.year
        ) {
          state.plans[action.payload.planIndex].cells[i].type = action.payload.newType;
        }
      }
    },
  },
});

export const { addState, changeCellType } = cellsSlice.actions;

export default cellsSlice.reducer;
