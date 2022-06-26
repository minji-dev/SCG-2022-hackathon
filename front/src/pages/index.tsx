import type { NextPage } from 'next'
import PageHead from 'components/PageHead'
import CatButton from 'components/CatButton'
import { useRouter } from 'next/router';
import useApi from 'hooks/useApi';
import { User } from 'types/api';
import RandomButton from 'components/RandomButton';

 const Home: NextPage = () => {
  const fields = useApi<User[]>(`users?per_page=12`)

  return (
    <div>
      <PageHead title="메인 화면"/>
      {/* <FontAwesomeIcon icon='clover' size='5x'/> */}
      <h1> 술 게임 가이드북 </h1>
      <div style={ { display: 'flex', justifyContent: 'center'} }>
        <CatButton height={250} width={350} id={5}/>
        <CatButton height={250} width={350} id={1}/>
      </div>
      <div style={ { display: 'flex', justifyContent: 'center'} }>
        <CatButton height={250} width={350} id={2}/>
        <CatButton height={250} width={350} id={3}/>
      </div>
      <div style={ { display: 'flex', justifyContent: 'center'} }>
        <CatButton height={250} width={720} id={4}/>
      </div>
      <div>
        <RandomButton/>
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

export default Home
