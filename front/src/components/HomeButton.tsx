import Link from "next/link";
import { useRouter } from "next/router";
function HomeButton() {
  const router = useRouter();
  console.log(router.pathname);
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <Link href="/">
        <img src="/Logo.png" style={{ margin: "10px auto" }}/>
      </Link>
      <style jsx>{`
        @import url(https://cdn.jsdelivr.net/gh/moonspam/NanumSquare@1.0/nanumsquare.css);
        button {
          width: 180px;
          height: 50px;
          background: #333d79;
          border-radius: 20px;
          border: 0;
          color: #ffffff;
          font-family: "NanumSquare", sans-serif;
          font-size: 22px;
          font-weight: 500;
        }
      `}</style>
    </div>
  );
}
export default HomeButton;
