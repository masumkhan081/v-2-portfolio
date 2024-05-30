"use client";

import React, { useState } from "react";
import { useRouter, usePathname } from "next/navigation";
// image and icons
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { BsInfoCircleFill } from "react-icons/bs";
import { FaLink, FaCode, FaCloudDownloadAlt } from "react-icons/fa";
import Button from "../UI-shared/Button";
import NavLink from "../UI-shared/NavLink";

//
export default function Nav() {
  const [menuFolded, setMenuFolded] = useState(true);
  const router = useRouter();
  const pathname = usePathname();

  const navLinks = [
    {
      text: "About",
      icon: <BsInfoCircleFill className="icn_nav" />,
      href: "/",
    },
    {
      text: "Live Projects",
      icon: <FaLink className="icn_nav" />,
      href: "/projects",
    },
    {
      text: "Skills",
      icon: <FaCode className="icn_nav" />,
      href: "/skills",
    },
    {
      text: "Resume",
      icon: <FaCloudDownloadAlt className="icn_nav" />,
      href: "http://localhost:3000/Resume-mern-stack-masum-khan.pdf",
      download: "Resume-mern-stack-masum-khan.pdf",
    },
  ];

  const styLogic = () =>
    menuFolded
      ? "sm:flex sm:flex-row flex-col hidden gap-4 justify-center items-center text-orange-800 "
      : "flex sm:flex-row flex-col rounded-md gap-3 px-4 ";

  return (
    <div className=" w-full flex flex-row sm:justify-center justify-between items-center sm:px-3.0 px-2.0 py-4 border-2 border-teal-900 rounded-md bg-teal-700 text-pr/600 font-averia font-semibold text-base bg-gradient-to-t from-teal-950 tracking-ls-045 shadow-md shadow-teal-500  ">
      <div className={styLogic()}>
        {navLinks.map((link,key) => {
          return (
            <NavLink
key={key}
              href={link.href}
              txt={link.text}
              icon={link.icon}
              active={pathname === link.href}
              download={link.download}
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
