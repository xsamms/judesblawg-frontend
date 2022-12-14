import "../styles/globals.scss";
import ScrollToTop from "../components/ScrollToTop";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <ScrollToTop />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
