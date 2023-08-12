"use client"
import React, {useState} from "react";

const Interventions = ({number,story }) => {
  const [readMore, setReadMore]=useState(false)
  return (
    <div className="rounded-t-xl relative bg-black p-4  mt-5    lg:p-8">
      <span className="absolute inset-x-0 rounded-b-xl bottom-0 h-1 bg-gradient-to-r from-black to-primary"></span>
      <div className="flex items-start  gap-5 flex-row">
       
        <div className=" ">
        <div className=" text-primary   flex float-left pr-4  items-center  ">
            <p className="text-[5rem]  lg:text-[10rem] md:text-[10rem]  font-crimson ">{number}</p>
        </div>
          
          <p className={readMore ? "mt-1 text-lg text-white font-Poiret text-justify  pb-6":"  line-clamp-3  lg:line-clamp-2   mt-1 text-lg text-white font-Poiret text-justify  pb-6"}>
            <span className="text-4xl font-garmond text-primary">“</span>
            {story}
            <span className="text-4xl font-garmond text-primary">”</span>
          </p>
          <div className="w-full"><p onClick={()=>setReadMore(!readMore)} className="font-garmond  flex justify-end cursor-pointer mt-4 lg:mt-2 text-primary">Read more</p></div>
        </div>
      </div>
    </div>
  );
};

export default Interventions;
