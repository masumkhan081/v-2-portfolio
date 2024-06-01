import Image from "next/image";
import React from "react";

export default function NavLink({ key, href, txt, icon, active, download }) {
  return (
    <a
      key={key}
      href={href}
      download={download}
      className={
        active
          ? ` nav_link shadow shadow-teal-500 rounded-t-md`
          : `nav_link rounded-b-md`
      }
    >
      <span className="text-opacity-50">{icon}</span>
      {txt}
    </a>
  );
}
