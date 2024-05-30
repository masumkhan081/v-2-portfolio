import React from "react";
import ListItem from "../UI-shared/ListItem";

export default function HireMe() {
  const positions = [
    "Full Stack Developer (MERN/Next)",
    "Back-end Developer",
    "Front-end Developer (Next/React)",
  ];
  return (
    <>
      <ListItem key={Math.random()} boldText={"Positions:"}></ListItem>
      {positions.map((position, ind) => {
        return <ListItem key={ind} plainText={position}></ListItem>;
      })}
    </>
  );
}
