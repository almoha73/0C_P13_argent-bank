import React from "react";
import { Link } from "react-router-dom";

const Error = () => {
	return (
		<>
			<div className="w-Full h-screen flex justify-center items-center flex-col relative bg-black">
				<div className="  mb-8">
					<h1 className="text-6xl neonText">ERROR 404</h1>
				</div>
				<h4 className="text-center text-2xl neonText">You seem lost !!</h4>
				<h4 className="text-center text-2xl absolute bottom-16 underline neonText">
					<Link to="/">Redirection to the home page</Link>
				</h4>
			</div>
		</>
	);
};

export default Error;
