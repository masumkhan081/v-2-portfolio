import React from "react";
import LinkIcon from "../../../public/icons/LinkIcon";
import Youtube from "../../../public/icons/Youtube";
import Github from "../../../public/icons/Github";
import YT2 from "../../../public/icons/YT2";
import CustomLink from "../common/CustomLink";
import ProjectTitle from "../common/ProjectTitle";

export default function Project({ name, versions, summary }) {
  return (
    // bg-gradient-to-t from-cyan-800 shadow-teal-500
    <div className=" h-fit md:w-5/12 w-screen rounded-md shadow-md pb-2  bg-teal-900 bg-gradient-to-t from-teal-700 shadow-teal-500">
      <ProjectTitle name={name} />

      <div className="my-4">
        <span className="font-semibold me-2 block border-l-2 border-teal-500  text-green-200 text-md bg-teal-950 w-fit  rounded-r-md px-2 ">
          Summary
        </span>
        <div className="text-blue-200 px-2"> {summary}</div>
      </div>

      <div className="flex  flex-col justify-center w-full  gap-5 mb-3 ">
        {versions.map((ver, ind) => (
          <div key={ind} className="">
            {/* className="border-l-2 border-teal-900 rounded-s-md pb-1 px-2" */}

            {versions.length > 1 && (
              <span className="font-semibold block  border-l-2 border-teal-500 text-green-200 text-md bg-teal-950 w-fit  rounded-r-md px-2 py-0">
                Version-{ver.version}
              </span>
            )}

            <div className="flex flex-row flex-wrap justify-center gap-5 text-slate-300">
              <CustomLink
                txt="live"
                href={ver.deploy_link}
                icon={<LinkIcon clsnames="me-1 w-5 h-5 inline" />}
              />
              <CustomLink
                txt="Github src"
                href={ver.github_link}
                icon={<Github clsnames="me-1 w-5 h-5 inline" />}
              />
              <CustomLink
                txt="Brief"
                href={"#"}
                icon={<YT2 clsnames="   me-1 w-5 inline text-red-600 " />}
              />
            </div>
            <div className="flex flex-row justify-center gap-5 w-full flex-wrap mt-1 px-2">
              {ver.tools.map((tool, j) => (
                <span
                  key={j}
                  className="bg-slate-400 text-slate-900 h-5 text-sm mt-1 shadow-sm rounded-lg px-1 py-0"
                >
                  {tool}
                </span>
              ))}
            </div>
            {/*  */}
          </div>
        ))}
      </div>
    </div>
  );
}
