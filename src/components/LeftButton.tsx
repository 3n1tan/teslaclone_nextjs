import React, {ReactNode} from 'react'

interface LeftButtonProps {
  children: ReactNode;
}
const LeftButton: React.FC<LeftButtonProps> = ({children}) => {
  return (
    <button className="btn hover:bg-gray-800 bg-opacity-80 bg-gray-800 h-[40px] border-none outline-none w-64 text-white flex justify-center items-center rounded-[100px] font-normal opacity-85 uppercase text-xs cursor-pointer m-2">
      {children}
    </button>
  )
}

export default LeftButton