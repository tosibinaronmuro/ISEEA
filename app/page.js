import WhoWeAre from "@/components/home-component/who-are-we";
import AboutStories from "@/components/home-component/home-stories";
import CoreValues from "@/components/home-component/core-values";
import Mission from "@/components/home-component/mission";
import { coreValues } from "@/utilities/core-values";
import Image from "next/image";
import React from "react";
import Stories from "./stories/page";
import HomeProjects from "@/components/home-component/home-projects";
import Numbers from "@/components/home-component/numbers";

const Home = () => {
  return (
    <div className="  min-h-[70vh] ">
      {/* title */}
      <div className="bg-secondary text-tertiary flex justify-center items-center ">
        <div className="border-b border-tertiary w-10 lg:w-40 md:w-40 m-2"></div>
        <p className="font-garmond text-4xl font-bold lg:text-6xl">I.S.E.E.A</p>
        <div className="border-b border-tertiary w-10 lg:w-40 md:w-40 m-2"></div>
      </div>
      {/* image */}
      <div className="flex flex-col overflow-hidden justify-center items-center mt-10 relative">
        <div className=" w-[90%] px-[10%] lg:w-[80%] blackRgba h-[40vh] lg:h-[60vh]   ">
          <Image
            src="/images/homeHero2.jpg"
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
        <div className="bg-blackRgba w-[80%]   blackRgba h-[40vh] lg:h-[60vh] flex flex-col justify-center items-center  absolute bottom-0 left-50 p-2  ">
          <div className="lg:w-[55%] w-[90%] h-auto lg:mt-44   ">
          <p className="flex justify-start font-garmond text-base font-bold lg:text-4xl text-white">
            INITIATIVE FOR SELF ESTEEM EDUCATION AND ADVOCACY (ISEEA)
          </p>
          <p className="font-Poiret text-xs   lg:text-lg text-white  md:p-4 lg:p-0   ">
            Nurturing Self-Esteem, Empowering Nigerian Youth: ISEEA's
            Transformative Impact through Media, Mentorship, Community Projects and Advocacy.
          </p>
          </div>
        </div>
      </div>

      {/* content */}
      <div className="flex flex-col">
      <div className="bg-white flex flex-col  pb-8 pt-5  pl-[10%] pr-[10%] ">
        <WhoWeAre />
        <Mission />
        <div className="flex flex-col">
          <p className="font-garmond text-xl font-bold flex justify-center lg:text-3xl my-2">
            CORE VALUES (I.S.E.E.A)
          </p>
          <div className="flex flex-wrap gap-3 justify-center ">
            {coreValues.map((value) => {
              return <CoreValues value={value.value} text={value.text} key={value.id} />;
            })}
          </div>
        </div>
       
      </div>
      <div className="bg-secondary flex flex-col my-10  pb-8 pt-5 pl-[3%] pr-[3%] lg:pl-[10%] lg:pr-[10%]">
          <AboutStories />
          <HomeProjects/>
        </div>
      <div className="bg-white flex flex-col my-10  pb-8 pt-5 pl-[3%] pr-[3%] lg:pl-[10%] lg:pr-[10%]">
           <Numbers/>
        </div>
      </div>
    </div>
  );
};

export default Home;
