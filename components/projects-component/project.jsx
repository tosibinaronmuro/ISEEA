import React from "react";
import Image from "next/image";

const Project = ({ projectName, projectDetails, projectsPhoto }) => {
  return (
    <div
      className="flex flex-col mb-10 mx-[5%] lg:mx-[15%] mt-3 "
    >
      <div className=" bg-slate-600     ">
        <Image
          src={projectsPhoto}
          alt="team photo"
          width={0}
          height={0}
          sizes="100vw"
          style={{
            width: "100%",
            height: "auto",
          }}
          priority
        />
      </div>
      <div className=" text-2xl text-tertiary">
        <p className="bg-primary p-2      py-5 pl-10 pr-[15%]">{projectName}</p>
      </div>
      <div className="bg-secondary     py-5 pl-10 pr-[15%]   ">
        <p className="mt-1 text-lg text-tertiary  font-Poiret text-justify  pb-6">
          {projectDetails}
        </p>
      </div>
    </div>
  );
};

export default Project;
