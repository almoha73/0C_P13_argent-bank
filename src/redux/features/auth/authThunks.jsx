import { createAsyncThunk } from "@reduxjs/toolkit";
import {
	getToken,
	setToken,
	removeToken,
} from "../../../utils/Helperfunctions";
import api from "../../../services/api";
import { fetchToken } from "./auth";


/**
 * @return {object} user data body of the response {createdAt, updatedAt, firstName, lastName, email,id, and the token recovered with the login function}
 */


export const fetchUserData = createAsyncThunk(
	"auth/fetchUserData",
	async (_, { rejectWithValue }) => {
		try {
			const authToken = fetchToken() ? fetchToken() : getToken();

			const config = {
				headers: {
					Authorization: `Bearer ${authToken}`,
				},
			};
			const response = await api.post("/profile", {}, config);
			
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

/**
 * @return {object} data that contains the datas that can be modified
 * @param {object} updateUserData  {firstName:"", lastName:""}
 */

export const updateUserData = createAsyncThunk(
	"auth/updateUserData",
	async (updateUserData, { rejectWithValue }) => {
		try {
			const authToken = fetchToken() ? fetchToken() : getToken();
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

/**
 * @returns {object} data {token:""}
 * @param {{firstName: string, lastName: string}} payload 
 */

export const login = createAsyncThunk("auth/login", async (payload) => {
	try{
		const response = await api.post("/login", payload);
	setToken(response.data.body?.token);
	return response.data?.body;
	}catch (error){
		console.log(error);
	}
});

/**
 * function that remove the token when sign out
 */

export const signOut = createAsyncThunk("auth/signOut", async () => {
	removeToken();
});
