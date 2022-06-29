import HomeButton from "components/HomeButton";
import { AppProps } from "next/app";

function App({ Component, pageProps }: AppProps) {
  return (
    <div>
      <Component {...pageProps} />
      <HomeButton />
    </div>
  );
}

export default App;
