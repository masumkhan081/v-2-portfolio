import React from "react";
import SkillSetIcon from "../icons/SkillSetIcon";
import CloudIcon from "../icons/CloudIcon";
import DBIcon from "../icons/DBIcon";
//
export default function FrontEnd() {
  return (
    <div className="db_skills bg-gradient-to-b from-teal-600 rounded-md  md:w-1/3 sm:w-1/2 w-screen p-3 bg-teal-800">
      <span className="block  text-md bg-teal-600   text-green-200  font-thin dark:bg-green-900 dark:text-green-300 text-center ">
        <SkillSetIcon /> Data-Tier
      </span>
      <ul className="my-3  space-y-2 text-green-200">
        <li className="mb-1">
          <span className=" mr-1 block text-center rounded-md bg-slate-700 text-amber-600 font-semi-bold px-1">
            No-SQL
          </span>
          <ul>
            <li>
              MongoDB (mongoose) /
              <CloudIcon /> MongoDB Atlas
            </li>
            <li>
              Firebase / <CloudIcon />
              Firestore
            </li>
          </ul>
        </li>
        <li className="mb-1">
          <span className=" mr-1 block text-center rounded-md bg-slate-700 text-amber-600 font-semi-bold px-1">
            SQL
          </span>

          <ul class="list-unstyled">
            <li>
              PostgreSQL ( pg, sequelize ) /
              <CloudIcon /> ElephantSQL
            </li>
            <li>
              SQL / <DBIcon /> SQLite3
            </li>
          </ul>
        </li>
      </ul>
    </div>
  );
}
