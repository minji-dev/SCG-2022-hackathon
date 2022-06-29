import HomeButton from "components/HomeButton";
import { AppProps } from "next/app";
import '../../styles/globals.css'

function App({ Component, pageProps }: AppProps) {
  return (
    <div>
      <HomeButton />
      <Component {...pageProps} />
    </div>
  );
}

export default App;
