import type { NextPage } from "next";
import Link from "next/link";
import PageHead from "components/PageHead";
import CatContentButton from "components/CatContentButton";
import RandomButton from "components/RandomButton";
import { useRouter } from "next/router";

const Helper: NextPage = () => {
  const router = useRouter();
  const { id } = router.query;
  return (
    <div>
      <h1
        style={{
          textAlign: "center",
          width: "auto",
          justifyContent: "center",
          margin: "10px auto",
          fontWeight: "400",
          fontSize: "50px"
        }}
      >
        훈민정음~무슨초성?!
      </h1>
      <h1 className="border-t-2 border-b-2 ">ㄱㅇ</h1>
      <Link href={`/helpers`}>
        <div style={{ display: "flex", justifyContent: "center", margin: "10px"}}><button
          style={{
            margin: "10px auto",
            textAlign: "center",
            padding: "0px"
          }}
        >
          이전으로
        </button></div>
      </Link>

      <style jsx>{`
        @import url(https://cdn.jsdelivr.net/gh/moonspam/NanumSquare@1.0/nanumsquare.css);
        h1 {
          color: #333d79;
          text-align: center;
          font-family: "NanumSquare", sans-serif;
          font-weight: 1000;
          font-size: 80px;
        }
        hr {
          marginTop: "5px";
          marginBottom: "5px";
          height: "2px";
          backgroundColor: #333d79;
        }
        button {
          height: 50px;
          width: 180px;
          background: #333d79;
          border-radius: 20px;
          border: 0;
          padding-left: 20px;
          padding-rignt: 20px;
          color: #ffffff;
          font-family: "NanumSquare", sans-serif;
          font-size: 22px;
          font-weight: 500;
        }
      `}</style>
    </div>
  );
};

export default Helper;