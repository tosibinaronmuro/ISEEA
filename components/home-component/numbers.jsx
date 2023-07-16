"use client";
import CountUp, { useCountUp } from 'react-countup';
import React from 'react'
import Donors from './donors'

const Numbers = () => {
  
  return (
    <div className="container  mx-auto md:px-6">
   
  <section className="  text-center">
    <h2 className="mb-10 text-3xl font-garmond font-bold">Our Impact</h2>

    <div className="grid lg:grid-cols-3 lg:gap-x-12">
      <div className="mb-16 lg:mb-0">
        <div
          className="block h-full rounded-lg bg-black shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)]  ">
          <div className="flex justify-center">
            <div className="-mt-8 inline-block rounded-full bg-primary-100 p-4 text-primary shadow-md">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-9 w-9" fill='#FCC200' viewBox="0 0 640 512">  <path d="M122.6 46.3c-7.8-11.7-22.4-17-35.9-12.9S64 49.9 64 64V256H32c-17.7 0-32 14.3-32 32s14.3 32 32 32H64V448c0 17.7 14.3 32 32 32s32-14.3 32-32V320H228.2l97.2 145.8c7.8 11.7 22.4 17 35.9 12.9s22.7-16.5 22.7-30.6V320h32c17.7 0 32-14.3 32-32s-14.3-32-32-32H384V64c0-17.7-14.3-32-32-32s-32 14.3-32 32V256H262.5L122.6 46.3zM305.1 320H320v22.3L305.1 320zM185.5 256H128V169.7L185.5 256z"/></svg>
            </div>
          </div>
          <div className="p-6">
            <h3   className="mb-4   font-bold text-primary text-5xl font-Poiret">
            <CountUp end={700000} enableScrollSpy /><span>+</span>
            </h3>
            <h5 className="mb-4 text-lg font-medium text-white font-garmond">Naira</h5>
            <p className="text-white font-Poiret font-semibold  ">
            Has been raised so far
            </p>
          </div>
        </div>
      </div>

      <div className="mb-16 lg:mb-0">
        <div
          className="block h-full rounded-lg bg-black shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)]  ">
          <div className="flex justify-center">
            <div className="-mt-8 inline-block rounded-full bg-primary-100 p-4 text-primary shadow-md">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-9 w-9" fill='#FCC200' viewBox="0 0 640 512"> <path d="M160 0a64 64 0 1 1 0 128A64 64 0 1 1 160 0zM88 480V400H70.2c-10.9 0-18.6-10.7-15.2-21.1l31.1-93.4L57.5 323.3c-10.7 14.1-30.8 16.8-44.8 6.2s-16.8-30.7-6.2-44.8L65.4 207c22.4-29.6 57.5-47 94.6-47s72.2 17.4 94.6 47l58.9 77.7c10.7 14.1 7.9 34.2-6.2 44.8s-34.2 7.9-44.8-6.2l-28.6-37.8L265 378.9c3.5 10.4-4.3 21.1-15.2 21.1H232v80c0 17.7-14.3 32-32 32s-32-14.3-32-32V400H152v80c0 17.7-14.3 32-32 32s-32-14.3-32-32zM480 0a64 64 0 1 1 0 128A64 64 0 1 1 480 0zm-8 384v96c0 17.7-14.3 32-32 32s-32-14.3-32-32V300.5L395.1 321c-9.4 15-29.2 19.4-44.1 10s-19.4-29.2-10-44.1l51.7-82.1c17.6-27.9 48.3-44.9 81.2-44.9h12.3c33 0 63.7 16.9 81.2 44.9L619.1 287c9.4 15 4.9 34.7-10 44.1s-34.7 4.9-44.1-10L552 300.5V480c0 17.7-14.3 32-32 32s-32-14.3-32-32V384H472z"/></svg>
            </div>
          </div>
          <div className="p-6">
            <h3 className="mb-4   font-bold text-primary text-5xl font-Poiret">
              <CountUp end={200} enableScrollSpy /> <span>+</span>
            </h3>
            <h5 className="mb-4 text-lg font-medium text-white font-garmond">Children</h5>
            <p className="text-white font-Poiret font-semibold  ">
              Have been impacted so far through projects and donations
            </p>
          </div>
        </div>
      </div>

      <div className="">
        <div
          className="block h-full rounded-lg bg-black shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)]  ">
          <div className="flex justify-center">
            <div className="-mt-8 inline-block rounded-full bg-primary-100 p-4 text-primary shadow-md">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2"
                stroke="currentColor" className="h-7 w-7">
                <path strokeLinecap="round" strokeLinejoin="round"
                  d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
          </div>
          <div className="p-6">
            <h3 className="mb-4 text-5xl font-Poiret font-bold text-primary  ">
            <CountUp end={5} enableScrollSpy />
            </h3>
            <h5 className="mb-4 text-lg font-medium text-white font-garmond">Projects</h5>
            <p className="text-white font-Poiret font-semibold  ">
            Have been initiated and we will continue to expand our reach as the need arises
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
  <Donors/>
  
</div>
  
  )
}

export default Numbers