import Story from "@/components/stories-components/story";
import Image from "next/image";
import React from "react";
import { InspirationalStories,HumanitarianInterventions } from "@/utilities/stories";
import Interventions from "@/components/stories-components/intervention";

const Stories = () => {
  return (
    <div className="  min-h-[70vh] ">
      {/* title */}
      <div className="bg-secondary text-tertiary flex justify-center items-center ">
        <div className="border-b border-tertiary w-10 lg:w-40 md:w-40 m-2"></div>
        <p className="font-garmond text-4xl lg:text-6xl ">Our Stories</p>
        <div className="border-b border-tertiary w-10 lg:w-40 md:w-40 m-2"></div>
      </div>
      {/* image */}
      <div className="flex flex-col overflow-hidden justify-center items-center mt-10 relative">
        <div className=" w-[90%] lg:w-[80%]   h-[40vh] lg:h-[60vh]   ">
          <Image
            src="/images/storyHero.jpeg"
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
        <div className="bg-whiteRgba w-[50%] h-[31vh] md:h-[25vh] flex flex-col justify-center items-center   lg:h-[30vh] absolute bottom-0 left-0 p-2 lg:p-14">
          <p className="flex justify-start font-garmond text-lg lg:text-3xl text-tertiary ml-[10%] lg:ml-[30%]">
            Be inspired by our Stories
          </p>
          <p className="font-Poiret text-xs font-bold  lg:text-lg text-tertiary ml-[20%] md:p-4 lg:p-0 lg:ml-[30%]">
            Discover the extraordinary journeys and inspirational stories that
            fuels our mission for a better world.
          </p>
        </div>
      </div>

      {/* content */}
      <div className="bg-white flex flex-col  pb-8 pt-5  pl-[10%] pr-[10%] ">
        <p className="font-garmond text-xl lg:text-3xl ">
          IMPACT STORIES FROM OUR FACEBOOK GROUP
        </p>
        {InspirationalStories.map((story) => {
          return <Story author={story.author} story={story.story} />;
        })}
      </div>
      <div className="bg-white flex flex-col  pb-8 pt-5  pl-[10%] pr-[10%] ">
        <p className="font-garmond text-xl lg:text-3xl ">
          HUMANITARIAN INTERVENTIONS
        </p>
        {HumanitarianInterventions.map((story) => {
          return <Interventions story={story.story} number={story.number}/>;
        })}
      </div>
    </div>
  );
};
export default Stories;
