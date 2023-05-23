import React from "react";
import SkillSetIcon from "../icons/SkillSetIcon";
//

export default function FrontEnd() {
  return (
    <div className="per_skills  bg-gradient-to-r from-teal-600 rounded-md bg-opacity-75 shadow sm:w-1/3 w-screen p-3 bg-teal-800">
      <span className="block  text-md bg-teal-700 text-green-200  font-thin dark:bg-green-900 dark:text-green-300 text-center rounded-sm">
        <SkillSetIcon /> Personal Skills
      </span>
      <ul className="mt-3">
        <li> Programming & problem solving ability </li>
        <li>Fast self-learning</li>
        <li> Logical & structured thinking </li>
        <li> Good communication skill (Eng) </li>
        <li> Good at ana user requirements </li>
      </ul>
    </div>
  );
}
