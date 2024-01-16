"use client";
import React from "react";
import { Fade } from "react-awesome-reveal";
import LeftButton from "./LeftButton";
import RightButton from "./RightButton";
import { model3 } from "../../public/assets";
import Image from "next/image";


interface SectionProps {
    title: string,
    description: string,
    leftBtnText: string,
    rightBtnText: string,
    bgImage: string

}


const Section = ({title, description, leftBtnText, rightBtnText, bgImage}: SectionProps ) => {
  return (
    <div className="w-screen h-screen bg-orange flex flex-col justify-between items-center bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url(/assets/${bgImage}.jpg)` }}>
      <Fade direction="up">
        <div className="mt-[15vh] text-center text-black">
          <h1 className="font-semibold text-[2em] text-customGray">{title}</h1>
          <p className="text-[1em] text-customGray">{description}</p>
        </div>
      </Fade>
      <div>
        <Fade direction="up">
          <div className="md:flex mb-[30px]">
            <LeftButton>{leftBtnText}</LeftButton>
            {rightBtnText && <RightButton>{rightBtnText}</RightButton>}
          </div>
        </Fade>
        <img src="/assets/down-arrow.svg" alt="" className="h-[40px] sm:ml-[15rem] ml-[30vw] animate-bounce infinite duration-1500 overflow-hidden"/>
      </div>
    </div>
  );
};

export default Section;
