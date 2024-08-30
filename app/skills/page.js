"use client";
import React from "react";
// import { animated, useSpring } from "@react-spring/web";

import BackEnd from "../components/skills/BackEnd";
import FrontEnd from "../components/skills/FrontEnd";
import PerSkill from "../components/skills/PerSkill";
import ProgSkill from "../components/skills/ProgSkill";
import DBSkill from "../components/skills/DBSkill";
import Frameworks from "../components/skills/Framework";
import Languages from "../components/skills/Languages";
import DevProces from "../components/skills/DevProcess";
import AlgorithmCard from "@/algoCardGPT";
//
export default function page() {
  const style =
    "md:w-[250px] sm:w-[200px] w-full h-fit bg-acquamarine text-dark-brown bg-gradient-to-b from-slate-300 rounded-md bg-opacity-30  p-3";

  return (
    <div className="flex-grow h-auto flex flex-wrap gap-x-2 justify-around sm:gap-y-5 gap-y-2 mb-3 p-3.0 bg-acquamarine">
      {/* <AlgorithmCard /> */}

      <div className={style}>
        <Languages />
      </div>

      <div className={style}>
        <Frameworks />
      </div>

      <div className={style}>
        <FrontEnd />
      </div>
      <div className={style}>
        <BackEnd />
      </div>
      <div className={style}>
        <DBSkill />
      </div>

      <div className={style}>
        <DevProces />
      </div>
      <div className={style}>
        <PerSkill />
      </div>

      {/* <FrontEnd />
        <BackEnd />
        <DBSkill />
        <ProgSkill />
        <PerSkill /> */}
    </div>
  );
}
