import { Link } from "react-router-dom"
import "../App.css"
import Logo from "../assets/Dexcowin_Logo_Black.png"

const Header = () => {
	return (
		<>
			<header>
				<div className="header">
					<Link className="header-icon" to="/">
						<img src={Logo} alt="덱스코윈 로고" />
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
					<Link to="/support">고객지원</Link>
				</div>
				<hr className="header-line" />
			</header>
		</>
	)
}

export default Header
