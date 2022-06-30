import Link from "next/link";
function HelpersPageButton() {
  return (
    <div className="flex justify-center my-3">
      <Link href="/helpers">
        <span className="cursor-pointer hover:bg-slate-500 hover:ring-4 ring-offset-4 ring-slate-500 text-center ransition w-[200px] border-2 bg-[#333d79] justify-center m-auto rounded-3xl px-10 py-2 text-white text-2xl font-medium">
          게임 도우미
        </span>
      </Link>
    </div>
  );
}
export default HelpersPageButton;
