import { createSlice } from "@reduxjs/toolkit";
import { fetchUserData, login, signOut } from "./authThunks";

const initialState = {
	token: null,
	loading: false,
	firstName: "",
	lastName: "",
};

export const authSlice = createSlice({
	name: "auth",
	initialState,
	reducers: {},
	extraReducers: {
		[signOut.fulfilled]: (state, action) => {
			state.loading = false;
			state.firstName = "";
			state.lastName = "";
			state.token = null;
		},
		[login.pending]: (state, action) => {
			state.loading = true;
		},
		[login.fulfilled]: (state, action) => {
			state.token = action.payload.body.token;
			state.loading = false;
		},
		[login.rejected]: (state, action) => {
			state.loading = false;
		},
		[fetchUserData.pending]: (state, action) => {
			state.loading = true;
		},
		[fetchUserData.fulfilled]: (state, action) => {
			state.token = action.payload.accessToken;
			state.firstName = action.payload.body.firstName;
			state.lastName = action.payload.body.lastName;
			state.loading = false;
		},
		[fetchUserData.rejected]: (state, action) => {
			state.loading = false;
			state.token = null;
		},
	},
});

export const { _ } = authSlice.actions;

export default authSlice.reducer;
