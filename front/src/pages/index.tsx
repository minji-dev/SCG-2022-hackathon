import type { NextPage } from "next";
import PageHead from "components/PageHead";
import CatContentButton from "components/CatContentButton";
import { useRouter } from "next/router";
import useApi from "hooks/useApi";
import { User } from "types/api";
import RandomButton from "components/RandomButton";
import Link from "next/link";

const Home: NextPage = () => {
  const fields = useApi<User[]>(`users?per_page=12`);
  console.log(fields?.at(0)?.last_name);
  return (
    <div>
      <PageHead title="메인 화면" />
      <h1> 술 게임 가이드북 </h1>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <CatContentButton height={250} width={350} id={1} />
        <CatContentButton height={250} width={350} id={2} />
      </div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <CatContentButton height={250} width={350} id={3} />
        <CatContentButton height={250} width={350} id={4} />
      </div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <CatContentButton height={250} width={725} id={5} />
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

export default Home;
