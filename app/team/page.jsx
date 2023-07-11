import { lazy } from "react";
const TeamMember = lazy(() => import("@/components/team-components/Team-card"));
import Image from "next/image";
import React from "react";
import { teamMembers } from "@/utilities/team-members";

const Team = () => {
  return (
    <div className="  min-h-[70vh] ">
      {/* title */}
      <div className="bg-secondary text-tertiary flex justify-center items-center ">
        <div className="border-b border-tertiary w-10 lg:w-40 md:w-40 m-2"></div>
        <p className="font-garmond text-4xl font-bold lg:text-6xl ">Our Team</p>
        <div className="border-b border-tertiary w-10 lg:w-40 md:w-40 m-2"></div>
      </div>
      {/* image */}
      <div className="flex flex-col overflow-hidden justify-center items-center mt-10 relative">
        <div className=" w-[90%] lg:w-[80%]   h-[40vh] lg:h-[60vh]   ">
          <Image
            src="/images/team-hero.jpg"
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
        {/* <div className="bg-whiteRgba w-[50%]  min-h-[15vh] md:min-h-[25vh] flex flex-col justify-center items-center   lg:h-[30vh] absolute bottom-0 right-0 p-2 lg:p-14">
          <p className="flex justify-start font-garmond text-lg lg:text-3xl text-tertiary mr-[10%] lg:mr-[30%]">
            Meet Our Dedicated Team.
          </p>
          <p className="font-Poiret text-xs lg:font-bold  lg:text-lg text-tertiary mr-[20%] md:p-4 lg:p-0 lg:mr-[30%]">
            We've assembled an excellent team of passionate volunteers, driven
            by a shared commitment to creating positive change.
          </p>
        </div> */}
         <div className="bg-blackRgba w-[80%]   blackRgba h-[40vh] lg:h-[60vh] flex flex-col justify-center items-center  absolute bottom-50 left-50 p-2  ">
          <div className="w-[55%] h-auto mt-44   ">
          <p className="flex justify-start font-garmond text-base font-bold lg:text-4xl text-white">
          Meet Our Dedicated Team.
          </p>
          <p className="font-Poiret text-xs   lg:text-lg text-white  md:p-4 lg:p-0   ">
          We've assembled an excellent team of passionate volunteers, driven
            by a shared commitment to creating positive change.
          </p>
          </div>
        </div>
      </div>

      {/* content */}
      <div className="bg-white  pb-8 pt-5  pl-[10%] pr-[10%] ">
        <div className="flex flex-col space-y-8">
          <p className="font-garmond text-xl font-bold lg:text-3xl ">
          OUR MANAGEMENT TEAM
          </p>
          <div className="  flex flex-wrap gap-3 justify-center  ">
            {teamMembers.map((member) => {
              if (member.department == "management") {
                return (
                  <TeamMember
                    name={member.name}
                    photo={member.photo}
                    bio={member.bio}
                    position={member.position}
                    key={member.id}
                  />
                );
              }
            })}
          </div>
        </div>
        <div className="flex flex-col space-y-8 mt-10">
          <p className="font-garmond  font-bold text-xl lg:text-3xl ">
          OUR SOCIAL MEDIA TEAM
          </p>
          <div className=" flex flex-wrap gap-3 justify-center  ">
            {/* map function here */}
            {teamMembers.map((member) => {
              if (member.department == "socials") {
                return (
                  <TeamMember
                    name={member.name}
                    photo={member.photo}
                    bio={member.bio}
                    position={member.position}
                    key={member.id}
                  />
                );
              }
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
