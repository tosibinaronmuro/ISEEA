import React from 'react'

const Timeline = () => {
  return (
    
<ol className="relative border-l ml-9 border-tertiary  ">                  
    <li className="mb-10 ml-4">
        <div className="absolute w-3 h-3 bg-tertiary rounded-full mt-1.5 -left-1.5 border border-white  "></div>
        <time className="mb-1 text-sm font-normal leading-none text-tertiary  ">February 2022</time>
        <h3 className="text-lg font-semibold text-gray-900  ">Application UI code in Tailwind CSS</h3>
        <p className="mb-4 text-base font-normal text-tertiary">Get access to over 20+ pages including a dashboard layout, charts, kanban board, calendar, and pre-order E-commerce & Marketing pages.</p>
         
    </li>
    <li className="mb-10 ml-4">
        <div className="absolute w-3 h-3 bg-tertiary rounded-full mt-1.5 -left-1.5 border border-white  "></div>
        <time className="mb-1 text-sm font-normal leading-none text-tertiary">March 2022</time>
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Marketing UI design in Figma</h3>
        <p className="text-base font-normal text-tertiary">All of the pages and components are first designed in Figma and we keep a parity between the two versions even as we update the project.</p>
    </li>
    <li className="ml-4">
        <div className="absolute w-3 h-3 bg-tertiary rounded-full mt-1.5 -left-1.5 border border-white  "></div>
        <time className="mb-1 text-sm font-normal leading-none ttext-tertiary">April 2022</time>
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">E-Commerce UI code in Tailwind CSS</h3>
        <p className="text-base font-normal text-tertiary">Get started with dozens of web components and interactive elements built on top of Tailwind CSS.</p>
    </li>
</ol>

  )
}

export default Timeline