import { Props } from "types/types";
import Link from "next/link";
import useApi from "hooks/useApi";
import { Game } from "types/api";
import Image from "next/image";

function GameButton({height, width, id}: Props) {
  const game = useApi<Game>(`games/${id}`);
  const arr : JSX.Element[]= []
  const level = game?.level || 0
  if (typeof level !== "undefined") {
    // for( let i = 0; i < level; i++ ) {
    //   arr.push(<Image src="/Soju.png" alt="a" style={ {height: "40px", transform: "rotate(25deg)", marginRight: "-3px"} }/>);
    // }
  }
  return (
    <Link href={`/details/${id}`}>
      <div className="a">
        <h1>{game?.name}</h1>
        <hr />
        {/* <Image
          src={ game?.game_file ? `${game?.game_file}` : '/soju.png'}    게임 상징 이미지 받기 위한 url?
          alt={`${game?.name}`}
          width={128}
          height={128}
        /> */}
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
    </Link>
  );
}
export default GameButton;
