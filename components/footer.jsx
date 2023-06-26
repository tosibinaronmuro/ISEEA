import React from "react";
import Image from "next/image";
import Contact from "./footer-components/contact";
import Socials from "./footer-components/socials";
import Navigation from "./footer-components/navigation";
const Footer = () => {
  const currentDate = new Date();

  const currentYear = currentDate.getFullYear();
  return (
    <footer className="bg-[#EDE7E3]">
      <div className="relative mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8 lg:pt-24">
        <div className="absolute end-4 top-4 sm:end-6 sm:top-6 lg:end-8 lg:top-8">
          <a
            className="inline-block rounded-full animate-bounce bg-[#82C0CC] p-2 text-black shadow transition hover:bg-teal-500 sm:p-3 lg:p-4"
            href="#MainContent"
          >
            <span className="sr-only">Back to top</span>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fill-rule="evenodd"
                d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z"
                clip-rule="evenodd"
              />
            </svg>
          </a>
        </div>

        <div className="lg:flex lg:items-end lg:justify-between">
          <div>
            <div className="flex justify-center lg:justify-start">
              <Image
                src="/iseea.png"
                alt="Vercel Logo"
                //   className="dark:invert"
                width={100}
                height={24}
                priority
              />
            </div>

            <p className="mx-auto mt-6 max-w-md text-center leading-relaxed text-gray-500 lg:text-left">
              promoting awareness on the importance of self-esteem, the dangers
              of low self-esteem, and to be a catalyst for a youthful population
              that is more self-aware and resilient.
            </p>
          </div>
          <div className="flex flex-col space-y-5  ">
            <Contact />
            <Navigation />
          </div>
        </div>
        <Socials />
        <p className="mt-5 text-center text-sm text-gray-500 lg:text-center">
          Copyright &copy; {currentYear} ISEEA. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
