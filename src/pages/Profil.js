import React, { useEffect } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
// import { useSelector } from "react-redux";
// import { useDispatch } from "react-redux";
// //import { useNavigate } from "react-router";
// import { fetchUserData } from "../redux/features/auth/authThunks";

export default function Profil() {
	// const dispatch = useDispatch();
	// const { token } = useSelector((state) => state.auth);
	// console.log(token);
	// useEffect(() => {
	// 	if (token) {
	// 		dispatch(fetchUserData());
	// 	}
	// }, [token, dispatch]);

	return (
		<>
			<Header />

			<div className="w-full h-screen bg-gray-200 flex justify-center items-start">
				<h1 className="text-4xl mt-36">PROFIL</h1>
			</div>

			<Footer />
		</>
	);
}
