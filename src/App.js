import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Login from "./pages/Login";
import PrivateRoute from "./pages/PrivateRoute";
import Profil from "./pages/Profil";

function App() {
	return (
		<>
			<Router>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/login" element={<Login />} />

					<Route element={<PrivateRoute />}>
						<Route path="/profile" element={<Profil />}></Route>
					</Route>
				</Routes>
			</Router>
		</>
	);
}

export default App;
