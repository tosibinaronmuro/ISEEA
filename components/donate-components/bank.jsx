"use client";
import React, { useState } from "react";
import SuccessAlert from "./success";

const BankDetails = ({ BankName, AccountName, AccountNumber, Tag }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    const textToCopy = `
   Account Name: ${AccountName},
   Account Number: ${AccountNumber},
   Bank Name: ${BankName},
   Currency : ${Tag} `;
    
    navigator.clipboard
      .writeText(textToCopy)
      .then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);  
      })
      .catch((err) => console.error("Unable to copy: ", err));
  };
  return (
    <div className="  m-2 md:max-w-[30%] lg:max-w-[35%]  border bg-secondary border-gray-400 rounded-lg hover:shadow-md hover:border-opacity-0 transform hover:-translate-y-1 transition-all duration-200">
      <div className="m-3">
        <div className="flex justify-between">
          <h2 className="text-lg mb-2">{AccountName}</h2>
          <svg
            onClick={() => handleCopy()}
            xmlns="http://www.w3.org/2000/svg"
            className="cursor-pointer mx-2 h-7 w-7"
            viewBox="0 0 384 512"
          >
          <path d="M208 0H332.1c12.7 0 24.9 5.1 33.9 14.1l67.9 67.9c9 9 14.1 21.2 14.1 33.9V336c0 26.5-21.5 48-48 48H208c-26.5 0-48-21.5-48-48V48c0-26.5 21.5-48 48-48zM48 128h80v64H64V448H256V416h64v48c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V176c0-26.5 21.5-48 48-48z"/></svg>
        </div>
        <p className="font-light font-mono text-xl text-gray-700 bg-white px-4 w-fit rounded-lg hover:text-gray-900 transition-all duration-200">
          {AccountNumber}
        </p>
        <div className="flex justify-between">
          <p className=" ">{BankName}</p> 
          <span className="text-sm text-teal-800 font-mono bg-teal-100 inline rounded-full px-2 align-top float-right animate-pulse">
            {Tag}
          </span>
        </div>
      </div>
      {copied && <SuccessAlert message={"copied to clipboard !"} />}
    </div>
  );
};

export default BankDetails;
 