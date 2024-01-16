import React, {ReactNode} from 'react'

interface RightButtonProps {
  children: ReactNode;
}
const RightButton: React.FC<RightButtonProps> = ({children}) => {
  return (
    <button className="btn bg-opacity-80 bg-white h-[40px] w-64 outline-none border-none text-black flex justify-center items-center rounded-[100px] opacity-65 uppercase text-xs cursor-pointer m-2">
        {children}
    </button>
  )
}

export default RightButton