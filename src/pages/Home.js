import React from "react";
import Banner from "../components/Banner";
import Features from "../components/Features";
import Header from "../components/Header";

export default function Home() {
	return (
		<div className="w-full h-screen">
			<Header />
			<Banner />
			<Features />
		</div>
	);
}
