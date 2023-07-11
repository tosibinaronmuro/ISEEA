"use client";
import Timeline from "@/components/history-components/timeline";
import Image from "next/image";
import React, { useState } from "react";
import Link from "next/link";

const History = () => {
  const [fileUrl, setFileUrl] = useState("");

  const handleClick = () => {
    // Set the file URL to the path of the PDF file
    setFileUrl("/pdfs/ISEEAIMPACTREPORT.pdf");
  };
  return (
    <div className="  min-h-[70vh] ">
      {/* title */}
      <div className="bg-secondary text-tertiary flex justify-center items-center ">
        <div className="border-b border-tertiary w-10 lg:w-40 md:w-40 m-2"></div>
        <p className="font-garmond text-4xl font-bold lg:text-6xl ">
          Our History
        </p>
        <div className="border-b border-tertiary w-10 lg:w-40 md:w-40 m-2"></div>
      </div>
      {/* image */}
      <div className="flex flex-col overflow-hidden justify-center items-center mt-10 relative">
        <div className=" w-[90%] lg:w-[80%]   h-[40vh] lg:h-[60vh]   ">
          <Image
            src="/images/history.jpg"
            alt="team photo"
            width={0}
            height={0}
            sizes="100vw"
            style={{
              objectFit: "cover",
              paddingRight: "10%",
              paddingLeft: "10%",
            }}
            fill
            priority
          />
        </div>
        {/* <div className="bg-whiteRgba w-[50%]  min-h-[15vh] md:min-h-[25vh] flex flex-col justify-center items-center   lg:h-[30vh] absolute bottom-0 left-50 p-2 lg:p-14">
          <p className="flex justify-center mx-[10%]  lg:justify-start md:justify-start font-garmond text-lg lg:text-3xl text-white  lg:m-auto md:m-auto">
            Here is a recap of our journey
          </p>
          <p className="font-Poiret text-xs lg:font-bold  lg:text-lg text-white  md:p-4 lg:p-0  mx-[10%]">
            Embark on a transformative journey as we trace the impactful
            milestones that shape ISEEA's rich history.
          </p>
        </div> */}
        <div className="bg-blackRgba w-[80%]   blackRgba h-[40vh] lg:h-[60vh] flex flex-col justify-center items-center  absolute bottom-0 left-50 p-2  ">
          <div className="w-[55%] h-auto    ">
            <p className="flex justify-start font-garmond text-base font-bold lg:text-4xl  text-white">
              Here is a recap of our journey
            </p>
            <p className="font-Poiret text-xs   lg:text-lg text-white  md:p-4 lg:p-0   ">
              Embark on a transformative journey as we trace the impactful
              milestones that shape ISEEA's rich history.
            </p>
          </div>
        </div>
      </div>

      {/* content */}
      <div className="bg-white flex flex-col  pb-8 pt-5  pl-[10%] pr-[10%] ">
        <Timeline />
      </div>
      <div className="flex justify-center items-center spaxe-x-6  bg-black  p-4">
        <p className="mx-5 font-garmond text-secondary font-bold text-xl">
          ISEEA Impact Report
        </p>
        
          <a href={fileUrl} download>
            <button onClick={handleClick} className="text-white bg-yellow-400 hover:bg-yellow-500 focus:outline-none focus:ring-4 focus:ring-yellow-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2  ">Download PDF</button>
          </a>
         
      </div>
    </div>
  );
};

export default History;
