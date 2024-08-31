import React from "react";

export default function DevSkill({ title, list }) {
  return (
    <div className="sm:col-span-1 col-span-3 px-3">
      <span className="font-mono bg-slate-400 text-green-950 block text-center">{title}</span>

      <ul>
        {list.map((itm) => {
          return <li key={itm}>{itm}</li>;
        })}
      </ul>
    </div>
  );
}
