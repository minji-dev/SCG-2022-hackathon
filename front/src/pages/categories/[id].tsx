import type { NextPage } from 'next'
import PageHead from 'components/PageHead'
import useReqresApi from 'hooks/useReqresApi'
import { useRouter } from 'next/router'
import { User } from 'types/api'

const Brain: NextPage = () => {
  const router = useRouter();
  const { id } = router.query
  const games = useReqresApi<User>(`users/${ id }`)
  const titlestr = games?.first_name + ' | 술 게임 가이드북'
  return (
    <div>
        <PageHead title = {titlestr}/>
        {games?.first_name} 
        {games?.last_name}
    </div>
  )
}

export default Brain