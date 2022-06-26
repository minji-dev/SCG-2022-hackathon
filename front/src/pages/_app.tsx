import HomeButton from 'components/HomeButton';
import PageHead from 'components/PageHead';
import {AppProps} from 'next/app'

function App({ Component, pageProps } : AppProps){
    return(
        <div>
            <PageHead/>
            <Component {...pageProps}/>
            <HomeButton/>
        </div>
    )
}

export default App;