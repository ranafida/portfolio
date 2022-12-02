import Nav from "../components/Nav";
import Hero from "../components/Hero";
import Projects from "../components/Projects";
import Review from "../components/Reviews";
import Value from "../components/Value";
import Footer from "../components/Footer";

export default function Home() {
	return (
		<div className="text-white">
			<Nav></Nav>
			<Hero></Hero>
			<Projects></Projects>
			<Review></Review>
			<Value></Value>
			<Footer></Footer>
		</div>
	);
}
