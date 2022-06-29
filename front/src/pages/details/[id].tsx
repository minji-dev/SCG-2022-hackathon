import type { NextPage } from "next";
import PageHead from "components/PageHead";
import useApi from "hooks/useApi";
import { useRouter } from "next/router";
import { Game } from "types/api";
import ExampleButton from "components/ExampleButton";
import CatListButton from "components/Backbutton";
import BackButton from "components/Backbutton";

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
          <p className="text-left border-b-[3px] p-2 border-[#333d79] text-[#333d79] font-bold text-3xl">
            규칙
          </p>
          <p className="text-xl font-[550] p-2 text-left">
            {games?.at(0)?.context}
          </p>
        </div>
      </div>
      <BackButton/>
    </div>
  );
};

export default Detail;
