import { partnerSliceType } from "@/types/slice.type";
import { createSlice } from "@reduxjs/toolkit";

const initialState: partnerSliceType = {
  partnerList: [],
};

const partnerSlice = createSlice({
  name: "partners",
  initialState,
  reducers: {
    setPartnerList: (state, action) => {
      state.partnerList = action.payload;
    },
  },
});

export const { setPartnerList } = partnerSlice.actions;
export default partnerSlice;
