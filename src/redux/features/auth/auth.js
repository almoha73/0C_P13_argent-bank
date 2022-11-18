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
	extraReducers: (builder) => {
		builder
			.addCase(signOut.fulfilled, (state, action) => {
				state.loading = false;
				state.firstName = "";
				state.lastName = "";
				state.token = null;
			})
			.addCase(login.pending, (state, action) => {
				state.loading = true;
			})
			.addCase(login.fulfilled, (state, action) => {
				state.token = action.payload.body.token;
				state.loading = false;
			})
			.addCase(login.rejected, (state, action) => {
				state.loading = false;
			})
			.addCase(fetchUserData?.pending, (state, action) => {
				state.loading = true;
			})
			.addCase(fetchUserData?.fulfilled, (state, action) => {
				state.token = action.payload.token;
				state.firstName = action.payload.firstName;
				state.lastName = action.payload.lastName;
				state.loading = false;
			})
			.addCase(fetchUserData?.rejected, (state, action) => {
				state.loading = false;
				state.token = null;
			});
	},
});

export const {actions} = authSlice;

export default authSlice.reducer;
