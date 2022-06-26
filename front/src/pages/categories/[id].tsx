import type { NextPage } from 'next'
import PageHead from 'components/PageHead'
import useReqresApi from 'hooks/useReqresApi'
import { useRouter } from 'next/router'
import { User } from 'types/api'

const Brain: NextPage = () => {
  const router = useRouter();
  const { id } = router.query
  const users = useReqresApi<User>(`users/${ id }`)
  return (
    <div>
        <PageHead title ='hell'/>
        {users?.first_name}
    </div>
  )
}

export default Brain