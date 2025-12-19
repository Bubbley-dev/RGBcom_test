import { useEffect, useState } from "react"
import main1 from "../../assets/banners/main-1.png"
import main2 from "../../assets/banners/main-2.png"
import "./home.css"
import "./mainbanner.css"

const MainBanner = () => {
	const datas = [
		[
			"Superior Quality, Low Radiation Exposure",
			"LEADING THE NEXT X-ray solution",
			"보다 건강한 삶, 보다 안전한 세상을 위한 끊임없는 혁신을 만들어 나갑니다.",
			main1,
		],
		[
			"Superior Quality, Low Radiation Exposure",
			"Improving patient welfare",
			"환자의 불편 감소 및 동선 개선, 응급 및 초등 조치시 정확한 진단으로 적절한 의료 조치 및 경과 향상에 기여합니다.",
			main2,
		],
	]

	const [carouselIndex, setCarouselIndex] = useState(0)
	useEffect(() => {
		const timer = setInterval(() => {
			setCarouselIndex((prev) => (prev + 1) % datas.length)
		}, 5000)
		return () => clearInterval(timer)
	}, [datas.length])

	const getCarouselStyles = () => {
		return {
			transform: `translateX(-${carouselIndex * 100}vw)`,
			transition: "transform 0.5s ease-in-out",
		}
	}

	return (
		<div className="carousel-container">
			<div className="carousel-image-container" style={getCarouselStyles()}>
				{datas.map((data, index) => (
					<div
						className="banner"
						style={{ backgroundImage: `url(${data[3]})` }}
						key={`${index - 0}`}
					>
						<p className="banner-1">{data[0]}</p>
						<p className="banner-2">{data[1]}</p>
						<p className="banner-3">{data[2]}</p>
						<div className="carousel-indicators">
							{datas.map((_, idx) => (
								<div
									key={idx}
									className={`indicator ${
										idx === carouselIndex ? "active" : ""
									}`}
									onClick={() => {
										setCarouselIndex(idx)
									}}
								/>
							))}
						</div>
					</div>
				))}
			</div>
		</div>
	)
}

export default MainBanner
