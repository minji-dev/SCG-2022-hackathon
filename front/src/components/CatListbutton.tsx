import { Props } from "types/types";
import Link from "next/link";
import { useRouter } from "next/router";
import useApi from "hooks/useApi";
import { User } from "types/api";
function CatListButton({ id }: Props) {
  const router = useRouter();
  const game = useApi<User>(`users/${id}`);
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <Link href={`/categories/${game?.id}`}>
        <button
          style={{
            margin: "10px auto",
            visibility:
              router.pathname !== "/" && router.pathname !== "/404"
                ? "visible"
                : "hidden",
          }}
        >
          {game?.first_name}
        </button>
      </Link>
      <style jsx>{`
        @import url(https://cdn.jsdelivr.net/gh/moonspam/NanumSquare@1.0/nanumsquare.css);
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
      `}</style>
    </div>
  );
}
export default CatListButton;
