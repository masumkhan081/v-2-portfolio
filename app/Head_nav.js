"use client";

import React from "react";
import DownloaIcon from "./resources/icons/DownloaIcon";
import InfoIcon from "./resources/icons/InfoIcon";
import LinkIcon from "./resources/icons/LinkIcon";
import DevelopmentIcon from "./resources/icons/DevelopmentIcon";
import Home from "./resources/icons/Home";
import { animated, useSpring } from "@react-spring/web";

//
export default function Head_nav() {
  const springs_left_right = useSpring({
    from: {
      x: 0,
    },
    to: { x: -100 },
  });
  const springs_right_left = useSpring({
    from: {
      x: 0,
    },
    to: { x: 100 },
  });
  return (
    <div className="w-screen flex flex-wrap justify-center px-3 md:py-5 sm:py-2 bg-teal-800 rounded-md  ">
      <ul className="flex justify-center sm:flex-row flex-col w-full sm:gap-5 gap-2 items-center font-mono py-2">
        {/*  */}
        <animated.li
          style={{ ...springs_left_right, textShadow: "2px 2px 4px #000000" }}
          className="rounded-s-md italic border-l-2  border-amber-500  sm:text-base text-xs sm:shadow-lg shadow-sm shadow-teal-400 sm:w-fit w-full sm:ps-0 ps-5 text-orange-200 transition ease-in-out delay-100 hover:text-teal-200     hover:-translate-y-0.5 hover:scale-110 hover:rounded-xl hover:bg-teal-600 duration-200"
        >
          <a href="/" className="sm:p-1 p-0 px-1  ">
            <Home clsnames="me-1 w-6 h-5 inline mb-1" /> About Me
          </a>
        </animated.li>

        <animated.li
          style={{ ...springs_left_right, textShadow: "2px 2px 4px #000000" }}
          className=" rounded-s-md italic border-l-2 border-amber-500 sm:text-base text-xs sm:shadow-lg shadow-sm shadow-teal-400  sm:w-fit w-full sm:ps-0 ps-5 text-orange-200 transition ease-in-out delay-100 hover:text-teal-200 hover:-translate-y-0.5 hover:scale-110 hover:rounded-xl hover:bg-teal-600 duration-200 "
        >
          <a href="/projects" className="sm:p-1 px-1">
            <LinkIcon clsnames="me-1 w-6 h-5 inline" />
            Live Projects
          </a>
        </animated.li>
        <animated.li
          style={{ ...springs_right_left, textShadow: "2px 2px 4px #000000" }}
          className="rounded-s-md italic border-l-2 border-amber-500 sm:text-base text-xs sm:shadow-lg shadow-sm shadow-teal-400 sm:w-fit w-full sm:ps-0 ps-5  text-orange-200  transition ease-in-out delay-100 hover:text-teal-200 hover:-translate-y-0.5 hover:scale-110 hover:rounded-xl hover:bg-teal-600 duration-200 "
        >
          <a href="/skills" className="sm:p-1 p-0 px-1 ">
            <DevelopmentIcon clsnames="me-1 w-6 h-5 inline" />
            Skills
          </a>
        </animated.li>
        <animated.li
          style={{ ...springs_right_left, textShadow: "2px 2px 4px #000000" }}
          className="rounded-s-md italic border-l-2 border-amber-500 sm:text-base text-xs sm:shadow-md shadow-sm shadow-teal-400 sm:w-fit w-full sm:ps-0 ps-5 text-orange-200 delay-100 hover:text-teal-200 hover:-translate-y-0.5 hover:scale-110 hover:rounded-xl hover:bg-teal-600 duration-200"
        >
          <a
            href="./resources/resume/CV - Masum Khan.pdf"
            download
            className="sm:p-1 px-1 p-0 "
          >
            <DownloaIcon clsnames="me-1 w-6 h-5 inline" />
            Resume
          </a>
        </animated.li>
      </ul>
    </div>
  );
}
