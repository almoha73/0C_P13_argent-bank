import React from "react";
import { FaUserCircle } from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginUser, reset } from "../redux/features/auth/authSlice";
import Loader from "../components/Loader";

export default function Login() {
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const auth = useSelector((state) => state.auth);
	const userLoaded = useSelector((state) => state.auth);
	const loginError = useSelector((state) => state.auth);
	const message = useSelector((state) => state.auth);
	const loginStatus = useSelector((state) => state.auth);

	const [user, setUser] = useState({
		email: "",
		password: "",
	});

	useEffect(() => {
		if (loginError) {
			console.log(message);
		}

		if (userLoaded || auth) {
			navigate("/profil");
		}

		dispatch(reset());
	}, [auth, loginError, userLoaded, message, navigate, dispatch]);

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log(user);
		dispatch(loginUser(user));
	};

	if (loginStatus === "pending") {
		return <Loader />;
	}

	return (
		<main className="bg-[#12002B] w-full h-screen flex justify-center">
			<section className="m-12 p-8 w-[300px] h-[360px] bg-white mt-10 flex flex-col justify-center">
				<FaUserCircle className="w-5 h-5 mx-auto" />
				<h1 className="text-center my-5">Sign In</h1>
				<form onSubmit={handleSubmit}>
					<div className="input-wrapper mb-4">
						<label htmlFor="username font-bold">Username</label>
						<input
							type="text"
							onChange={(e) => setUser({ ...user, email: e.target.value })}
							id="username"
							placeholder="email"
							className="border-2 p-1 border-black"
						/>
					</div>
					<div className="input-wrapper mb-4">
						<label htmlFor="username">Password</label>
						<input
							type="text"
							id="password"
							onChange={(e) => setUser({ ...user, password: e.target.value })}
							placeholder="Enter password"
							className="border-2 p-1 border-black"
						/>
					</div>
					<div className="input-wrapper mb-4">
						<input type="checkbox" id="remember-me" className="mr-2" />
						<label htmlFor="remember-me">Remember me</label>
					</div>
					<button className="w-full bg-[#00BC77] p-2 text-white text-xl underline">
						Login
					</button>
				</form>
			</section>
		</main>
	);
}
