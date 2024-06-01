import React, { useState } from "react";
import Image from "next/image";
import { hobbies } from "../data/hobbies.data";
import AboutTitle from "../UI-shared/AboutTitle";

export default function Hobbies() {
  //
  const [toolTip, setToolTip] = useState("");

  return (
    <div>
      <div className="flex gap-2 ">
        <AboutTitle title={"Hobbies"} />
        <span className="font-rubik text-sm font-bold text-dark-brown">
          {" "}
          {toolTip}
        </span>
      </div>
      <div className="flex sm:gap-5 gap-3 flex-wrap ps-2 py-3 ">
        {hobbies.map((hobby, ind) => {
          return (
            <Image
              key={ind}
              src={hobby.icon}
              className="icn_socials"
              alt="alt txt"
              onMouseOver={() => {
                setToolTip(hobby.name);
              }}
              onMouseLeave={() => {
                setToolTip("");
              }}
            />
          );
        })}
      </div>
    </div>
  );
}
