import { useEffect } from "react"
import Footer from "../components/Footer"
import Board from "../components/certificate/Board"
import Introduce from "../components/certificate/Introduce"
import Menu from "../components/certificate/Menu"
import Banner from "../components/certificate/banner"

const Certificate = () => {
	useEffect(() => {
		window.scrollTo(0, 0)
	}, [])
	return (
		<>
			<Banner />
			<main>
				<Menu />
				<Introduce />
				<Board />
			</main>
			<Footer />
		</>
	)
}

export default Certificate
