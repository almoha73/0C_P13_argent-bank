import React from "react";
import { FaUserCircle } from "react-icons/fa";

export default function Login() {
	return (
		<main className="bg-[#12002B] w-full h-screen flex justify-center">
			<section className="m-12 p-8 w-[300px] h-[360px] bg-white mt-10 flex flex-col justify-center">
				<FaUserCircle className="w-5 h-5" />
				<h1 className="text-center my-5">Sign In</h1>
				<form action="">
					<div className="input-wrapper mb-4">
						<label htmlFor="username font-bold">Username</label>
						<input
							type="text"
							id="username"
							placeholder="Name"
							className="border-2 p-1 border-black"
						/>
					</div>
					<div className="input-wrapper mb-4">
						<label htmlFor="username">Password</label>
						<input
							type="text"
							id="username"
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
