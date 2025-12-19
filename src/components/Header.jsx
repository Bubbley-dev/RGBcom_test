import { Link, useLocation } from "react-router-dom"
import "../App.css"
import BlackLogo from "../assets/Dexcowin_Logo_Black.png"
import WhiteLogo from "../assets/Dexcowin_Logo_White.png"

const Header = ({ isWhite = false }) => {
	const location = useLocation()
	return (
		<>
			<header>
				<div className="header">
					<Link className="header-icon" to="/">
						<img src={isWhite ? WhiteLogo : BlackLogo} alt="덱스코윈 로고" />
					</Link>
					<Link className="header-link" to="/">
						회사소개
					</Link>
					<Link className="header-link" to="/">
						제품소개
					</Link>
					<Link className="header-link" to="/">
						채용안내
					</Link>
					<Link
						className={
							"header-link" + (location.pathname == "/support" ? " active" : "")
						}
						to="/support"
					>
						고객지원
					</Link>
				</div>
				<hr className="header-line" />
			</header>
		</>
	)
}

export default Header
