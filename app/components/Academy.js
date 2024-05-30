import React from "react";
import { FaGraduationCap,FaUniversity } from "react-icons/fa";

import ListItem from "../UI-shared/ListItem";

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
    </>
  );
}
