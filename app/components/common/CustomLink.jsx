import Image from "next/image";
import React from "react";

export default function CustomLink({ txt, icon, href }) {
  return (
    <a
      target="_blank"
      href={href}
      className="text-blue-300 font-mono rounded-lg px-2 py-0 hover:border-b-1 hover:border-teal-500"
    >
      {icon}
       
      {txt}
    </a>
  );
}
