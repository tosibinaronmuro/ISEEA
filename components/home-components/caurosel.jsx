"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { SliderData } from "./sliderData";

const ImageSlider = ({ slides }) => {
  const [current, setCurrent] = useState(0);
  const length = slides.length;

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prevIndex) => (prevIndex + 1) % length);
    }, 25000);

    return () => {
      clearInterval(interval);
    };
  }, [length]);

  const updateIndex = (newIndex) => {
    if (newIndex < 0) {
      newIndex = 0;
    } else if (newIndex >= length) {
      newIndex = length - 1;
    }

    setCurrent(newIndex);
  };

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }

  return (
    <section className="flex h-full w-full justify-center relative items-center">
      <span
        className="absolute hidden lg:block bottom-0 lg:bottom-72 md:bottom-[50] cursor-pointer text-2xl hover:text-primary text-white z-40 left-9"
        onClick={prevSlide}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="1em"
          className="fill-current"
          viewBox="0 0 512 512"
        >
           
          <path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l128 128c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 288 480 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-370.7 0 73.4-73.4c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-128 128z" />
        </svg>
      </span>
      <span
        className="absolute hidden lg:block  bottom-0 lg:bottom-72 md:bottom-[50] cursor-pointer text-2xl hover:text-primary text-white z-40 right-9"
        onClick={nextSlide}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="1em"
          className="fill-current"
          viewBox="0 0 512 512"
        >
          <path d="M502.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L402.7 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l370.7 0-73.4 73.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l128-128z" />
        </svg>
      </span>
      {SliderData.map((slide, index) => {
        return (
          <div
            className={
              index === current
                ? "opacity-100 ease-out duration-[1500ms]  "
                : "opacity-0 transition ease-out duration-1000"
            }
            key={index}
          >
            {index === current && (
              <div className=" w-[100%] blackRgba h-[60vh] lg:h-[80vh]   ">
                <Image
                  src={slide.image}
                  alt="team photo"
                  width={0}
                  height={0}
                  sizes="100vw"
                  style={{
                    objectFit: "cover",
                    // paddingRight: "10%",
                    // paddingLeft: "10%",
                  }}
                  fill
                  priority
                />
              </div>
            )}
          </div>
        );
      })}
      <div className="flex justify-around my-6 items-center absolute bottom-0">
        {SliderData.map((item, index) => {
          return (
            <button
              className="cursor-pointer z-10"
              onClick={() => {
                updateIndex(index);
              }} key={index}
            >
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="1em"
                  className="w-9 h-4"
                  fill={` ${index === current ? "#FCC200 " : "white "}`}
                  viewBox="0 0 512 512"
                >
                   
                  <path d="M464 256A208 208 0 1 0 48 256a208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm256-96a96 96 0 1 1 0 192 96 96 0 1 1 0-192z" />
                </svg>
              </span>
            </button>
          );
        })}
      </div>
    </section>
  );
};

export default ImageSlider;
