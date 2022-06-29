import Link from "next/link";
function BackButton() {
  return (
    <div className="mx-auto my-4 w-fit">
      <Link href={`/..`}>
        <span className="h-12 w-auto border-2 bg-[#333d79] justify-center m-auto rounded-3xl px-10 py-2 text-white text-2xl font-medium">
          이전으로
        </span>
      </Link>
    </div>
  );
}
export default BackButton;
