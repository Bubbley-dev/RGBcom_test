import WhiteLogo from "../../assets/Dexcowin_Logo_White.png"
import "./certificate.css"

const Introduce = () => {
	return (
		<div className="introduce">
			<div className="introduce-content">
				<div className="introduce-line"></div>
				<p className="introduce-title">인증</p>
				<p className="introduce-text">
					덱스코윈은 진화하는 시장의 요구를 충족시키는 것을 목표로 지속적으로
					발전하기 위해 노력하고 있습니다.
				</p>
			</div>
			<div className="introduce-img">
				<div className="introduce-box">
					<p className="introduce-box-text">
						{"Innovating the Concept of Portable X-rays".toUpperCase()}
					</p>
					<img
						className="introduce-box-logo"
						src={WhiteLogo}
						alt=""
						width="107px"
					/>
				</div>
			</div>
		</div>
	)
}

export default Introduce
