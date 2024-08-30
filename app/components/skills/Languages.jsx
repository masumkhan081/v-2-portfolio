import Github from "@/public/icons/Github";
import React from "react";

import { FaClipboardList } from "react-icons/fa";
import { HiExternalLink } from "react-icons/hi";
import LanguageUnit from "../common/LanguageUnit";
import { languages } from '../../data/skill.data'
import SKillTitle from "../common/SkillTitle";
//
export default function Languages() {

  return (
    <>
      <SKillTitle skillName="Languages" />
      <ul className=" space-y-2  my-3 text-sm ">
        {languages.map(({ name, src, level }, ind) => { return <LanguageUnit key={ind} langName={name} githubLink={src} level={level} /> })}
      </ul>
    </>
  );
}
