import React from 'react'

export default function ProjectTitle({name}) {
  return (
            <h4 className=" text-center font-sans rounded-lg font-bold text-lg text-yellow-100 bg-teal-900 shadow-lg shadow-teal-600 px-2 w-fit mx-auto">
            <hr className="w-10  h-3 border-t-2 border-teal-600 rounded-lg  mx-auto shadow-lg shadow-teal-500" />{" "}
            {name}
          </h4>
  )
}
