import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import http from "../../../services/http/httpService";


const initialState = {
  loading: false,
  error: null,
  data:null,
  statusCode:null
};




export const updateUserAction = createAsyncThunk(
  'users/edit/update',
  async (payload, { rejectWithValue }) => {

    try {
      const response = await http.instance.patch(`users/${payload.id}`, payload.data
    );
     
      return {
        data: response.data,
        statusCode: response.status, // Status code from the HTTP response
      };

    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);


const updateUserSlice = createSlice({
  name: 'user_update',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(updateUserAction.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(updateUserAction.fulfilled, (state, action) => {
        state.data = action.payload.data;
        state.statusCode = action.payload.statusCode;
        state.loading = false;
      })
      .addCase(updateUserAction.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});



export default updateUserSlice.reducer;