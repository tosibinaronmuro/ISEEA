import WhoWeAre from "@/components/about-component/about";
import AboutStories from "@/components/about-component/about-stories";
import Mission from "@/components/about-component/mission";
import Image from "next/image";
import React from "react";

const History = () => {
  return (
    <div className="  min-h-[70vh] ">
      {/* title */}
      <div className="bg-secondary text-tertiary flex justify-center items-center ">
        <div className="border-b border-tertiary w-10 lg:w-40 md:w-40 m-2"></div>
        <p className="font-garmond text-4xl lg:text-6xl ">About Us</p>
        <div className="border-b border-tertiary w-10 lg:w-40 md:w-40 m-2"></div>
      </div>
      {/* image */}
      <div className="flex flex-col overflow-hidden justify-center items-center mt-10 relative">
        <div className=" w-[90%] lg:w-[80%]   h-[40vh] lg:h-[60vh]   ">
          <Image
            src="/images/aboutHero.jpg"
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
        {/* <div className="bg-white w-[50%] h-[31vh] md:h-[25vh] flex flex-col justify-center items-center   lg:h-[30vh] absolute bottom-0 left-0 p-2 lg:p-14">
          <p className="flex justify-start font-garmond text-lg lg:text-3xl text-tertiary  m-auto">
            Our Vision
          </p>
          <p className="font-Poiret text-xs  lg:text-lg text-tertiary  md:p-4 lg:p-0  mx-[10%]">
            To see an increased awareness of the importance of self-esteem and
            the effects of low self-esteem, and to be a catalyst for a youthful
            population that is more self-aware and resilient.
          </p>
        </div>
        <div className="bg-white w-[50%] h-[31vh] md:h-[25vh] flex flex-col justify-center items-center   lg:h-[30vh] absolute top-0 right-0 p-2 lg:p-14">
          <p className="flex justify-start font-garmond text-lg lg:text-3xl text-tertiary  m-auto">
            Our mission
          </p>
          <p className="font-Poiret text-xs  lg:text-lg text-tertiary  md:p-4 lg:p-0  mx-[10%]">
            To equip young people with the knowledge they need to overcome low
            self-esteem using media, mentorship, partnership with relevant
            stakeholders, advocacy programs, and impact projects in local
            communities across Nigeria.
          </p>
        </div> */}
        <div className="bg-whiteRgba w-[50%] h-[15vh] md:h-[25vh] flex flex-col justify-center items-center   lg:h-[30vh] absolute bottom-50 left-50 p-2 lg:p-14">
          <p className="flex justify-start font-garmond text-lg lg:text-3xl text-tertiary  ">
            Get to know us!
          </p>
          <p className="font-Poiret text-xs  font-bold lg:text-lg text-tertiary  md:p-4 lg:p-0  mx-[10%]">
            Find out who we are and what makes us tick
          </p>
        </div>
      </div>

      {/* content */}
      <div className="bg-white flex flex-col  pb-8 pt-5  pl-[10%] pr-[10%] ">
   <WhoWeAre/>     
<Mission/>
<AboutStories/>

      </div>
    </div>
  );
};

export default History;
