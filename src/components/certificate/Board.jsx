import defaultImg from "../../assets/default_img.jpg"

const Board = () => {
	return (
		<div className="board">
			<div className="board-contents">
				{Array.from({ length: 4 }, (_, index) => {
					return (
						<div className="board-content" key={index}>
							<div className="board-img-container">
								<img
									src={defaultImg}
									alt=""
									className="board-img"
									width="265px"
									height="360px"
								/>
							</div>
							<p className="board-title">
								의료기기 제조 및 품질관리 기준 적합인정서(GMP)
							</p>
							<p className="board-text">KTL-ADBA-13746</p>
						</div>
					)
				})}
			</div>
			<div className="board-pages">
				<span className="board-page">&lt;&lt;</span>
				<span className="board-page">&lt;</span>
				<span className="board-page active">1</span>
				<span className="board-page">2</span>
				<span className="board-page">8</span>
				<span className="board-page">&gt;</span>
				<span className="board-page">&gt;&gt;</span>
			</div>
		</div>
	)
}

export default Board
