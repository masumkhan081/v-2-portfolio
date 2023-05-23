"use client";
import React from "react";
import { animated, useSpring } from "@react-spring/web";

import BackEnd from "./BackEnd";
import FrontEnd from "./FrontEnd";
import PerSkill from "./PerSkill";
import ProgSkill from "./ProgSkill";
import DBSkill from "./DBSkill";

//
export default function page() {
  //
  const springs = useSpring({
    // from: { y: 100 },
    // to: { y: 0 },
  });
  //
  return (
    <div className="w-screen  h-full">
      <div
        className="  w-full h-auto mt-10 px-5 flex flex-wrap  justify-center gap-y-5"
        style={{
          ...springs,
        }}
      >
        <FrontEnd />
        <BackEnd />
        <DBSkill />
        <ProgSkill />
        <PerSkill />
      </div>
    </div>
  );
}
