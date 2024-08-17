"use client";

import React from "react";
import Image from "next/image";
import DownloaIcon from "../resources/icons/DownloaIcon";
import InfoIcon from "../resources/icons/InfoIcon";
import LinkIcon from "../resources/icons/LinkIcon";
import DevelopmentIcon from "../resources/icons/DevelopmentIcon";
import Home from "../resources/icons/Home";
import MasumK from "../resources/images/mk_avatar.png";
// import { animated, useSpring } from "@react-spring/web";

//
export default function Nav() {
  // const springs_left_right = useSpring({
  //   from: {
  //     x: -100,
  //   },
  //   to: { x: 0 },
  // });
  // const springs_right_left = useSpring({
  //   from: {
  //     x: 100,
  //   },
  //   to: { x: 0 },
  // });

  const [st, setSt] = React.useState("home");
  return (
    <div className="w-screen flex flex-wrap justify-center px-3 md:py-5 sm:py-2 bg-teal-800 rounded-md  ">
      <ul className="flex justify-center sm:flex-row flex-col w-full sm:gap-5 gap-2 items-center font-mono py-2">
        {/*  */}
        <li
          // style={{ ...springs_left_right, textShadow: "2px 2px 4px #000000" }}
          className="rounded-md italic border-l-2 border-amber-500  sm:text-base text-xs sm:shadow-lg shadow-sm shadow-teal-400 sm:w-fit w-full sm:ps-0 ps-5 text-orange-200 transition ease-in-out delay-100 hover:text-teal-200     hover:-translate-y-0.5 hover:scale-110 hover:rounded-xl hover:bg-teal-600 duration-200"
        >
          <a
            href="/"
            className="sm:p-1 p-0 px-1"
            onClick={() => {
              setSt("home");

              console.log("h hello fuck" + st);
              return false;
            }}
          >
            <Home clsnames=" w-6 h-5 inline mb-1" /> About Me
          </a>
        </li>

        <li
          // style={{ ...springs_left_right, textShadow: "2px 2px 4px #000000" }}
          className=" rounded-s-md italic border-l-2 border-amber-500 sm:text-base text-xs sm:shadow-lg shadow-sm shadow-teal-400  sm:w-fit w-full sm:ps-0 ps-5 text-orange-200 transition ease-in-out delay-100 hover:text-teal-200 hover:-translate-y-0.5 hover:scale-110 hover:rounded-xl hover:bg-teal-600 duration-200 "
        >
          <a
            href="/projects"
            className="sm:p-1 px-1"
            onClick={() => setSt("projects")}
          >
            <LinkIcon clsnames="me-1 w-6 h-5 inline" />
            Live Projects
          </a>
        </li>
        {/* <li>
          <Image
            style={{ borderRadius: "15px" }}
            className="w-8 h-8 rounded-lg block "
            src={MasumK}
            alt="Masum Khan"
          />
        </li> */}
        <li
          // style={{ ...springs_right_left, textShadow: "2px 2px 4px #000000" }}
          className=" nav_li "
        >
          <a
            href="/skills"
            className="sm:p-1 p-0 px-1 "
            onClick={() => setSt("skills")}
          >
            <DevelopmentIcon clsnames="me-1 w-6 h-5 inline" />
            Skills
          </a>
        </li>
        <li
          // style={{ ...springs_right_left, textShadow: "2px 2px 4px #000000" }}
          className="rounded-s-md italic border-l-2 border-amber-500 sm:text-base text-xs sm:shadow-md shadow-sm shadow-teal-400 sm:w-fit w-full sm:ps-0 ps-5 text-orange-200 delay-100 hover:text-teal-200 hover:-translate-y-0.5 hover:scale-110 hover:rounded-xl hover:bg-teal-600 duration-200"
        >
          <a
            href="./resources/Resume-mern-stack-masum-khan.pdf"
            download
            className="sm:p-1 px-1 p-0 "
          >
            <DownloaIcon clsnames="me-1 w-6 h-5 inline" />
            Resume
          </a>
        </li>
      </ul>
    </div>
  );
}
