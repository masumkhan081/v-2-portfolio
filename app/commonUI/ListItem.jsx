import Image from "next/image";
import React from "react";

export default function ListItem({ boldText, plainText, icon }) {
  return (
    <li className="flex items-center">
      
       {icon} 
      <span className="font-semibold ms-2">{boldText}</span>
      <span className="font-normal ms-2">{plainText}</span>
    </li>
  );
}
