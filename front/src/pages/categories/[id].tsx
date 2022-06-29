import type { NextPage } from "next";
import PageHead from "components/PageHead";
import useApi from "hooks/useApi";
import { useRouter } from "next/router";
import { Game } from "types/api";
import GameButton from "components/GameButton";

const Category: NextPage = () => {
  const router = useRouter();
  const { id } = router.query;
  const games = useApi<Game[]>(`games?field=${id}`);

  return (
    <div>
      <PageHead title={games?.at(0)?.field.name} />
      <h1>{games?.at(0)?.field.name}</h1>
      <div style={{ display: "grid"}}>
        <div>
          {games?.map((game) => (
              <GameButton
                key={game.id}
                id={game.id}
                width={200}
                height={300}
              />
          ))} 
        </div>
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
          // font-family: 'NanumSquare', sans-serif;
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

export default Category;
