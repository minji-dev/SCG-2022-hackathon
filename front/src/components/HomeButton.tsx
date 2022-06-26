import { Props } from 'types/types'
import Link from 'next/link'
import { useRouter } from 'next/router'

function HomeButton() {
    const router = useRouter();
    return(
        <Link href='/'>
            <a style={{visibility: (router.pathname !== '/' &&  router.pathname !== '/404')? 'visible': 'hidden'}}>
                Home
            </a>
        </Link>
        )
}
export default HomeButton