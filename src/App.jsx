import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import Support from "./pages/Support"

function App() {
	return (
		<>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/support" element={<Support />} />
				</Routes>
			</BrowserRouter>
		</>
	)
}

export default App
