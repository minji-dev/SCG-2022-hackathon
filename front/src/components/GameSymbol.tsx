import { Props } from "types/types";
import useApi from "hooks/useApi";
import { FieldAndFile, Game } from "types/api";
import Image from "next/image";

function GameSymbol({ id }: Props) {
  const games = useApi<Game[]>(`games/${id}`);
  const fieldsAndFiles = useApi<FieldAndFile[]>(`/`); 
  const arr: JSX.Element[] = [];
  const level = games?.at(0)?.level || 0;
  if (typeof level !== "undefined") {
    for (let i = 0; i < level; i++) {
      arr.push(
        <Image
          src={
            fieldsAndFiles?.at(Number(5))?.file_id.location
              ? `${fieldsAndFiles?.at(Number(5))?.file_id.location}`
              : "/img/소주병.png"
          }
          alt="a"
          width={40}
          height={35}
        />
      );
    }
  }
  return (
  <div className="w-48 h-72 border-[#333d79] border-2 rounded-2xl p-0 mr-36">
      <h1 className="text-2xl text-[#333d79] font-bold border-b-2 border-[#333d79]">{games?.at(0)?.name}</h1>
      <Image
          src={
            games?.at(0)?.game_file?.at(2)?.file_id.location
              ? `${games?.at(0)?.game_file?.at(2)?.file_id.location}`
              : "/loading.png"
          }
          alt={`${games?.at(0)?.game_file?.at(2)?.file_id.name}`}
          height={195}
          width={195}
          className="border-b-[3] border-[#333d79] text-center text-2xl font-bold"
        />
      <div>
      <hr className="h-1 bg-[#333d79] border-spacing-0 relative -top-2"/>
      <div className="flex flex-row h-auto border-t-[3] border-[#333d79] text-center text-lg font-bolder relative top-2">
        <span className="justify-start p-0 m-1 text-left">난이도:</span>
        {arr}
      </div>
    </div>
  </div>
  );
}
export default GameSymbol;
