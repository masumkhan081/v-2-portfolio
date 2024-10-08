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
      className=" w-full h-auto sm:py-[50px] md:py-[65px] py-[45px] sm:px-5 flex  md:flex-row flex-col flex-wrap bg-acquamarine justify-around gap-y-[45px]"
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
