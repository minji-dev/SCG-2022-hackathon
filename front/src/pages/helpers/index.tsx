import type { NextPage } from "next";
import PageHead from "components/PageHead";
import CatContentButton from "components/CatContentButton";
import RandomButton from "components/RandomButton";
import HelperButton from "components/HelperButton";
import useApi from "hooks/useApi";

const HelperMain: NextPage = () => {
  let rannom = useApi<number>("helpers/3");
  return (
    <div className="mt-2">
      <PageHead title="도우미" />
      <RandomButton/>
      <div className="grid justify-center w-[690px] h-auto grid-cols-2 gap-2 px-20 m-auto mt-4">
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
      
    </div>
  );
};

export default HelperMain;
