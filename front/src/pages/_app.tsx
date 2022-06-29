import HomeButton from "components/HomeButton";
import { AppProps } from "next/app";
import '../../styles/global.css'

function App({ Component, pageProps }: AppProps) {
  return (
    <div>
      <HomeButton />
      <Component {...pageProps} />
    </div>
  );
}

export default App;
