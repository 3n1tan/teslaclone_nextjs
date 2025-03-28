import React, { ReactNode } from "react";

interface LeftButtonProps {
  children: ReactNode;
}
const LeftButton: React.FC<LeftButtonProps> = ({ children }) => {
  return (
    <button className="btn bg-opacity-80 bg-white h-[40px] w-64 outline-none border-none text-black flex justify-center items-center rounded-[5px] opacity-65 capitalize text-xs font-normal cursor-pointer m-2">
      {children}
    </button>
  );
};

export default LeftButton;
