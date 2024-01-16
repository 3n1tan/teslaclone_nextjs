"use client";
import React from "react";
import { Fade } from "react-awesome-reveal";
import LeftButton from "./LeftButton";
import RightButton from "./RightButton";
import { model3 } from "../../public/assets";


interface SectionProps {
    title: string,
    description: string,
    leftBtnText: string,
    rightBtnText: string,
    backgrndImg: string | BackgrndImg,
}

interface BackgrndImg {
    src: string;
    // other properties if needed
  }

const Section = ({title, description, leftBtnText, rightBtnText, backgrndImg}: SectionProps & { backgrndImg: BackgrndImg}) => {
  return (
    <div className="w-screen h-screen bg-orange flex flex-col justify-between items-center bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url(${model3})` }}>
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
            {<RightButton>{rightBtnText}</RightButton>}
          </div>
        </Fade>
      </div>
    </div>
  );
};

export default Section;
