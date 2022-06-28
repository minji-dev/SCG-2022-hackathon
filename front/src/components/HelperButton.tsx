import { Props } from "types/types";
import useApi from "hooks/useApi";
import { Game } from "types/api";
import Link from "next/link";

function HelperButton({ height, width, id }: Props) {
  const games = useApi<Game[]>(`games`);
  return (
    <Link href={`/helpers/${id}`}>
      <div>
        <a>
          <h1>{games?.at(0)?.name}</h1>
          <hr />
          {/* <Image
          src={ game?.avatar ? `${game?.avatar}` : '/'}
          alt={`${game?.last_name}`}
          width={128}
          height={128}
          /> */}
        </a>
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
export default HelperButton;