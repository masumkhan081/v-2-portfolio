"use client";
import React, { useEffect, useState } from "react";
// import { animated, useSpring } from "@react-spring/web";
import { IoIosArrowDown } from "react-icons/io";
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

const algo_list = {
  "Classical Algo": {
    number_theory: ["nt-1", "nt-2"],
    "dynamic theory": ["dt-1 Algo", "coin change", "dt-5 Algo", "d9 -00 ##"],
  },

  "Machine Learning": {
    classification: ["ml Algo", "ml-2 "],
    "regression theory": ["Classical Algo", "coin change"],
  },
  Profiles: {
    numbertheory: ["Classical Algo", "Classical Algo -2"],
    "dynamic theory": ["Classical Algo", "coin change"],
  },
};

//
export default function page() {
  const [currentView, setCurrentView] = useState(Object.keys(algo_list)[0]);
  const [currentSubView, setCurrentSubView] = useState(
    Object.keys(algo_list[currentView])[0]
  );

  useEffect(() => {
    setCurrentSubView(Object.keys(algo_list[currentView])[0]);
  }, [currentView]);

  const tabSty = (btnText) =>
    currentView === btnText
      ? "shadow-md shadow-slate-200 px-2 py-1 rounded-md"
      : "  shadow-sm px-2 py-1 rounded-md";

  const subViewSty = (item) => (item === currentSubView ? "block  " : "hidden");

  const activeSty = (item) =>
    item === currentSubView ? "rotate-180  " : "rotate-0";

  const handleSubView = (item) =>
    item === currentSubView ? setCurrentSubView("") : setCurrentSubView(item);

  return (
    <div className="flex-grow flex flex-col sm:gap-[100px] gap-[90px] h-auto  bg-acquamarine">
      {/*                      
            Programming & Algorithms              
                                         */}
      <div className=" brdr px-3.0  sm:py-1.0 py-1.0 flex- flex-col border-r-amber-300 h-auto">
        <span className=" block py-1 font-semibold font-titan w-full text-center  ">
          Programming & Algorithms {currentSubView}
        </span>

        <div className="w-auto bg-gradient-to-tl from-white rounded-sm px-2 py-1 flex gap-2 sm:flex-row flex-col justify-center my-6 ">
          {Object.keys(algo_list).map((tab, ind) => {
            return (
              <button
                key={ind}
                className={tabSty(tab)}
                onClick={() => setCurrentView(tab)}
              >
                {tab}
              </button>
            );
          })}
        </div>

        <div className="my-6 rounded-md  ">
          {Object.keys(algo_list[currentView]).map((item, ind) => {
            return (
              <div
                className="rounded-md shadow-md flex flex-col gap-2 p-3"
                key={ind}
              >
                <button
                  onClick={() => handleSubView(item)}
                  className="my-2 py-1 font-bold w-fit flex gap-2 justify-center items-center"
                >
                  {item}
                  <span className="rounded-full px-2 bg-yellow-900 text-yellow-100 text-lg">
                    {algo_list?.[currentView]?.[item]?.length}
                  </span>

                  <IoIosArrowDown className={activeSty(item)} />
                </button>
                <ul className={`${subViewSty(item)} flex flex-col gap-1`}>
                  {algo_list?.[currentView]?.[currentSubView]?.map((itm, i) => {
                    return (
                      <li className="" key={i}>
                        {itm}
                      </li>
                    );
                  })}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
      {/*                 
      
                  Personal Skills                   
                  
                                         */}

      {/* <AlgorithmCard /> */}

      <div className=" brdr px-3.0  sm:py-2.0 py-1.0 flex- flex-col gap-4   h-auto">
        <span className=" block py-2 font-semibold font-titan w-full text-center">
          Development Skills
        </span>
        <div className="grid grid-cols-3 gap-3   justify-center">
          <DevSkill title={"fornt-end skill"} list={fronendSKills} />
          <DevSkill title={"back-end skill"} list={backendSKills} />
          <DevSkill title={"others"} list={otherSkills} />
        </div>
      </div>

      <div className="px-3.0  sm:py-2.0 py-1.0 flex- flex-col gap-4  ">
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

      <div className=" flex flex-wrap gap-x-2 justify-around sm:gap-y-5 gap-y-2 ">
        <PersonalSkill list={personalSkills} />{" "}
      </div>
    </div>
  );
}
