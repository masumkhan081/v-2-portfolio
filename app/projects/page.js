"use client";
import React from "react";
import Project from "./project";
import { animated, useSpring } from "@react-spring/web";
import data from "../data/projects";
//
export default function page() {
  const springs = useSpring({
    from: { opacity: 0.5 },
    to: { opacity: 1 },
  });
  //
  return (
    <animated.div
      style={{ ...springs }}
      className=" w-full h-auto mt-4 sm:px-5 flex flex-wrap  justify-around gap-y-4 pb-6"
    >
      {data.map((dt, i) => (
        <Project
          key={i}
          name={dt.name}
          summary={dt.summary}
          versions={dt.versions}
        />
      ))}
    </animated.div>
  );
}
