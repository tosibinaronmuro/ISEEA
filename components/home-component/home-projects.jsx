import React from "react";

const HomeProjects = () => {
  return (
    <div className="flex flex-col mt-10">
      <div>
        <p className="font-garmond text-xl font-bold lg:text-3xl ">PROJECTS</p>
      </div>
      <div className="flex flex-row gap-x-5 lg:py-5">
        
        <div className="rounded-lg border border-gray-100 bg-black font-Poiret  p-4 shadow-sm transition hover:shadow-lg sm:p-6">
          <p className="mt-2 line-clamp-6 text-sm/relaxed lg:text-lg text-white">
          In March 2022, we heard about the story of
    a 15 years old girl in Galadimawa community in FCT-Abuja, who grew up with a father that constantly demoralized her and threatened to kill them. She developed chronic low self-esteem & an intense need to be loved and accepted which made her easy prey for a sexual predator. He took advantage of her low self-esteem & manipulated her into making nude video calls with him which he recorded and eventually, it found its way online. After a visit to the community, we birthed Project H.E.L.P. to teach children within about the importance of self-esteem and its place in preventing sexual abuse. We raised the sum of 193,000 naira through peer to peer fundraising campaign for the project.
          </p>
          <div className="rounded-3xl bg-primary flex justify-start w-fit p-2 mt-4 items-center">
            <a
              href="/projects"
              className="group  hover:animate-waving-hand inline-flex items-center gap-1 text-sm/relaxed lg:text-lg  text-tertiary"
            >
              Find out more
              <span
                aria-hidden="true"
                className="block transition-all group-hover:ms-0.5 rtl:rotate-180"
              >
                &rarr;
              </span>
            </a>
          </div>
        </div>
        <div className="min-h-[10vh]flex justify-center items-center m-auto min-w-[30%] lg:min-h-[10vh] lg:min-w-[18%]">
          <img
            src="/images/homeProjects.jpg"
            alt=""
            className="w-full rounded-2xl"
          />
        </div>
      </div>
    </div>
  );
};

export default HomeProjects;
