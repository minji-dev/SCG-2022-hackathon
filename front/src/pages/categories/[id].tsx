import type { NextPage } from 'next'
import PageHead from 'components/PageHead'
import useApi from 'hooks/useApi'
import { useRouter } from 'next/router'
import { User } from 'types/api'
import CatListButton from 'components/CatListbutton'
import GameButton from 'components/GameButton'

const Category: NextPage = () => {
	const router = useRouter()
	const { id } = router.query
	const game = useApi<User>(`users/${id}`)
	const games = useApi<User[]>(`users?per_page=${id}`)
	return (
		<div>
			<PageHead title = {game?.first_name}/>
			<h1>{game?.last_name}</h1>
			<div style={{display: "grid", gridTemplateColumns: "auto auto auto"}}>
				<div>
					{games?.slice(0, games.length).map((gameeach) => (
						<GameButton id={gameeach.id} width={200} height={300}/>
					))}
				</div>
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