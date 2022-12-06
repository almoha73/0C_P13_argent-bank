import axios from "axios";



const baseURL = "http://localhost:3001/api/v1/user/";

const api = axios.create({
	baseURL,
});

export default api;
