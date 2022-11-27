import { createAsyncThunk } from "@reduxjs/toolkit";
import { getToken, setToken, removeToken } from "../../../utils/Helperunctions";
import api from "../../../services/api";

export const fetchUserData = createAsyncThunk(
	"auth/fetchUserData",
	async (_, { rejectWithValue }) => {
		try {
			const authToken = getToken();
			const config = {
				headers: {
					Authorization: `Bearer ${authToken}`,
				},
			};
			const response = await api.post("/profile", {}, config);
			console.log({ ...response?.data.body, authToken });
			return { ...response?.data.body, authToken };
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

export const updateUserData = createAsyncThunk(
	"auth/updateUserData",
	async (updateUserData, { rejectWithValue }) => {
		try {
			const authToken = getToken();
			const config = {
				headers: {
					Authorization: `Bearer ${authToken}`,
				},
			};
			const response = await api.put("/profile", updateUserData, config);
			console.log({ ...response?.data.body, authToken });
			return { ...response?.data.body, authToken };
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

export const login = createAsyncThunk("auth/login", async (payload) => {
	const response = await api.post("/login", payload);
	console.log(response.data.body.token);
	setToken(response.data.body?.token);

	return response.data?.body;
});

export const signOut = createAsyncThunk("auth/signOut", async () => {
	removeToken();
});
