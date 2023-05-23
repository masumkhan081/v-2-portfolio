"use client";
import React from "react";
import { animated, useSpring } from "@react-spring/web";
import SkillSetIcon from "../icons/SkillSetIcon";
// Initialization for ES Users

export default function page() {
  //
  const springs = useSpring({
    // from: { y: 100 },
    // to: { y: 0 },
  });
  //
  return (
    <div className="w-screen  h-full">
      <div
        className="  w-full h-auto mt-10 px-5 flex flex-wrap  justify-start gap-y-2"
        style={{
          ...springs,
        }}
      >
        <div className=" rounded-md bg-opacity-75 md:w-1/3 sm:w-1/2 w-screen  bg-teal-600">
          <span className="block  text-md bg-teal-700 text-green-200  font-thin dark:bg-green-900 dark:text-green-300 text-center rounded-sm">
            <SkillSetIcon /> Front-End
          </span>
          <ul className="my-3 px-3 space-y-2">
            <li className="mb-1">
              <span className=" mr-1 rounded-md bg-slate-700 text-lime-200 font-semi-bold px-1">
                CSS frameworks
              </span>
              Tailwind CSS, Bootstrap
            </li>
            <li className="mb-1">
              <span className=" mr-1 rounded-md bg-slate-700 text-lime-200  font-semi-bold px-1">
                Component libraries
              </span>
              Material-UI, Material-Tailwind, daisyUI, React-Bootstrap
            </li>
            <li className="mb-1">
              <span className=" mr-1 rounded-md bg-slate-700 text-lime-200  font-semi-bold px-1">
                Animations
              </span>
              React-spring, Framer-motion, React-animations
            </li>
            <li className="mb-1">
              <span className=" mr-1 rounded-md bg-slate-700 text-lime-200  font-semi-bold px-1">
                Visualization
              </span>
              Visx, Recharts, Faker-js
            </li>

            <li className="mb-1">
              <span className=" mr-1 rounded-md bg-slate-700 text-lime-200 font-semi-bold px-1">
                Form / Validation
              </span>
              Formik, Yup, React-hook-form
            </li>
            <li className="mb-1">
              <span className=" mr-1 rounded-md bg-slate-700 text-lime-200  font-semi-bold px-1">
                Others
              </span>
              Jest, React-router, React-table, Axios, React-pdf, React-icon, and
              as neccesaary.
            </li>
          </ul>
        </div>
        <div className="back_skills rounded-md bg-opacity-75   md:w-1/3 sm:w-1/2 w-screen p-3 bg-teal-700">
          <span className="block shadow-sm text-md bg-teal-700 text-green-200  font-thin dark:bg-green-900 dark:text-green-300 text-center rounded-sm">
            <SkillSetIcon /> Back-End
          </span>
          <ul className="mt-3  ">
            <li className="mb-1">
              <span className=" mr-1 rounded-md bg-emerald-700   text-lime-50 font-semi-bold px-1">
                Main
              </span>
              React - Redux - Next
            </li>
            <li className="mb-1">
              <span className=" mr-1 rounded-md bg-emerald-700   text-lime-50 font-semi-bold px-1">
                Main
              </span>
              React - Redux - Next
            </li>
            <li className="mb-1">
              <span className=" mr-1 rounded-md bg-orange-200   text-lime-900 font-semi-bold px-1">
                Main
              </span>
              React - Redux - Next
            </li>
            <li className="mb-1">
              <span className=" mr-1 rounded-md bg-emerald-700   text-lime-50 font-semi-bold px-1">
                Main
              </span>
              React - Redux - Next
            </li>
            <li className="mb-1">
              <span className=" mr-1 rounded-md bg-orange-200   text-lime-900 font-semi-bold px-1">
                Main
              </span>
              React - Redux - Next
            </li>
          </ul>
        </div>
        <div className="db_skills rounded-md bg-opacity-75   md:w-1/3 sm:w-1/2 w-screen bg-teal-600">
          <span className="block  text-md bg-teal-700 text-green-200  font-thin dark:bg-green-900 dark:text-green-300 text-center ">
            <SkillSetIcon /> Data-Tier
          </span>
          <ul className="mt-3 px-3">
            <li className="mb-1">
              <span className=" mr-1 rounded-md bg-emerald-700   text-lime-50 font-semi-bold px-1">
                Main
              </span>
              React - Redux - Next
            </li>
            <li className="mb-1">
              <span className=" mr-1 rounded-md bg-emerald-700   text-lime-50 font-semi-bold px-1">
                Main
              </span>
              React - Redux - Next
            </li>
            <li className="mb-1">
              <span className=" mr-1 rounded-md bg-orange-200   text-lime-900 font-semi-bold px-1">
                Main
              </span>
              React - Redux - Next
            </li>
            <li className="mb-1">
              <span className=" mr-1 rounded-md bg-emerald-700   text-lime-50 font-semi-bold px-1">
                Main
              </span>
              React - Redux - Next
            </li>
            <li className="mb-1">
              <span className=" mr-1 rounded-md bg-orange-200   text-lime-900 font-semi-bold px-1">
                Main
              </span>
              React - Redux - Next
            </li>
          </ul>
        </div>
        <div className="prog_skills rounded-md bg-opacity-75   md:w-1/3 sm:w-1/2 w-screen p-3 bg-teal-600">
          <span className="block  text-md bg-teal-700 text-green-200  font-thin dark:bg-green-900 dark:text-green-300 text-center rounded-sm">
            <SkillSetIcon /> Prohramming
          </span>
          <ul className="mt-3">
            <li className="mb-1">
              <span className=" mr-1 rounded-md bg-emerald-700   text-lime-50 font-semi-bold px-1">
                Main
              </span>
              React - Redux - Next
            </li>
            <li className="mb-1">
              <span className=" mr-1 rounded-md bg-emerald-700   text-lime-50 font-semi-bold px-1">
                Main
              </span>
              React - Redux - Next
            </li>
            <li className="mb-1">
              <span className=" mr-1 rounded-md bg-orange-200   text-lime-900 font-semi-bold px-1">
                Main
              </span>
              React - Redux - Next
            </li>
            <li className="mb-1">
              <span className=" mr-1 rounded-md bg-emerald-700   text-lime-50 font-semi-bold px-1">
                Main
              </span>
              React - Redux - Next
            </li>
            <li className="mb-1">
              <span className=" mr-1 rounded-md bg-orange-200   text-lime-900 font-semi-bold px-1">
                Main
              </span>
              React - Redux - Next
            </li>
          </ul>
        </div>
        <div className="per_skills rounded-md bg-opacity-75  md:w-1/4 sm:w-1/3 w-screen p-3 bg-teal-600">
          <span className="block  text-md bg-teal-700 text-green-200  font-thin dark:bg-green-900 dark:text-green-300 text-center rounded-sm">
            <SkillSetIcon /> Personal Skills
          </span>
          <ul className="mt-3">
            <li className="mb-1">
              <span className=" mr-1 rounded-md bg-emerald-700   text-lime-50 font-semi-bold px-1">
                Main
              </span>
              React - Redux - Next
            </li>
            <li className="mb-1">
              <span className=" mr-1 rounded-md bg-emerald-700   text-lime-50 font-semi-bold px-1">
                Main
              </span>
              React - Redux - Next
            </li>
            <li className="mb-1">
              <span className=" mr-1 rounded-md bg-orange-200   text-lime-900 font-semi-bold px-1">
                Main
              </span>
              React - Redux - Next
            </li>
            <li className="mb-1">
              <span className=" mr-1 rounded-md bg-emerald-700   text-lime-50 font-semi-bold px-1">
                Main
              </span>
              React - Redux - Next
            </li>
            <li className="mb-1">
              <span className=" mr-1 rounded-md bg-orange-200   text-lime-900 font-semi-bold px-1">
                Main
              </span>
              React - Redux - Next
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
