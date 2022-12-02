import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
	return (
		<div className="bg-background min-h-screen">
			<Component {...pageProps} />
		</div>
	);
}

export default MyApp;
