import React from "react";
import DownloaIcon from "./icons/DownloaIcon";
import CodingIcon from "./icons/CodingIcon";
import LinkIcon from "./icons/LinkIcon";
import DevelopmentIcon from "./icons/DevelopmentIcon";
export default function Head_nav() {
  return (
    <div className="w-screen flex border flex-wrap justify-center px-3 h-23 bg-gradient-to-b from-orange-300">
      <ul className="flex border  md:justify-center sm:flex-row flex-col w-full sm:gap-4 gap-2 items-center font-mono py-2">
        <li className=" rounded-lg">
          <a
            href="#algorithms"
            className="hover:shadow-sm link-info rounded-md sm:p-1 px-1 shadow-sm bg-teal-800 text-orange-200"
          >
            <DownloaIcon />
            Resume
          </a>
        </li>
        <li className="">
          <a
            href="/programming"
            className="link-info rounded-md  sm:p-1 px-1 bg-teal-800 text-orange-200"
          >
            <CodingIcon />
            Programming
          </a>
        </li>
        <li className="">
          <a
            href="/projects"
            className="link-info rounded-md shadow-sm sm:p-1 px-1 bg-teal-800 text-orange-200"
          >
            <LinkIcon />
            Live Projects
          </a>
        </li>
        <li className="">
          <a
            href="/skills"
            className="link-info rounded-md sm:p-1 px-1 shadow-sm bg-teal-800 text-orange-200"
          >
            <DevelopmentIcon />
            Skills
          </a>
        </li>
      </ul>
    </div>
  );
}
