import { Link } from "react-router-dom"
import Logo from "../../assets/Dexcowin_Icon_Red.png"
import link_img from "../../assets/link_img.png"
import "./home.css"
const SupportArea = () => {
	const datas = [
		{
			category: "News",
			title: "병원 밖에서도 X-ray 가능, 현장에서 바로 촬영하고 진단",
			text: "이번 규제 개선으로 요양 시설에서는 낙상․골절 등의 위급상황 발생 시, 엑스레이 촬영을 위해 구급차...",
			date: "2025.09.12",
		},
		{
			category: "News",
			title: "초경량 X선 장비로 의료 사각지대 봉사 활동 수행",
			text: "배터리 구동 및 저선량 방사선으로 작동하는 COCOON은 의료 서비스 제공과 직원 교육 모두를 지원하며...",
			date: "2025.08.24",
		},
		{
			category: "News",
			title: "ICARST 2025에서 혁신적인 방사선 기술 선보여",
			text: "기존 장비 대비 1/3 수준의 방사선량으로 고품질 영상 촬영을 제공합니다.",
			date: "2025.07.19",
		},
		{
			category: "News",
			title: "덱스코윈, 2025 글로벌 선도기업으로 선정",
			text: "휴대용 X선 장비 수출 선도기업으로서, 첨단 제품 개발과 글로벌 인증을 통해 성장해 나가겠습니다.",
			date: "2025.07.04",
		},
	]
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
				<Link to="/support" className="support-detail">
					<div className="company-detail-flex">
						<span className="company-detail-text">전체보기</span>
						<span className="company-detail-arrow">→</span>
					</div>
					<hr />
				</Link>
			</div>
			<div className="support-container">
				{datas.map((data, index) => (
					<div className="news-item" key={`${index - 0}`}>
						<p className="news-item-category">{data.category}</p>
						<p className="news-item-title">{data.title}</p>
						<p className="news-item-text">{data.text}</p>
						<p className="news-item-date">
							<span>🕘 </span>
							{data.date}
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

export default SupportArea
