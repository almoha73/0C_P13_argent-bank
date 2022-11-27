import React from "react";

const Loader = () => {
	return (
		<div
			className="loader loader--style6 mr-8 h-24 w-1/5 text-center p-4 my-auto align-top	inline-block	"
			title="5"
		>
			<svg
				version="1.1"
				id="Layer_1"
				// xmlns="http://www.w3.org/2000/svg"
				// xmlns:xlink="http://www.w3.org/1999/xlink"
				x="0px"
				y="0px"
				width="24px"
				height="30px"
				viewBox="0 0 24 30"
				style={{ backgroundColor: "red" }}
				fill="red"
				// xml:space="preserve"
			>
				<rect x="0" y="13" width="4" height="5" fill="#333">
					<animate
						attributeName="height"
						attributeType="XML"
						values="5;21;5"
						begin="0s"
						dur="0.6s"
						repeatCount="indefinite"
					/>
					<animate
						attributeName="y"
						attributeType="XML"
						values="13; 5; 13"
						begin="0s"
						dur="0.6s"
						repeatCount="indefinite"
					/>
				</rect>
				<rect x="10" y="13" width="4" height="5" fill="#333">
					<animate
						attributeName="height"
						attributeType="XML"
						values="5;21;5"
						begin="0.15s"
						dur="0.6s"
						repeatCount="indefinite"
					/>
					<animate
						attributeName="y"
						attributeType="XML"
						values="13; 5; 13"
						begin="0.15s"
						dur="0.6s"
						repeatCount="indefinite"
					/>
				</rect>
				<rect x="20" y="13" width="4" height="5" fill="#333">
					<animate
						attributeName="height"
						attributeType="XML"
						values="5;21;5"
						begin="0.3s"
						dur="0.6s"
						repeatCount="indefinite"
					/>
					<animate
						attributeName="y"
						attributeType="XML"
						values="13; 5; 13"
						begin="0.3s"
						dur="0.6s"
						repeatCount="indefinite"
					/>
				</rect>
			</svg>
		</div>
	);
};

export default Loader;
