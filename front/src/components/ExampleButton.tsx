import Link from "next/link";
import { Props } from "types/types";
import useApi from "hooks/useApi";
import { Game } from "types/api";
function ExampleButton({ id }: Props) {
  const games = useApi<Game[]>(`games/${id}`);
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <Link href="/">
        <span className="h-12 w-auto border-2 bg-[#333d79] justify-center m-auto rounded-3xl px-10 py-1 text-white text-2xl font-medium">
          인트로 듣기
        </span>
      </Link>
    </div>
  );
}
export default ExampleButton;
