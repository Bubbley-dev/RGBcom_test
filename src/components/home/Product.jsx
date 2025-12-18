import Logo from "../../assets/Dexcowin_Icon_Red.png"
import default_img from "../../assets/default_img.jpg"
import "./home.css"

const Product = () => {
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
				<img className="product-carousel-img" src={default_img} alt="" />
				<div className="product-carousel-list">
					<img className="product-carousel-item" src={default_img} alt="" />
					<img className="product-carousel-item" src={default_img} alt="" />
					<img className="product-carousel-item" src={default_img} alt="" />
					<img className="product-carousel-item" src={default_img} alt="" />
					<img className="product-carousel-item" src={default_img} alt="" />
					<img className="product-carousel-item" src={default_img} alt="" />
				</div>
				<div className="product-carousel-content">
					<p className="product-carousel-badge">X-ray System</p>
					<p className="product-carousel-title">ADX6000FB</p>
					<p className="product-carousel-subtitle">고출력 포터블 엑스레이</p>
					<p className="product-carousel-text">
						전신을 아우르는 고품질 엑스레이 촬영을 지원합니다. 협소한 공간에서도
						최적의 이미징 솔루션을 제공합니다. 저선량으로 고품질의 엑스레이
						이미지를 정확하고 편리하게 획득할 수 있습니다.
					</p>
					<div className="product-carousel-btns">
						<div className="product-carousel-btn"> {"<"} </div>
						<div className="product-carousel-btn"> {">"} </div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Product
