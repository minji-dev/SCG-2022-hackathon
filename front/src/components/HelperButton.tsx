import { Props } from "types/types";
import useApi from "hooks/useApi";
import { Game } from "types/api";
import Link from "next/link";
import Image from "next/image";


function HelperButton({id}: Props) {
  const helpers = useApi<Game[][]>(`/helpers`);
  return (
      <div className="hover:shadow-2xl hover:cursor-pointer border-[3px] border-[#333d79] rounded-2xl m-2 p-0 text-[#333d79] font-semibold text-center text-2xl h-48 overflow-hidden">
        <Link href={`/helpers/${id}`}>
          <div>
            <h1 className="border-b-[3px] border-[#333d79]">
              {helpers?.at(Number(id)-1)?.at(0)?.name} 도우미!
            </h1>
            <div className={`w-100% h-auto overflow-hidden m-auto border-0`}>
              <Image
                src={
                  helpers?.at(Number(id)-1)?.at(0)?.game_file?.at(2)?.file_id.location
                    ? `${helpers?.at(Number(id)-1)?.at(0)?.game_file?.at(2)?.file_id.location}`
                    : "/loading.png"
                }
                alt={`${helpers?.at(Number(id)-1)?.at(0)?.game_file?.at(2)?.file_id.name}`}
                width={350}
                height={200}
                className={`w-300 h-auto object-cover`}
              />
            </div>
          </div>
        </Link>
      </div>
  );
}
export default HelperButton;
