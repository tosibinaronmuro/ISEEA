'use client'
import React from 'react'
// import useState from 'react'
import Image from "next/image";

const Navigation = () => {
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  return (
    <header className="bg-white">
    <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
      <div className="flex h-16 items-center justify-between">
      <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
      <a className="block text-teal-600" href="/">
            <span className="sr-only">Home</span>
            <Image
                src="/iseea.png"
                alt="ISEEA Logo"
                //   className="dark:invert"
                width={60}
                height={10}
                priority
              />
          </a>
            
              <button
                type="button"
                onClick={() => setNavbarOpen(!navbarOpen)} className="rounded   p-2 text-gray-600 transition hover:text-gray-600/75"
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
           {/* <div className="block md:hidden">
              
            </div> */}
        {/* <div className="flex-1 md:flex md:items-center md:gap-12">
          
        </div> */}
  
        <div className="md:flex md:items-center md:gap-12">
        <div
            className={
              "lg:flex flex-grow items-center" +
              (navbarOpen ? " flex" : " hidden")
            }>
            <ul className="flex flex-col lg:flex-row list-none lg:ml-auto items-center gap-6 text-sm md:flex-row  ">
              <li className='lg:inline-flex lg:flex-row lg:ml-auto lg:w-auto w-full lg:items-center items-start  flex flex-col lg:h-auto'>
                <a
                  className=" flex items-center text-xs uppercase font-bold leading-snug  hover:opacity-75 lg:inline-flex lg:w-auto w-full  rounded   justify-center text-gray-500 transition hover:text-gray-500/75"
                  href="/"
                >
                  About
                </a>
              </li>
  
              <li className='lg:inline-flex lg:flex-row lg:ml-auto lg:w-auto w-full lg:items-center items-start  flex flex-col lg:h-auto'>
                <a
                  className="lg:inline-flex lg:w-auto w-full  rounded items-center justify-center text-gray-500 transition hover:text-gray-500/75"
                  href="/"
                >
                  Careers
                </a>
              </li>
  
              <li className='lg:inline-flex lg:flex-row lg:ml-auto lg:w-auto w-full lg:items-center items-start  flex flex-col lg:h-auto'>
                <a
                  className="lg:inline-flex lg:w-auto w-full  rounded items-center justify-center text-gray-500 transition hover:text-gray-500/75"
                  href="/"
                >
                  History
                </a>
              </li>
  
              <li className='lg:inline-flex lg:flex-row lg:ml-auto lg:w-auto w-full lg:items-center items-start  flex flex-col lg:h-auto'>
                <a
                  className="lg:inline-flex lg:w-auto w-full  rounded items-center justify-center text-gray-500 transition hover:text-gray-500/75"
                  href="/"
                >
                  Services
                </a>
              </li>
  
              <li className='lg:inline-flex lg:flex-row lg:ml-auto lg:w-auto w-full lg:items-center items-start  flex flex-col lg:h-auto'>
                <a
                  className="lg:inline-flex lg:w-auto w-full  rounded items-center justify-center text-gray-500 transition hover:text-gray-500/75"
                  href="/"
                >
                  Projects
                </a>
              </li>
  
              <li className='lg:inline-flex lg:flex-row lg:ml-auto lg:w-auto w-full lg:items-center items-start  flex flex-col lg:h-auto'>
                <a
                   className=" flex items-center text-xs uppercase font-bold leading-snug  hover:opacity-75 lg:inline-flex lg:w-auto w-full  rounded   justify-center text-gray-500 transition hover:text-gray-500/75"
               
                  target='_blank' href="https://selfesteemdiary.wordpress.com/"
                >
                  Blog
                </a>
              </li>
            </ul>
          </div>
  
          <div className="flex items-center gap-4">
            {/* <div className="sm:flex sm:gap-4">
              <a
                className="rounded-md bg-teal-600 px-5 py-2.5 text-sm font-medium text-white shadow"
                href="/"
              >
                Login
              </a>
  
              <div className="hidden sm:flex">
                <a
                  className="lg:inline-flex lg:w-auto w-full  rounded items-center justify-center rounded-md bg-gray-100 px-5 py-2.5 text-sm font-medium text-teal-600"
                  href="/"
                >
                  Register
                </a>
              </div>
            </div>
   */}
            {/* <div className="block md:hidden">
              <button
                onClick={handleClick} className="rounded   p-2 text-gray-600 transition hover:text-gray-600/75"
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
            </div> */}
          </div>
        </div>
      </div>
    </div>
  </header>
  )
}

export default Navigation