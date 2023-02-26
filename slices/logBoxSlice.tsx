import { createSlice } from '@reduxjs/toolkit'
import type { RootState } from "../store";

export interface logBoxState {
  active: boolean,
}

const initialState: logBoxState = {
  active: false,
}

export const logBoxSlice = createSlice({
  name: 'logBox',
  initialState,
  reducers: {
    change: (state) => {
      state.active= !state.active;
    },
  },
})

export const { change } = logBoxSlice.actions

export const selectActive = (state: RootState)=>state.logBox.active;

export default logBoxSlice.reducer