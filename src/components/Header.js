import React from "react";
import logo from "../assets/argentBankLogo.png";
import { FaUserCircle } from "react-icons/fa";
import { Link } from "react-router-dom";

const Header = () => {
	return (
		<div className="w-full h-16 border-b-2 bg-white flex items-center justify-center md:justify-between md:px-10 z-10 absolute">
			<div className="w-2/3 h-full flex justify-start items-center md:justify-start">
				<img src={logo} alt="" className="w-44 " />
			</div>
			<ul>
				<div className="flex items-center gap-5">
					<FaUserCircle />

					<Link to="/login" className="cursor-pointer	hover:underline">
						Sign In
					</Link>

					{/* <Link className="cursor-pointer	hover:underline">Log Out</Link> */}
				</div>
			</ul>
		</div>
	);
};

export default Header;
