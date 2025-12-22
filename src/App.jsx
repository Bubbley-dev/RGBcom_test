import { BrowserRouter, Route, Routes } from "react-router-dom"
import "./assets/fonts/inter/woff2/inter.css"
import "./assets/fonts/pretendard/pretendard.css"
import Certificate from "./pages/Certificate"
import Home from "./pages/Home"

function App() {
	return (
		<>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/support" element={<Certificate />} />
				</Routes>
			</BrowserRouter>
		</>
	)
}

export default App
