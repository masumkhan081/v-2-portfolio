import Image from "next/image";
import React from "react";

export default function Button({ onClick, txt, icon,style }) {
  return (
    <button onClick={onClick} className={style? `flex items-center btn_nav`:`flex items-center btn_auth_toggler`}>
     {icon} 
      {txt}
     
    </button>
  );
}
