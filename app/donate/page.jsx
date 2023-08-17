"use client"
import Image from "next/image";
import React,{useState} from "react";
import BankDetails from "@/components/donate-components/bank";
import SuccessAlert from "@/components/donate-components/success";

const Donate = () => {
const [comingSoon, setComingSoon]=useState(false)
if(comingSoon){
  setTimeout(() => setComingSoon(false), 2000);  
}
  const bankAccounts = [
    {
      BankName:"Guaranty Trust Bank",
      AccountName:'INI. FOR SELF EST. EDU. & ADV.',
      AccountNumber:'0841760429',
      Tag:"Naira",
    },
    {
      BankName:"Guaranty Trust Bank",
      AccountName:'INI. FOR SELF EST. EDU. & ADV.',
      AccountNumber:'0841760436',
      Tag:"Dollar",
    },
    {
      BankName:"Guaranty Trust Bank",
      AccountName:'INI. FOR SELF EST. EDU. & ADV.',
      AccountNumber:'0841760443',
      Tag:"Pounds",
    },
    {
      BankName:"Guaranty Trust Bank",
      AccountName:'INI. FOR SELF EST. EDU. & ADV.',
      AccountNumber:'0841760450',
      Tag:"Euro",
    }
  ];
  return (
    <div className="  min-h-[70vh] ">
      {/* title */}
      <div className="bg-secondary text-tertiary flex justify-center items-center ">
        <div className="border-b border-tertiary w-10 lg:w-40 md:w-40 m-2"></div>
        <p className="font-garmond text-4xl font-bold lg:text-6xl ">Donate</p>
        <div className="border-b border-tertiary w-10 lg:w-40 md:w-40 m-2"></div>
      </div>
      {/* image */}
      <div className="flex flex-col overflow-hidden justify-center items-center mt-10 relative">
        <div className=" w-[90%] lg:w-[80%]   h-[40vh] lg:h-[60vh]   ">
          <Image
            src="/images/storyHero.jpeg"
            alt="team photo"
            width={0}
            height={0}
            sizes="100vw"
            style={{
              objectFit: "cover",
              paddingRight: "10%",
              paddingLeft: "10%",
            }}
            fill
            priority
          />
        </div>

        <div className="bg-blackRgba w-[80%]   blackRgba h-[40vh] lg:h-[60vh] flex flex-col justify-center items-center  absolute bottom-50 left-50 p-2  ">
          <div className="lg:w-[55%] w-[90%] h-auto lg:mt-44   ">
            <p className="flex justify-start font-garmond text-base font-bold lg:text-4xl  text-white">
              Donate
            </p>
            <p className="font-Poiret text-xs   lg:text-lg text-white  md:p-4 lg:p-0   ">
              Here's how you can contribute to help us achieve even more.
            </p>
          </div>
        </div>
      </div>

      {/* content */}
      <div className="bg-white flex flex-col  pb-8 pt-14  px-[5%] ">
        <p className="font-garmond text-xl font-bold lg:text-3xl ">
          Online
        </p>
        <div className="mb-14">
        <div className="  m-2 md:max-w-[30%] lg:max-w-[30%]  border bg-secondary border-gray-400 rounded-lg hover:shadow-md hover:border-opacity-0 transform hover:-translate-y-1 transition-all duration-200">
      <div className="m-3 flex flex-col ">
        <p>Click on the button below to donate</p>
      <button  className="py-3 ">
        <a
          className="group relative  inline-block focus:outline-none focus:ring"
          onClick={()=>setComingSoon(true)}
          // href="/"
        >
          <span className="absolute inset-0 translate-x-1.5 translate-y-1.5 bg-primary transition-transform group-hover:translate-y-0 group-hover:translate-x-0"></span>

          <span className="relative cursor-pointer inline-block border-2 border-current font-Poiret font-semibold px-8 py-3 text-sm   uppercase tracking-widest text-tertiary group-active:text-opacity-75">
            Donate
          </span>
        </a>
      </button>
      {comingSoon && <SuccessAlert message={"feature coming soon"} />}
        
      </div>
       
    </div>
        </div>
        <p className="font-garmond text-xl font-bold lg:text-3xl ">
          Bank Transfer
        </p>
        <div className="flex flex-wrap justify-center mb-14">
        {bankAccounts.map((bank,index)=>{
            return (<BankDetails
            AccountName={bank.AccountName}
            AccountNumber={bank.AccountNumber}
            BankName={bank.BankName}
            Tag={bank.Tag}
            key={index}
          />)
        })}
        </div>
        <p className="font-garmond text-xl font-bold lg:text-3xl mb-2">Mentoring and Volunteering </p>
        <div className="p-3">
            <p> Join our mission! Volunteer with us to empower youth with self-esteem tools through media, mentorship, advocacy, and impactful projects. Be a part of a resilient, self-aware generation in Nigeria.</p>
            <p>Contact us at: <span className="font-bold">initiativeforselfesteem@gmail.com </span>
                or phone: <span className="font-bold">+234 802 093 0258</span></p>
        </div>
        

      </div>
    </div>
  );
};
export default Donate;
