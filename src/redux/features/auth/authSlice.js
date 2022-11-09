import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { url } from "./api";

const initialState = {
	token: localStorage.getItem("token") ? localStorage.getItem("token") : "",
	firstname: "",
	lastname: "",
	email: "",
	password: "",
	loginError: "",
	loginStatus: "",
	userLoaded: false,
	message: "",
};

// Login user
export const loginUser = createAsyncThunk(
	"auth/loginUser",
	async (values, { rejectWithValue }) => {
		try {
			const token = await axios.post(`${url}/login`, {
				email: values.email,
				password: values.password,
			});
			localStorage.setItem("token", token.data);
			console.log(token.data);
			return token.data;
		} catch (error) {
			const message =
				(error.response &&
					error.response.data &&
					error.response.data.message) ||
				error.message ||
				error.toString();

			return rejectWithValue(message);
		}
	}
);

const authSlice = createSlice({
	name: "auth",
	initialState,
	reducers: {
		reset: (state) => {
			state.isLoading = false;
			state.isSuccess = "";
			state.isError = "";
			state.message = "";
		},
		loadUser(state, action) {
			const token = state.token;

			if (token) {
				const user = token.payload;
				return {
					...state,
					token,
					password: user.password,
					email: user.email,
					userLoaded: true,
				};
			} else return { ...state, userLoaded: true };
		},
		logoutUser(state, action) {
			localStorage.removeItem("token");

			return {
				...state,
				token: "",
				password: "",
				email: "",

				registerStatus: "",
				registerError: "",
				loginStatus: "",
				loginError: "",
			};
		},
	},
	extraReducers: (builder) => {
		builder.addCase(loginUser.pending, (state, action) => {
			return { ...state, loginStatus: "pending" };
		});
		builder.addCase(loginUser.fulfilled, (state, action) => {
			if (action.payload) {
				const user = action.payload;
				return {
					...state,
					token: action.payload,
					password: user.password,
					email: user.email,
					loginStatus: "success",
				};
			} else return state;
		});
		builder.addCase(loginUser.rejected, (state, action) => {
			return {
				...state,
				loginStatus: "rejected",
				loginError: action.payload,
			};
		});
	},
});

export const { loadUser, logoutUser, reset } = authSlice.actions;

export default authSlice.reducer;
