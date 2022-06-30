import type { NextPage } from "next";
import PageHead from "components/PageHead";
import useApi from "hooks/useApi";
import { useRouter } from "next/router";
import { Game } from "types/api";
import ExampleButton from "components/ExampleButton";
import BackButton from "components/Backbutton";
import Link from "next/link";

const Detail: NextPage = () => {
  const router = useRouter();
  const { id } = router.query;
  const games = useApi<Game[]>(`games/${id}`);
  console.log(games);
  return (
    <div className="text-[#333d79]">
      <PageHead title={games?.at(0)?.name} />
      <h1 className="justify-center w-auto m-2 text-5xl font-bold text-center">
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
          <p className="text-left border-b-[3px] p-2 border-[#333d79] text-[#333d79] font-bold text-3xl">
            인트로
          </p>
          <p className="text-xl font-[550] p-2 text-left">
            {games?.at(0)?.intro}
          </p>
        </div>
        <ExampleButton id={Number(id)} />
        <div
          style={{
            width: "1181px",
            justifyContent: "center",
            margin: "0 auto",
          }}
        >
          <p style={{ fontSize: "32px", fontWeight: "700" }}>규칙</p>
          <hr style={{ marginTop: "5px", marginBottom: "5px", height: "2px" }}/>
          <p style={{ fontSize: "20px", fontWeight: "550" }}>{games?.at(0)?.context}</p>
          <BackButton/>
          <Link 
          href={{
            pathname: `/details/edit/${id}`, 
            query: { currentName: JSON.stringify({ description: "asd" }) }
            }}>
            <button className="EditButton">수정</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Detail;
