"use client";
import React, { useEffect } from "react";
import Project from "../components/projects/project";
// import { animated, useSpring } from "@react-spring/web";
import data from "../data/projects/projects.data";
//
export default function page() {
  // useEffect(() => {
  //   const isServer = typeof window === "undefined";
  //   if (isServer) {
  //     console.log("server side");
  //   } else {
  //     console.log("client side");
  //   }
  // });

  // const springs = useSpring({
  //   from: { opacity: 0.5 },
  //   to: { opacity: 1 },
  // });
  //
  return (
    <div
      // style={{ ...springs }}
      className="brdr w-full h-auto sm:py-[50px] md:py-[65px] sm:px-5 flex flex-wrap bg-acquamarine justify-around gap-y-[45px]"
    >
      {data.map((project, i) => (
        <Project
          key={i}
          name={project.name}
          summary={project.summary}
          versions={project.versions}
        />
      ))}
    </div>
  );
}
