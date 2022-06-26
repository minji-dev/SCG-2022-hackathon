import type { NextPage } from 'next'
import PageHead from 'components/PageHead'
import useApi from 'hooks/useApi'
import { useRouter } from 'next/router'
import { User } from 'types/api'

const Category: NextPage = () => {
  const router = useRouter();
  const { id } = router.query
  const games = useApi<User>(`users/${id}`)
  return (
    <div>
        <PageHead title = {games?.first_name}/>
        {games?.first_name}
        {games?.last_name}
    </div>
  )
}

export default Category