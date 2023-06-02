import React from "react";
import Image from "next/image";
import Uhunt from "../resources/images/Uhunt.png";
import SkillSetIcon from "../resources/icons/SkillSetIcon";
import Github from "../resources/icons/Github";

//
export default function ProgSkill() {
  return (
    <div className="per_skills  bg-gradient-to-t from-teal-600 rounded-md bg-opacity-75 shadow md:w-1/3 sm:w-2/5 w-screen p-3 bg-teal-800">
      <span className="block  text-base font-bold bg-teal-900 text-green-200  text-center rounded-sm">
        <SkillSetIcon clsnames="me-1 inline w-6 h-6" /> Programming
      </span>
      <ul className="mt-4 mb-2 flex flex-col gap-3  w-full ">
        <li className="mb-1  w-full">
          <span className=" mr-1 w-fit text-center rounded-md   text-green-200 font-semi-bold px-1">
            UVA Problem Solving
          </span>
          <ul className="flex flex-row gap-2 w-full">
            <li className="w-full">
              <a
                className="ms-1 w-full text-transform: capitalize shadow-sm shadow-green-200 text-slate-100 px-3  btn btn-sm rounded-md my-0 py-0  border-b-4 border-green-950
              hover:border-teal-500 bg-teal-700 "
                href="https://uhunt.onlinejudge.org/id/759640"
                target="_blank"
              >
                uHunt Profile
              </a>
            </li>
            <li className="w-full">
              <label
                htmlFor="modal-uhunt"
                className="ms-1 w-full text-transform: capitalize shadow-sm shadow-green-200 text-slate-100 px-3  btn btn-sm rounded-md my-0 py-0  border-b-4 border-green-950
              hover:border-teal-500 bg-teal-700 "
              >
                uhunt stats
              </label>

              <Uhunt_Stats />
            </li>
          </ul>
        </li>
        <li>
          <span className=" mr-1  text-center rounded-md text-green-200 font-semi-bold px-1">
            Algorithm Implementations
          </span>
          <ul className="w-full space-y-2">
            <li className="w-full">
              <label
                htmlFor="modal-classicalgo"
                className="ms-1 w-full text-transform: capitalize  text-slate-100 px-3 btn btn-sm rounded-md my-0 py-0 border-b-4 border-green-950 hover:border-teal-500 bg-teal-700 "
              >
                Classic Algorithm
              </label>
              <Cl_Algo_Modal />
            </li>
            <li className="w-full">
              <label
                htmlFor="modal-ml"
                className="ms-1 w-full text-transform: capitalize text-slate-100 px-2 btn btn-sm rounded-md my-0 py-0 border-b-4 border-green-950 hover:border-teal-500 bg-teal-700 "
              >
                Machine Learning
              </label>
              <ML_Modal />
            </li>
          </ul>
        </li>
      </ul>
    </div>
  );
}

function Uhunt_Stats() {
  return (
    <>
      <input type="checkbox" id="modal-uhunt" className="modal-toggle" />
      <div className="modal  ">
        <div className="modal-box w-11/12 max-w-5xl  h-8/12 ">
          <div className="flex flex-col gap-2">
            <label
              htmlFor="modal-uhunt"
              className=" rounded-md text-center border-0 text-sm-lg btn-error absolute right-2 top-2 w-1/4 font-extrabold font-mono bg-amber-800 text-amber-100"
            >
              C L O S E
            </label>
            <h3 className=" w-1/3 px-1 text-sm-lg rounded-md   absolute left-2 top-2 font-extrabold font-mono bg-teal-900    text-amber-500 text-center">
              Uhunt Stats
            </h3>
          </div>

          <div className="  container bg-slate-400">
            <Image
              className="  w-fit   h-fit mt-3"
              src={Uhunt}
              alt="https://uhunt.onlinejudge.org/id/759640"
            />
          </div>
          <div className="modal-action ">
            <label
              htmlFor="modal-uhunt"
              className="btn btn-square bg-slate-200 btn-outline btn-sm w-full"
            >
              Close
            </label>
          </div>
        </div>
      </div>
    </>
  );
}
function Cl_Algo_Modal() {
  return (
    <>
      <input type="checkbox" id="modal-classicalgo" className="modal-toggle" />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <h3 className="font-bold text-lg">Classic Algorithms</h3>
          <p className="py-4">
            You've been selected for a chance to get one year of subscription to
            use Wikipedia for free!
          </p>
          <div className="modal-action">
            <label htmlFor="modal-classicalgo" className="btn">
              Yay!
            </label>
          </div>
        </div>
      </div>
    </>
  );
}
function ML_Modal() {
  return (
    <>
      <input type="checkbox" id="modal-ml" className="modal-toggle" />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <h3 className="font-bold text-lg">Machine Learning Works</h3>
          <div className="py-3">
            <ul>
              <li>Recommendation System</li>
              <li>Cluster Algorithm</li>
            </ul>
          </div>
          <div className="modal-action">
            <label htmlFor="modal-ml" className="btn">
              Yay!
            </label>
          </div>
        </div>
      </div>
    </>
  );
}
