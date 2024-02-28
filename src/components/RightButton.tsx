import React, { ReactNode } from "react";

interface RightButtonProps {
  children: ReactNode;
}
const RightButton: React.FC<RightButtonProps> = ({ children }) => {
  return (
    <button className="btn bg-opacity-80 bg-gray-800 h-[40px] border-none outline-none w-64 text-white flex justify-center items-center rounded-[5px] font-normal opacity-85 capitalize text-xs cursor-pointer m-2">
      {children}
    </button>
  );
};

export default RightButton;
