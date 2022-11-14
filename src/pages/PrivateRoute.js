import React from "react";
import { useSelector } from "react-redux";
import Loader from "../pages/Loader";
import { Navigate, Outlet } from "react-router";
import { getToken } from "../utils/Helperunctions";

const useAuth = () => {
	const user = getToken();
	if (user) {
		return true;
	} else {
		return false;
	}
};

const PrivateRoute = (props) => {
	const { loading } = useSelector((state) => state.auth);
	const auth = useAuth();

	if (loading) {
		return <Loader />;
	}

	return auth ? <Outlet /> : <Navigate to="/profil" />;
};

export default PrivateRoute;
