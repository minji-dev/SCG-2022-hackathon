import type { NextPage } from "next";
import PageHead from "components/PageHead";
import useApi from "hooks/useApi";
import { useRouter } from "next/router";
import { Game } from "types/api";
import ExampleButton from "components/ExampleButton";
import Link from "next/link";
import BackButton from "components/Backbutton";

const Detail: NextPage = () => {
  const router = useRouter();
  const { id } = router.query;
  const games = useApi<Game[]>(`games/${id}`);
  console.log(games)
  const str = games?.at(0)?.context;
  return (
    <div>
      <PageHead title={games?.at(0)?.name}/>
      <h1
        style={{
          textAlign: "center",
          width: "auto",
          justifyContent: "center",
          margin: "10px auto",
          fontWeight: "800",
          fontSize: "50px"
        }}
      >
        {games?.at(0)?.name}
      </h1>
      <div>
        <div
          style={{
            width: "1181px",
            justifyContent: "center",
            margin: "0 auto",
          }}
        >
          <p style={{ fontSize: "32px", fontWeight: "700" }}>인트로</p>
          <hr style={{ marginTop: "5px", marginBottom: "5px", height: "2px" }}/>
          <p style={{ fontSize: "20px", fontWeight: "550" }}>{games?.at(0)?.intro}</p>
        </div>
        <ExampleButton id={Number(id)}/>
        <div
          style={{
            width: "1181px",
            justifyContent: "center",
            margin: "0 auto",
          }}
        >
          <p style={{ fontSize: "32px", fontWeight: "700" }}>규칙</p>
          <hr style={{ marginTop: "5px", marginBottom: "5px", height: "2px" }}/>
          <textarea>{str}</textarea>
          <BackButton />
          <Link href={`/details/${id}`}>
          <button className="EditButton">저장</button>
          </Link>
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
        .EditButton {
          float: right;
          fontSize: 120px;
          background-color: #333d79;
          color: #ffffff;
          width: 80px;
          height: 40px;
          font-family: "NanumSquare", sans-serif;
          text-align: center;
          border-radius: 20px;
          font-size: 18px;
        }
        textarea {
          font-size: 20px;
          font-weight: 550;
          width: 100%;
          color: #333d79;
          font-family: "NanumSquare", sans-serif;
        }
      `}</style>
    </div>
  );
};

export default Detail;
