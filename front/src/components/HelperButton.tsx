import { Props } from "types/types";
import useApi from "hooks/useApi";
import { Game } from "types/api";
import Link from "next/link";
import Image from "next/image";


function HelperButton({ className, id, width, height }: Props) {
  const helpers = useApi<Game[][]>(`/helpers`);
  return (
  <div className={className}>
    <Link href={`/categories/${id}`}>
      <div>
        <h1 className="border-b-[3px] border-[#333d79] h-8">
          {helpers?.at(Number(id)-1)?.at(0)?.name} 도우미!
        </h1>
        <Image
          src={
            helpers?.at(Number(id)-1)?.at(0)?.game_file?.at(2)?.file_id.location
              ? `${helpers?.at(Number(id)-1)?.at(0)?.game_file?.at(2)?.file_id.location}`
              : "/img/소주병.png"
          }
          alt={`${helpers?.at(Number(id)-1)?.at(0)?.game_file?.at(2)?.file_id.name}`}
          width={width}
          height={height}
        />
      </div>
    </Link>
  </div>
  );
}
export default HelperButton;
