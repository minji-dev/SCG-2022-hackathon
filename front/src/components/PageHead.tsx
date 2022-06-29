import Head from "next/head";
import { Props } from "types/types";

function PageHead({ title }: Props) {
  return (
    <Head>
      <title>
        <div>
          {title} | 술 게임 가이드북
        </div>
      </title>
    </Head>
  );
}
export default PageHead;
