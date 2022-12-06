import React from "react";
import Banner from "../components/Banner";
import Features from "../components/Features";
import Header from "../components/Header";
import Footer from "../components/Footer";

/**
 * @component for showing the home page
 * returns (
 * <Home />)
 */

export default function Home() {
	return (
		<div className="w-full h-screen flex flex-col">
			<Header />
			<div className="flex-1">
				<Banner />
				<Features />
			</div>
			<Footer />
		</div>
	);
}
