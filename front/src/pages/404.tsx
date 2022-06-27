import type { NextPage } from "next";
import PageHead from "components/PageHead";

const Custom404Page: NextPage = () => {
  return (
    <div>
      <PageHead title="요청한 페이지가 존재하지 않음" />
      없는딩
    </div>
  );
};

export default Custom404Page;
