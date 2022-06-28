import type { NextPage } from "next";
import PageHead from "components/PageHead";
import CatContentButton from "components/CatContentButton";
import RandomButton from "components/RandomButton";

const Helper: NextPage = () => {
  return (
    <div>
      <PageHead title="메인 화면" />
      <h1> 술 게임 가이드북 </h1>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <CatContentButton height={250} width={350} id={1} />
        <CatContentButton height={250} width={350} id={2} />
      </div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <CatContentButton height={250} width={725} id={3} />
      </div>
      <div>
        <RandomButton />
      </div>

      <style jsx>{`
        @import url(https://cdn.jsdelivr.net/gh/moonspam/NanumSquare@1.0/nanumsquare.css);
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