import React from "react";
import { FaGraduationCap, FaUniversity } from "react-icons/fa";

import ListItem from "../common/ListItem";
import AboutTitle from "../common/AboutTitle";

export default function Academy() {
  const educations = [
    {
      title: "SSC",
      desc: "(Sci), Sylhet Govt. Pilot High School",
      icon: <FaUniversity />,
    },
    {
      title: "HSC",
      desc: "(Sci), Beanibazar Govt College",
      icon: <FaUniversity />,
    },
    {
      title: "B.Sc",
      desc: "(CSE), North East University BD",
      icon: <FaUniversity />,
    },
  ];
  return (
    <>
      <div className="w-1/2"><AboutTitle title="Academy" /></div>
      <ul className="ps-2">
        {educations.map((eduItem, ind) => {
          return (
            <ListItem
              key={ind}
              boldText={eduItem.title}
              plainText={eduItem.desc}
              icon={eduItem.icon}
            />
          );
        })}
      </ul>
    </>
  );
}
