"use client";
import React from "react";
// import useState from 'react'
import Image from "next/image";

export default function Navbar({ fixed }) {
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  return (
    <>
      <nav className="relative flex flex-wrap items-center justify-between  px-2 py-3 bg-[#EDE7E3] mb-3">
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full lg:ml-10 relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start md:w-auto md:static md:block md:justify-start">
            <a className="block" href="/">
              <span className="sr-only">Home</span>
              <Image
                src="/iseea.png"
                alt="ISEEA Logo"
                width={60}
                height={10}
                priority
              />
            </a>

            <button
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
              className="rounded block md:hidden lg:hidden  p-2 text-gray-600 transition hover:text-gray-600/75"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
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
            <ul className="flex mr-10 mt-3 lg:mt-none md:mt-none   flex-col lg:flex-row md:flex-row list-none lg:ml-auto md:ml-auto ">
              <li className=" w-full lg:w-auto transition ease-in-out delay-150 text-gray-500 hover:-translate-y-1 hover:scale-105 hover:text-gray-500  duration-300">
                <a
                  className=" lg:inline-flex lg:w-auto sm:w-full   rounded items-center   text-gray-500 transition hover:text-gray-500/75 px-3 py-2 flex"
                  href="#pablo"
                >
                  About
                </a>
              </li>
              <li className=" w-full lg:w-auto transition ease-in-out delay-150 text-gray-500 hover:-translate-y-1 hover:scale-105 hover:text-gray-500  duration-300">
                <a
                  className=" lg:inline-flex lg:w-auto sm:w-full   rounded items-center   text-gray-500 transition hover:text-gray-500/75 px-3 py-2 flex"
                  href="#pablo"
                >
                  Career
                </a>
              </li>
              <li className=" w-full lg:w-auto transition ease-in-out delay-150 text-gray-500 hover:-translate-y-1 hover:scale-105 hover:text-gray-500  duration-300">
                <a
                  className=" lg:inline-flex lg:w-auto sm:w-full   rounded items-center   text-gray-500 transition hover:text-gray-500/75 px-3 py-2 flex"
                  href="#pablo"
                >
                  History
                </a>
              </li>
              <li className=" w-full lg:w-auto transition ease-in-out delay-150 text-gray-500 hover:-translate-y-1 hover:scale-105 hover:text-gray-500  duration-300">
                <a
                  className=" lg:inline-flex lg:w-auto sm:w-full   rounded items-center   text-gray-500 transition hover:text-gray-500/75 px-3 py-2 flex"
                  href="#pablo"
                >
                  Services
                </a>
              </li>
              <li className=" w-full lg:w-auto transition ease-in-out delay-150 text-gray-500 hover:-translate-y-1 hover:scale-105 hover:text-gray-500  duration-300">
                <a
                  className=" lg:inline-flex lg:w-auto sm:w-full   rounded items-center   text-gray-500 transition hover:text-gray-500/75 px-3 py-2 flex"
                  href="#pablo"
                >
                  Projects
                </a>
              </li>
              <li className=" w-full lg:w-auto transition ease-in-out delay-150 text-gray-500 hover:-translate-y-1 hover:scale-105 hover:text-gray-500  duration-300">
                <a
                  className=" lg:inline-flex lg:w-auto sm:w-full   rounded items-center   text-gray-500 transition hover:text-gray-500/75 px-3 py-2 flex"
                  target="_blank"
                  href="https://selfesteemdiary.wordpress.com/"
                >
                  Blog
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
