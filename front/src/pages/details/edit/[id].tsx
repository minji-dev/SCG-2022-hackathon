import type { NextPage } from "next";
import PageHead from "components/PageHead";
import useApi from "hooks/useApi";
import { useRouter } from "next/router";
import { Game } from "types/api";
import ExampleButton from "components/ExampleButton";
import Link from "next/link";
import React, { useState } from 'react';
import { Props } from "types/types";
import BackToCatButton from "components/BackToCatbutton";

const Detail: NextPage = () => {
  const router = useRouter();
  const { id } = router.query;
  const games = useApi<Game[]>(`games/${id}`);
  let [descriptionEdit, setDescriptionEdit] = useState(0);
  let [introEdit, setIntroEdit] = useState(0);
  const description = descriptionEdit ? undefined : games?.at(0)?.context;
  const intro = introEdit ? undefined : games?.at(0)?.intro;

  const autoResizeTextarea = () => {
    let textarea = document.querySelectorAll('textarea');

    for (let i = 0; i < textarea.length; i++) {
      textarea[i].style.height = 'auto';
      let height = textarea[i].scrollHeight;
      textarea[i].style.height = `${height}px`;
    }
  }

  return (
    <div className="text-[#333d79]">
      <PageHead title={games?.at(0)?.name + " (수정)"}/>
      <h1 className="justify-center w-auto m-2 text-5xl font-bold text-center">
        {games?.at(0)?.name + " (수정)"}
      </h1>
      <div>
        <div
          style={{
            width: "1181px",
            justifyContent: "center",
            margin: "0 auto",
          }}
        >
          <p className="text-left border-b-[3px] p-2 border-[#333d79] font-bold text-3xl">인트로</p>
          <textarea value = { intro } 
          style={{ width: "100%", resize: "none", border: "1px solid", outline: "none", overflow: "hidden" }}
          onClick={() => {setIntroEdit(1)}} 
          className="text-xl font-[550] p-2 text-left"
          onKeyDown={autoResizeTextarea}
          onKeyUp={autoResizeTextarea}/>
        </div>

        <div
          style={{
            width: "1181px",
            justifyContent: "center",
            margin: "0 auto",
          }}
        >
          <p className="text-left border-b-[3px] p-2 border-[#333d79] font-bold text-3xl">규칙</p>
          <textarea value = { description } 
          style={{ width: "100%", resize: "none", border: "1px solid", outline: "none", overflow: "hidden" }}
          onClick={() => {setDescriptionEdit(1)}} 
          className="text-xl font-[550] p-2 text-left"
          onKeyDown={autoResizeTextarea}
          onKeyUp={autoResizeTextarea}/>
          <Link href={`/details/${id}`}>
            <span className="cursor-pointer hover:bg-slate-500 hover:ring-4 ring-offset-4 ring-slate-500 transition h-12 w-auto border-2 bg-[#333d79] justify- m-auto rounded-3xl px-6 py-2 text-white text-xl inline-block float-right font-medium">
              저장
            </span>
          </Link>
          <Link href={`/details/${id}`}>
            <span className="cursor-pointer hover:bg-slate-500 hover:ring-4 ring-offset-4 ring-slate-500 transition h-12 w-auto border-2 bg-[#333d79] justify- m-auto rounded-3xl px-6 py-2 text-white text-xl inline-block float-left font-medium">
              취소
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Detail;
