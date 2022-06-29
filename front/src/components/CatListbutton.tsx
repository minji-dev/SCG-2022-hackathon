import { Props } from "types/types";
import Link from "next/link";
import { useRouter } from "next/router";
import useApi from "hooks/useApi";
import { Game } from "types/api";
import { text } from "stream/consumers";
function CatListButton({ id }: Props) {
  const router = useRouter();
  const games = useApi<Game[]>(`games/${id}`);
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <Link href={`/categories/${games?.at(0)?.field.id}`}>
        <button
          style={{
            margin: "10px auto",
            textAlign: "center",
            padding: "0px"
          }}
        >
          이전으로
        </button>
      </Link>
      {/* <style jsx>{`
        button {
          height: 50px;
          width: 180px;
          background: #333d79;
          border-radius: 20px;
          border: 0;
          padding-left: 20px;
          padding-rignt: 20px;
          color: #ffffff;
          font-family: "NanumSquare", sans-serif;
          font-size: 22px;
          font-weight: 500;
        }
      `}</style> */}
    </div>
  );
}
export default CatListButton;
