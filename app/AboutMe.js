"use client";
import React from "react";
import Image from "next/image";
import MK from "./resources/images/mk_avatar.png";
import MasumK from "./resources/images/mk.png";
import Phone from "./resources/icons/Phone";
import Email from "./resources/icons/Email";
import Web2 from "./resources/icons/Web2.png";
import Linkedin from "./resources/icons/Linkedin";
import Github from "./resources/icons/Github";
import Location from "./resources/icons/Location";
import Home from "./resources/icons/Home";
import Cricket from "./resources/icons/cricket.png";
import Fishing from "./resources/icons/fishing.png";
import Game from "./resources/icons/game.png";
import Reading from "./resources/icons/reading.png";
import Travel from "./resources/icons/travel.png";
import Hireme from "./resources/images/hireme.png";
import Travel2 from "./resources/icons/travel-2.png";
import { animated, useSpring } from "@react-spring/web";
import { BsFacebook, BsInstagram } from "react-icons/bs";
import { FaTwitter, FaInstagram } from "react-icons/fa";

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
    <div className="md:px-20 sm:px-10 px-3 min-h-screen h-full bg-slate-100 mx-auto grid sm:grid-cols-2 grid-cols-1 gap-4  rounded-md">
      <div className="w-full mt-2 md:ms-10 sm:ms-0 flex flex-col justify-start align-middle">
        <Image
          style={{ borderRadius: "15px" }}
          className="w-52 h-58 rounded-lg block "
          src={MasumK}
          alt="Masum Khan"
        />

        <ul className="mt-5  ">
          <li className="mb-3 ">
            <span className=" text-2xl block font-mono  ">
              Abdullah Al Masum khan
            </span>
          </li>
          <li>
            <Home clsnames="me-1 inline w-6 h-6 mb-1" />
            Beanibazar, Sylhet
          </li>
          <li>
            <Location clsnames="me-1 inline w-6 h-7 mb-1 text-teal-900  font-bold" />
            Khadim-Shahporan, Sylhet Sadar
          </li>
        </ul>
        <animated.span
          style={{
            ...springs,
          }}
          className="bg-teal-800 w-1/2  text-orange-300 block text-center font-mono rounded-e-lg "
        >
          Academy
        </animated.span>
        <ul className="mt-3">
          <li>
            <span className="">HSC </span>
            <span className="">(sci), Beanibazar Govt College</span>
          </li>
          <li>
            <span className="">SSC</span>
            <span className="">(sci), Sylhet Govt Pilot High School</span>
          </li>
          <li>
            <span className="">B.Sc</span>
            <span className="">In CSE, North East University BD</span>
          </li>
        </ul>
      </div>
      <div className="w-3/5 mx-auto flex flex-col gap-4 mt-5">
        <div>
          <animated.span
            style={{
              ...springs,
            }}
            className="bg-teal-800 text-orange-300 block text-center font-mono rounded-e-lg overflow-hidden"
          >
            <span className="overflow-hidden">Looking For</span>
            <Image
              src={Hireme}
              className="w-7 h-6 inline float-right bg-slate-200 rounded-e-lg"
            />
          </animated.span>
          <span className="list-none text-center block">
            Positions (Junior/Mid-level)
          </span>
          <ul className="list-decimal list-inside">
            <li>Full Stack Developer</li>
            <li>Back-end Developer</li>
            <li>Front-end Developer</li>
          </ul>
        </div>
        <div>
          <animated.span
            style={{
              ...springs,
            }}
            className="bg-teal-800 text-orange-300 block text-center font-mono rounded-e-lg "
          >
            Interest
          </animated.span>
          <ul>
            <li>API First Development</li>
            <li>Serverless arcitecture</li>
            <li>Progressive Web Apps</li>
            <li>Deep Learning</li>
          </ul>
        </div>
        <div>
          <animated.span
            style={{
              ...springs,
            }}
            className="bg-teal-800 text-orange-300 block text-center font-mono rounded-e-lg"
          >
            Hobbies
          </animated.span>
          <div className="flex flex-row flex-wrap justify-around mt-3 mb-2">
            <Image src={Fishing} className="w-7 h-7"></Image>
            <Image src={Reading} className="w-7 h-7"></Image>
            <Image src={Travel2} className="w-7 h-7"></Image>
            <Image src={Game} className="w-7 h-7"></Image>
            <Image src={Cricket} className="w-7 h-7"></Image>
          </div>
        </div>
        <div>
          <animated.span
            style={{
              ...springs,
            }}
            className="bg-teal-800 text-orange-300 block text-center font-mono rounded-e-lg "
          >
            Find Me
          </animated.span>
          <div className="flex flex-col flex-wrap gap-2 mt-3">
            <span>
              <Phone clsnames="me-1 w-6 h-6 inline" /> +880 1833347848
            </span>
            <span>
              <Email clsnames="me-1 w-6 h-6 inline" />
              masumkhan081@gmail.com
            </span>
          </div>
          <div className="flex flex-row flex-wrap justify-between mt-5">
            <a href="https://masumk081.web.app" target="_blank">
              <Image
                src={Web2}
                className="w-8 h-8 me-2 inline hover:w-10 hover:h-10  "
              />
            </a>
            <a href="https://www.linkedin.com/in/masumkhan" target="_blank">
              <Linkedin clsnames="inline w-8 h-8 me-1 hover:w-10 hover:h-10" />
            </a>
            <a href="https://github.com/masumkhan081" target="_blank">
              <Github clsnames="inline w-8 h-8 me-1 hover:w-10 hover:h-10" />
            </a>
            <a href="https://www.facebook.com/fanofnietzsche" target="_blank">
              <BsFacebook className="inline w-7 h-7 me-1 hover:w-9 hover:h-9 text-blue-700" />
            </a>
            <a href="https://twitter.com/MasumKhan081" target="_blank">
              <FaTwitter className="inline w-7 h-7 me-1 hover:w-9 hover:h-9 text-blue-400" />
            </a>
            <a href="https://www.instagram.com/masumkhan081" target="_blank">
              <FaInstagram className="inline w-7 h-7 me-1 hover:w-9 hover:h-9 text-red-700" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
