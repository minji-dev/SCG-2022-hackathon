import type { NextPage } from 'next'
import PageHead from 'components/PageHead'
import CatButton from 'components/CatButton'

 const Home: NextPage = () => {

  return (
    <div>
      <PageHead title="메인 화면"/>
      {/* <FontAwesomeIcon icon='clover' size='5x'/> */}
      <h1> 술 게임 가이드북 </h1>
      <div style={ { display: 'flex', justifyContent: 'center'} }>
        <CatButton height={250} width={350}/>
        <CatButton height={250} width={350}/>
      </div>
      <div style={ { display: 'flex', justifyContent: 'center'} }>
        <CatButton height={250} width={350}/>
        <CatButton height={250} width={350}/>
      </div>
      <div style={ { display: 'flex', justifyContent: 'center'} }>
        <CatButton height={250} width={720}/>
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
