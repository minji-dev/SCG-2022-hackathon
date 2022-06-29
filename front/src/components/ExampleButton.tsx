import Link from "next/link";
import { Props } from "types/types";
import useApi from "hooks/useApi"
import { Game } from "types/api";
function ExampleButton({ id }: Props) {
  const games = useApi<Game[]>(`games/${id}`);
  const audio = new Audio("/");
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <Link href="/">
        <button style={{ margin: "10px auto" }}>인트로 듣기</button>
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
export default ExampleButton;
