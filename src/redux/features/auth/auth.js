import { createSlice } from "@reduxjs/toolkit";
import { getCookie, getToken } from "../../../utils/Helperfunctions";
import { fetchUserData, login, updateUserData, signOut } from "./authThunks";

let token;
if (getCookie("remember") || getToken("token")) {
	token = getCookie("remember") || getToken("token");
} else {
	token = null;
}

const initialState = {
	token,
	loading: false,
	firstName: "",
	lastName: "",
	error: null,
	id: "",
	email: "",
	remember: false,
};

export const authSlice = createSlice({
	name: "auth",
	initialState,
	reducers: {
		rememberMe: (state, action) => {
			state.remember = action.payload;
		},
	},
	extraReducers: (builder) => {
		builder
			.addCase(signOut.fulfilled, (state, action) => {
				state.loading = false;
				state.firstName = "";
				state.lastName = "";
				state.token = null;
				state.error = null;
				state.remember = false;
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
				state.firstName = action.payload?.firstName;
				state.lastName = action.payload?.lastName;
				state.id = action.payload?.id;
				state.loading = false;
				state.error = null;
				state.email = action.payload?.email;
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
				state.firstName = action.payload?.firstName;
				state.lastName = action.payload?.lastName;
				state.id = action.payload?.id;
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

export const { rememberMe } = authSlice.actions;

export default authSlice.reducer;
