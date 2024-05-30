import React from "react";

import { FaClipboardList } from "react-icons/fa";
import AboutTitle from "../UI-shared/AboutTitle";
//
export default function FrontEnd() {
  return (
    <div className="bg-gradient-to-b from-teal-600 rounded-md bg-opacity-75 md:w-1/3 sm:w-1/2 w-screen p-3 bg-teal-800">
      <span className="block text-base font-bold bg-teal-800 text-green-200 text-center rounded-sm">
        <FaClipboardList clsnames="me-1 inline w-6 h-6" /> Front-End
      </span>
      <ul className="my-3  space-y-2 text-green-200">
        <li className="mb-2 ">
          <span className=" mr-1 rounded-md bg-teal-900 text-slate-300  px-1 ">
            CSS frameworks
          </span>
          <AboutTitle title="CSS Ki Maki" />
          Tailwind CSS, Bootstrap
        </li>
        <li className="mb-1">
          <span className=" mr-1 rounded-md bg-teal-900 text-slate-300  px-1 ">
            Component libraries
          </span>
          Material-UI, Material-Tailwind, daisyUI, React-Bootstrap
        </li>
        <li className="mb-1">
          <span className=" mr-1 rounded-md bg-teal-900 text-slate-300  px-1 ">
            Animations
          </span>
          React-spring, Framer-motion, React-animations
        </li>
        <li className="mb-1">
          <span className=" mr-1 rounded-md bg-teal-900 text-slate-300  px-1 ">
            Visualization
          </span>
          Visx, Recharts, Faker-js
        </li>

        <li className="mb-1">
          <span className=" mr-1 rounded-md bg-teal-900 text-slate-300  px-1 ">
            Form / Validation
          </span>
          Formik, Yup, React-hook-form
        </li>
        <li className="mb-1">
          <span className=" mr-1 rounded-md bg-teal-900 text-slate-300  px-1 ">
            Others
          </span>
          Jest, React-router, React-table, Axios, React-pdf, React-icon, and as
          neccesaary.
        </li>
      </ul>
    </div>
  );
}
