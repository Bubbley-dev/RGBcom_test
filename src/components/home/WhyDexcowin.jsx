import Logo from "../../assets/Dexcowin_Icon_Red.png"
import default_img from "../../assets/default_img.jpg"
import "./home.css"
const WhyDexcowin = () => {
	return (
		<div className="why">
			<p className="logo">
				<img src={Logo} className="logo-img why-logo" />
				<span>WHY DEXCOWIN</span>
			</p>
			<div className="why-container">
				<p className="why-slogan">
					끊임없는 연구와 성과를 바탕으로 새로운 기준을 만들어 나갑니다.
				</p>
				<div className="why-more">더 알아보기</div>
			</div>
			<div className="why-content">
				{Array.from({ length: 4 }, (_, i) => (
					<div className="why-item">
						<p className="why-item-num">1</p>
						<p className="why-item-title">퍼스트 무버</p>
						<p className="why-item-text">
							배터리 탈착식 치과용 엑스레이의 시작, 혁신을 선도하는 포터블
							엑스레이 전문 기업
						</p>
						<img className="why-item-icon" src={default_img} alt="" />
					</div>
				))}
			</div>
		</div>
	)
}

export default WhyDexcowin
