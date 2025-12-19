import { useEffect, useState } from "react"
import Logo from "../../assets/Dexcowin_Icon_Red.png"
import product1 from "../../assets/product/product-1.png"
import product2 from "../../assets/product/product-2.png"
import product3 from "../../assets/product/product-3.png"
import product4 from "../../assets/product/product-4.png"
import product5 from "../../assets/product/product-5.png"
import product6 from "../../assets/product/product-6.png"
import "./home.css"
import "./product.css"

const Product = () => {
	const datas = [
		{
			title: "ADX6000FB",
			subtitle: "고출력 포터블 엑스레이",
			text: "전신을 아우르는 고품질 엑스레이 촬영을 지원합니다. 협소한 공간에서도 최적의 이미징 솔루션을 제공합니다. 저선량으로 고품질의 엑스레이 이미지를 정확하고 편리하게 획득할 수 있습니다.",
			image: product1,
		},
		{
			title: "COCOON",
			subtitle: "안정적인 GUN-type 포터블 엑스레이",
			text: `인체공학적 설계로 흔들림 없는 안정적인 촬영을 지원합니다. 특허기술인 에이밍 라이트 적용하여 고품질의 엑스레이 이미지를 정확하고 편리하게 획득할 수 있습니다.
			※ 수출 전용 상품입니다`,
			image: product2,
		},
		{
			title: "ADX4000W",
			subtitle: "세계 최초의 올인원 타입 치과용 포터블 엑스레이",
			text: "촬영 후 이미지를 디스플레이에서 바로 확인할 수있습니다. 공간의 제약없는 자유로운 진단 솔루션을 제공합니다.",
			image: product3,
		},
		{
			title: "DX3000",
			subtitle: "한국 최초의 치과용 포터블 엑스레이",
			text: "한국 최초의 치과용 포터블 엑스레이로, 전 세계 시장에서의 검증된 뛰어난 품질과 내구성으로 고객들에게 고품질의 엑스레이 솔루션을 제공합니다.",
			image: product4,
		},
		{
			title: "SOLO",
			subtitle: "가벼운 GUN-type 포터블 엑스레이",
			text: "더 가벼워진 제품으로 보다 편리한 촬영이 가능합니다. 특허기술인 에이밍 라이트를 적용하여 고품질의 엑스레이 이미지를 정확하고 편리하게 획득할 수 있습니다.",
			image: product5,
		},
		{
			title: "Components",
			subtitle: "구성품",
			text: "Intra Oral Sensor와 Flat Panel Detector, 치과, 인체, 수의, 정형, 산업용 등 모든 진단 환경에 최적화된 디지털 엑스레이 이미징 솔루션을 제공합니다.",
			image: product6,
		},
	]

	const [listIndex, setListIndex] = useState(0)
	useEffect(() => {
		const timer = setInterval(() => {
			setListIndex((prev) => (prev + 1) % datas.length)
		}, 5000)
		return () => clearInterval(timer)
	}, [datas.length])

	const nextProdcut = () => {
		setListIndex((listIndex + 1) % datas.length)
	}

	const prevProdcut = () => {
		setListIndex((listIndex + datas.length - 1) % datas.length)
	}

	return (
		<div className="product">
			<span className="logo product-logo-box">
				<div className="product-logo">
					<div>
						<img src={Logo} className="logo-img product-logo-img" />
					</div>
					<span className="product-logo-text">PRODUCT</span>
				</div>
				<p className="product-big">DEXCOWIN</p>
			</span>
			<div className="product-carousel-box">
				<img
					className="product-carousel-img"
					src={datas[listIndex].image}
					alt=""
				/>
				<div className="product-carousel-list">
					{datas.map((data, index) => (
						<img
							className={`product-carousel-item ${
								index === listIndex ? "active" : ""
							}`}
							onClick={() => {
								setListIndex(index)
							}}
							src={data.image}
							alt=""
							key={`${index - 0}`}
						/>
					))}
				</div>
				<div className="product-carousel-content">
					<p className="product-carousel-badge">X-ray System</p>
					<p className="product-carousel-title">{datas[listIndex].title}</p>
					<p className="product-carousel-subtitle">
						{datas[listIndex].subtitle}
					</p>
					<p className="product-carousel-text">{datas[listIndex].text}</p>
					<div className="product-carousel-btns">
						<div className="product-carousel-btn" onClick={prevProdcut}>
							{" < "}
						</div>
						<div className="product-carousel-btn" onClick={nextProdcut}>
							{" > "}
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Product
