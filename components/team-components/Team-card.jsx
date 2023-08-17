import React from 'react'

const TeamMember = ({photo,name,position,bio}) => {
  return (
    <div   className="group relative block bg-tertiary min-w-[95%] max-w-[96%] min-h-[45vh] lg:min-h-auto  md:min-w-[40%]  h-auto   md:max-w-[45% ] md:max-w-[45%] lg:w-[30%]">
  <img
    alt="Developer"
    src={photo}
    className="absolute inset-0 h-full w-full object-cover opacity-75 transition-opacity group-hover:opacity-50"
  />

  <div className="relative p-4 sm:p-6 lg:p-8">
   
    <div className="mt-64 sm:mt-48 lg:mt-64">
      <div
        className=" transform  transition-all translate-y-0  opacity-100"
      >
         <p className="text-sm font-medium font-garmond uppercase tracking-widest text-primary">
      {position}
    </p>

    <p className="text-base font-bold text-white font-Poiret lg:text-2xl">{name}</p>
    {/* <div className="text-base font-bold text-white font-Poiret lg:text-2xl"><span><svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><path d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z"/></svg> </span></div> */}

        {/* <p className="text-md lg:font-semibold  text-secondary font-Poiret">
          {bio}
        </p> */}
      </div>
    </div>
  </div>
</div>
  )
}

export default TeamMember