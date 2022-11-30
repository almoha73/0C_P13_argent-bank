import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Profil from "./pages/Profil";
import Error from "./pages/Error";

function App() {
	return (
		<>
			<Router>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/login" element={<Login />} />
					<Route path="/profile" element={<Profil />}></Route>
					<Route path="*" element={<Error />}></Route>
				</Routes>
			</Router>
		</>
	);
}

export default App;
