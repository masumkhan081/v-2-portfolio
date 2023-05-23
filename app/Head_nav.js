import React from "react";
import DownloaIcon from "./icons/DownloaIcon";
import CodingIcon from "./icons/CodingIcon";
import LinkIcon from "./icons/LinkIcon";
import DevelopmentIcon from "./icons/DevelopmentIcon";
export default function Head_nav() {
  return (
    <div className="w-screen flex flex-wrap justify-center px-3 md:py-4 sm:py-2 ">
      <ul className="flex  first-line:  md:justify-center sm:flex-row flex-col w-full sm:gap-4 gap-2 items-center font-mono py-2">
        <li className="shadow-sm shadow-teal-400">
          <a
            href="#algorithms"
            className="hover:shadow-sm link-info sm:p-1 px-1 shadow-sm   text-orange-200"
          >
            <DownloaIcon />
            Resume
          </a>
        </li>
        <li className="shadow-sm shadow-teal-400   text-orange-200 ">
          <a href="/programming" className="link-info  sm:p-1 px-1  ">
            <CodingIcon />
            Programming
          </a>
        </li>
        <li className="shadow-sm shadow-teal-400    ">
          <a
            href="/projects"
            className="link-info   sm:p-1 px-1  text-orange-200"
          >
            <LinkIcon />
            Live Projects
          </a>
        </li>
        <li className="shadow-sm shadow-teal-400 text-orange-200  transition ease-in-out delay-100 hover:text-teal-200 hover:-translate-y-0.5 hover:scale-110 hover:rounded-lg hover:bg-teal-600 duration-200 ">
          <a href="/skills" className="sm:p-1 px-1 " >
            <DevelopmentIcon />
            Skills
          </a>
        </li>
      </ul>
    </div>
  );
}
