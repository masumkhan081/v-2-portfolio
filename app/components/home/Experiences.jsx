import React from "react";
import { FaGraduationCap, FaUniversity } from "react-icons/fa";
import ListItem from "../common/ListItem";
import AboutTitle from "../common/AboutTitle";
import { experiences } from "../../data/experience.data";

export default function Experiences() {
  //

  return (
    <>
      <div className="w-1/2"><AboutTitle title="Experiences" /></div>
      <ul className="ps-2">
        {experiences.map((workExperience, ind) => {
          return (
            <li key={ind} className="flex gap-2 text-0.75/1.25">
              <span className="font-semibold ">{workExperience.title}</span>
              {workExperience.duration}
              <a
                href={workExperience.organizatio_website}
                target="_blank"
                className="text-blue-500"
              >
                {workExperience.organization}
              </a>
            </li>
          );
        })}
      </ul>
    </>
  );
}
