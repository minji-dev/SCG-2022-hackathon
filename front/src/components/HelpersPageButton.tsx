import Link from "next/link";
function HelpersPageButton() {
  return (
    <div className="flex justify-center">
      <Link href="/helpers">
        <span className="h-12 w-auto border-2 bg-[#333d79] justify-center m-auto rounded-3xl px-10 py-2 text-white text-2xl font-medium">
          게임 도우미
        </span>
      </Link>
    </div>
  );
}
export default HelpersPageButton;
