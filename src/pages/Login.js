import React from "react";
import { FaUserCircle } from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";
import { setCookie } from "../utils/Helperfunctions";
import { login } from "../redux/features/auth/authThunks";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useForm } from "react-hook-form";
import { useEffect } from "react";
import { rememberMe } from "../redux/features/auth/auth";
//import { getToken } from "../utils/Helperfunctions";

export default function Login() {
	const { loading, token, remember, email } = useSelector(
		(state) => state.auth
	);
	const auth = useSelector((state) => state.auth);
	console.log(auth, loading, token, remember, email);
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const {
		register,
		formState: { errors },
		handleSubmit,
	} = useForm();

	useEffect(() => {
		if (token) {
			navigate("/profile");
		}
	}, [token, navigate, remember]);

	const checkRemember = (e) => {
		dispatch(rememberMe(e.target.checked));
	};
	const onSubmit = (data) => dispatch(login(data));
	if (remember === true) {
		setCookie(token);
	}
	// const data = getCookie("remember");
	// console.log(data);
	return (
		<div className="flex flex-col bg-[#12002B] w-full h-screen">
			<Header />
			<main className="mt-16 flex-1  flex justify-center">
				<section className="mt-28 m-12 p-8 w-[300px] h-[380px] bg-white  flex flex-col justify-center">
					<FaUserCircle className="mx-auto" />
					<h1 className="text-center my-5">Sign In</h1>

					<form onSubmit={handleSubmit(onSubmit)}>
						<div className="input-wrapper mb-4">
							<label htmlFor="username font-bold">Username</label>
							<input
								name="email"
								type="email"
								placeholder="Email"
								{...register("email", {
									required: "Email Address is required",
									pattern: {
										value: /^\S+@\S+$/i,
										message: "I think I said _valid_, didn't I?",
									},
								})}
								id="username"
								className="border-2 p-1 border-black"
							/>
							<p className="text-red-600 leading-3 text-xs">
								{errors.email?.message}
							</p>
						</div>

						<div className="input-wrapper mb-4">
							<label htmlFor="username">Password</label>
							<input
								id="password"
								placeholder="Password"
								name="password"
								type="password"
								className="border-2 p-1 border-black"
								{...register("password", {
									required: "Password is required",
								})}
							/>
							<p className="text-red-600 leading-3 text-xs">
								{errors.password?.message}
							</p>
						</div>
						<div className="input-wrapper mb-4">
							<input
								onChange={checkRemember}
								type="checkbox"
								id="remember-me"
								className="mr-2"
							/>
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
		</div>
	);
}
