import type { NextPage } from "next";
import PageHead from "components/PageHead";
import CatContentButton from "components/CatContentButton";
import HelpersPageButton from "components/HelpersPageButton";

const Home: NextPage = () => {
  return (
    <div>
      <PageHead title="메인 화면" />
      <div className="flex justify-center">
        <CatContentButton
          className="hover:shadow-2xl col-span-1 border-[3px] border-[#333d79] rounded-2xl m-2 p-0 text-[#333d79] font-semibold text-center text-2xl= overflow-hidden w-[360px] h-[240px]"
          width={360}
          height={205}
          id={1}
          key={1}
        />
        <CatContentButton
          className="hover:shadow-2xl col-span-1 border-[3px] border-[#333d79] rounded-2xl m-2 p-0 text-[#333d79] font-semibold text-center text-2xl= overflow-hidden w-[360px] h-[240px]"
          width={360}
          height={205}
          id={2}
          key={2}
        />
      </div>
      <div className="flex justify-center">
        <CatContentButton
          className="hover:shadow-2xl col-span-1 border-[3px] border-[#333d79] rounded-2xl m-2 p-0 text-[#333d79] font-semibold text-center text-2xl= overflow-hidden w-[360px] h-[240px]"
          width={360}
          height={205}
          id={3}
          key={3}
        />
        <CatContentButton
          className="hover:shadow-2xl col-span-1 border-[3px] border-[#333d79] rounded-2xl m-2 p-0 text-[#333d79] font-semibold text-center text-2xl= overflow-hidden w-[360px] h-[240px]"
          width={360}
          height={205}
          id={4}
          key={4}
        />
      </div>
      <div className="flex justify-center">
        <CatContentButton
          className="hover:shadow-2xl col-span-2 border-[3px] border-[#333d79] rounded-2xl m-2 p-0 text-[#333d79] font-semibold text-center text-2xl overflow-hidden w-[736px] h-[240px]"
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
