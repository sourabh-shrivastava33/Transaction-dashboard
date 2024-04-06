import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  allTransactions: {},
  statistics: {},
  barChartData: [],
  categoryWiseItemCount: [],
};

const transactionSlice = createSlice({
  name: "transaction",
  initialState,
  reducers: {
    setAllTransactions: (state, action) => {
      state.allTransactions = action.payload;
    },
    setStatistics: (state, action) => {
      state.statistics = action.payload.statistics;
      state.barChartData = action.payload.barChatData;
      state.categoryWiseItemCount = action.payload.categoryWiseItemCount;
    },
  },
});
export const { setAllTransactions, setStatistics } = transactionSlice.actions;
export default transactionSlice.reducer;
