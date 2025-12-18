import Logo from "../../assets/Dexcowin_Icon_Red.png"
import default_img from "../../assets/default_img.jpg"
import "./home.css"

const Company = () => {
	return (
		<>
			<p className="logo company-logo">
				<img src={Logo} className="logo-img" />
				<span>COMPANY</span>
			</p>
			<div className="company container">
				<div className="company-contents">
					<p className="company-title">
						포터블 엑스레이 <br /> 혁신의 리더, 덱스코윈
					</p>
					<p className="company-text">
						㈜덱스코윈은 포터블 엑스레이 분야를 선도하는 기업으로, 의료· 수의 ·
						산업 등 다양한 영역에서 활용 가능한 첨단장비와 솔루션을 개발,
						제공하고 있습니다. 끊임없는 연구 개발을 통해 혁신적인 포터블
						엑스레이 기술과 솔루션을 창출하여 인류복지와 삶의 질 향상에 기여하고
						있습니다.
					</p>
					<div className="company-detail">
						<div className="company-detail-flex">
							<span className="company-detail-text">회사 자세히 보기</span>
							<span className="company-detail-arrow">→</span>
						</div>
						<hr />
					</div>
				</div>
				<div className="company-pictures">
					<div className="company-picture">
						<img className="company-img" src={default_img} alt="" />
						<p className="company-pictue-title">시장 선도 기업</p>
						<p className="company-pictue-text">
							2004년에 설립 이후 포터블 엑스레이 장치의 선도 기업으로서 꾸준히
							성장하고 있습니다.
						</p>
					</div>
					<div className="company-picture">
						<img className="company-img" src={default_img} alt="" />
						<p className="company-pictue-title">R&D 선도 기업</p>
						<p className="company-pictue-text">
							끊임없는 연구 개발을 통해 다양한 엑스레이 장비 및 관련 제품을
							개발합니다.
						</p>
					</div>
					<div className="company-picture">
						<img className="company-img" src={default_img} alt="" />
						<p className="company-pictue-title">포터블 엑스레이 전문 기업</p>
						<p className="company-pictue-text">
							산업용 및 의료용 진단장비를 위한 저선량, 고해상도 엑스레이 솔루션
							및 시스템
						</p>
					</div>
				</div>
			</div>
		</>
	)
}

export default Company
