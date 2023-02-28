import { Provider } from "react-redux";
import { store } from "../store";
import ScrollToTop from "../components/common/ScrollTop";
import Seo from "../components/common/seo";
import '../public/assets/scss/components/index.scss'
import "../styles/globals.css";

if (typeof window !== "undefined") {
  require("bootstrap/dist/js/bootstrap");
}

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Seo
        font={
          "https://fonts.googleapis.com/css?family=Nunito:400,400i,500,600,700&display=swap"
        }
      />
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>

      <ScrollToTop />
    </>
  );
}

export default MyApp;
