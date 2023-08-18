"use client";
import React, { useState } from "react";
import SuccessAlert from "./success";

const BankDetails = ({ BankName, AccountName, AccountNumber, Tag }) => {
  const [copied, setCopied] = useState(false);
  const [over, setover] = useState(false);

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
  function handleMouseEnter() {
    setover(true);
    setTimeout(() => setover(false), 2000);
  }
  function handleMouseLeave() {
    setover(false);
  }
  return (
    <div className="  m-2 md:max-w-[30%] lg:max-w-[35%]  border bg-secondary border-gray-400 rounded-lg hover:shadow-md hover:border-opacity-0 transform hover:-translate-y-1 transition-all duration-200">
      <div className="m-3">
        <div className="flex justify-between">
          <h2 className="text-lg mb-2">{AccountName}</h2>
          {/* <svg
            onClick={() => handleCopy()}
            xmlns="http://www.w3.org/2000/svg"
            className="cursor-pointer mx-2 h-7 w-7"
            viewBox="0 0 384 512"
            
          >
          <path fill="#FCC200" d="M208  0H332.1c12.7 0 24.9 5.1 33.9 14.1l67.9 67.9c9 9 14.1 21.2 14.1 33.9V336c0 26.5-21.5 48-48 48H208c-26.5 0-48-21.5-48-48V48c0-26.5 21.5-48 48-48zM48 128h80v64H64V448H256V416h64v48c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V176c0-26.5 21.5-48 48-48z"/></svg> */}
          <div
            className="flex"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <div
              className={
                over
                  ? "flex right-0 top-[-2rem] w-120 bg-primary text-black text-center p-2 border rounded-lg absolute z-10"
                  : "hidden"
              }
            >
              copy details
            </div>
            <svg
              onClick={() => handleCopy()}
              className="cursor-pointer mx-2 h-7 w-7"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                opacity="0.4"
                d="M17 13.4V16.4C17 20.4 15.4 22 11.4 22H7.6C3.6 22 2 20.4 2 16.4V12.6C2 8.6 3.6 7 7.6 7H10.6"
                stroke="black"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M16.9996 13.4H13.7996C11.3996 13.4 10.5996 12.6 10.5996 10.2V7L16.9996 13.4Z"
                stroke="black"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                opacity="0.4"
                d="M7 5C7 3.34 8.34 2 10 2H16"
                stroke="#FCC200"
                fill="FCC200"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                opacity="0.4"
                d="M22.0004 8V14.19C22.0004 15.74 20.7404 17 19.1904 17"
                stroke="#FCC200"
                fill="FCC200"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M22 8H19C16.75 8 16 7.25 16 5V2L22 8Z"
                stroke="#FCC200"
                fill="FCC200"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
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
