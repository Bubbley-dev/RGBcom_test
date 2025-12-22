import { useEffect, useState } from "react"
import Logo from "../../assets/Dexcowin_Icon_Red.png"
import business1 from "../../assets/business/business-1.png"
import business2 from "../../assets/business/business-2.png"
import business3 from "../../assets/business/business-3.png"
import business4 from "../../assets/business/business-4.png"
import business5 from "../../assets/business/business-5.png"
import "./business.css"
import "./home.css"

const Business = () => {
	const datas = [
		{
			category: "Medical / Dental",
			image: business1,
		},
		{
			category: "Nursing Homes",
			image: business2,
		},
		{
			category: "Veterinary",
			image: business3,
		},
		{
			category: "Security/NDT/Military",
			image: business4,
		},
		{
			category: "Emergency/Legal",
			image: business5,
		},
	]

	const [listIndex, setListIndex] = useState(0)
	useEffect(() => {
		const timer = setInterval(() => {
			setListIndex((prev) => (prev + 1) % datas.length)
		}, 5000)
		return () => clearInterval(timer)
	}, [datas.length])

	return (
		<section id="business" className="business container">
			<img
				className="business-img"
				src={datas[listIndex].image}
				alt={datas[listIndex].category}
			/>
			<div>
				<p className="logo">
					<img alt="덱스코윈 아이콘" src={Logo} className="logo-img" />
					<span>BUSINESS</span>
				</p>
				<div className="business-content">
					<h1 className="business-content-title">
						다양한 환경에 알맞은 최적의 진단솔루션
					</h1>
					<p className="business-content-text">
						㈜덱스코윈은 흉부를 비롯한 인체 전반 및 동물, 일반 산업 등
						엑스레이가 필요한 모든 영역에서 최적의 진단 솔루션을 제공합니다.
					</p>
					{datas.map((data, index) => (
						<article
							className={`category ${
								index === listIndex ? "active" : ""
							} hover`}
							onClick={() => {
								setListIndex(index)
							}}
							key={`${index - 0}`}
						>
							{data.category.toUpperCase()}
							<div className="category-line"></div>
						</article>
					))}
				</div>
			</div>
		</section>
	)
}

export default Business
