"use client";
import React from "react";
import { animated, useSpring } from "@react-spring/web";
//
export default function page() {
  const springs = useSpring({
    from: { x: 0 },
    to: { x: 100 },
  });
  //
  return (
    <div className="h-screen w-screen border m-5 flex flex-wrap gap-3">
      <div className="border md:w-1/3 sm:w-1/2 w-screen">
        <ul className="mt-3">
          <li className="mb-1">
            <span className=" mr-1 rounded-md bg-emerald-700 text-lime-50 font-semi-bold px-1">
              Main
            </span>
            React - Redux - Next
          </li>
          <li className="mb-1">
            <span className=" mr-1 rounded-md bg-emerald-700 text-lime-50 font-semi-bold px-1">
              Main
            </span>
            React - Redux - Next
          </li>
        </ul>
      </div>

      <div className="border">
        <ul className="mt-3">
          <li className="mb-1">
            <span className=" mr-1 rounded-md bg-emerald-700 text-lime-50 font-semi-bold px-1">
              Main
            </span>
            React - Redux - Next
          </li>
          <li className="mb-1">
            <span className=" mr-1 rounded-md bg-emerald-700 text-lime-50 font-semi-bold px-1">
              Main
            </span>
            React - Redux - Next
          </li>
        </ul>
      </div>
      <div className="border">
        <ul className="mt-3">
          <li className="mb-1">
            <span className=" mr-1 rounded-md bg-emerald-700 text-lime-50 font-semi-bold px-1">
              Main
            </span>
            React - Redux - Next
          </li>
          <li className="mb-1">
            <span className=" mr-1 rounded-md bg-emerald-700 text-lime-50 font-semi-bold px-1">
              Main
            </span>
            React - Redux - Next
          </li>
        </ul>
      </div>
    </div>
  );
}
