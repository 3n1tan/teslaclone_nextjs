"use client";
import React from "react";
import LeftButton from "./LeftButton";
import { Fade } from "react-awesome-reveal";
import RightButton from "./RightButton";

interface VideoSectionProps {
  title: string;
  description: string;
  more_description: String;
  leftBtnText: string;
  rightBtnText: string;
  bgImg: string;
}
const VideoSection = ({
  title,
  description,
  more_description,
  leftBtnText,
  rightBtnText,
  bgImg,
}: VideoSectionProps) => {
  return (
    <div className="w-[full] h-screen relative">
      <video
        src={`/${bgImg}`}
        autoPlay
        loop
        muted
        className="absolute top-0 left-0 w-full h-full object-cover"
      />
      <Fade direction="up">
        <div className="mt-[10vh] text-center text-black w-screen absolute">
          <h1 className="font-medium tracking-wider text-[35px] text-white">
            {title}
          </h1>
          <p className="text-[22px] font-light text-white tracking-wide">
            {description}
          </p>
          <p className="text-[14px] capitalize font-light text-white tracking-tight">
            {more_description}
          </p>
        </div>
      </Fade>
      <div className="absolute bottom-[30px] left-1/2 transform -translate-x-1/2 md:flex mb-[30px]">
        <Fade direction="up">
          <div className="flex ">
            <LeftButton>{leftBtnText}</LeftButton>
            {rightBtnText && <RightButton>{rightBtnText}</RightButton>}
          </div>
        </Fade>
        {/* <img src="/assets/down-arrow.svg" alt="" className="h-[40px] sm:ml-[15rem] ml-[30vw] animate-bounce infinite duration-1500 overflow-hidden"/> */}
      </div>
    </div>
  );
};

export default VideoSection;
