import React, { useState } from "react";
import { FaUserCircle } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { loginUser } from "../redux/authSlice";

export default function Login() {
const [email, setEmail] = useState("");
const [password, setPassword] = useState("");

// const role = window.localStorage.getItem("user")
// const output = JSON.parse(role)
const dispatch=useDispatch()
// console.log(output);

const handleLogin = (e) => {
	e.preventDefault()
console.log(email, password);
dispatch(loginUser(email, password))
}
	return (
		<main className="bg-[#12002B] w-full h-screen flex justify-center">
			<section className="m-12 p-8 w-[300px] h-[360px] bg-white mt-10 flex flex-col justify-center">
				<FaUserCircle className="w-5 h-5" />
				<h1 className="text-center my-5">Sign In</h1>
				<form action="">
					<div className="input-wrapper mb-4">
						<label htmlFor="username font-bold">Username</label>
						<input
						value={email}
						onChange={(e) => setEmail(e.target.value) }
							type="text"
							id="username"
							placeholder="Name"
							className="border-2 p-1 border-black"
						/>
					</div>
					<div className="input-wrapper mb-4">
						<label htmlFor="username">Password</label>
						<input
						value={password}
						onChange={(e) => setPassword(e.target.value) }
							type="text"
							id="password"
							className="border-2 p-1 border-black"
						/>
					</div>
					<div className="input-wrapper mb-4">
						<input type="checkbox" id="remember-me" className="mr-2" />
						<label htmlFor="remember-me">Remember me</label>
					</div>
					<button onClick={handleLogin} className="w-full bg-[#00BC77] p-2 text-white text-xl underline">
						Sign In
					</button>
				</form>
			</section>
		</main>
	);
}
