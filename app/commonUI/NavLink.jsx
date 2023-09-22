import Image from "next/image";
import React from "react";

export default function NavLink({ href, txt, icon, active }) {
  return (
    <a
      href={href}
      className={active ? ` nav_link  shadow-sm shadow-teal-400` : `nav_link`}
    >
      {icon}
      {txt}
    </a>
  );
}
