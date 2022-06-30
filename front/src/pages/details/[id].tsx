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
        <div className="justify-center w-[1181px] m-auto">
          <p className="text-left border-b-[3px] p-2 border-[#333d79] text-[#333d79] font-bold text-3xl">
            인트로
          </p>
          <p className="text-xl font-[550] p-2 text-left">
            {games?.at(0)?.intro}
          </p>
        </div>
        <ExampleButton id={Number(id)} />
        <div className="justify-center w-[1181px] m-auto">
          <p className="text-left border-b-[3px] p-2 border-[#333d79] text-[#333d79] font-bold text-3xl">
            규칙
          </p>
          <p className="text-xl font-[550] p-2 text-left">{games?.at(0)?.context}</p>
          <BackButton/>
          <Link href={`/details/edit/${id}`}>
            <span className="h-12 w-auto border-2 bg-[#333d79] justify- m-auto rounded-3xl px-6 py-2 text-white text-xl inline-block float-right font-medium">
              수정
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Detail;
