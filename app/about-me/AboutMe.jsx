"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import MK from "../../public/images/mk_avatar.png";
import Phone from "../../public/icons/Phone";
import Email from "../../public/icons/Email";
// import { animated, useSpring } from "@react-spring/web";
import {
  BsFacebook,
  BsInstagram,
  BsFillTelephoneOutboundFill,
} from "react-icons/bs";

import { MdEmail } from "react-icons/md";

import FindMe from "../UI-components/FindMe";
import Hobbies from "../UI-components/Hobbies";
import Interests from "../UI-components/Interests";
import HireMe from "../UI-components/HireMe";

import Academy from "../UI-components/Academy";
import Personal from "../UI-components/Personal";
import Experiences from "../UI-components/Experiences";

export default function AboutMe() {

  return (
    <div
      onScroll={() => setTest(JSON.stringify(isInViewport("footerid")))}
      className="h-[600px] overflow-y-scroll px-1.5 pt-1.0 pb-2.0  grid md:grid-cols-2 grid-cols-1 gap-4 bg-slate-300 border border-teal-700 rounded"
    >
      <div className="col-span-1 flex flex-col gap-2 justify-start ">
        <Personal />
        <Academy />
        <Experiences />
      </div>
      <div className="col-span-1 flex flex-col justify-end gap-3">
        {/* contact & social profiles */}
        <FindMe />
        <Interests />
        <Hobbies />
        <HireMe />
      </div>
       
    </div>
  );
}
