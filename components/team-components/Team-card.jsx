import React from 'react'

const TeamMember = ({photo,name,position,bio}) => {
  return (
    <div   className="group relative block bg-tertiary   md:max-w-[45% ] md:max-w-[45%] lg:w-[30%]">
  <img
    alt="Developer"
    src={photo}
    className="absolute inset-0 h-full w-full object-cover opacity-75 transition-opacity group-hover:opacity-50"
  />

  <div className="relative p-4 sm:p-6 lg:p-8">
    <p className="text-sm font-medium font-garmond uppercase tracking-widest text-primary">
      {position}
    </p>

    <p className="text-xl font-bold text-white font-Poiret sm:text-2xl">{name}</p>

    <div className="mt-32 sm:mt-48 lg:mt-64">
      <div
        className="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100"
      >
        <p className="text-md font-semibold   text-secondary font-Poiret">
          {bio}
        </p>
      </div>
    </div>
  </div>
</div>
  )
}

export default TeamMember