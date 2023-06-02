import React from "react";
import SkillSetIcon from "../resources/icons/SkillSetIcon";
//

export default function FrontEnd() {
  return (
    <div className="per_skills bg-gradient-to-t from-teal-600 rounded-md bg-opacity-75 shadow md:w-1/3 sm:w-1/2 w-screen p-3 bg-teal-800">
      <span className="block text-base font-bold bg-teal-900 text-green-200 text-center rounded-sm">
        <SkillSetIcon clsnames="me-1 inline w-6 h-6" /> Personal Skills
      </span>
      <ul className="mt-4 mb-2 text-slate-100 list-disc hover:list-decimal list-inside">
        <li> Programming & problem solving ability </li>
        <li>Fast self-learning</li>
        <li> Logical & structured thinking </li>
        <li> Good communication skill (Eng) </li>
        <li> Good at analysing user requirements </li>
      </ul>
    </div>
  );
}
