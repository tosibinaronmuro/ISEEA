import Image from "next/image";
import React from "react";
import {ProjectsJSON} from '../../utilities/projects'
import Project from "@/components/projects-component/project";

const Projects = () => {
  return (
    <div className="  min-h-[70vh] ">
      {/* title */}
      <div className="bg-secondary text-tertiary flex justify-center items-center ">
        <div className="border-b border-tertiary w-10 lg:w-40 md:w-40 m-2"></div>
        <p className="font-garmond text-4xl font-bold lg:text-6xl ">Our Projects</p>
        <div className="border-b border-tertiary w-10 lg:w-40 md:w-40 m-2"></div>
      </div>
      {/* image */}
      <div className="flex flex-col overflow-hidden justify-center items-center mt-10 relative">
        <div className=" w-[90%] lg:w-[80%]   h-[40vh] lg:h-[60vh]   ">
          <Image
            src="/images/projectHelpHero2.jpg"
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
        {/* <div className="bg-whiteRgba  w-[50%]  min-h-[15vh] md:min-h-[25vh] flex flex-col justify-center items-center   lg:h-[30vh] absolute bottom-50 right-0 p-2 lg:p-14">
          <p className="flex justify-start font-garmond text-lg lg:text-3xl text-tertiary lg:m-auto">
            Projects and Activities
          </p>
          <p className="font-Poiret text-xs lg:font-bold lg:text-lg text-tertiary  md:p-4 lg:p-0  mx-[10%]">
          Explore our impactful projects and activities that drive positive change, addressing pressing issues and transforming lives.
          </p>
        </div> */}
        <div className="bg-blackRgba w-[80%]   blackRgba h-[40vh] lg:h-[60vh] flex flex-col justify-center items-center  absolute bottom-50 left-50 p-2  ">
        <div className="lg:w-[55%] w-[90%] h-auto lg:mt-44   ">
          <p className="flex justify-start font-garmond text-base font-bold lg:text-4xl  text-white">
          Projects and Activities
          </p>
          <p className="font-Poiret text-xs   lg:text-lg text-white  md:p-4 lg:p-0   ">
          Explore our impactful projects and activities that drive positive change, addresses social issues, and transform lives
          </p>
          </div>
        </div>
        
      </div>

      {/* content */}
      <div className="bg-white flex flex-col  pb-8 pt-5   ">
           <div>
            {
              ProjectsJSON.map((project)=>{
                return(
                  <Project projectDetails={project.projectDetails} projectName={project.projectName} projectsPhoto={project.projectsPhotos}/>
                )
              })
            }
           </div>
        
      </div>
    </div>
  );
};

export default Projects;
