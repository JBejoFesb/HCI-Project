import { createSlice } from '@reduxjs/toolkit'
import type { RootState } from "../store";

export interface regBoxState {
  activeReg: boolean,
}

const initialState: regBoxState = {
  activeReg: false,
}

export const regBoxSlice = createSlice({
  name: 'regBox',
  initialState,
  reducers: {
    changeReg: (state) => {
      state.activeReg= !state.activeReg;
    },
  },
})

export const { changeReg } = regBoxSlice.actions

export const selectActiveReg = (state: RootState)=>state.regBox.activeReg;

export default regBoxSlice.reducer