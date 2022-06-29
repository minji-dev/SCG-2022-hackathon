import type { NextPage } from "next";
import PageHead from "components/PageHead";
import CatContentButton from "components/CatContentButton";
import RandomButton from "components/RandomButton";
import HelperButton from "components/HelperButton";

const HelperMain: NextPage = () => {
  return (
    <div>
      <PageHead title="도우미" />
      <div className="grid h-12 min-h-screen grid-cols-4 gap-3 px-20">
        <HelperButton
          className="col-span-1 col-start-2 border-[3px] border-[#333d79] rounded-2xl m-2 p-0 text-[#333d79] font-semibold text-center text-2xl h-56"
          width={350}
          height={200}
          id={1}
          key={1}
        />
        <HelperButton
          className="col-span-1 col-start-3 border-[3px] border-[#333d79] rounded-2xl m-2 p-0 text-[#333d79] font-semibold text-center text-2xl h-56"
          width={350}
          height={200}
          id={2}
          key={2}
        />
        <HelperButton
          className="col-span-1 col-start-2 border-[3px] border-[#333d79] rounded-2xl m-2 p-0 text-[#333d79] font-semibold text-center text-2xl h-56"
          width={350}
          height={200}
          id={3}
          key={3}
        />
      </div>
      <RandomButton/>
    </div>
  );
};

export default HelperMain;
