"use client";
import React from "react";
import { Fade } from "react-awesome-reveal";
import LeftButton from "./LeftButton";
import RightButton from "./RightButton";

interface SectionProps {
  title: string;
  description: string;
  more_description: String;
  leftBtnText: string;
  rightBtnText: string;
  bgImage: string;
}

const Section = ({
  title,
  description,
  more_description,
  leftBtnText,
  rightBtnText,
  bgImage,
}: SectionProps) => {
  return (
    <div
      className="w-screen h-screen bg-orange flex flex-col justify-between items-center bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(/assets/${bgImage}.avif)` }}
    >
      <Fade direction="up">
        <div className="mt-[10vh] text-center text-black w-screen">
          <h1 className="font-medium tracking-wider text-[35px] text-customGray">
            {title}
          </h1>
          <p className="text-[22px] font-light text-customGray tracking-wide">
            {description}
          </p>
          <p className="text-[14px] capitalize font-light text-customGray tracking-tight">
            {more_description}
          </p>
        </div>
      </Fade>
      <div>
        <Fade direction="up">
          <div className="md:flex mb-[30px]">
            <LeftButton>{leftBtnText}</LeftButton>
            {rightBtnText && <RightButton>{rightBtnText}</RightButton>}
          </div>
        </Fade>
      </div>
    </div>
  );
};

export default Section;
