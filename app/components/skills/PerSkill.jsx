import React from "react";

import { FaClipboardList } from "react-icons/fa";
import { HiExternalLink } from "react-icons/hi";

//
export default function PersonalSkill({ list }) {
  return (
    <div className="">
      <span className=" block py-2 font-semibold font-titan w-full text-center">
        Personal Skills
      </span>
      <div className="grid grid-cols-3 gap-3 brdr justify-center">
        {list.map((itm) => {
          return <span>{itm}</span>;
        })}
      </div>
    </div>
  );
}
