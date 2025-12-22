import { useState } from "react"
import certificate1 from "../../assets/certificate/certificate-1.png"
import certificate2 from "../../assets/certificate/certificate-2.png"
import certificate3 from "../../assets/certificate/certificate-3.png"
import certificate4 from "../../assets/certificate/certificate-4.png"
import expend from "../../assets/icons/expend.png"

const Board = () => {
	const datas = [
		{
			image: certificate1,
			title: "의료기기 제조 및 품질관리 기준 적합인정서(GMP)",
			text: "KTL-ADBA-13746",
		},
		{
			image: certificate2,
			title:
				"포터블텐탈엑스선 촬영장치 및 디지털 방사선 촬영 시스템의 설계 및 제조",
			text: "ISO 13485",
		},
		{
			image: certificate3,
			title: "이온화 방사선을 이용하는 영상 장치",
			text: "ISO 13485",
		},
		{
			image: certificate4,
			title: "FDA 메디컬 디바이스 ",
			text: "",
		},
	]

	const [selected, setSelected] = useState(-1)
	const handleMouseOut = () => {
		setSelected(-1)
	}

	return (
		<section id="board" className="board">
			<div className="board-contents">
				{datas.map((data, index) => {
					return (
						<article className="board-content hover" key={index}>
							<div
								className={
									"board-img-container" + (index == selected ? " active" : "")
								}
								onMouseOver={() => {
									setSelected(index)
								}}
								onMouseOut={handleMouseOut}
								aria-label={`${index + 1}번 이미지 상세보기`}
							>
								<img
									src={data.image}
									alt={data.title}
									className="board-img"
									width="265px"
									height="360px"
								/>
								{index == selected && (
									<div className="board-expend-icon-container">
										<img
											className="board-expend-icon"
											src={expend}
											alt="확대보기"
											width="23px"
											height="23px"
										/>
									</div>
								)}
							</div>
							<h2 className="board-title">{data.title}</h2>
							<p className="board-text">{data.text}</p>
						</article>
					)
				})}
			</div>
			<div className="board-pages">
				<span className="board-page">&lt;&lt;</span>
				<span className="board-page">&lt;</span>
				<span className="board-page active">1</span>
				<span className="board-page">2</span>
				<span className="board-page">3</span>
				<span className="board-page">&gt;</span>
				<span className="board-page">&gt;&gt;</span>
			</div>
		</section>
	)
}

export default Board
