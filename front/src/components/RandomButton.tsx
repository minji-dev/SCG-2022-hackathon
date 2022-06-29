import Link from "next/link";
import useApi from "hooks/useApi";
import { Game } from "types/api";
function RandomButton() {
  const helpers = useApi<Game[]>("helpers/3");
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <Link href={`/randomgames/${helpers}`}>
        <button style={{ margin: "10px auto" }}>랜덤~~~~게임</button>
      </Link>
      <style jsx>{`
        @import url(https://cdn.jsdelivr.net/gh/moonspam/NanumSquare@1.0/nanumsquare.css);
        button {
          width: 180px;
          height: 50px;
          background: #333d79;
          border-radius: 20px;
          border: 0;
          color: #ffffff;
          font-family: "NanumSquare", sans-serif;
          font-size: 22px;
          font-weight: 500;
        }
      `}</style>
    </div>
  );
}
export default RandomButton;
