import { Props } from 'types/types'
import Link from 'next/link'
import { useRouter } from 'next/router'
function HomeButton() {
    const router = useRouter();
    return(
        <div style={{display: 'flex', justifyContent: 'center'}}>
            <Link href='/'>
                <button style={{margin: '0 auto', visibility: (router.pathname !== '/' &&  router.pathname !== '/404')? 'visible': 'hidden'}}>
                    홈으로
                </button>
            </Link>
        </div>
        )
}
export default HomeButton