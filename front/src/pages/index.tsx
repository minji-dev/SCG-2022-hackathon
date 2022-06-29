import type { NextPage } from "next";
import PageHead from "components/PageHead";
import CatContentButton from "components/CatContentButton";
import HelpersPageButton from "components/HelpersPageButton";

const Home: NextPage = () => {
  return (
    <div>
      <PageHead title="메인 화면"/>
        <div className="grid min-h-screen grid-cols-4 gap-10 px-20 py-50">
            <CatContentButton className="col-span-1 col-start-2 border-4 rounded-2xl w-80" id={1} />
            <CatContentButton className="col-span-1 col-start-3 border-4 rounded-2xl w-80" id={2} />
            <CatContentButton className="col-span-1 col-start-2 border-4 rounded-2xl w-80" id={3} />
            <CatContentButton className="col-span-1 col-start-3 border-4 rounded-2xl w-80" id={4} />
            <CatContentButton className="col-span-2 col-start-2 border-4 w-12/12 rounded-2xl" id={5} />
        </div>
      <HelpersPageButton/>
    </div>
  );
};

export default Home;
