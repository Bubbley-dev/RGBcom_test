import Logo from "../../assets/Dexcowin_Icon_Red.png"
import company1 from "../../assets/company/company-1.png"
import company2 from "../../assets/company/company-2.png"
import company3 from "../../assets/company/company-3.png"
import "./home.css"

const Company = () => {
	const datas = [
		{
			title: "포터블 엑스레이 전문 기업",
			text: "산업용 및 의료용 진단장비를 위한 저선량, 고해상도 엑스레이 솔루션 및 시스템",
			image: company1,
		},
		{
			title: "시장 선도 기업",
			text: "2004년에 설립 이후 포터블 엑스레이 장치의 선도 기업으로서 꾸준히 성장하고 있습니다.",
			image: company2,
		},
		{
			title: "R&D 선도 기업",
			text: "끊임없는 연구 개발을 통해 다양한 엑스레이 장비 및 관련 제품을 개발합니다.",
			image: company3,
		},
	]
	return (
		<section id="company">
			<p className="logo company-logo">
				<img src={Logo} className="logo-img" alt="덱스코윈 아이콘" />
				<span>COMPANY</span>
			</p>
			<div className="company container">
				<div className="company-contents">
					<h1 className="company-title">
						포터블 엑스레이 <br /> 혁신의 리더, 덱스코윈
					</h1>
					<p className="company-text">
						㈜덱스코윈은 포터블 엑스레이 분야를 선도하는 기업으로, 의료· 수의 ·
						산업 등 다양한 영역에서 활용 가능한 첨단장비와 솔루션을 개발,
						제공하고 있습니다. 끊임없는 연구 개발을 통해 혁신적인 포터블
						엑스레이 기술과 솔루션을 창출하여 인류복지와 삶의 질 향상에 기여하고
						있습니다.
					</p>
					<div className="company-detail hover">
						<div className="company-detail-flex">
							<span className="company-detail-text">회사 자세히 보기</span>
							<span className="company-detail-arrow">→</span>
						</div>
					</div>
				</div>
				<div className="company-pictures">
					{datas.map((data, index) => (
						<article className="company-picture" key={`${index - 0}`}>
							<img className="company-img" src={data.image} alt={data.title} />
							<h2 className="company-picture-title">{data.title}</h2>
							<p className="company-picture-text">{data.text}</p>
						</article>
					))}
				</div>
			</div>
		</section>
	)
}

export default Company
