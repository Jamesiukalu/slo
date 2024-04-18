import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import http from "../../../services/http/httpService";


const initialState = {
  loading: false,
  error: null,
  token: null,
  user:null,
};

export const getPostsAction = createAsyncThunk(
  'post/get',
  async (payload, { rejectWithValue }) => {
    try {
      const response = await http.post(http.setURL, payload);
      return response.data.token;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);
export const getPostDetailAction = createAsyncThunk(
  'post/get/detail',
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
      .addCase(getPostsAction.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getPostsAction.fulfilled, (state, action) => {
        state.loading = false;
        state.token = action.payload;
        // state.user = action.payload;
      })
      .addCase(getPostsAction.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
      // Edit
    builder
      .addCase(getPostDetailAction.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getPostDetailAction.fulfilled, (state, action) => {
        state.loading = false;
        state.token = action.payload;
        // state.user = action.payload;
      })
      .addCase(getPostDetailAction.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});



export default postSlice.reducer;