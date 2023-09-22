import React from "react";
import ListItem from "../commonUI/ListItem";

export default function HireMe() {
  const positions = ["Full Stack Developer", "Back-end Developer", "Front-end Developer"];
  return (
    <>
      {positions.map((position, ind) => {
        return <ListItem key={ind} plainText={position}></ListItem>;
      })}
    </>
  );
}
