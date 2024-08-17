import React from "react";
import { AiFillHome } from "react-icons/ai";
import { ImLocation2 } from "react-icons/im";
import { BsFillPersonFill } from "react-icons/bs";
import ListItem from "../UI-shared/ListItem";
import Image from "next/image";
import MasumK from "../../public/images/mk-nobg.png";

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
    <ul className="ps-2">
      <Image className="w-52 h-58 rounded-md  " src={MasumK} alt="Masum Khan" />
      {persInfo.map((info, ind) => {
        return <ListItem key={ind} plainText={info.data} icon={info.icon} />;
      })}
    </ul>
  );
}
