"use client";

import React, { useState } from "react";
import { useRouter, usePathname } from "next/navigation";
// image and icons
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { BsInfoCircleFill } from "react-icons/bs";
import { FaLink, FaCode, FaCloudDownloadAlt } from "react-icons/fa";
import Button from "./commonUI/Button";
import NavLink from "./commonUI/NavLink";

//
export default function Nav2() {
  const [menuFolded, setMenuFolded] = useState(true);
  const router = useRouter();
  const pathname = usePathname();

  const navLinks = [
    {
      text: "About",
      icon: <BsInfoCircleFill className="icn_nav" />,
      href: "/",
      click: () => {
        router.push("/");
      },
    },
    {
      text: "Live Projects",
      icon: <FaLink className="icn_nav" />,
      href: "/projects",
      click: () => {
        router.push("/projects");
      },
    },
    {
      text: "Skills",
      icon: <FaCode className="icn_nav" />,
      href: "/skills",
      click: () => {
        router.push("/skills");
      },
    },
    {
      text: "Resume",
      // icon: <BiSolidDownload className="icn_nav" />,
      icon: <FaCloudDownloadAlt className="icn_nav" />,
      href: "./resources/CV masum_khan mern_stack.pdf",
      click: () => {
        router.push("/skills");
      },
    },
  ];

  const styLogic = () =>
    menuFolded
      ? "sm:flex sm:flex-row flex-col hidden gap-4 justify-center items-center text-orange-800 "
      : "flex sm:flex-row flex-col rounded-md gap-3 px-4 ";

  return (
    <div className=" w-full flex flex-row sm:justify-center justify-between items-center sm:px-3.0 px-2.0 py-4 border-2 border-teal-900 rounded-md bg-teal-700 text-pr/600 font-averia font-semibold text-base bg-gradient-to-t from-teal-950 tracking-ls-045 shadow-md shadow-teal-500  ">
      <div className={styLogic()}>
        {navLinks.map((link) => {
          return (
            <NavLink
              href={link.href}
              txt={link.text}
              icon={link.icon}
              active={pathname === link.href}
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
