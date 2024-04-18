import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import http from "../../../services/http/httpService";


const initialState = {
  loading: false,
  error: null,
  token: null,
  user:null,
};

export const createPostAction = createAsyncThunk(
  'post/create',
  async (payload, { rejectWithValue }) => {
    try {
      const response = await http.post(http.setURL, payload);
      return response.data.token;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);
export const editPostAction = createAsyncThunk(
  'post/edit',
  async (payload, { rejectWithValue }) => {
    try {
      const response = await http.post(http.setURL, payload);
      return response.data.token;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);


const postSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(createPostAction.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(createPostAction.fulfilled, (state, action) => {
        state.loading = false;
        state.token = action.payload;
        // state.user = action.payload;
      })
      .addCase(createPostAction.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
      // Edit
    builder
      .addCase(editPostAction.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(editPostAction.fulfilled, (state, action) => {
        state.loading = false;
        state.token = action.payload;
        // state.user = action.payload;
      })
      .addCase(editPostAction.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});



export default postSlice.reducer;