import type { NextPage } from "next";
import PageHead from "components/PageHead";
import useApi from "hooks/useApi";
import { useRouter } from "next/router";
import { User } from "types/api";
import GameSymbol from "components/GameSymbol";
import RandomButton from "components/RandomButton";

const RandomGame: NextPage = () => {
  const router = useRouter();
  const { id } = router.query;
  const game = useApi<User>(`users/${id}`);
  return (
    <div>
      <PageHead title="RandomGame" />
      <h2
        style={{
          textAlign: "center",
          justifyContent: "center",
          margin: "20px auto",
        }}
      >
        잼민이가 좋아하는 랜덤~게임! 아 무슨~게임! 게임 스타트!
      </h2>
      <div
        style={{
          height: "265px",
          width: "911px",
          textAlign: "center",
          justifyContent: "center",
          margin: "30px auto",
        }}
      >
        <GameSymbol height={265} width={200} id={game?.id} />
        <h3>{game?.first_name}</h3>
      </div>
      <div
        style={{ width: "1181px", justifyContent: "center", margin: "0 auto" }}
      >
        <h2>규칙</h2>
        <hr />
        <p>{game?.avatar}</p>
      </div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <RandomButton />
      </div>
      <style jsx>{`
        @import url(https://cdn.jsdelivr.net/gh/moonspam/NanumSquare@1.0/nanumsquare.css);
        h1 {
          color: #333d79;
          text-align: center;
          font-family: "NanumSquare", sans-serif;
          font-weight: 700;
          font-size: 40px;
        }
        h2 {
          color: #333d79;
          font-family: "NanumSquare", sans-serif;
          font-weight: 550;
        }
        h3 {
          color: #333d79;
          font-family: "NanumSquare", sans-serif;
          font-weight: 550;
        }
        p {
          color: #333d79;
          font-family: "NanumSquare", sans-serif;
        }
        hr {
          background-color: #333d79;
          height: 3px;
          border: 0px;
        }
      `}</style>
    </div>
  );
};

export default RandomGame;
