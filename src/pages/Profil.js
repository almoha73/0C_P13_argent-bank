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
