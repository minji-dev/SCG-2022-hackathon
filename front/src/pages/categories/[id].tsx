import type { NextPage } from 'next'
import PageHead from 'components/PageHead'
import useApi from 'hooks/useApi'
import { useRouter } from 'next/router'
import { User } from 'types/api'

const Category: NextPage = () => {
  const router = useRouter();
  const { id } = router.query
  const games = useApi<User[]>(`users?per_page=${id}`)
  console.log(games)
  const num = games?.length
  return (
    <div>
        <PageHead title = "fucking"/>
        <ul>
          {games?.slice(0, 20).map((game) => (
            <li key={game.id}>{game.last_name}</li>
          ))}
        </ul>
        <style jsx>{`
        @import url(https://cdn.jsdelivr.net/gh/moonspam/NanumSquare@1.0/nanumsquare.css);
        h1 {
          color: #333D79;
          text-align: center;
          font-family: 'NanumSquare', sans-serif;
          font-weight: 700;
          font-size: 40px;
        }
        h2 {
          color: #333D79;
          font-family: 'NanumSquare', sans-serif;
        }
        p {
          color: #333D79;
          font-family: 'NanumSquare', sans-serif;
        }
        hr {
            background-color: #333D79;
            height: 3px;
            border: 0px;
        }
      `}</style>
    </div>
    
  )
}

export default Category