import { GlobalStyles } from "../styles/Global.styled";
import Header from "../Components/Header/Header.component.jsx";
function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Header />
      <GlobalStyles />
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
