import { Props } from "types/types";
import Link from "next/link";
import useApi from "hooks/useApi";
import { User } from "types/api";
import Image from "next/image";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

function GameButton({ height, width, id, difficulty }: Props) {
  const game = useApi<User>(`users/${id}`);
  console.log(game);
  let arr = []
  difficulty = 3;
  for( let i = 0; i < difficulty; i++ ) {
    arr.push(<img src="/Soju.png" alt="a" style={ {height: "40px", transform: "rotate(25deg)", marginRight: "-3px"} }/>);
  }
  return (
    <Link href={`/details/${id}`}>
      <div>
        <h1>{game?.last_name}</h1>
        <hr />
        <Image
          src={ game?.avatar ? `${game?.avatar}` : '/'}
          alt={`${game?.last_name}`}
          width={128}
          height={128}
        />
        <hr />
        <p>
          <h2>난이도:</h2>
          {arr}
        </p>
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
          div {
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
