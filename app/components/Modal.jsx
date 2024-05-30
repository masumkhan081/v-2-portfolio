import React, { useRef, useEffect, useState } from "react";

import Logo from "../icons/read.svg";

export default function Modal({ visible, click }) {
  //
  const dropdownRef = useRef(null);
  const handleClickOutside = (e) => {
    if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
      click(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const toggleDropdown = () => {
    click(false);
  };

  return (
    <div className="nav_drop_down  " ref={dropdownRef}>
      <button
        className="px-4 py-1 rounded-lg bg-slate-300 border-2 border-orange-900"
        onClick={() => toggleDropdown()}
      >
        X
      </button>
      <div className=" ">i am modal body ..</div>
      <div className=" ">i am modal body ..</div>

      <div className="App">
        <img src={ReactLogo} alt="React Logo" />
      </div>
      <div className=" ">i am modal body ..</div>
      <div className=" ">i am modal body ..</div>
    </div>
  );
}
