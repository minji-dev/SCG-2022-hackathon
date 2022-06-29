import type { NextPage } from "next";
import PageHead from "components/PageHead";
import CatContentButton from "components/CatContentButton";
import RandomButton from "components/RandomButton";

const Helper: NextPage = () => {
  return (
    <div>
      <style jsx>{`
        h1 {
          color: #333d79;
          text-align: center;
          font-family: "NanumSquare", sans-serif;
          font-weight: 700;
          font-size: 40px;
        }
      `}</style>
    </div>
  );
};

export default Helper;