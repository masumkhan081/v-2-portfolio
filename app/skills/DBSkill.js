import React from "react";
import CloudIcon from '../../public/icons/CloudIcon'
import { FaCloud } from "react-icons/fa";
import { FaDatabase } from "react-icons/fa";
import { FaClipboardList } from "react-icons/fa";
//
export default function FrontEnd() {
  return (
    <div className="db_skills bg-gradient-to-b from-teal-600 rounded-md  md:w-1/3 sm:w-1/2 w-screen p-3 bg-teal-800">
      <span className="block text-base font-bold bg-teal-800   text-green-200 dark:bg-green-900 dark:text-green-300 text-center ">
        <FaClipboardList clsnames="me-1 inline w-6 h-6" /> Data-Tier
      </span>
      <ul className="my-3  space-y-2 text-green-200">
        <li className="mb-1">
          <span className=" mr-1 block w-fit text-center rounded-md bg-slate-700 text-amber-600 font-medium px-1">
            No-SQL
          </span>
          <ul>
            <li>
              MongoDB (mongoose) /
              <FaCloud clsnames="me-1 inline w-6 h-6" /> MongoDB Atlas
            </li>
            <li>
              Firebase / <CloudIcon clsnames="me-1 inline w-6 h-6" />
              Firestore
            </li>
          </ul>
        </li>
        <li className="mb-1">
          <span className=" mr-1 block w-fit text-center rounded-md bg-slate-700 text-amber-600 font-semi-bold px-1">
            SQL
          </span>

          <ul className="list-unstyled">
            <li>
              PostgreSQL ( pg, sequelize ) /
              <FaCloud clsnames="me-1 inline w-6 h-6" /> ElephantSQL
            </li>
            <li>
              SQL / <FaDatabase clsnames="me-1 inline w-6 h-6" /> SQLite3
            </li>
          </ul>
        </li>
      </ul>
    </div>
  );
}
