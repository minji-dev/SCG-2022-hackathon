import Head from "next/head";
import { Props } from "types/types";

function PageHead({ title }: Props) {
  return (
    <Head>
      <title>{title} | 음주의 민족</title>
    </Head>
  );
}
export default PageHead;
