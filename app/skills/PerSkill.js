import React from "react";

import { FaClipboardList } from "react-icons/fa";
import { HiExternalLink } from "react-icons/hi";

//
export default function PersonalSkill() {
  return (

    <div className=" sm:w-fit w-full h-fit bg-acquamarine text-dark-brown bg-gradient-to-b from-slate-300 rounded-md bg-opacity-30  p-3 ">
      <span className=" bg-slate-200 shadow-inner  flex justify-center items-center py-1 gap-2 text-1/1 font-averia font-semibold  rounded-sm">
        <FaClipboardList clsnames="me-1 inline w-6 h-6" /> <span>Personal Skill</span>
      </span>
      <ul className="  space-y-1  my-3 text-sm ">

        {/*  */}
        <li className="flex items-center gap-2 w-fit rounded  bg-dark-brown bg-opacity-10">
          <span className="px-1 rounded bg-dark-brown bg-opacity-70 text-slate-300">Assembly</span>
          <a href="www.google.com" target="_blank" className="flex items-center gap-1">code-notes<HiExternalLink className="w-4 h-4 " /></a>
        </li>
        {/*  */}

        <li className="bg-dark-brown bg-opacity-10 text-slate-600 w-fit rounded px-1">
          Programming & problem solving ability
        </li>
        <li className="bg-dark-brown bg-opacity-20 text-slate-300 w-fit rounded px-1">
          Fast self-learning
        </li>
        <li className="bg-dark-brown bg-opacity-70 text-slate-300 w-fit rounded px-1">
          Logical & structured thinking
        </li> <li className="bg-dark-brown bg-opacity-70 text-slate-300 w-fit rounded px-1">
          Good communication skill (Eng)
        </li>
        <li className="bg-dark-brown bg-opacity-70 text-slate-300 w-fit rounded px-1">
          Good at analysing user requirements
        </li>

      </ul>
    </div>
  );
}

