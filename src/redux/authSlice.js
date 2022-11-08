import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
const signupApi = 'http://localhost:3001/api/v1/user'
const token = localStorage.getItem('token') ? localStorage.getItem("token") : null

let initialState = {
  user: "",
  token,
  loading: false,
};

export const loginUser = createAsyncThunk(
  "user",
  async ( {email, password}) => {
    let res = await fetch(
        signupApi + "/login",
      {
        method: "post",
        headers: {
          "Content-Type": "application/json",
          Authorisation: localStorage.getItem("token"),
        },
        body: JSON.stringify( {email, password} ),
      }
    );
    console.log(res.json());
    return await res.json();
  }
);

const authSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    addToken: (state, action) => {
      state.token = localStorage.getItem("token");
    },
    addUser: (state, action) => {
      state.user = localStorage.getItem("user");
    },
  },
  extraReducers: {
    [loginUser.pending]: (state, action) => {
      state.login = true;
    },
    [loginUser.fulfilled]: (state, { payload: { user, token } }) => {
      state.loading = false;
      state.token = token;
      state.user = user;
      localStorage.setItem("token", JSON.stringify(token));
      localStorage.setItem("user", JSON.stringify(user));
    },
    [loginUser.rejected]: (state, action) => {
      state.login = true;
    },
  },
});

export const { addToken, addUser } = authSlice.actions;
export default authSlice.reducer;
