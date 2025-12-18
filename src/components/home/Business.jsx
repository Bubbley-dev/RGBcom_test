import Logo from "../../assets/Dexcowin_Icon_Red.png"
import default_img from "../../assets/default_img.jpg"
import "./home.css"

const Business = () => {
	return (
		<div className="business container">
			<img className="business-img" src={default_img} alt="" />
			<div>
				<p className="logo">
					<img src={Logo} className="logo-img" />
					<span>BUSINESS</span>
				</p>
				<div className="business-content">
					<p className="business-content-title">
						다양한 환경에 알맞은 최적의 진단솔루션
					</p>
					<p className="business-content-text">
						㈜덱스코윈은 흉부를 비롯한 인체 전반 및 동물, 일반 산업 등
						엑스레이가 필요한 모든 영역에서 최적의 진단 솔루션을 제공합니다.
					</p>
				</div>
			</div>
		</div>
	)
}

export default Business
