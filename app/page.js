"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import MK from "../public/images/mk-2.png";
import Phone from "../public/icons/Phone";
import Email from "../public/icons/Email";
// import { animated, useSpring } from "@react-spring/web";
import {
  BsFacebook,
  BsInstagram,
  BsFillTelephoneOutboundFill,
} from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import FindMe from "./components/home/FindMe";
import Hobbies from "./components/home/Hobbies";
import Interests from "./components/home/Interests";
import HireMe from "./components/home/HireMe";
import Academy from "./components/home/Academy";
import Personal from "./components/home/Personal";
import Experiences from "./components/home/Experiences";
//
export default function Home() {
  console.log("server side page top: ", typeof window === "undefined");
  return (
    <div className="flex-grow rounded-sm bg-acquamarine">
      <div
        onScroll={() => setTest(JSON.stringify(isInViewport("footerid")))}
        className=" py-0 my-0 rounded sm:px-3.0 px-1.0 pt-1.0 grid md:grid-cols-2 grid-cols-1 gap-4   "
      >
        <div className="col-span-1 flex flex-col gap-2 justify-start md:items-start sm:items-center items-start">
          <Personal />
          <Academy />
          <Experiences />
        </div>
        <div className=" col-span-1 sm:py-3.0 py-2.0 md:pr-3.0 sm:pr-2.0 pr-1.0  flex gap-2.0 flex-col justify-end md:items-end sm:items-center items-start  ">
          {/* contact & social profiles */}
          <FindMe />
          <Interests />
          <Hobbies />
          <HireMe />
        </div>
      </div>
    </div>
  );
}
