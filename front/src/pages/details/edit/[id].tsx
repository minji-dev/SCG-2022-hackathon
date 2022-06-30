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
      <h1 className="justify-center w-auto m-2 text-5xl font-bold text-center">
        {games?.at(0)?.name}
      </h1>
      <div>
        <div className="justify-center w-[1181px] m-auto">
          <p style={{ fontSize: "32px", fontWeight: "700" }}>인트로</p>
          <hr style={{ marginTop: "5px", marginBottom: "5px", height: "2px" }}/>
          <p style={{ fontSize: "20px", fontWeight: "550" }}>{games?.at(0)?.intro}</p>
        </div>
        <ExampleButton id={Number(id)}/>
        <div className="justify-center w-[1181px] m-auto">
          <p className="text-left border-b-[3px] p-2 border-[#333d79] text-[#333d79] font-bold text-3xl">규칙</p>
          <textarea className="w-full">{str}</textarea>
          <BackButton />
          <Link href={`/details/${id}`}>
            <span className="h-12 w-auto border-2 bg-[#333d79] justify- m-auto rounded-3xl px-6 py-2 text-white text-xl inline-block float-right font-medium">
              저장
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Detail;
