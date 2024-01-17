'use client'
import React, {useState} from 'react'
import { teslaLogo } from '../../public/assets'
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
const NavBar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const closeMenu = () => {
        setMenuOpen(false)
    }
  return (
        <div className="navbar fixed z-10 pt-5">
            <div className="navbar-start">
                <a className="btn btn-ghost text-xl">
                    <img src={teslaLogo.src} alt="" />
                </a>
            </div>
            <div className='navbar-center text-customGray space-x-5 uppercase font-[600] hidden lg:flex'>
                <div>
                    <a href="" className='cursor-pointer'>
                        Model S
                    </a>
                </div>
                <div>
                    <a href="" className='cursor-pointer'>
                        Model 3
                    </a>
                </div>
                <div>
                    <a href="" className='cursor-pointer'>
                        Model X
                    </a>
                </div>
                <div>
                    <a href="" className='cursor-pointer'>
                        Model Y
                    </a>
                </div>
            </div>
            <div className="navbar-end">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost " onClick={()=> setMenuOpen(true)}>
                        <MenuIcon className='text-black'/>
                    </div>
                    <div className=' '>
                        <ul tabIndex={0} className={`menu menu-sm dropdown-content z-16 top-0 right-0 sm:w-[40rem] w-[15rem] p-10 grid text-left shadow bg-white rounded-md transition-transform ease-in-out duration-300`} style={{ transform: menuOpen ? 'translateX(0)' : 'translateX(100%)' }}>
                        
                            <div className='flex justify-end'>
                                 <CloseIcon className='cursor-pointer' onClick={closeMenu}/>
                            </div>
                            <li className=' pt-[15px] pb-[15px] border-b-[2px]'><a className='font-bold'>Model S</a></li>
                            <li className=' pt-[15px] pb-[15px] border-b-[2px]'><a className='font-bold'>Model S</a></li>
                            <li className=' pt-[15px] pb-[15px] border-b-[2px]'><a className='font-bold'>Model S</a></li>
                            <li className=' pt-[15px] pb-[15px] border-b-[2px]'><a className='font-bold'>Model S</a></li>
                            <li className=' pt-[15px] pb-[15px] border-b-[2px]'><a className='font-bold'>Model S</a></li>
                            <li className=' pt-[15px] pb-[15px] border-b-[2px]'><a className='font-bold'>Model S</a></li>
                            <li className=' pt-[15px] pb-[15px] border-b-[2px]'><a className='font-bold'>Model S</a></li>
                         
                        </ul>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default NavBar