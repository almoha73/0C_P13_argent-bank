import React, { useState } from "react";
import { FaUserCircle } from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";
import { getToken, setToken } from "../utils/Helperunctions";
import { login } from "../redux/features/auth/authThunks";
import history from "../utils/history";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Login() {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const dispatch = useDispatch();
	const { token, loading } = useSelector((state) => state.auth);

	const navigate = useNavigate();
	const handleLogin = (e) => {
		e.preventDefault();
		dispatch(login({ email, password }));

		if (token || getToken()) {
			history.push("/login");
			setToken();
			navigate("/profil");
		}
	};

	return (
		<>
			<Header />
			<main className="bg-[#12002B] w-full h-screen flex justify-center">
				<section className="m-12 p-8 w-[300px] h-[360px] bg-white mt-10 flex flex-col justify-center">
					<FaUserCircle className="w-5 h-5 mx-auto" />
					<h1 className="text-center my-5">Sign In</h1>
					<form onSubmit={handleLogin}>
						<div className="input-wrapper mb-4">
							<label htmlFor="username font-bold">Username</label>
							<input
								onChange={(e) => setEmail(e.target.value)}
								placeholder="Email"
								type="email"
								value={email}
								id="username"
								className="border-2 p-1 border-black"
							/>
						</div>
						<div className="input-wrapper mb-4">
							<label htmlFor="username">Password</label>
							<input
								id="password"
								onChange={(e) => setPassword(e.target.value)}
								placeholder="Password"
								type="password"
								value={password}
								className="border-2 p-1 border-black"
							/>
						</div>
						<div className="input-wrapper mb-4">
							<input type="checkbox" id="remember-me" className="mr-2" />
							<label htmlFor="remember-me">Remember me</label>
						</div>
						{loading ? (
							<div className="loading">
								<span>Loading...</span>
							</div>
						) : (
							<button className="w-full bg-[#00BC77] p-2 text-white text-xl underline">
								Login
							</button>
						)}
					</form>
				</section>
			</main>
			<Footer />
		</>
	);
}
