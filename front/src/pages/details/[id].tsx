import type { NextPage } from "next";
import PageHead from "components/PageHead";
import useApi from "hooks/useApi";
import { useRouter } from "next/router";
import { User } from "types/api";
import ExampleButton from "components/ExampleButton";
import CatListButton from "components/CatListbutton";

const Detail: NextPage = () => {
  const router = useRouter();
  const { id } = router.query;
  const game = useApi<User>(`users/${id}`);
  //console.log(game)
  return (
    <div>
      <PageHead title={game?.first_name} />
      <h1
        style={{
          textAlign: "center",
          width: "304px",
          justifyContent: "center",
          margin: "10px auto",
        }}
      >
        {game?.last_name}
      </h1>
      <div>
        <div
          style={{
            width: "1181px",
            justifyContent: "center",
            margin: "0 auto",
          }}
        >
          <h2>인트로</h2>
          <hr />
          <p>{game?.email}</p>
        </div>
        <ExampleButton id={game?.id} />
        <div
          style={{
            width: "1181px",
            justifyContent: "center",
            margin: "0 auto",
          }}
        >
          <h2>규칙</h2>
          <hr />
          <p>{game?.avatar}</p>
        </div>
      </div>
      <CatListButton id={game?.id} />
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

export default Detail;
