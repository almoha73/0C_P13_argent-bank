import { createAsyncThunk } from "@reduxjs/toolkit";
import { getToken, removeToken, setToken } from "../../../utils/Helperunctions";
import api from "../../../services/api";
import history from "../../../utils/history";

export const fetchUserData = createAsyncThunk(
	"auth/fetchUserData",
	async (_, { rejectWithValue }) => {
		try {
			const accessToken = getToken();
			api.defaults.headers.Authorization = `Bearer ${accessToken}`;
			const response = await api.get("/profile");
			return { ...response.data, accessToken };
		} catch (e) {
			removeToken();
			return rejectWithValue("");
		}
	}
);

export const login = createAsyncThunk("auth/login", async (payload) => {
	const response = await api.post("/login", payload);
	console.log(response.data);
	setToken(response.data.body.token);
	history.push("/profil");
	console.log(response.data);
	return response.data;
});

export const signOut = createAsyncThunk("auth/signOut", async () => {
	removeToken();
});
