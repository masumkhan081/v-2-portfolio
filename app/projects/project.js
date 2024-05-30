import React from "react";
import LinkIcon from "../../public/icons/LinkIcon";
import Youtube from "../../public/icons/Youtube";
import Github from "../../public/icons/Github";
import YT2 from "../../public/icons/YT2";

export default function Project({ name, versions, summary }) {
  return (
    // bg-gradient-to-t from-cyan-800 shadow-teal-500
    <div className=" h-fit md:w-5/12 w-screen rounded-md shadow-md pb-2  bg-teal-900 bg-gradient-to-t from-teal-700 shadow-teal-500">
      <h4 className=" text-center font-sans rounded-lg font-bold text-lg text-yellow-100 bg-teal-900 shadow-lg shadow-teal-600 px-2 w-fit mx-auto">
        <hr className="w-10  h-3 border-t-2 border-teal-600 rounded-lg  mx-auto shadow-lg shadow-teal-500" />{" "}
        {name}
      </h4>

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

            <span className="font-semibold block  border-l-2 border-teal-500 text-green-200 text-md bg-teal-950 w-fit  rounded-r-md px-2 py-0">
              Version-{ver.version}
            </span>

            <div className="flex flex-row flex-wrap justify-center gap-5 text-slate-300">
              <a
                target="_blank"
                href={ver.deploy_link}
                className="text-blue-300 font-mono rounded-lg px-2 py-0 hover:border-b-1 hover:border-teal-500"
              >
                <LinkIcon clsnames="me-1 w-5 h-5 inline" />
                live
              </a>
              <a
                target="_blank"
                href={ver.github_link}
                className="text-blue-300 font-mono  rounded-lg px-1 py-0"
              >
                <Github clsnames="me-1 w-5 h-5 inline" />
                Github src
              </a>

              <label
                htmlFor="modal-not-yet"
                className=" py-0 link no-underline text-blue-300"
              >
                <YT2 clsnames="me-1 w-5 inline text-red-600 " /> Brief
              </label>

              <input
                type="checkbox"
                id="modal-not-yet"
                className="modal-toggle"
              />
              <div className="modal ">
                <div className="modal-box relative bg-teal-900 ">
                  <label
                    htmlFor="modal-not-yet"
                    className="btn btn-sm btn-circle absolute right-2 top-2 bg-black text-amber-500"
                  >
                    ✕
                  </label>
                  <h3 className="text-lg font-bold">Sorry !</h3>
                  <span className="badge">
                    No recorded brief on this project is available
                  </span>
                </div>
              </div>
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
