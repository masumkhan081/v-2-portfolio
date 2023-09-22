import React from "react";
import { AiFillHome } from "react-icons/ai";
import { ImLocation2 } from "react-icons/im";
import { BsFillPersonFill } from "react-icons/bs";
import ListItem from "../commonUI/ListItem";

export default function Personal() {
  const persInfo = [
    {
      data: "Abdullah Al Masum khan",
      icon: <BsFillPersonFill />,
    },
    { data: "Beanibazar, Sylhet", icon: <AiFillHome /> },
    {
      data: "Khadim-Shahporan, Sylhet Sadar",
      icon: <AiFillHome />,
    },
    {
      data: "Sagufta, Mirpur-12, Dhaka",
      icon: <ImLocation2 />,
    },
  ];
  return (
    <>
      {persInfo.map((info) => {
        return <ListItem plainText={info.data} icon={info.icon} />;
      })}
    </>
  );
}
