"use client";
import React from "react";
import { Fade } from "react-awesome-reveal";
import LeftButton from "./LeftButton";
import RightButton from "./RightButton";
import { model3 } from "../../public/assets";

const Section = () => {
  return (
    <div
      className="w-screen h-screen bg-orange flex flex-col justify-between items-center bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${model3.src})` }}
    >
      <Fade>
        <div className="pt-[15vh] text-center">
          <h1>Model S</h1>
          <p>Order online for Touchless Delivery</p>
        </div>
      </Fade>
      <div>
        <Fade>
          <div className="md:flex mb-[30px]">
            <LeftButton></LeftButton>
            {<RightButton></RightButton>}
          </div>
        </Fade>
      </div>
    </div>
  );
};

export default Section;
