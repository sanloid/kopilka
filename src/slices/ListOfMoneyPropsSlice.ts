import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { CellpropType, CellsPlan, CellsState } from "../types/CellType";
import { Action } from "history";

const initialState: CellsState = {
  plans: [
    {
      planName  : "Очистить поле",
      cells : []
    }
  ],
};

export const cellsSlice = createSlice({
  name: "CellsState",
  initialState,
  reducers: {
    addState: (state, action: PayloadAction<CellsPlan>) => {
      state.plans.push(action.payload);
    },
  },
});

export const { addState } = cellsSlice.actions;

export default cellsSlice.reducer;
