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
  let rannom = useApi<number>("helpers/3");
  return (
    <div className="text-[#333d79]">
      <PageHead title="RandomGame" />
      <h2 className="justify-center m-auto text-3xl text-center">
        잼민이가 좋아하는 랜덤~게임! 아 무슨~게임! 게임 스타트!
      </h2>
      <div className="flex flex-row justify-center w-3/4 h-64 mx-auto my-6 text-center">
        <GameSymbol height={265} width={200} id={games?.at(0)?.id} />
        <div className="my-20">
          <h3 className="-mb-1 text-4xl">❝</h3>
          <span className="m-auto text-2xl text-center font-bold text-[#333d79] ">{games?.at(0)?.intro}</span>
          <h3 className="mt-3 text-4xl">❞</h3>
        </div>
      </div>
      <div className="justify-center w-10/12 mx-auto mt-16 mb-6">
        <h2 className="text-4xl font-bold border-b-[3px] border-[#333d79] pb-2">규칙</h2>
        <p className="pt-2 text-xl font-semibold">
          {games?.at(0)?.context}
        </p>
      </div>
      <div className="flex justify-center">
        <RandomButton id={rannom||1}/>
      </div>
    </div>
  );
};

export default RandomGame;
