import React from "react";
import { useDispatch } from "react-redux";
import { signOut } from "../redux/features/auth/authThunks";

export default function Profil() {
	const dispatch = useDispatch();
	return (
		<>
			<h1>Profil</h1>
			<button onClick={() => dispatch(signOut())}> Log Out</button>
		</>
	);
}
