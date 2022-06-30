import type { NextPage } from "next";
import PageHead from "components/PageHead";
import useApi from "hooks/useApi";
import { useRouter } from "next/router";
import { Game } from "types/api";
import ExampleButton from "components/ExampleButton";
import Link from "next/link";
import BackToCatButton from "components/BackToCatbutton";

const Detail: NextPage = () => {
  const router = useRouter();
  const { id } = router.query;
  const games = useApi<Game[]>(`games/${id}`);
  console.log(games);

  return (
    <div className="text-[#333d79] block">
      <PageHead title={games?.at(0)?.name} />
      <h1 className="justify-center w-auto m-2 text-5xl font-bold text-center">
        {games?.at(0)?.name}
      </h1>
      <div>
        <div className="justify-center w-3/4 m-auto">
          <p className="text-left border-b-[3px] p-2 border-[#333d79] font-bold text-3xl">
            인트로
          </p>
          <p className="text-xl font-[550] p-2 text-left">
            {games?.at(0)?.intro}
          </p>
        </div>
        <ExampleButton id={Number(id)} text={'인트로 듣기'}/>
        <div className="justify-center w-3/4 m-auto mt-10">
          <p className="text-left border-b-[3px] p-2 border-[#333d79] font-bold text-3xl">
            규칙
          </p>
          <p className="text-xl font-[550] p-2 text-left">{games?.at(0)?.context}</p>
          <ExampleButton id={Number(id)} text={'설명 듣기'}  />
          <Link href={`/details/edit/${id}`}>
            <div className="block float-right">
              <span className="cursor-pointer hover:bg-slate-500 hover:ring-4 ring-offset-4 ring-slate-500 transition h-12 w-auto border-2 bg-[#333d79] rounded-3xl px-6 py-2 text-white text-xl inline-block float-right font-medium">
                수정
              </span>
            </div>
          </Link>
        </div>
      </div>
      <BackToCatButton id={games?.at(0)?.field.id}/>
    </div>
  );
};

export default Detail;
