import React from "react";
import { FaUserCircle } from "react-icons/fa";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { login, reset } from "../redux/features/auth/authSlice";
import Loader from "../components/Loader";

export default function Login() {
	const [formData, setFormData] = useState({
		email: "",
		password: "",
	});

	const { email, password } = formData;

	const navigate = useNavigate();
	const dispatch = useDispatch();

	const { user, isLoading, isError, isSuccess, message } = useSelector(
		(state) => state.auth
	);
	useEffect(() => {
		if (isError) {
			console.log(message);
		}

		if (isSuccess || user) {
			navigate("/");
		}

		dispatch(reset());
	}, [user, isError, isSuccess, message, navigate, dispatch]);

	const onChange = (e) => {
		setFormData((prevState) => ({
			...prevState,
			[e.target.name]: e.target.value,
		}));
	};

	const onSubmit = (e) => {
		e.preventDefault();

		const userData = {
			email,
			password,
		};

		dispatch(login(userData));
	};

	if (isLoading) {
		return <Loader />;
	}

	return (
		<main className="bg-[#12002B] w-full h-screen flex justify-center">
			<section className="m-12 p-8 w-[300px] h-[360px] bg-white mt-10 flex flex-col justify-center">
				<FaUserCircle className="w-5 h-5" />
				<h1 className="text-center my-5">Sign In</h1>
				<form onSubmit={onSubmit}>
					<div className="input-wrapper mb-4">
						<label htmlFor="username font-bold">Username</label>
						<input
							type="text"
							value={email}
							id="username"
							placeholder="Name"
							className="border-2 p-1 border-black"
							onChange={onChange}
						/>
					</div>
					<div className="input-wrapper mb-4">
						<label htmlFor="username">Password</label>
						<input
							onChange={onChange}
							type="text"
							id="password"
							value={password}
							placeholder="Enter password"
							className="border-2 p-1 border-black"
						/>
					</div>
					<div className="input-wrapper mb-4">
						<input type="checkbox" id="remember-me" className="mr-2" />
						<label htmlFor="remember-me">Remember me</label>
					</div>
					<button className="w-full bg-[#00BC77] p-2 text-white text-xl underline">
						Sign In
					</button>
				</form>
			</section>
		</main>
	);
}
