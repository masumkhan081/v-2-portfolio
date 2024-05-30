import React from "react";
import Image from "next/image";
import { hobbies } from "../data/hobbies";

export default function Hobbies() {
  return (
    <>
      {hobbies.map((hobby, ind) => {
        return <Image key={ind} src={hobby} className="icn_socials" />;
      })}
    </>
  );
}
