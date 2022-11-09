import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import authService from "./authService";


const initialState = {
	user: localStorage.getItem("user") ? localStorage.getItem("user") : "",
	isError: false,
	isSuccess: false,
	isLoading: false,
	message: "",
};


// Login user
export const login = createAsyncThunk('auth/login', async (user, thunkAPI) => {
    try {
      const data = await authService.login(user);
      console.log(data);
      return data

    } catch (error) {
      const message =
        (error.response && error.response.data && error.response.data.message) ||
        error.message ||
        error.toString()
        
      return thunkAPI.rejectWithValue(message)
    }
  })
  
  export const logout = createAsyncThunk('auth/logout', async () => {
    await authService.logout()
  })


const authSlice = createSlice({
    name: 'auth',
  initialState,
  reducers: {
    reset: (state) => {
      state.isLoading = false
      state.isSuccess = false
      state.isError = false
      state.message = ''
    },
  },
  extraReducers: (builder) => {
    builder
      
      .addCase(login.pending, (state) => {
        state.isLoading = true
      })
      .addCase(login.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.user= action?.payload
      })
      .addCase(login.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload
        state.user = null
      })
      .addCase(logout.fulfilled, (state) => {
        state.user = null
      })
  },
});

export const { reset } = authSlice.actions
export default authSlice.reducer;
