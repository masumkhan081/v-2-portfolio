import React from "react";

import { FaClipboardList } from "react-icons/fa";
import AboutTitle from "../UI-shared/AboutTitle";
//
export default function Frameworks() {
  return (
    <div className="bg-acquamarine bg-gradient-to-b from-slate-300 rounded-md bg-opacity-30 md:w-1/3 sm:w-1/2 w-screen p-3 ">
      <span className=" bg-slate-200 shadow-inner text-dark-brown flex justify-center items-center py-1 gap-2 text-1/1 font-averia font-semibold  rounded-sm">
        <FaClipboardList clsnames="me-1 inline w-6 h-6" /> <span>Frameworks</span>
      </span>
      <ul className="my-3  space-y-2 text-green-700 ">

        <li className="mb-1">
          Nextjs
        </li>
        <li className="mb-2 ">semi
          Tailwind CSS
        </li>
        <li className="mb-1">
          Bootstrap
        </li>

      </ul>
    </div>
  );
}
