import React from "react";

const WhoWeAre = () => {
  return (
    <section className="overflow-hidden bg-secondary sm:grid sm:grid-cols-2 rounded-xl sm:items-center">
      <div className="p-8 md:p-12 lg:px-16 lg:py-24">
        <div className="mx-auto max-w-xl text-center ltr:sm:text-left rtl:sm:text-right">
          <h2 className="text-2xl font-bold font-garmond text-primary md:text-3xl">
            WHO ARE WE?
          </h2>

          <p className="  text-gray-500 font-Poiret md:mt-4 text-justify md:block">
            Initiative for Self Esteem Education and Advocacy (ISSEA) is a non-profit youth-centered hub committed to
            achieving Sustainable Development Goal 3 which aims to Ensure
            Healthy Lives & Promote Well-Being for All at All Ages. We focus on
            promoting awareness of the importance of self-esteem,
            self-awareness, and the effects of low-self-esteem in Nigeria
            through media, mentorship, partnership, advocacy programs, and
            impact projects in local communities. ISEEA is a
            corporate body duly registered under the Companies and Allied
            matters Act of Nigeria with registration number 184681. Prior to
            registration, it was an online platform with the name Self Esteem
            Diary (SED).
          </p>

           
        </div>
      </div>

      <img
        alt="Violin"
        src="/images/mission0.jpg"
        className="h-full hidden md:block lg:block w-full object-cover sm:h-[calc(100%_-_2rem)] sm:self-end sm:rounded-ss-[30px] md:h-[calc(100%_-_4rem)] md:rounded-ss-[60px]"
      />
    </section>
  );
};

export default WhoWeAre;
