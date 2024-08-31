"use client";
import React from "react";
// import { animated, useSpring } from "@react-spring/web";

import {
  backendSKills,
  fronendSKills,
  otherSkills,
} from "../data/skills/devSkills.data";
import personalSkills from "../data/skills/personal.data";
import {
  languages,
  backendTechs,
  frameworks,
  toDos,
  frontendTechs,
  dbTechs,
  devProcessTechs,
} from "../data/skills/technologies.data";
import TechnoSkill from "../components/skills/TechnoSkill";
import DevSkill from "../components/skills/DevSkill";
import PersonalSkill from "../components/skills/PerSkill";

//
export default function page() {
  return (
    <div className="flex-grow flex flex-col sm:gap-[100px] gap-[50px] h-auto  bg-acquamarine">
      {/* <AlgorithmCard /> */}

      <div className="px-3.0  sm:py-2.0 py-1.0 flex- flex-col gap-4 brdr h-auto">
        <span className=" block py-2 font-semibold font-titan w-full text-center">
          Development Skills
        </span>
        <div className="grid grid-cols-3 gap-3 brdr justify-center">
          <DevSkill title={"fornt-end skill"} list={fronendSKills} />
          <DevSkill title={"back-end skill"} list={backendSKills} />
          <DevSkill title={"others"} list={otherSkills} />
        </div>
      </div>

      <div className="px-3.0  sm:py-2.0 py-1.0 flex- flex-col gap-4 brdr">
        <span className=" block py-4 font-semibold font-titan w-full text-center">
          Technological Skills
        </span>

        <div className=" flex flex-wrap gap-x-2 justify-around sm:gap-y-5 gap-y-2 ">
          <div className="styleTechnoSkill">
            <TechnoSkill title={"Languages"} list={languages} />
          </div>

          <div className="styleTechnoSkill">
            <TechnoSkill title={"Frameworks"} list={frameworks} />
          </div>

          <div className="styleTechnoSkill">
            <TechnoSkill title={"Fronend"} list={frontendTechs} />
          </div>
          <div className="styleTechnoSkill">
            <TechnoSkill title={"Backend"} list={backendTechs} />
          </div>
          <div className="styleTechnoSkill">
            <TechnoSkill title={"DB Skills"} list={dbTechs} />
          </div>

          <div className="styleTechnoSkill">
            <TechnoSkill title={"Dev Process"} list={devProcessTechs} />
          </div>
        </div>
      </div>
      {/*                             Programming & Algorithms                                          */}
      <div className="px-3.0  sm:py-2.0 py-1.0 flex- flex-col gap-4 brdr h-auto">
        <span className=" block py-2 font-semibold font-titan w-full text-center">
          Programming & Algorithms
        </span>
        <div className="grid grid-cols-3 gap-3 brdr justify-center">
          <DevSkill title={"fornt-end skill"} list={fronendSKills} />
          <DevSkill title={"back-end skill"} list={backendSKills} />
          <DevSkill title={"others"} list={otherSkills} />
        </div>
      </div>
      {/*                             Personal Skills                                          */}

      <div className=" flex flex-wrap gap-x-2 justify-around sm:gap-y-5 gap-y-2 ">
        <PersonalSkill list={personalSkills} />{" "}
      </div>
    </div>
  );
}
