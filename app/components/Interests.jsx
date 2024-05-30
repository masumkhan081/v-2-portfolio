import React from "react";
import ListItem from "../UI-shared/ListItem";
import { interests } from "../data/interests";

export default function Interests() {
  return (
    <>
      {interests.map((interest, ind) => {
        return (
          <ListItem key={ind} plainText={interest.title} icon={interest.icon} />
        );
      })}
    </>
  );
}
