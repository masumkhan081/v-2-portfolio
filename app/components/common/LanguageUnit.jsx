import Github from "@/public/icons/Github";
import React from "react";

export default function LanguageUnit({  langName, githubLink, level }) {




  const style_level_wise = {
    expert: "bg-opacity-70",
    intermediate: "bg-opacity-50",
    begineer: "bg-opacity-30"
  }
  const style_common = "px-1 rounded bg-dark-brown text-slate-300"

  return (
    <li className=" w-full flex justify-between items-center shadow-b shadow-inner gap-1 rounded-md">
      <span className={style_common + " " + style_level_wise[level]}>{langName}</span>
      <a
        target="_blank"
        href={githubLink}
        className="text-blue-400 font-mono  rounded-lg  py-0"
      >
        <Github clsnames="me-1 w-5 h-5 inline" />code-notes
      </a>
    </li>
  );
}
