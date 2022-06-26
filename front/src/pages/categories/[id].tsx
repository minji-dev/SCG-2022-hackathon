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
    </div>
  )
}

export default Category