import React from "react";
import SkillSetIcon from "../resources/icons/SkillSetIcon";
//
export default function FrontEnd() {
  return (
    <div className="back_skills bg-gradient-to-t from-teal-600 rounded-md bg-opacity-75    md:w-1/3 sm:w-2/5 w-screen  bg-teal-700">
      <div className="p-3 ">
        <span className="block shadow-sm text-base font-bold bg-teal-800 text-green-200 text-center rounded-sm">
          <SkillSetIcon clsnames="me-1 inline w-6 h-6" /> Back-End
        </span>
        <ul className="my-3  space-y-2 text-green-200">
          <li className="mb-1 block w-full">
            <span className=" mr-1 rounded-md bg-teal-900 text-slate-300 font-semi-bold px-1">
              Main
            </span>
            Node - Express
          </li>
          <li className="mb-1 block w-full">
            <span className=" mr-1 rounded-md bg-teal-900 text-slate-300  font-semi-bold px-1">
              libraries
            </span>
            Passport, Nodemailer, Bcrypt, Multer, JOI, Async, J-W-T, Socket.io,
            Moment
          </li>
        </ul>
      </div>
    </div>
  );
}
