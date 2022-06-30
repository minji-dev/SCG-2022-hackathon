import Link from "next/link";
import useApi from "hooks/useApi";
import { Game } from "types/api";
import { Props } from "types/types";
function RandomButton() {

  return (
    <div className="flex justify-center">
      <Link href={`/randomgames`}>
<<<<<<< HEAD
        <span className="cursor-pointer hover:bg-slate-500 hover:ring-4 ring-offset-4 ring-slate-500 transition m-auto p-2 w-[200px] h-12 bg-[#333d79] rounded-2xl text-white text-2xl font-medium text-center">랜덤~~~~게임</span>
=======
        <span className="cursor-pointer hover:bg-slate-500 hover:ring-4 ring-offset-4 ring-slate-500 transition m-auto p-2 w-44 h-12 bg-[#333d79] rounded-2xl text-white text-2xl font-medium text-center">랜덤~~게임</span>
>>>>>>> 2e89ff6d64483b84d6e1ad51759a8b30c73d52d4
      </Link>
    </div>
  );
}
export default RandomButton;
