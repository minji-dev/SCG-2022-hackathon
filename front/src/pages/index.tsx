import type { NextPage } from "next";
import PageHead from "components/PageHead";
import CatContentButton from "components/CatContentButton";
import HelpersPageButton from "components/HelpersPageButton";

const Home: NextPage = () => {
  return (
    <div>
      <PageHead title="메인 화면" />
      <div className="grid justify-center w-1/2 min-h-screen grid-cols-2 gap-3 px-20 m-auto py-50">
        <CatContentButton
          className="hover:shadow-2xl col-span-1 border-[3px] border-[#333d79] rounded-2xl m-2 p-0 text-[#333d79] font-semibold text-center text-2xl h-[195px] overflow-hidden"
          width={360}
          height={205}
          id={1}
          key={1}
        />
        <CatContentButton
          className="hover:shadow-2xl col-span-1 border-[3px] border-[#333d79] rounded-2xl m-2 p-0 text-[#333d79] font-semibold text-center text-2xl h-[195px] overflow-hidden"
          width={360}
          height={205}
          id={2}
          key={2}
        />
        <CatContentButton
          className="hover:shadow-2xl col-span-1 border-[3px] border-[#333d79] rounded-2xl m-2 p-0 text-[#333d79] font-semibold text-center text-2xl h-[195px] overflow-hidden"
          width={360}
          height={205}
          id={3}
          key={3}
        />
        <CatContentButton
          className="hover:shadow-2xl col-span-1 border-[3px] border-[#333d79] rounded-2xl m-2 p-0 text-[#333d79] font-semibold text-center text-2xl h-[195px] overflow-hidden"
          width={360}
          height={205}
          id={4}
          key={4}
        />
        <CatContentButton
          className="hover:shadow-2xl col-span-2 border-[3px] border-[#333d79] rounded-2xl m-2 p-0 text-[#333d79] font-semibold text-center text-2xl h-[195px] overflow-hidden"
          width={720}
          height={205}
          id={5}
          key={5}
        />
      </div>
      <HelpersPageButton />
    </div>
  );
};

export default Home;
