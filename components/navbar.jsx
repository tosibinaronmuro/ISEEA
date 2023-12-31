"use client";
import React from "react";
// import useState from 'react'
import Image from "next/image";

export default function Navbar({ fixed }) {
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  return (
    <>
      <nav
        id="top"
        className="relative flex flex-wrap font-garmond items-center justify-between  px-2 py-3 text-tertiary bg-secondary mb-3"
      >
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full lg:ml-10 relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start md:w-auto md:static md:block md:justify-start">
            <a className="block" href="/">
              <span className="sr-only">Home</span>
              <Image
                src="/images/iseea.png"
                alt="ISEEA Logo"
                width={90}
                height={30}
                priority
              />
            </a>

            <button
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
              className="rounded block md:hidden lg:hidden  p-2 text-tertiary transition hover:text-tertiary/75"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
          <div
            className={
              "lg:flex md:flex flex-grow items-center   " +
              (navbarOpen ? " flex  " : " hidden")
            }
          >
            <ul className="flex mr-10 mt-3 lg:mt-none md:mt-none w-full lg:w-auto md:w-auto   flex-col lg:flex-row md:flex-row list-none lg:ml-auto md:ml-auto ">
              <li className=" w-full lg:w-auto transition ease-in-out delay-150 text-tertiary hover:-translate-y-1 hover:scale-105 hover:text-tertiary  duration-300">
                <a
                  className=" lg:inline-flex lg:w-auto w-full   rounded items-center   text-tertiary transition hover:text-tertiary/75 px-3 py-2 flex"
                  href="/"
                >
                  Home
                </a>
              </li>
              <li className=" w-full lg:w-auto transition ease-in-out delay-150 text-tertiary hover:-translate-y-1 hover:scale-105 hover:text-tertiary  duration-300">
                <a
                  className=" lg:inline-flex lg:w-auto w-full   rounded items-center   text-tertiary transition hover:text-tertiary/75 px-3 py-2 flex"
                  href="/history"
                >
                  History
                </a>
              </li>
              <li className=" w-full lg:w-auto transition ease-in-out delay-150 text-tertiary hover:-translate-y-1 hover:scale-105 hover:text-tertiary  duration-300">
                <a
                  className=" lg:inline-flex lg:w-auto w-full   rounded items-center   text-tertiary transition hover:text-tertiary/75 px-3 py-2 flex"
                  href="/projects"
                >
                  Projects
                </a>
              </li>
              <li className=" w-full lg:w-auto transition ease-in-out delay-150 text-tertiary hover:-translate-y-1 hover:scale-105 hover:text-tertiary  duration-300">
                <a
                  className=" lg:inline-flex lg:w-auto w-full   rounded items-center   text-tertiary transition hover:text-tertiary/75 px-3 py-2 flex"
                  href="/stories"
                >
                  Impact
                </a>
              </li>
              <li className=" w-full lg:w-auto transition ease-in-out delay-150 text-tertiary hover:-translate-y-1 hover:scale-105 hover:text-tertiary  duration-300">
                <a
                  className=" lg:inline-flex lg:w-auto w-full   rounded items-center   text-tertiary transition hover:text-tertiary/75 px-3 py-2 flex"
                  href="/team"
                >
                  Team
                </a>
              </li>

              <li className=" w-full lg:w-auto transition ease-in-out delay-150 text-tertiary hover:-translate-y-1 hover:scale-105 hover:text-tertiary  duration-300">
                <a
                  className=" lg:inline-flex lg:w-auto w-full   rounded items-center   text-tertiary transition hover:text-tertiary/75 px-3 py-2 flex"
                  target="_blank"
                  href="https://selfesteemdiary.wordpress.com/"
                >
                  Blog
                </a>
              </li>
              <li>
                <button>
                  <a
                    className="group relative inline-block focus:outline-none focus:ring"
                    href="/donate"
                  >
                    <span className="absolute inset-0 translate-x-1.5 translate-y-1.5 bg-primary transition-transform group-hover:translate-y-0 group-hover:translate-x-0"></span>

                    <span className="relative inline-block border-2 border-current font-Poiret font-semibold px-4 py-2 text-sm   uppercase tracking-widest text-tertiary group-active:text-opacity-75">
                     Donate
                    </span>
                  </a>
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
