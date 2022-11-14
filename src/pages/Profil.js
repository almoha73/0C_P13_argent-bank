import React from "react";
import { useDispatch } from "react-redux";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { signOut } from "../redux/features/auth/authThunks";

export default function Profil() {
	const dispatch = useDispatch();
	return (
		<>
			<Header />
			<h1>Profil</h1>
			<button onClick={() => dispatch(signOut())}> Log Out</button>
			<Footer />
		</>
	);
}
