import Logo from "../../assets/Dexcowin_Icon_Red.png"
import support1 from "../../assets/support/support-1.png"
import support2 from "../../assets/support/support-2.png"
import support3 from "../../assets/support/support-3.png"
import support4 from "../../assets/support/support-4.png"
import "./home.css"
const WhyDexcowin = () => {
	const datas = [
		{
			number: "1",
			title: "퍼스트 무버",
			text: "배터리 탈착식 치과용 엑스레이의 시작, 혁신을 선도하는 포터블 엑스레이 전문 기업",
			icon: support1,
		},
		{
			number: "30",
			title: "R&D 투자",
			text: "기업부설 연구소를 운영하고 있고 매출의 30% 이상 R&D에 투자",
			icon: support2,
		},
		{
			number: "300+",
			title: "글로벌 파트너",
			text: "85개국, 300여개 이상의 글로벌 파트너망을 구축하여 전세계로 수출",
			icon: support3,
		},
		{
			number: "50+",
			title: "인증 및 특허",
			text: "FDA, CE를 비롯한 다수의 글로벌 인증으로 안정성과 기술 우수성 입증",
			icon: support4,
		},
	]
	return (
		<section id="whydexcowin" className="why">
			<p className="logo">
				<img src={Logo} className="logo-img why-logo" alt="덱스코윈 아이콘" />
				<span>WHY DEXCOWIN</span>
			</p>
			<div className="why-container">
				<h2 className="why-slogan">
					끊임없는 연구와 성과를 바탕으로 새로운 기준을 만들어 나갑니다.
				</h2>
				<button className="why-more hover">더 알아보기</button>
			</div>
			<div className="why-content">
				{datas.map((data, index) => (
					<article className="why-item" key={`${index - 0}`}>
						<h3 className="why-item-num">{data.number}</h3>
						<h4 className="why-item-title">{data.title}</h4>
						<p className="why-item-text">{data.text}</p>
						<img className="why-item-icon" src={data.icon} alt={data.title} />
					</article>
				))}
			</div>
		</section>
	)
}

export default WhyDexcowin
