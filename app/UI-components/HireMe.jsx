import React from "react";
import ListItem from "../UI-shared/ListItem";
import AboutTitle from "../UI-shared/AboutTitle";
import Image from "next/image";
import Hireme from "../../public/images/hireme.png";

export default function HireMe() {
  const positions = [
    "Full Stack Developer (MERN/Next)",
    "Back-end Developer",
    "Front-end Developer (Next/React)",
  ];
  return (
    <div className=" rounded-md ">
      <AboutTitle title="Looking For">
        <Image
          src={Hireme}
          className="w-7 h-6 inline float-right bg-slate-200 rounded-e-lg"
          alt="job"
        />
      </AboutTitle>
      <ul>
        <ListItem key={Math.random()} boldText={"Positions:"}></ListItem>
        {positions.map((position, ind) => {
          return <ListItem key={ind} plainText={position}></ListItem>;
        })}
      </ul>
    </div>
  );
}
