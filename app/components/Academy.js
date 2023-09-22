import React from "react";
import {
  BsFill1CircleFill,
  BsFill2CircleFill,
  BsFill3CircleFill,
} from "react-icons/bs";
import ListItem from "../commonUI/ListItem";

export default function Academy() {
  const educations = [
    { title: "SSC", desc: "(sci), Sylhet Govt. Pilot High School", icon: <BsFill1CircleFill /> },
    { title: "HSC", desc: "(sci), Beanibazar Govt College", icon: <BsFill1CircleFill /> },
    { title: "B.Sc", desc: "CSE, North East University BD", icon: <BsFill1CircleFill /> },
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
