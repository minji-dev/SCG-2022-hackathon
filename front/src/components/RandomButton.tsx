import Link from "next/link";
import useApi from "hooks/useApi";
import { Game } from "types/api";
function RandomButton() {
  const helpers = useApi<Game[]>("helpers/3");
  return (
    <div className="flex justify-center">
      <Link href={`/randomgames/${helpers}`}>
        <span className="cursor-pointer hover:bg-slate-500 hover:ring-4 ring-offset-4 ring-slate-500 transition m-auto p-2 w-44 h-12 bg-[#333d79] rounded-2xl text-white text-2xl font-medium text-center">랜덤~~~~게임</span>
      </Link>
    </div>
  );
}
export default RandomButton;
