"use client"
import React, {useState} from "react";


const Story = ({ story, author }) => {
  const [readMore, setReadMore]=useState(false)
  return (
    <div className="rounded-t-xl relative bg-black text-white  p-4  mt-5 lg:p-8">
      <span className="absolute inset-x-0 rounded-b-xl bottom-0 h-1 bg-gradient-to-r from-black to-primary"></span>
      <div className="absolute right-0 bottom-0 bg-primary h-14  flex justify-center items-center p-2 rounded-tl-2xl ">
        <p className="text-sm font-medium font-garmond text-black  uppercase tracking-widest ">
          {author}
        </p>
      </div>
      <div className="flex items-start sm:gap-8">
        <div>
          <p className={readMore ? "mt-1 text-lg   font-Poiret text-justify  pb-6":"mt-1 text-lg line-clamp-6  lg:line-clamp-3 font-Poiret text-justify  pb-6"}>
            <span className="text-4xl font-garmond text-primary">“</span>
            {story}
            <span className="text-4xl font-garmond text-primary">”</span>
          </p>
          <div><p onClick={()=>setReadMore(!readMore)} className="font-garmond cursor-pointer mt-4 lg:mt-2 text-primary">Read more</p></div>
        </div>
      </div>
    </div>
  );
};

export default Story;
