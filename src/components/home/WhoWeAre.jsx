import Logo from "../../assets/Dexcowin_Icon_Red.png"
import who1 from "../../assets/who/who-1.png"
import who2 from "../../assets/who/who-2.png"
import who3 from "../../assets/who/who-3.png"
import who4 from "../../assets/who/who-4.png"
import who5 from "../../assets/who/who-5.png"
import who6 from "../../assets/who/who-6.png"
import who7 from "../../assets/who/who-7.png"
import who8 from "../../assets/who/who-8.png"
import "./home.css"

const WhoWeAre = () => {
	const photoCount = 8
	const radius = 600

	// 임시 이미지 데이터 (실제로는 props로 받거나 state로 관리)
	const photos = [who1, who2, who3, who4, who5, who6, who7, who8]
	const getPhotoPosition = (index) => {
		// 반원 상에서의 각도 계산 (180도를 8등분)
		const angle = (Math.PI / (photoCount - 1)) * index

		// 좌표 계산 (중심점 기준)
		const x = radius * Math.cos(Math.PI - angle)
		const y = -radius * Math.sin(Math.PI - angle)

		return { x, y, angle }
	}
	return (
		<div className="who">
			<div className="who-container">
				<p className="logo">
					<img src={Logo} className="logo-img why-logo" />
					<span>WHO WE ARE</span>
				</p>
				<p className="who-slogan">
					덱스코윈의 기술이 더 건강한 삶, 더 안전한 세상을 만들어 갑니다.
				</p>
			</div>
			<div className="gallery-page">
				<div className="gallery-wrapper">
					<div
						className="gallery-container"
						style={{
							width: `${radius * 2 + 120}px`,
							height: `${radius + 150}px`,
						}}
					>
						{/* 중앙 컨텐츠 */}
						<div className="center-content">
							<p className="center-title">For a safer world</p>
							<p className="center-subtitle">with advanced x-ray solution</p>
							<p className="center-text">
								의료, 요양원, 치과, 수의사, 보안/NDT, 비상 사태, 군, 법정의 등
								다양한 환경과 제한된 자원 속에서도 경제성과 정확성을 동시에
								실현하는 포터블 엑스레이 솔루션을 제공합니다.
							</p>
							<p className="who-badge">더 알아보기</p>
						</div>

						{/* 사진들 */}
						{photos.map((photo, index) => {
							const { x, y, angle } = getPhotoPosition(index)
							const rotationAngle = ((angle - Math.PI) * 180) / Math.PI + 90

							return (
								<div
									key={`photo-${index}`}
									className="photo-item"
									style={{
										left: `${radius - 60 + x}px`,
										top: `${radius - 60 + y}px`,
										// transform: `translate(-50%, -50%) rotate(${rotationAngle}deg)`,
									}}
								>
									<div className="photo-wrapper">
										<img
											src={photo}
											alt={`photo-${index}`}
											className="photo-image"
										/>
									</div>
								</div>
							)
						})}
					</div>
				</div>
			</div>
		</div>
	)
}

export default WhoWeAre
