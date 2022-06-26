import type { NextPage } from 'next'
import PageHead from 'components/PageHead'
import useApi from 'hooks/useApi'
import { useRouter } from 'next/router'
import { User } from 'types/api'
import GameSymbol from 'components/GameSymbol'
import Link from 'next/link'

const Category: NextPage = () => {
  const router = useRouter();
  const { id } = router.query
  const game = useApi<User>(`users/${id}`)
  console.log(game)

  return (
    <div>
        <PageHead title = "RandomGame"/>
        <h1 style={{textAlign: "center", justifyContent: "center", margin: "0 auto"}}>잼민이가 좋아하는 랜덤~게임! 아 무슨~게임! 게임 스타트!</h1>
        <div style={{height: "265px", width: "911px", textAlign: "center", justifyContent: "center", margin: "30px auto"}}>
            <GameSymbol height = {265} width = {200} name={game?.last_name}/>
            <h3>gp</h3>
        </div>
        <div style={ {width: "1181px", justifyContent: "center" , margin: "0 auto" } }>
                <h2>규칙</h2>
                <hr/>
                <p>{game?.avatar}</p>
        </div>
        <div style={{display: 'flex', justifyContent: 'center'}}>
            <Link href='/'>
                <button style={{margin: '10px auto', visibility: (router.pathname !== '/' &&  router.pathname !== '/404')? 'visible': 'hidden'}}>
                    랜덤~~~~게임
                </button>
            </Link>
        </div>
        <style jsx>{`
        @import url(https://cdn.jsdelivr.net/gh/moonspam/NanumSquare@1.0/nanumsquare.css);
        h1 {
          color: #333D79;
          text-align: center;
          font-family: 'NanumSquare', sans-serif;
          font-weight: 700;
          font-size: 40px;
        }
      `}</style>
    </div>
  )
}

export default Category