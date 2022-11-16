import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
// import { useDispatch } from "react-redux";
// import { useNavigate } from "react-router";
// import { useSelector } from "react-redux";
// import { useEffect } from "react";
// import { fetchUserData } from "../redux/features/auth/authThunks";
//import { useState } from "react";

export default function Profil() {
	// const dispatch = useDispatch();

	// const authFirstName = useSelector((state) => state.auth.firstName);
	// const authLastName = useSelector((state) => state.auth.lastName);

	// useEffect(() => {
	// 	dispatch(fetchUserData());
	// }, [dispatch]);

	return (
		<>
			<Header />

			<div className="w-full h-screen bg-gray-200 flex justify-center items-start">
				<h1 className="text-4xl mt-36">
					PROFIL
					{/* {authFirstName} {authLastName} */}
				</h1>
			</div>

			<Footer />
		</>
	);
}
