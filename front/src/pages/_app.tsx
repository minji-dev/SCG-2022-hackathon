import HomeButton from "components/HomeButton";
import { AppProps } from "next/app";
import '../../styles/globals.css'

function App({ Component, pageProps }: AppProps) {
  return (
    <div>
      <Component {...pageProps} />
      <HomeButton />
    </div>
  );
}

export default App;
