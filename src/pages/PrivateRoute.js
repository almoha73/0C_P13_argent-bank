import React from "react";
import { useSelector } from "react-redux";

import { Navigate, Outlet } from "react-router";

const PrivateRoute = (props) => {
	const { token } = useSelector((state) => state.auth);

	if (!token) {
		return <Navigate to="/login" />;
	}
	return <Outlet />; //restitue les routes enfants
};

export default PrivateRoute;
