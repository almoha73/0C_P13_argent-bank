import React, { useEffect, useState } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Card from "../components/Card";
import { v4 as uuidv4 } from "uuid";
import { fetchUserData } from "../redux/features/auth/authThunks";
import { useDispatch, useSelector } from "react-redux";
import UpdateField from "../components/UpdateField";
import { argentBank } from "../utils/accountsdatas";
//import { Navigate } from "react-router";
// import { getToken, setToken } from "../utils/Helperfunctions";
// import { Navigate } from "react-router";
//import { useNavigate } from "react-router";
//import { getToken } from "../utils/Helperfunctions";

export default function Profil() {
	const firstName = useSelector((state) => state.auth?.firstName);
	const lastName = useSelector((state) => state.auth?.lastName);
	const mail = useSelector((state) => state.auth?.email);
	const id = useSelector((state) => state.auth?.id);
	const authToken = useSelector((state) => state.auth.token);
	const dispatch = useDispatch();

	console.log(id, firstName, lastName, authToken);

	let argent;
	if (authToken) {
		argent = argentBank.filter((elt) => elt.id === id || elt.mail === mail);
	} else {
		argent = argentBank;
	}

	console.log(argent[0]);

	//const navigate = useNavigate();

	useEffect(() => {
		dispatch(fetchUserData());
		const stateObj = { id, firstName, lastName, authToken };
		function saveToLocalStorage() {
			if (stateObj) {
				try {
					const serializedState = JSON.stringify({
						firstName,
						lastName,
						id,
						mail,
					});
					localStorage.setItem("state", serializedState);
				} catch (e) {
					console.log(e);
				}
			} else return;
		}
		saveToLocalStorage();
	}, [dispatch, firstName, lastName, id, mail, authToken]);

	const [editUser, setEditUser] = useState(false);

	const edit = () => {
		setEditUser(!editUser);
	};

	return (
		<div className="flex flex-col w-full h-auto bg-[#12002B]">
			<Header />

			<main className="mt-24 mb-12 w-full h-auto  flex justify-start items-center flex-col">
				<div className="flex flex-col items-center mb-4">
					{authToken !== null ? (
						<h1 className="text-3xl text-center text-white font-bold">
							Welcome back <br></br> {firstName} {lastName}
						</h1>
					) : (
						<h1 className="text-3xl text-center text-white font-bold">
							Welcome back <br></br> Père Noël
						</h1>
					)}

					{editUser ? (
						<button
							onClick={edit}
							className="bg-[#00BC77] p-2 w-20	text-white text-xs mt-4 "
						>
							Close
						</button>
					) : (
						<button
							onClick={edit}
							className="bg-[#00BC77] p-2 w-20	text-white text-xs mt-4 "
						>
							Edit Name
						</button>
					)}

					{editUser ? <UpdateField save={edit} /> : ""}
				</div>
				<div className="w-full flex flex-col justify-center items-center mt-4 ">
					{argent[0]?.accounts.map((elt) => (
						<div
							key={uuidv4()}
							className="bg-white p-6 mb-8 w-10/12 sm:w-9/12 flex flex-col  sm:flex-row sm:justify-between sm:items-center"
						>
							<Card
								check={elt.check}
								credit={elt.credit}
								balance={elt.balance}
							/>
						</div>
					))}
				</div>
			</main>

			<Footer />
		</div>
	);
}
