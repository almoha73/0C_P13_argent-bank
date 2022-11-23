import { createSlice } from "@reduxjs/toolkit";

import { fetchUserData, login, updateUserData, signOut } from "./authThunks";

const initialState = {
	token: null,
	loading: false,
	firstName: "",
	lastName: "",
	error: null,
	id: "",
};

export const authSlice = createSlice({
	name: "auth",
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder
			.addCase(signOut.fulfilled, (state, action) => {
				state.loading = false;
				state.firstName = "";
				state.lastName = "";
				state.token = null;
				state.error = null;
			})
			.addCase(login.pending, (state, action) => {
				state.loading = true;
				state.error = null;
			})
			.addCase(login?.fulfilled, (state, action) => {
				state.token = action?.payload?.token;
				state.loading = false;
			})
			.addCase(login.rejected, (state, action) => {
				state.loading = false;
				state.error = action.payload;
			})
			.addCase(fetchUserData?.pending, (state, action) => {
				state.loading = true;
			})
			.addCase(fetchUserData?.fulfilled, (state, action) => {
				state.token = action.payload?.authToken;
				state.firstName = action.payload.firstName;
				state.lastName = action.payload.lastName;
        state.id = action.payload.id;
				state.loading = false;
				state.error = null;
			})
			.addCase(fetchUserData?.rejected, (state, action) => {
				state.loading = false;
				state.token = null;
			})
			.addCase(updateUserData?.pending, (state, action) => {
				state.loading = true;
				state.firstName = "";
				state.lastName = "";
			})
			.addCase(updateUserData?.fulfilled, (state, action) => {
				state.token = action.payload?.authToken;
				state.firstName = action.payload.firstName;
				state.lastName = action.payload.lastName;
				state.loading = false;
				state.error = null;
			})
			.addCase(updateUserData?.rejected, (state, action) => {
				state.loading = false;
				state.token = null;
				state.error = null;
			});
	},
});

export const { actions } = authSlice;

export default authSlice.reducer;
