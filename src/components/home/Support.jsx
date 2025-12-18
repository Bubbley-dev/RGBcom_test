import Logo from "../../assets/Dexcowin_Icon_Red.png"
import link_img from "../../assets/link_img.png"
import "./home.css"
const Support = () => {
	return (
		<div className="support">
			<p className="logo">
				<img src={Logo} className="logo-img why-logo" />
				<span>SUPPORT</span>
			</p>
			<div className="support-container">
				<p className="support-title">
					의료 서비스 경쟁력 향상과 <br /> 환자의 복지 개선에 이바지합니다.
				</p>
				<div className="support-detail">
					<div className="company-detail-flex">
						<span className="company-detail-text">전체보기</span>
						<span className="company-detail-arrow">→</span>
					</div>
					<hr />
				</div>
			</div>
			<div className="support-container">
				{Array.from({ length: 4 }, (_, i) => (
					<div className="news-item">
						<p className="news-item-category">News</p>
						<p className="news-item-title">
							병원 밖에서도 X-ray 가능, 현장에서 바로 촬영하고 진단
						</p>
						<p className="news-item-text">
							이번 규제 개선으로 요양 시설에서는 낙상․골절 등의 위급상황 발생
							시, 엑스레이 촬영을 위해 구급차...
						</p>
						<p className="news-item-date">
							<span>🕘</span>2025.09.12
						</p>
					</div>
				))}
			</div>
			<div className="support-container">
				<div className="support-link bg-red">
					<div>
						<p className="support-link-title">인재채용</p>
						<p className="support-link-text">
							덱스코윈의 미래를 함께 열어갈 인재를 모집합니다.
						</p>
					</div>
					<img className="support-link-img" src={link_img} alt="" />
				</div>
				<div className="support-link bg-blue">
					<div>
						<p className="support-link-title">온라인 문의</p>
						<p className="support-link-text">
							덱스코윈은 고객님의 물음에 언제든 준비되어 있습니다.
						</p>
					</div>
					<img className="support-link-img" src={link_img} alt="" />
				</div>
			</div>
		</div>
	)
}

export default Support
