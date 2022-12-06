import React from "react";

/**
 * @component for showing the cards corresponding to the accounts on the profile page
 * returns (
 * <Card />)
 */

const Card = ({ check, credit, balance }) => {
	return (
		<>
			<div className="flex text-black flex-col">
				<p>{check}</p>
				<h2 className="text-4xl font-bold">{credit}</h2>
				<p>{balance}</p>
			</div>
			<button className="mt-3 bg-[#00BC77] text-white p-2 w-full sm:w-44 font-bold border-r border-b border-black border-solid">
				View transactions
			</button>
		</>
	);
};

export default Card;
