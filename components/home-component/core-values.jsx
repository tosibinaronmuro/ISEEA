import React from 'react'

const CoreValues = ({value,text}) => {
  return (
   <div
  className="  bg-black md:max-w-[45% ] md:max-w-[45%] lg:max-w-[30%] flex flex-wrap hover:animate-background rounded-xl bg-gradient-to-r from-primary   via-blue-500 to-purple-600 p-0.5 shadow-xl transition hover:bg-[length:400%_400%] hover:shadow-sm hover:[animation-duration:_4s]"
>
  <div className="rounded-[10px] bg-black p-4  min-h-[25vh] md:min-h-[36vh]    sm:p-6">
    <div>
        <p className='text-2xl font-garmond font-semibold text-primary'>{value}</p>
    </div>

    <div>
      <h3 className="mt-0.5 text-base   font-Poiret text-white">
        {text}
      </h3>
    </div>

    
  </div>
</div>
  )
}

export default CoreValues