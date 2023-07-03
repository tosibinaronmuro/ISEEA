import Image from "next/image";
import React from "react";

const History = () => {
  return (
    <div className="  min-h-[70vh] ">
      {/* title */}
      <div className="bg-secondary text-tertiary flex justify-center items-center ">
        <div className="border-b border-tertiary w-10 lg:w-40 md:w-40 m-2"></div>
        <p className="font-garmond text-4xl lg:text-6xl ">Our History</p>
        <div className="border-b border-tertiary w-10 lg:w-40 md:w-40 m-2"></div>
      </div>
      {/* image */}
      <div className="flex flex-col overflow-hidden justify-center items-center mt-10 relative">
        <div className=" w-[90%] lg:w-[80%]   h-[40vh] lg:h-[60vh]   ">
          <Image
            src="/images/team-photo.jpg"
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
        <div className="bg-whiteRgba w-[50%] h-[20vh] md:h-[25vh] flex flex-col justify-center items-center   lg:h-[30vh] absolute bottom-0 left-50 p-2 lg:p-14">
          <p className="flex justify-center mx-[10%]  lg:justify-start md:justify-start font-garmond text-lg lg:text-3xl text-tertiary  lg:m-auto md:m-auto">
            Here is a recap of our journey
          </p>
          <p className="font-Poiret text-xs font-bold  lg:text-lg text-tertiary  md:p-4 lg:p-0  mx-[10%]">
          Embark on a transformative journey as we trace the impactful milestones that shape ISEEA's rich history.
          </p>
        </div>
      </div>

      {/* content */}
      <div className="bg-white flex flex-col  pb-8 pt-5  pl-[10%] pr-[10%] ">


      </div>
      
      
      
      
      </div>
        
  )
}

export default History