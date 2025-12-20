import SmallIcon from "../../assets/Dexcowin_Icon_Small.png"
import Header from "../Header"
import "./certificate.css"

const Banner = () => {
	return (
		<div className="banner">
			<Header isWhite="true" />
			<div className="banner-content">
				<img
					className="banner-icon"
					src={SmallIcon}
					alt=""
					width="17px"
					height="17px"
				/>
				<p className="banner-title">SUPPORT</p>
				<p className="banner-text">
					최고의 기술력과 품질을 최우선으로 하는 덱스코윈
				</p>
			</div>
		</div>
	)
}

export default Banner
