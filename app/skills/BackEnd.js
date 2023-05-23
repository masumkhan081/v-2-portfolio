import React from "react";
import SkillSetIcon from "../icons/SkillSetIcon";
//
export default function FrontEnd() {
  return (
    <div className=" back_skills bg-gradient-to-t from-teal-600 rounded-md bg-opacity-75   md:w-1/3 sm:w-1/2 w-screen p-3 bg-teal-700">
      <span className="block shadow-sm text-md bg-teal-700 text-green-200  font-thin dark:bg-green-900 dark:text-green-300 text-center rounded-sm">
        <SkillSetIcon /> Back-End
      </span>
      <ul className="my-3  space-y-2 text-green-200">
        <li className="mb-1">
          <span className=" mr-1 rounded-md bg-slate-700 text-amber-600 font-semi-bold px-1">
            Main
          </span>
          Node - Express
        </li>
        <li className="mb-1">
          <span className=" mr-1 rounded-md bg-slate-700 text-amber-600  font-semi-bold px-1">
            libraries
          </span>
          Passport, Nodemailer, Bcrypt, Multer, JOI, Async, J-W-T, Socket.io,
          Moment
        </li>
      </ul>
    </div>
  );
}
