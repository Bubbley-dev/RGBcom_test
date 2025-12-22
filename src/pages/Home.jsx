import Footer from "../components/Footer"
import Header from "../components/Header"
import Business from "../components/home/Business"
import Company from "../components/home/Company"
import MainBanner from "../components/home/MainBanner"
import Product from "../components/home/Product"
import SupportArea from "../components/home/SupportArea"
import WhoWeAre from "../components/home/WhoWeAre"
import WhyDexcowin from "../components/home/WhyDexcowin"

const Home = () => {
	return (
		<>
			<Header />
			<main>
				<MainBanner />
				<Company />
				<Business />
				<Product />
				<WhyDexcowin />
				<WhoWeAre />
				<SupportArea />
			</main>
			<Footer />
		</>
	)
}

export default Home
