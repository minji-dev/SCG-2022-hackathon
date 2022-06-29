import { Props } from "types/types";
import useApi from "hooks/useApi";
import { Game } from "types/api";
import Image from "next/image";

function GameSymbol({ height, width, id }: Props) {
  const games = useApi<Game[]>(`games/${id}`);
  const arr : JSX.Element[]= []
  const level = games?.at(0)?.level || 0
  if (typeof level !== "undefined") {
    for( let i = 0; i < level; i++ ) {
      arr.push(<img src="img/소주병.png" alt="a" style={ {height: "40px", transform: "rotate(25deg)", marginRight: "-3px"} }/>);
    }
  }
  return (
    <div className="a">
      <h1>{games?.at(0)?.name}</h1>
      <hr/>
      {/* <Image src="/" alt={game?.name} height={200}  width={200} /> */}   
      <hr />
        <div>
          <h2>난이도:</h2>
          {arr}
        </div>
      <style jsx>{`
        @import url(https://cdn.jsdelivr.net/gh/moonspam/NanumSquare@1.0/nanumsquare.css);
        h1 {
          color: #333d79;
          text-align: center;
          font-family: "NanumSquare", sans-serif;
          font-weight: 700;
          font-size: 26px;
          margin: 10px;
        }
        .a{
          box-sizing: border-box;
          width: ${width}px;
          height: ${height}px;
          margin: 10px;
          background: #ffffff;
          border: 3px solid #333d79;
          border-radius: 20px;
          float: left;
          padding: 0px;
        }
        hr {
          background-color: #333d79;
          height: 3px;
          border: 0px;
        }
      `}</style>
    </div>
  );
}
export default GameSymbol;
