import React from 'react'

const Donors = () => {
  return (
    
<div className="container my-24 mx-auto md:px-6">
 
  <section className="mb-3 text-center">
    <h2 className="mb-10 text-3xl font-garmond text-tertiary font-bold">
      Our Trusted Donors
    </h2>

    <div className="grid px-6  grid-cols-2 lg:grid-cols-7">
      <div className="mx-auto mb-12 md:mb-5 lg:mb-0">
        <img src="/images/partners/butterfly.jpeg"
          className="max-w-[90px] dark:brightness-150" />
      </div>

      <div className="mx-auto mb-12 md:mb-5 lg:mb-0">
        <img src="/images/partners/funmilayo.jpeg"
          className="max-w-[90px] dark:brightness-150" />
      </div>

      <div className="mx-auto mb-12 md:mb-5 lg:mb-0">
        <img src="/images/partners/hba.jpeg"
          className="max-w-[90px] dark:brightness-150" />
      </div>

      <div className="mx-auto mb-12 md:mb-5 lg:mb-0">
        <img src="/images/partners/nigeriaReads.jpeg"
          className="max-w-[90px] dark:brightness-150" />
      </div>

      <div className="mx-auto mb-12 md:mb-5 lg:mb-0">
        <img src="/images/partners/law.jpeg"
          className="max-w-[90px] dark:brightness-150" />
      </div>

      <div className="mx-auto mb-12 md:mb-5 lg:mb-0">
        <img src="/images/partners/servelead.jpeg"
          className="max-w-[90px] dark:brightness-150" />
      </div>
      <div className="mx-auto mb-12 md:mb-5 lg:mb-0">
        <img src="/images/partners/soar.jpeg"
          className="max-w-[90px] dark:brightness-150" />
      </div>
    </div>
  </section>
  
</div>
 
  )
}

export default Donors