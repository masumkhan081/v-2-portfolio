import Image from "next/image";
import AboutMe from "./AboutMe";
//
export default function Home() {
  console.log("server side page top: ", typeof window === "undefined");
  return (
    <div className="flex-grow bg-teal-700 border-2 border-teal-700 rounded-md">
      <AboutMe />
    </div>
  );
}
