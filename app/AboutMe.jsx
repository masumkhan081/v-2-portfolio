"use client";
import React from "react";
import Image from "next/image";
import MK from "./resources/images/mk_avatar.png";
import MasumK from "./resources/images/mk.png";
import Phone from "./resources/icons/Phone";
import Email from "./resources/icons/Email";

import Hireme from "./resources/images/hireme.png";
import { animated, useSpring } from "@react-spring/web";
import {
  BsFacebook,
  BsInstagram,
  BsFillTelephoneOutboundFill,
} from "react-icons/bs";

import { MdEmail } from "react-icons/md";

import SocialProfiles from "./commonUI/SocialProfiles";
import Hobbies from "./components/Hobbies";
import Interests from "./components/Interests";
import HireMe from "./components/HireMe";
import AboutTitle from "./commonUI/AboutTitle";
import ListItem from "./commonUI/ListItem";
import Academy from "./components/Academy";
import Personal from "./components/Personal";

export default function AboutMe() {
  const springs = useSpring({
    from: {
      y: 0,
      width: "50%",
      opacity: "0.5",
      textShadow: "2px 2px 4px #000000",
    },
    to: { y: 0, width: "100%", opacity: "1" },
  });

  return (
    <div className="h-full px-1.5 pt-2.0 pb-1.5 grid md:grid-cols-2 grid-cols-1 gap-4 bg-slate-200 border-2 border-teal-700 rounded-md">
      <div className="col-span-1  flex flex-col gap-4 justify-start ">
        <Image
          className="w-52 h-58 rounded-md  "
          src={MasumK}
          alt="Masum Khan"
        />
        <ul className="ps-2">
          <Personal />
        </ul>
        <AboutTitle title="Academy" />
        <ul className="ps-2">
          <Academy />
        </ul>
      </div>
      <div className="col-span-1 flex flex-col gap-3">
        <div className=" rounded-md ">
          <AboutTitle title="Looking For">
            <Image
              src={Hireme}
              className="w-7 h-6 inline float-right bg-slate-200 rounded-e-lg"
            />
          </AboutTitle>
          <ul>
            <HireMe />
          </ul>
        </div>
        <div>
          <AboutTitle title="Interest" />
          <ul>
            <Interests />
          </ul>
        </div>
        <div>
          <AboutTitle title="Hobbies" />
          <div className="flex sm:gap-6 gap-3 flex-wrap ps-2 py-3 ">
            <Hobbies />
          </div>
        </div>
        <div>
          <AboutTitle title="Find Me" />
          <ul className="flex flex-col flex-wrap gap-2 py-2 ps-2">
            <ListItem
              plainText="+880 1833347848"
              icon={<BsFillTelephoneOutboundFill />}
            />
            <ListItem plainText="masumkhan081@gmail.com" icon={<MdEmail />} />
          </ul>
          <div className="flex sm:gap-5 gap-3 flex-wrap ps-2 py-2">
            <SocialProfiles />
          </div>
        </div>
      </div>
    </div>
  );
}
