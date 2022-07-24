import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import cellsReducer from '../slices/ListOfMoneyPropsSlice';

export const store = configureStore({
  reducer: {
    CellsState : cellsReducer
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;