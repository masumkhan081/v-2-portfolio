import React from "react";
import SkillSetIcon from "../icons/SkillSetIcon";
//
export default function ProgSkill() {
  return (
    <div className="prog_skills bg-gradient-to-l from-teal-600 rounded-md bg-opacity-75   md:w-1/3 sm:w-1/2 w-screen p-3 mx-5 bg-teal-700">
      <span className="block  text-md bg-teal-700 text-green-200  font-thin  text-center rounded-sm">
        <SkillSetIcon /> Programming
      </span>
      <ul className="mt-3">
        <li className="mb-1">
          <span className=" mr-1 rounded-md bg-emerald-700   text-lime-50 font-semi-bold px-1">
            UVA Problem Solving
          </span>
          <a
            className=" "
            href="https://uhunt.onlinejudge.org/id/759640"
            target="_blank"
          >
            uHunt Profile
          </a>
        </li>
        <li className="mb-1">
          <span className=" mr-1 rounded-md bg-emerald-700   text-lime-50 font-semi-bold px-1">
            Classic Algorithm:
          </span>
          <a className="" href="#algorithms">
            Details
          </a>
        </li>
        <li className="mb-1">
          <span className=" mr-1 rounded-md bg-orange-200   text-lime-900 font-semi-bold px-1">
            Machine Learning (raw-coding):
          </span>
          <a className="" href="#ml_works">
            See
          </a>
        </li>
        <li className="mb-1">
          <span className=" mr-1 rounded-md bg-emerald-700   text-lime-50 font-semi-bold px-1">
            ML Algorithm (Scikit-Learn):
          </span>
          <a className="ms-1 text-decoration-none" href="#ml_works">
            See
          </a>
        </li>
      </ul>
    </div>
  );
}
