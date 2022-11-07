import React from "react";
import bgBanner from "../assets/bank-tree.jpeg";

const Banner = () => {
	return (
		<div className="w-full h-80 sm-h-[300px] sm:overflow-visible flex items-center justify-center relative mb-10 overflow-hidden 	">
			<div className="w-full h-full h-[300px] -z-10 sm:absolute top-10">
				<img
					src={bgBanner}
					alt=""
					className="w-full h-full object-contain scale-125 sm:scale-100 translate-x-1 sm:object-cover sm:object-left-bottom"
				/>
			</div>
			<div className=" absolute w-9/12 h-auto bg-white top-24 p-8	sm:w-[264px] ">
				<div className="mb-3.5 ">
					<p className="font-bold leading-4 text-sm">
						No fees. <br /> No minimum deposit. <br /> High interest rates.
					</p>
				</div>
				<div className="leading-4 text-sm">
					<p>Open a savings account with Argent Bank today!</p>
				</div>
			</div>
		</div>
	);
};

export default Banner;
