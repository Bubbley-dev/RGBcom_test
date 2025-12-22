import "../App.css"
import Logo from "../assets/Dexcowin_Logo_Gray.png"
import facebook from "../assets/icons/facebook.png"
import instagram from "../assets/icons/instagram.png"
import linkedin from "../assets/icons/linkedin.png"
import youtube from "../assets/icons/youtube.png"

const Footer = () => {
	return (
		<footer id="footer" className="footer">
			<img className="footer-icon hover" src={Logo} alt="덱스코윈 로고" />
			<div className="footer-text">
				<div className="footer-link">
					<a href="#footer" className="hover">
						회사소개
					</a>{" "}
					|{" "}
					<a href="#footer" className="hover">
						문의하기
					</a>{" "}
					|
					<a href="#footer" className="hover">
						{" "}
						개인정보처리방침
					</a>{" "}
					|{" "}
					<a href="#footer" className="hover">
						무단이메일수집거부
					</a>
				</div>
				<div className="footer-inform">
					<p className="footer-address">
						<span className="footer-address-title">한국 본사</span>
						<span>
							서울시 금천구 가산디지털1로 25, 901~905호 (가산동, 대륭테크노타운
							17차)
						</span>
					</p>
					<div className="footer-contact">
						<span className="footer-contact-title">TEL</span>
						<span>02-3402-5500</span>
						<span className="footer-contact-title">FAX</span>
						<span>02-3402-5539</span>
						<span className="footer-contact-title">EMAIL</span>
						<span>info@dexcowin.com</span>
						<div className="footer-sns">
							<img
								className="hover"
								src={facebook}
								alt="facebook"
								width="33.15px"
								height="33.15px"
							/>
							<img
								className="hover"
								src={youtube}
								alt="youtube"
								width="33.15px"
								height="33.15px"
							/>
							<img
								className="hover"
								src={linkedin}
								alt="linkedin"
								width="33.15px"
								height="33.15px"
							/>
							<img
								className="hover"
								src={instagram}
								alt="instagram"
								width="33.15px"
								height="33.15px"
							/>
						</div>
					</div>
				</div>
				<hr />
				<p className="footer-copy">
					Copyright 2025 Dexcowin Co., Ltd. All Rights Reserved.
				</p>
			</div>
			<a className="footer-top hover" href="#">
				TOP
			</a>
		</footer>
	)
}

export default Footer
