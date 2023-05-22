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
    <animated.div
      style={{
        borderRadius: "5px",
        ...springs,
      }}
      className="w-1/2"
    >
      <span className="text-3xl block text-center border border-t-orange-300 h-full w-full ">
        Live Projects With Link To Be Here
      </span>
    </animated.div>
  );
}
