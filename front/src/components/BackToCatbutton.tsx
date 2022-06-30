import Link from "next/link";
import { Props } from "types/types";
function BackToCatButton({id}:Props) {
  return (
    <div className="flex justify-center">
      <Link href={`/categories/${id}`}>
        <span className="transition hover: cursor-pointer hover:bg-slate-500 hover:ring-4 ring-offset-4 ring-slate-500 h-12 w-auto border-2 bg-[#333d79] justify-center m-auto rounded-2xl px-10 py-2 text-white text-2xl font-medium">
          이전으로
        </span>
      </Link>
    </div>
  );
}
export default BackToCatButton;
