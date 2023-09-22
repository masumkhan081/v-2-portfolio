import React from "react";
import ListItem from "../commonUI/ListItem";

export default function Interests() {
  const interests = [
    "API First Development",
    "Serverless arcitecture",
    "Progressive Web Apps",
    "Deep Learning",
  ];
  return (
    <>
      {interests.map((interest, ind) => {
        return <ListItem key={ind} plainText={interest} />;
      })}
    </>
  );
}
