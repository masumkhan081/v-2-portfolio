"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";
// image and icons
import { GrHomeRounded } from "react-icons/gr";
import {
  AiOutlineClose,
  AiOutlineMenu,
  AiOutlineCloudDownload,
  AiOutlineLink,
} from "react-icons/ai";

import { BsInfoCircle, BsInfoCircleFill, BsCodeSlash } from "react-icons/bs";
import { BiSolidDownload } from "react-icons/bi";
import { FaThList, FaLink, FaCode, FaCloudDownloadAlt } from "react-icons/fa";

import Home from "./resources/icons/Home";
import MasumK from "./resources/images/mk_avatar.png";
import { animated, useSpring } from "@react-spring/web";
import navLinks from "./data/navLinks";
import Button from "./commonUI/Button";
import ProjectList from "./project-works/ProjectList";

//
export default function Nav2() {
  const [menuFolded, setMenuFolded] = useState(true);
  const router = useRouter();

  const navLinks = [
    {
      text: "About",
      icon: <BsInfoCircleFill className="icn_nav" />,
      click: () => {
        router.push("/");
      },
    },
    {
      text: "Live Projects",
      icon: <FaLink className="icn_nav" />,
      click: () => {
        router.push("/projects");
      },
    },
    {
      text: "Skills",
      icon: <FaCode className="icn_nav" />,
      click: () => {
        router.push("/skills");
        // setMenuFolded(true);
      },
    },
    {
      text: "Resume",
      // icon: <BiSolidDownload className="icn_nav" />,
      icon: <FaCloudDownloadAlt className="icn_nav" />,
      click: () => {
        setMenuFolded(true);
      },
    },
  ];

  const styLogic = () =>
    menuFolded
      ? "sm:flex sm:flex-row flex-col  hidden gap-4 justify-center items-center text-orange-800 "
      : "flex sm:flex-row flex-col  rounded-md  h-auto flex flex-col gap-4 px-4 ";

  return (
    <div className=" w-full flex flex-row sm:justify-center justify-between items-center sm:px-3.0 px-2.0 py-4 border-2 border-teal-900 rounded-md bg-teal-700 text-pr/600 font-averia font-semibold text-base bg-gradient-to-b from-teal-950 tracking-ls-045 shadow-md shadow-teal-500  ">
      {/* <Image src={MasumK} className="w-2.5 h-2.5 "/> */}
      <div className={styLogic()}>
        {navLinks.map((link) => {
          return (
            <Button
              onClick={() => link.click()}
              txt={link.text}
              icon={link.icon}
              style={"btn_nav"}
            />
          );
        })}
      </div>
      <div className="sm:hidden flex justify-end rounded-full border-2 p-1 border-teal-700 ">
        <Button
        style={"btn_nav"}
          icon={menuFolded ? <AiOutlineMenu /> : <AiOutlineClose />}
          onClick={() => setMenuFolded(!menuFolded)}
        />
      </div>
    </div>
  );
}
