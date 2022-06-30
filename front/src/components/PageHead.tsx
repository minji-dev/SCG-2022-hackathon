import Head from "next/head";
import { Props } from "types/types";

function PageHead({ title }: Props) {
  return (
    <Head>
      <title>{title} | 술 게임 가이드북</title>
    </Head>
  );
}
export default PageHead;
