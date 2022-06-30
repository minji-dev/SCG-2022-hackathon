import type { NextPage } from "next";
import PageHead from "components/PageHead";
import CatContentButton from "components/CatContentButton";
import HelpersPageButton from "components/HelpersPageButton";

const Home: NextPage = () => {
  return (
    <div>
      <PageHead title="메인 화면" />
      <div className="grid min-h-screen grid-cols-4 gap-3 px-20 py-50">
        <CatContentButton
          className="col-span-1 col-start-2"
          width={350}
          height={200}
          id={1}
          key={1}
        />
        <CatContentButton
          className="col-span-1 col-start-3"
          width={350}
          height={200}
          id={2}
          key={2}
        />
        <CatContentButton
          className="col-span-1 col-start-2"
          width={350}
          height={200}
          id={3}
          key={3}
        />
        <CatContentButton
          className="col-span-1 col-start-3"
          width={350}
          height={200}
          id={4}
          key={4}
        />
        <CatContentButton
          className="col-span-2 col-start-2 border-[3px] border-[#333d79] rounded-2xl m-2 p-0 text-[#333d79] font-semibold text-center text-2xl"
          width={700}
          height={200}
          id={5}
          key={5}
        />
      </div>
      <HelpersPageButton />
    </div>
  );
};

export default Home;
