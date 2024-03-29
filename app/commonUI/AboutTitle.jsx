import React from "react";
import { animated, useSpring } from "@react-spring/web";

export default function AboutTitle({ title, children }) {
  const springs = useSpring({
    from: {
      y: 0,
      width: "100%",
      opacity: "0.5",        
      textShadow: "2px 2px 4px #000000",
    },
    to: { y: 0, width: "75%", opacity: "1" },
  });
  return (
    <animated.span
      style={{
        ...springs,
      }}
      className="block md:w-1/2 sm:w-2/3 w-full bg-teal-600 bg-gradient-to-r from-teal-900 text-orange-300 text-center font-mono rounded-s-md rounded-e-lg "
    >
      {title}
      {children}
    </animated.span>
  );
}
