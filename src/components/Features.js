import React from "react";

const featuresData = [
	{
		label: "chat",
		icon: "icon-chat.png",
		titre: "You are our #1 priority",
		text: "Need to talk to a representative? You can get in touch through our 24/7 chat or through a phone call in less than 5 minutes.",
	},
	{
		label: "money",
		icon: "icon-money.png",
		titre: "More savings means higher rates",
		text: "The more you save with us, the higher your interest rate will be!",
	},
	{
		label: "security",
		icon: "icon-security.png",
		titre: "Security you can trust",
		text: "We use top of the line encryption to make sure your data and money is always safe.",
	},
];

const Features = () => {
	return (
		<div className="flex flex-col lg:flex-row lg:justify-center lg:items-center w-full">
			{featuresData.map((elt, index) => (
				<div key={index} className="lg:w-1/3">
					<div className="w-full h-auto mx-auto p-10 lg:min-w-[270px] lg:flex lg:flex-col lg:justify-center lg:items-center ">
						<div className=" h-40 w-40 mx-auto border-[#00BC77] border-[10px] rounded-full p-3 ">
							<img
								src={`../assets/${elt.icon}`}
								alt={featuresData.label}
								className="w-full h-full"
							/>
						</div>
						<p className="text-center mt-5 mb-2 font-bold text-xl w-4/5 mx-auto ">
							{elt.titre}
						</p>
						<p className="text-center leading-5 3">{elt.text}</p>
					</div>
				</div>
			))}
		</div>
	);
};

export default Features;
