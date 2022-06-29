import type { NextPage } from "next";
import PageHead from "components/PageHead";
import useApi from "hooks/useApi";
import { useRouter } from "next/router";
import { Game } from "types/api";
import GameSymbol from "components/GameSymbol";
import RandomButton from "components/RandomButton";

const RandomGame: NextPage = () => {
  const router = useRouter();
  const { id } = router.query;
  const games = useApi<Game[]>(`games/${id}`);
  return (
    <div>
      <PageHead title="RandomGame" />
      <h2
        style={{
          textAlign: "center",
          justifyContent: "center",
          margin: "20px auto",
          fontSize: "34px"
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
        <GameSymbol height={265} width={200} id={games?.at(0)?.id} />
        <div>
          <h3 style={{fontSize: "40px", marginBottom: "-20px"}}>❝</h3>
          <h3 style={{ fontSize: "25px" }}>{games?.at(0)?.intro}</h3>
          <h3 style={{fontSize: "40px"}}>❞</h3>
        </div>
      </div>
      <div
        style={{ width: "1181px", justifyContent: "center", margin: "0 auto" }}
      >
        <h2 style={{ fontSize: "32px", fontWeight: "700" }}>규칙</h2>
        <hr style={{ marginTop: "5px", marginBottom: "5px", height: "2px" }}/>
        <p style={{ fontSize: "20px", fontWeight: "550" }}>{games?.at(0)?.context}</p>
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
