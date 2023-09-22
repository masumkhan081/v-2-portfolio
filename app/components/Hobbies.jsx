import React from "react";
import Image from "next/image";
// icon & images
import Cricket from "../resources/icons/cricket.png";
import Fishing from "../resources/icons/fishing.png";
import Game from "../resources/icons/game.png";
import Reading from "../resources/icons/reading.png";
import Travel from "../resources/icons/travel.png";
import Travel2 from "../resources/icons/travel-2.png";

export default function Hobbies() {

  const hobb = [Fishing, Reading, Travel2, Game, Cricket];

  return (
    <>
      {hobb.map((hobby,ind) => {
        return <Image key={ind} src={hobby} className="icn_socials"/>
      })}
    </>
  );
}
