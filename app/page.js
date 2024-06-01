import Image from "next/image";
import AboutMe from "./about-me/AboutMe";

//
export default function Home() {
  console.log("server side page top: ", typeof window === "undefined");
  return (
    <div className="flex-grow bg-slate-100  rounded-sm">
      <AboutMe />
    </div>
  );
}
