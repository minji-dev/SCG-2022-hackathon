import type { NextPage } from "next";
import PageHead from "components/PageHead";
import CatContentButton from "components/CatContentButton";
import RandomButton from "components/RandomButton";
import HelperButton from "components/HelperButton";

const HelperMain: NextPage = () => {
  return (
    <div>
      <PageHead title="도우미" />
      <div className="grid justify-center w-1/2 h-12 min-h-screen grid-cols-2 gap-3 px-20 m-auto">
        <HelperButton
          width={350}
          height={200}
          id={1}
          key={1}
        />
        <HelperButton
          width={350}
          height={200}
          id={2}
          key={2}
        />
        <HelperButton
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
