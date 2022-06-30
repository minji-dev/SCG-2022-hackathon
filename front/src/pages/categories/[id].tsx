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
    <div className="text-[#333d79]">
      <PageHead title={games?.at(0)?.field.name} />
      <h1 className="justify-center w-[350px] py-3 mx-auto mb-4 text-5xl text-center font-bold border-t-4 border-b-4 border-[#333d79]">
        {games?.at(0)?.field.name}
      </h1>
      <div className="grid justify-center w-[750px] grid-cols-3 gap-6 px-20 mx-auto justify-items-center py-50">
        {games?.map((game) => (
          <GameButton
            key={game.id}
            id={game.id}
            className={""}
            width={200}
            height={200}
          />
        ))}
      </div>
    </div>
  );
};

export default Category;
