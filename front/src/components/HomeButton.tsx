import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

function HomeButton() {
  const router = useRouter();
  console.log(router.pathname);
  return (
    <div className="flex justify-center">
      <Link href="/">
        <Image src='/Logo.png' height={137} width={481}/>
      </Link>
    </div>
  );
}
export default HomeButton;
