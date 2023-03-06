import "../styles/globals.css";
import Script from "next/script";

function MyApp({ Component, pageProps }) {
  return (
    <div className="bg-background min-h-screen">
      <Component {...pageProps} />

      {/* <!-- Google tag (gtag.js) --> */}
      <Script
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-3E2MMECDPN"
      ></Script>
      <Script>
        {`
		window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-3E2MMECDPN');
		`}
      </Script>
    </div>
  );
}

export default MyApp;
