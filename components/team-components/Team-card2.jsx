import React from 'react'

const TeamCard2 = () => {
  return (
    <div   className="group relative block rounded-t-lg  bg-tertiary  md:max-w-[45% ] md:max-w-[45%] lg:w-[30%]">
  <div
    className="relative overflow-hidden bg-cover bg-no-repeat"
    data-te-ripple-init
    data-te-ripple-color="light">
    <img
      className="rounded-t-lg"
      src="https://images.unsplash.com/photo-1603871165848-0aa92c869fa1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=772&q=80"
      alt="" />
    <a href="#!">
      <div
        className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-[hsla(0,0%,98%,0.15)] bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100"></div>
    </a>
  </div>
  <div className="p-6">
    <h5
      className="mb-2 text-xl font-garmond font-medium leading-tight text-neutral-800 dark:text-neutral-50">
      Tony Wayne
    </h5>
    <p className="text-xl font-bold text-primary font-Poiret sm:text-lg">Executive Director</p>
    <p className="mb-4 text-base font-Poiret  text-secondary">
      Some quick example text to build on the card title and make up the
      bulk of the card's content.
    </p>
  </div>
</div>  )
}

export default TeamCard2