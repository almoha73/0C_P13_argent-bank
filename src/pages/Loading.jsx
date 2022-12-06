import React from "react";

const Loading = () => {
	return (
		<div className="w-full h-screen flex justify-center items-center bg-black">
			<div className="loading">
				<div className="spinner-box">
					<div className="leo-border-1">
						<div className="leo-core-1"></div>
					</div>
					<div className="leo-border-2">
						<div className="leo-core-2"></div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Loading;
