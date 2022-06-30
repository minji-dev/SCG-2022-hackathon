import { Props } from "types/types";
import Link from "next/link";
import useApi from "hooks/useApi";
import { FieldAndFile, Game } from "types/api";
import Image from "next/image";

function GameButton({ id,}: Props) {
  const games = useApi<Game[]>(`games/${id}`);
  console.log(games?.at(0)?.game_file?.at(2)?.file_id.location)
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
    <div className="hover:shadow-2xl hover:cursor-pointer w-[170px] border-[#333d79] border-2 rounded-2xl p-0 h-[230px]">
      <Link href={`/details/${id}`}>
        <div>
          <h1 className="m-auto border-b-[3px] border-[#333d79] text-center text-2xl font-bold">
            {games?.at(0)?.name}
          </h1>
          <Image
            src={
              games?.at(0)?.game_file?.at(2)?.file_id.location
                ? `${games?.at(0)?.game_file?.at(2)?.file_id.location}`
                : "/loading.png"
            }
            alt={`${games?.at(0)?.game_file?.at(2)?.file_id.name}`}
            height={200}
            width={200}
            className="border-b-[3] mb-0 border-[#333d79] text-center text-2xl font-bold"
          />
          <hr className="h-[3px] bg-[#333d79] border-spacing-0 relative -top-2"/>
          <div>
            <div className="flex flex-row h-auto border-t-[3] border-[#333d79] text-center text-lg font-bolder relative -top-[5px] my-0">
              <span className="justify-start p-0 m-1 text-left">난이도:</span>
              {arr}
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}
export default GameButton;
