"use client";
import React from "react";
// import { animated, useSpring } from "@react-spring/web";

import BackEnd from "./BackEnd";
import FrontEnd from "./FrontEnd";
import PerSkill from "./PerSkill";
import ProgSkill from "./ProgSkill";
import DBSkill from "./DBSkill";
import Frameworks from "./Framework";
//
export default function page() {

  return (
    <div className="flex-grow h-full p-5 bg-acquamarine">
      <div
        className=" w-full h-auto flex flex-wrap gap-x-2 justify-around gap-y-5 mb-3"
      >
        <Frameworks />
        <Frameworks />
        <Frameworks />
        <Frameworks />

        {/* <FrontEnd />
        <BackEnd />
        <DBSkill />
        <ProgSkill />
        <PerSkill /> */}
      </div>
    </div>
  );
}
