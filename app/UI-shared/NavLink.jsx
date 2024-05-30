import Image from "next/image";
import React from "react";

export default function NavLink({ key, href, txt, icon, active, download }) {
  return (
    <a
      key={key}
      href={href}
      download={download}
      className={active ? ` nav_link  shadow-sm shadow-teal-400` : `nav_link`}
    >
      {icon}
      {txt}
    </a>
  );
}
