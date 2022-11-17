import React from "react";
import logo from "../assets/argentBankLogo.png";
import { FaUserCircle, FaSignOutAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { signOut } from "../redux/features/auth/authThunks";

const Header = () => {
	const dispatch = useDispatch();
	const { token, firstName } = useSelector((state) => state.auth);
	const logout = () => {
		dispatch(signOut());
	};
	return (
		<div className="w-full h-16 border-b-2 bg-white flex items-center justify-center md:justify-between md:px-10 z-10 absolute">
			<div className="w-2/3 h-full flex justify-start items-center md:justify-start">
				<img src={logo} alt="" className="w-44 " />
			</div>
			<ul>
				{token ? (
					<>
						<div className="flex items-center gap-5">
							<FaUserCircle />
							<span>{firstName}</span>
							<Link
								to="/"
								onClick={logout}
								className="cursor-pointer flex items-center gap-2 hover:underline"
							>
								<FaSignOutAlt /> <span className="hidden sm:block">Sign Out</span> 
							</Link>
						</div>
					</>
				) : (
					<div className="flex items-center gap-5">
						<FaUserCircle />
						<Link to="/login" className="cursor-pointer	hover:underline">
							Sign In
						</Link>
					</div>
				)}
			</ul>
		</div>
	);
};

export default Header;
