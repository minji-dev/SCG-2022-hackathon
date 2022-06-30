import type { NextPage } from "next";
import Link from "next/link";
import PageHead from "components/PageHead";
import useApi from "hooks/useApi";

const Helper1: NextPage = () => {
  const helper = useApi<string[]>(`helpers/0`);
  return (
    <div>
      <PageHead title="훈민정음 도우미" />
      <h1 className="text-[#333d79] text-center w-auto justify-center m-auto my-10 mb-5 font-normal text-5xl">
        훈민정음~ 무슨 초성?!
      </h1>
      <h1 className="justify-center text-[#333d79] m-auto text-7xl font-extrabold text-center border-t border-b-2 p-5 m-10">{helper?.at(0)}{helper?.at(1)}</h1>
      <Link href={`/helpers`}>
        <div className="flex justify-center">
          <span className="cursor-pointer hover:bg-slate-500 hover:ring-4 ring-offset-4 ring-slate-500 transition m-3 text-center bg-[#333d79] justify-center text-white text-xl rounded-2xl py-2 px-10">
            이전으로
          </span>
        </div>
      </Link>
    </div>
  );
};

export default Helper1;
