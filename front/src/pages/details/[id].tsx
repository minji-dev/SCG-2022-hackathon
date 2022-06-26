import type { NextPage } from 'next'
import PageHead from 'components/PageHead'
import useApi from 'hooks/useApi'
import { useRouter } from 'next/router'
import { User } from 'types/api'

const Category: NextPage = () => {
  const router = useRouter();
  const { id } = router.query
  const game = useApi<User>(`users/${id}`)
  console.log(game)
  return (
    <div>
        <PageHead title = {game?.first_name}/>
        <h1 style={{textAlign: "center", width: "304px", justifyContent: "center", margin: "0 auto"}}>{game?.last_name}</h1>
        <div>
            <div style={ {width: "1181px", justifyContent: "center", margin: "0 auto" } }>
                <h2>인트로</h2>
                <hr/>
                <p>{game?.email}</p>
            </div>
            <div style={ {width: "1181px", justifyContent: "center" , margin: "0 auto" } }>
                <h2>규칙</h2>
                <hr/>
                <p>{game?.avatar}</p>
            </div>
        </div>
    </div>
    
  )
}

export default Category