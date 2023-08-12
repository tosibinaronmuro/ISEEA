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
            <path d="M280 64h40c35.3 0 64 28.7 64 64V448c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V128C0 92.7 28.7 64 64 64h40 9.6C121 27.5 153.3 0 192 0s71 27.5 78.4 64H280zM64 112c-8.8 0-16 7.2-16 16V448c0 8.8 7.2 16 16 16H320c8.8 0 16-7.2 16-16V128c0-8.8-7.2-16-16-16H304v24c0 13.3-10.7 24-24 24H192 104c-13.3 0-24-10.7-24-24V112H64zm128-8a24 24 0 1 0 0-48 24 24 0 1 0 0 48z" />
          </svg>
        </div>
        <p className="font-light font-mono text-xl text-gray-700 hover:text-gray-900 transition-all duration-200">
          {AccountNumber}
        </p>
        <div className="flex justify-between">
          <p className=" ">{BankName}</p>{" "}
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
 