import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Layout, Navbar, ProductPage } from "./components";

function App() {
	return (
		<div>
			<Navbar />
			<Routes>
				<Route path="/" element={<Layout />}>
					<Route path="/product-card" element={<ProductPage />} />
				</Route>
			</Routes>
		</div>
	);
}

export default App;
